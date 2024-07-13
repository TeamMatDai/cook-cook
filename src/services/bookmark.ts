import { createClient } from '@/utils/supabase/supabaseClient';
import { Bookmark } from '@/types/bookmark';

const supabase = createClient();

export const checkBookmark = async (recipesId: string, userId: string) => {
  const { data, error } = await supabase
    .from('bookmark')
    .select('*')
    .eq('recipesId', recipesId)
    .eq('userId', userId)
    .single();

  if (error && error.code !== 'PGRST116') throw new Error(error.message);
  return data ? true : false;
};

export const addBookmark = async (recipesId: string, userId: string) => {
  const bookmark: Bookmark = { recipesId, userId };
  const { data, error } = await supabase.from('bookmark').insert([bookmark]);

  if (error) throw new Error(error.message);
  return data;
};

export const removeBookmark = async (recipesId: string, userId: string) => {
  const { data, error } = await supabase
    .from('bookmark')
    .delete()
    .eq('recipesId', recipesId)
    .eq('userId', userId);

  if (error) throw new Error(error.message);
  return data;
};
