import { createClient } from './supabaseClient';

export const fetchSearchResults = async (query) => {
  const supabase = createClient();
  let { data, error } = await supabase.from('recipes').select('*').ilike('title', `%${query}%`);

  if (error) {
    console.error('Error fetching search results:', error);
    return [];
  }

  return data;
};
