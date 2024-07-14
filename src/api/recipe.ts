import axiosInstance from '@/utils/axiosInstance';
import { Dayjs } from 'dayjs';

type FetchRecipesParams = {
  startDate: string;
  endDate: string;
};

export const fetchRecipes = async (createdAt: string) => {
  const { data } = await axiosInstance.get(`/api/mypage/recipes?createdAt=${createdAt}`);
  return data;
};

export const fetchWeeklyRecipePresence = async ({ startDate, endDate }: FetchRecipesParams) => {
  const { data } = await axiosInstance.get(
    `/api/mypage/recipes/presence?startDate=${startDate}&endDate=${endDate}`
  );
  return data;
};

export const fetchPinnedRecipes = async () => {
  const { data } = await axiosInstance.get(`/api/mypage/pin`);
  return data;
};
