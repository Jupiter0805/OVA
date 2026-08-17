import { supabase } from './supabase';

export interface Chapter {
  id: string;
  chapter_number: number;
  title: string;
  description: string;
  estimated_time_minutes: number;
  learning_outcomes: string[];
  is_published: boolean;
  created_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  chapter_id: string;
  completion_percentage: number;
  status: 'not_started' | 'in_progress' | 'completed' | 'abandoned';
  lessons_completed: number;
  time_spent_seconds: number;
}

export const chaptersService = {
  async getChapters(): Promise<Chapter[]> {
    try {
      const { data, error } = await supabase
        .from('chapters')
        .select('*')
        .eq('is_published', true)
        .order('chapter_number', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching chapters:', error);
      return [];
    }
  },

  async getChapter(chapterId: string): Promise<Chapter | null> {
    try {
      const { data, error } = await supabase
        .from('chapters')
        .select('*')
        .eq('id', chapterId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching chapter:', error);
      return null;
    }
  },

  async getUserProgressByChapter(userId: string, chapterId: string): Promise<UserProgress | null> {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .eq('chapter_id', chapterId)
        .single();

      if (error && error.code === 'PGRST116') {
        return null;
      }

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching progress:', error);
      return null;
    }
  },

  async getUserAllProgress(userId: string): Promise<UserProgress[]> {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching all progress:', error);
      return [];
    }
  },

  async updateProgress(userId: string, chapterId: string, updates: Partial<UserProgress>): Promise<UserProgress | null> {
    try {
      const { data: updateData, error: updateError } = await supabase
        .from('user_progress')
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', userId)
        .eq('chapter_id', chapterId)
        .select()
        .single();

      if (updateError && updateError.code === 'PGRST116') {
        const { data: insertData, error: insertError } = await supabase
          .from('user_progress')
          .insert({
            user_id: userId,
            chapter_id: chapterId,
            ...updates,
          })
          .select()
          .single();

        if (insertError) throw insertError;
        return insertData;
      }

      if (updateError) throw updateError;
      return updateData;
    } catch (error) {
      console.error('Error updating progress:', error);
      return null;
    }
  },

  async getUserGlobalProgress(userId: string, totalChapters: number): Promise<{ completed: number; total: number; percentage: number }> {
    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('status')
        .eq('user_id', userId);

      if (error) throw error;

      const completed = (data || []).filter((p) => p.status === 'completed').length;
      const total = totalChapters;
      const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

      return { completed, total, percentage };
    } catch (error) {
      console.error('Error calculating global progress:', error);
      return { completed: 0, total: totalChapters, percentage: 0 };
    }
  },
};
