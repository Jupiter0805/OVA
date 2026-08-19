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
