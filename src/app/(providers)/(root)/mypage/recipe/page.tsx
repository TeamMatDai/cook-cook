'use client';
import dayjs, { type Dayjs } from 'dayjs';
import Typography from '@/components/Typography';
import RecipePresence from './_components/RecipePresence';
import RecipeList from './_components/RecipeList';
import WeekDays from './_components/WeekDays';
import WeekDates from './_components/WeekDates';
import WeekNavigation from './_components/WeekNavigation';
import { useRecipes, useWeeklyRecipePresence } from '@/hooks/queries/useRecipes';
import useWeekNavigation from './_hooks/useWeekNavigation';

const getWeekDates = (baseDate: Dayjs, offsetWeeks: number = 0): Dayjs[] => {
  const date = dayjs(baseDate).add(offsetWeeks, 'week');
  const startOfWeek = date.startOf('week');

  return Array.from({ length: 7 }, (_, index) => startOfWeek.add(index, 'day'));
};

const MyRecipePage = () => {
  const today = dayjs();
  const {
    selectedDate,
    offsetWeeks,
    handlePreviousWeek,
    handleNextWeek,
    handleToday,
    handleDateClick
  } = useWeekNavigation(today);

  const weekDatesArray = getWeekDates(today, offsetWeeks);
  const startDate = weekDatesArray[0].startOf('week').format('YYYY-MM-DD');
  const endDate = weekDatesArray[6].endOf('week').format('YYYY-MM-DD');
  const createdAt = selectedDate.format('YYYY-MM-DD');

  const { data: weeklyRecipePresence = [] } = useWeeklyRecipePresence({ startDate, endDate });
  const { data: recipes = [], isPending: isRecipesPending } = useRecipes(createdAt);

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
        <WeekDays />
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
