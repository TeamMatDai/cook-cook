import { createClient } from '@/utils/supabase/supabaseClient';

const supabase = createClient();
export const getRecipeById = async (id: string) => {
  const { data, error } = await supabase.from('recipes').select('*').eq('id', id).single();

  if (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
  return data;
};
