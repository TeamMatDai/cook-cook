import { createClient } from './supabaseClient';

export const fetchRandomRecipes = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from('recipes').select(`
      title,
      subtitle,
      description,
      time,
      thumbnail,
      level,
      id
    `);

  if (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }

  const shuffledRecipes = data.sort(() => 0.5 - Math.random()).slice(0, 5);
  return shuffledRecipes;
};

export const fetchAllRecipes = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.from('recipes').select(`
      title,
      subtitle,
      description,
      time,
      thumbnail,
      level,
      id
    `);

  if (error) {
    console.error('Error fetching all recipes:', error);
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
      level,
      id
    `
    )
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    console.error('Error fetching latest recipes:', error);
    return [];
  }

  return data;
};
