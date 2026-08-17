import { supabase } from './supabase';

export type UserType = 'student' | 'admin' | 'master';

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  student_id: string | null;
  institution: string;
  user_type: UserType;
  created_at: string;
}

export const profileService = {
  async getOwnProfile(userId: string): Promise<Profile | null> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') return null;
        throw error;
      }
      return data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
  },
};
