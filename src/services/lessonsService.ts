import { supabase } from './supabase';

export interface Lesson {
  id: string;
  chapter_id: string;
  lesson_number: number;
  title: string;
  content_html: string;
  image_url: string | null;
  order_index: number;
}

export const lessonsService = {
  async getLessons(chapterId: string): Promise<Lesson[]> {
    try {
      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('chapter_id', chapterId)
        .order('order_index', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching lessons:', error);
      return [];
    }
  },
};
