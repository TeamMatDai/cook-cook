import { createClient } from '@/utils/supabase/supabaseServer';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
const RECIPES_CARD_FIELDS = ['title', 'subtitle', 'thumbnail', 'id'];

export const getRecipes = async ({ userId, createdAt }: { userId: string; createdAt: string }) => {
  const supabase = createClient();
  const createdAtUtc = dayjs.tz(createdAt, 'Asia/Seoul').utc().toISOString();
  const endDate = dayjs.tz(createdAt, 'Asia/Seoul').add(1, 'day').utc().toISOString();

  const { data, error } = await supabase
    .from('recipes')
    .select(RECIPES_CARD_FIELDS.join(','))
    .eq('authorId', userId)
    .gte('created_at', createdAtUtc)
    .lte('created_at', endDate)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getWeeklyRecipePresence = async ({
  userId,
  startDate,
  endDate
}: {
  userId: string;
  startDate: string;
  endDate: string;
}) => {
  const supabase = createClient();
  const startDateUtc = dayjs.tz(startDate, 'Asia/Seoul').utc().toISOString();
  const endDateUtc = dayjs.tz(endDate, 'Asia/Seoul').utc().toISOString();

  const { data, error } = await supabase
    .from('recipes')
    .select('created_at')
    .eq('authorId', userId)
    .gte('created_at', startDateUtc)
    .lte('created_at', endDateUtc);

  if (error) {
    throw new Error(error.message);
  }

  const weekPresence = Array(7).fill(0);
  data?.forEach((recipe) => {
    const localDate = dayjs(recipe.created_at);
    const dayIndex = localDate.day();
    weekPresence[dayIndex] = 1;
  });

  return weekPresence;
};

export const getPinnedRecipes = async ({ userId }: { userId: string }) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('bookmark')
    .select(`created_at, recipes:recipesId (${RECIPES_CARD_FIELDS.join(',')})`)
    .eq('userId', userId)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
