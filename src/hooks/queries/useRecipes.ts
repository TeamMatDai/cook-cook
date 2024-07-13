import { fetchRecipes, fetchWeeklyRecipePresence } from '@/api/recipe';
import { useQuery } from '@tanstack/react-query';
import { Dayjs } from 'dayjs';

const THIRTY_MINUTES_IN_MS = 30 * 60 * 1000;

export const useWeeklyRecipePresence = ({
  startDate,
  endDate
}: {
  startDate: string;
  endDate: string;
}) => {
  return useQuery({
    queryKey: ['weeklyRecipePresence', startDate],
    queryFn: () => fetchWeeklyRecipePresence({ startDate, endDate }),
    staleTime: THIRTY_MINUTES_IN_MS
  });
};

export const useRecipes = (createdAt: string) => {
  return useQuery({
    queryKey: ['recipes', createdAt],
    queryFn: () => fetchRecipes(createdAt),
    staleTime: THIRTY_MINUTES_IN_MS
  });
};
