import { supabase } from './supabase';

export interface QuestionOption {
  key: string;
  text: string;
}

export interface Question {
  id: string;
  test_id: string;
  question_text: string;
  question_type: 'multiple_choice' | 'true_false';
  options: QuestionOption[] | null;
  correct_answer: string | null;
  explanation: string | null;
  points: number;
  order_index: number;
}

export interface Test {
  id: string;
  chapter_id: string;
  test_type: 'pretest' | 'posttest';
  title: string;
  description: string;
  passing_score_percentage: number | null;
  max_attempts: number;
  time_limit_seconds: number | null;
}

export interface TestAttempt {
  id: string;
  user_id: string;
  test_id: string;
  chapter_id: string;
  test_type: string;
  attempt_number: number;
  score: number;
  percentage: number;
  answers: Record<string, string>;
  passed: boolean;
  attempted_at: string;
}

export const testsService = {
  async getTest(chapterId: string, testType: 'pretest' | 'posttest'): Promise<Test | null> {
    try {
      const { data, error } = await supabase
        .from('tests')
        .select('*')
        .eq('chapter_id', chapterId)
        .eq('test_type', testType)
        .single();

      if (error) {
        if (error.code === 'PGRST116') return null;
        throw error;
      }
      return data;
    } catch (error) {
      console.error('Error fetching test:', error);
      return null;
    }
  },

  async getQuestions(testId: string): Promise<Question[]> {
    try {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('test_id', testId)
        .order('order_index', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching questions:', error);
      return [];
    }
  },

  async getUserAttempts(userId: string, testId: string): Promise<TestAttempt[]> {
    try {
      const { data, error } = await supabase
        .from('test_attempts')
        .select('*')
        .eq('user_id', userId)
        .eq('test_id', testId)
        .order('attempt_number', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching test attempts:', error);
      return [];
    }
  },

  /**
   * Grades only multiple_choice/true_false questions against their correct_answer.
   * Reflection-style prompts (not stored as DB questions, see reflectionAnswer) never
   * count toward the score, matching the DB check constraint on questions.question_type.
   */
  async submitAttempt(
    userId: string,
    test: Test,
    questions: Question[],
    answers: Record<string, string>,
    timeSpentSeconds: number
  ): Promise<TestAttempt | null> {
    try {
      const gradable = questions.filter((q) => q.correct_answer !== null);
      const correctCount = gradable.filter((q) => answers[q.id] === q.correct_answer).length;
      const percentage = gradable.length > 0 ? Math.round((correctCount / gradable.length) * 100) : 100;
      const passed = test.passing_score_percentage === null || percentage >= test.passing_score_percentage;

      const existingAttempts = await this.getUserAttempts(userId, test.id);
      const attemptNumber = existingAttempts.length + 1;

      const { data, error } = await supabase
        .from('test_attempts')
        .insert({
          user_id: userId,
          test_id: test.id,
          chapter_id: test.chapter_id,
          test_type: test.test_type,
          attempt_number: attemptNumber,
          score: correctCount,
          percentage,
          answers,
          time_spent_seconds: timeSpentSeconds,
          passed,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error submitting test attempt:', error);
      return null;
    }
  },
};
