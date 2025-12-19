import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Save a journal entry (Three Good Things)
export async function saveGratitudeEntry(userId, entries) {
  const { data, error } = await supabase
    .from('gratitude_entries')
    .insert({
      user_id: userId,
      entry_1: entries[0]?.thing || '',
      reason_1: entries[0]?.why || '',
      entry_2: entries[1]?.thing || '',
      reason_2: entries[1]?.why || '',
      entry_3: entries[2]?.thing || '',
      reason_3: entries[2]?.why || '',
    });
  
  if (error) console.error('Error saving gratitude:', error);
  return { data, error };
}

// Save daily check-in
export async function saveDailyCheckin(userId, ratings) {
  const { data, error } = await supabase
    .from('daily_checkins')
    .insert({
      user_id: userId,
      positive_emotion: ratings.positive,
      engagement: ratings.engagement,
      relationships: ratings.relationships,
      meaning: ratings.meaning,
      accomplishment: ratings.accomplishment,
    });
  
  if (error) console.error('Error saving checkin:', error);
  return { data, error };
}

// Save lesson completion
export async function saveLessonProgress(userId, moduleId, lessonId) {
  const { data, error } = await supabase
    .from('course_progress')
    .upsert({
      user_id: userId,
      module_id: moduleId,
      lesson_id: lessonId,
      completed: true,
      completed_at: new Date().toISOString(),
    });
  
  if (error) console.error('Error saving progress:', error);
  return { data, error };
}

// Get user progress
export async function getUserProgress(userId) {
  const { data, error } = await supabase
    .from('course_progress')
    .select('*')
    .eq('user_id', userId);
  
  if (error) console.error('Error fetching progress:', error);
  return { data, error };
}

// Get gratitude entries
export async function getGratitudeEntries(userId) {
  const { data, error } = await supabase
    .from('gratitude_entries')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  if (error) console.error('Error fetching gratitude:', error);
  return { data, error };
}

// Get daily checkins
export async function getDailyCheckins(userId) {
  const { data, error } = await supabase
    .from('daily_checkins')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  
  if (error) console.error('Error fetching checkins:', error);
  return { data, error };
}