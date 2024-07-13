'use client';
import dayjs, { type Dayjs } from 'dayjs';
import { useState } from 'react';
import Typography from '@/components/Typography';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/utils/axiosInstance';
import RecipePresence from './_components/RecipePresence';
import RecipeList from './_components/RecipeList';
import WeekDays from './_components/WeekDays';
import WeekDates from './_components/WeekDates';
import WeekNavigation from './_components/WeekNavigation';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
const THIRTY_MINUTES_IN_MS = 30 * 60 * 1000;

const getWeekDates = (baseDate: Dayjs, offsetWeeks: number = 0) => {
  const date = dayjs(baseDate).add(offsetWeeks, 'week');
  const startOfWeek = date.startOf('week');

  return Array.from({ length: 7 }, (_, index) => startOfWeek.add(index, 'day'));
};

const MyRecipePage = () => {
  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState(today);
  const [offsetWeeks, setOffsetWeeks] = useState(0);
  const weekDatesArray = getWeekDates(today, offsetWeeks);

  const updateDate = (newOffsetWeeks: number, newDate: Dayjs) => {
    setOffsetWeeks((prev) => (newOffsetWeeks === 0 ? 0 : prev + newOffsetWeeks));
    setSelectedDate(newDate);
  };

  const calculateNewDate = (weekOffset: number, isStartOfWeek: boolean) => {
    const newDate = today.add(offsetWeeks + weekOffset, 'week');
    return isStartOfWeek ? newDate.startOf('week') : newDate.endOf('week');
  };

  const handlePreviousWeek = () => {
    updateDate(-1, calculateNewDate(-1, true));
  };

  const handleNextWeek = () => {
    updateDate(+1, calculateNewDate(+1, false));
  };

  const handleToday = () => {
    updateDate(0, today);
  };

  const handleDateClick = (date: Dayjs) => {
    setSelectedDate(date);
  };

  const getWeeklyRecipePresence = async () => {
    const startDate = weekDatesArray[0].startOf('week').format('YYYY-MM-DD');
    const endDate = weekDatesArray[6].endOf('week').format('YYYY-MM-DD');

    const { data } = await axiosInstance.get(
      `/api/mypage/recipes/presence?startDate=${startDate}&endDate=${endDate}`
    );
    return data;
  };

  const getRecipes = async () => {
    const createdAt = selectedDate.format('YYYY-MM-DD');

    const { data } = await axiosInstance.get(`/api/mypage/recipes?createdAt=${createdAt}`);
    return data;
  };

  const { data: weeklyRecipePresence = [] } = useQuery({
    queryKey: ['weeklyRecipePresence', weekDatesArray[0].format('YYYY-MM-DD')],
    queryFn: getWeeklyRecipePresence,
    staleTime: THIRTY_MINUTES_IN_MS
  });

  const { data: recipes = [], isPending: isRecipesPending } = useQuery({
    queryKey: ['recipes', selectedDate.format('YYYY-MM-DD')],
    queryFn: getRecipes,
    staleTime: THIRTY_MINUTES_IN_MS
  });

  return (
    <>
      <Typography
        as="strong"
        size="xl"
        weight="medium"
        className="text-black block mt-[42px] mb-[26px]"
      >
        내가 작성한 레시피
      </Typography>
      <div className="p-[26px_26px_20px] rounded-[16px] shadow-[0_20px_30px_0_rgba(220,224,249,0.5)] border border-solid border-[#dbddeb] bg-white">
        <WeekNavigation
          selectedDate={selectedDate}
          handlePreviousWeek={handlePreviousWeek}
          handleNextWeek={handleNextWeek}
          handleToday={handleToday}
        />
        <WeekDays daysOfWeek={daysOfWeek} />
        <WeekDates
          weekDatesArray={weekDatesArray}
          selectedDate={selectedDate}
          handleDateClick={handleDateClick}
        />
        <RecipePresence weeklyRecipePresence={weeklyRecipePresence} />
      </div>
      <RecipeList recipes={recipes} isRecipesPending={isRecipesPending} />
    </>
  );
};

export default MyRecipePage;
