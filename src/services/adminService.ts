import { supabase } from './supabase';
import type { Profile } from './profileService';

export interface AdminUserSummary {
  id: string;
  email: string;
  full_name: string | null;
  user_type: Profile['user_type'];
  created_at: string;
  chaptersCompleted: number;
  chaptersInProgress: number;
  lastActivity: string | null;
}

export interface ChapterProgressDetail {
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  completionPercentage: number;
  status: string | null;
  // Pretest is a reflection exercise (not graded / no passing score), so this
  // is just the % of answers that matched the answer key on the latest try.
  pretestPercentage: number | null;
  pretestAttempts: number;
  // Posttest has a passing threshold and a max-attempts cap — show the best
  // attempt's score and whether any attempt passed.
  posttestBestPercentage: number | null;
  posttestPassed: boolean;
  posttestAttempts: number;
}

export const adminService = {
  async getAllUsersSummary(): Promise<AdminUserSummary[]> {
    const [{ data: profiles, error: profilesError }, { data: progress, error: progressError }] = await Promise.all([
      supabase.from('profiles').select('*').order('created_at', { ascending: false }),
      supabase.from('user_progress').select('user_id, status, updated_at'),
    ]);

    if (profilesError) {
      console.error('Error fetching profiles:', profilesError);
      return [];
    }
    if (progressError) {
      console.error('Error fetching progress:', progressError);
    }

    return (profiles || []).map((p: Profile) => {
      const rows = (progress || []).filter((r) => r.user_id === p.id);
      const chaptersCompleted = rows.filter((r) => r.status === 'completed').length;
      const chaptersInProgress = rows.filter((r) => r.status === 'in_progress').length;
      const lastActivity = rows.reduce<string | null>((latest, r) => {
        if (!r.updated_at) return latest;
        if (!latest || r.updated_at > latest) return r.updated_at;
        return latest;
      }, null);

      return {
        id: p.id,
        email: p.email,
        full_name: p.full_name,
        user_type: p.user_type,
        created_at: p.created_at,
        chaptersCompleted,
        chaptersInProgress,
        lastActivity,
      };
    });
  },

  async getUserChapterDetails(userId: string): Promise<ChapterProgressDetail[]> {
    const [{ data: chapters, error: chaptersError }, { data: progress }, { data: attempts }] = await Promise.all([
      supabase.from('chapters').select('id, chapter_number, title').order('chapter_number', { ascending: true }),
      supabase.from('user_progress').select('chapter_id, completion_percentage, status').eq('user_id', userId),
      supabase
        .from('test_attempts')
        .select('chapter_id, test_type, percentage, passed, attempted_at')
        .eq('user_id', userId)
        .order('attempted_at', { ascending: true }),
    ]);

    if (chaptersError || !chapters) {
      console.error('Error fetching chapters for admin detail:', chaptersError);
      return [];
    }

    return chapters.map((c) => {
      const progressRow = (progress || []).find((p) => p.chapter_id === c.id);
      const pretestAttempts = (attempts || []).filter((a) => a.chapter_id === c.id && a.test_type === 'pretest');
      const posttestAttempts = (attempts || []).filter((a) => a.chapter_id === c.id && a.test_type === 'posttest');
      const lastPretest = pretestAttempts[pretestAttempts.length - 1];
      const bestPosttest = posttestAttempts.reduce<(typeof posttestAttempts)[number] | undefined>(
        (best, a) => (!best || a.percentage > best.percentage ? a : best),
        undefined,
      );

      return {
        chapterId: c.id,
        chapterNumber: c.chapter_number,
        chapterTitle: c.title,
        completionPercentage: progressRow?.completion_percentage ?? 0,
        status: progressRow?.status ?? null,
        pretestPercentage: lastPretest?.percentage ?? null,
        pretestAttempts: pretestAttempts.length,
        posttestBestPercentage: bestPosttest?.percentage ?? null,
        posttestPassed: posttestAttempts.some((a) => a.passed),
        posttestAttempts: posttestAttempts.length,
      };
    });
  },

  async resetUserProgress(userId: string): Promise<boolean> {
    try {
      const { error: attemptsError } = await supabase.from('test_attempts').delete().eq('user_id', userId);
      if (attemptsError) throw attemptsError;

      const { error: progressError } = await supabase.from('user_progress').delete().eq('user_id', userId);
      if (progressError) throw progressError;

      return true;
    } catch (error) {
      console.error('Error resetting user progress:', error);
      return false;
    }
  },

  async updateUserRole(userId: string, newType: Profile['user_type']): Promise<{ ok: boolean; error?: string }> {
    const { error } = await supabase.from('profiles').update({ user_type: newType }).eq('id', userId);
    if (error) {
      console.error('Error updating user role:', error);
      return { ok: false, error: error.message };
    }
    return { ok: true };
  },

  async deleteUser(userId: string): Promise<{ ok: boolean; error?: string }> {
    const { error } = await supabase.rpc('admin_delete_user', { target_user_id: userId });
    if (error) {
      console.error('Error deleting user:', error);
      return { ok: false, error: error.message };
    }
    return { ok: true };
  },
};
