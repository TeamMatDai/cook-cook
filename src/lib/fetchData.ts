import { createClient } from '@/utils/supabase/supabaseClient';
import isUUID from 'validator/lib/isUUID';

export const getRecipeById = async (id: string) => {
  console.log('@@ id', id);


  const supabase = createClient();
  const { data, error } = await supabase.from('recipes').select('*').eq('id', id).single();

  if (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
  console.log('Fetched recipe:', data);
  return data;
};
