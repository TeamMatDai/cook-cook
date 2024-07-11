import { createClient } from '@/utils/supabase/supabaseClient';

const supabase = createClient();
export const getRecipeById = async (id: string) => {
  console.log('@@ id', id);

  const { data, error } = await supabase.from('recipes').select('*').eq('id', id).single();

  if (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
  console.log('Fetched recipe:', data);
  return data;
};

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

export const toggleBookmark = async (recipesId: string, userId: string, isBookmarked: boolean) => {
  if (isBookmarked) {
    const { error } = await supabase
      .from('bookmark')
      .delete()
      .eq('recipesId', recipesId)
      .eq('userId', userId);

    if (error) throw new Error(error.message);
  } else {
    const { error } = await supabase
      .from('bookmark')
      .insert([{ recipesId, userId }]);

    if (error) throw new Error(error.message);
  }
};