import { createClient } from './supabaseClient';

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  time: number;
  thumbnail: string;
  level: string;
}

export const fetchSearchResults = async (query: string) => {
  const supabase = createClient();
  let { data, error } = await supabase
    .from('recipes')
    .select('id, title, subtitle, description, time, thumbnail, level')
    .ilike('title', `%${query}%`);

  if (error) {
    console.error('Error fetching search results:', error);
    return [];
  }

  return data ?? [];
};
