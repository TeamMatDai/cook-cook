// src/utils/supabase/fetchRecipes.ts
import { createClient } from './supabaseClient';

export const fetchRecipes = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from('recipes').select(`
    title,
    subtitle,
    description,
    time,
    thumbnail,
    level
  `);

  if (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }

  return data;
};
