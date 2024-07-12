import { createClient } from './supabaseClient';

export const fetchRandomRecipes = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('recipes')
    .select(
      `
    title,
    subtitle,
    description,
    time,
    thumbnail,
    level
  `
    )
    .order('id', { ascending: false })
    .limit(5);

  if (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }

  return data;
};

export const fetchLatestRecipes = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('recipes')
    .select(
      `
    title,
    subtitle,
    description,
    time,
    thumbnail,
    level
  `
    )
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }

  return data;
};
