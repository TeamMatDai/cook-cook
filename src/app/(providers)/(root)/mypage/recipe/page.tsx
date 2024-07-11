'use client';
import dayjs, { type Dayjs } from 'dayjs';
import { useState, useEffect } from 'react';
import NavigateArrow from '@/icons/navigate-arrow.svg';
import { cva } from 'class-variance-authority';
import Typography from '@/components/Typography';
import { CardImage, CardList, CardItem, CardTitle, CardDescription } from '@/components/Card';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/utils/axiosInstance';

const SUNDAY = 'sunday';
const SATURDAY = 'saturday';
const DEFAULT = 'default';
const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
const THIRTY_MINUTES_IN_MS = 30 * 60 * 1000;

const getWeekDates = (baseDate: Dayjs, offsetWeeks: number = 0) => {
  const date = dayjs(baseDate).add(offsetWeeks, 'week');
  const startOfWeek = date.startOf('week');

  return Array.from({ length: 7 }, (_, index) => startOfWeek.add(index, 'day'));
};

const dayClass = cva('w-7 text-[16px] font-medium', {
  variants: {
    dayType: {
      sunday: 'text-[#F72A25]',
      saturday: 'text-[#2686FB]',
      default: 'text-[#666]'
    }
  },
  defaultVariants: {
    dayType: 'default'
  }
});

const dateClass = cva('relative w-7 h-7 -z-0', {
  variants: {
    dayType: {
      sunday: 'text-[#F72A25]',
      saturday: 'text-[#2686FB]',
      default: ''
    },
    isSelected: {
      true: 'text-white font-semibold',
      false: ''
    },
    isToday: {
      true: 'text-white font-semibold',
      false: ''
    }
  }
});

const backgroundClass = cva('absolute top-0 left-0 w-7 h-7 rounded-full -z-[1]', {
  variants: {
    isSelected: {
      true: 'bg-[#222]',
      false: ''
    },
    isToday: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    {
      isSelected: true,
      isToday: true,
      className: 'bg-[#222]'
    },
    {
      isSelected: false,
      isToday: true,
      className: 'bg-[#ccc]'
    },
    {
      isSelected: true,
      isToday: false,
      className: 'bg-[#222]'
    }
  ],
  defaultVariants: {
    isSelected: false,
    isToday: false
  }
});

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
        <div className="flex justify-between mb-7">
          <div className="flex">
            <div className="font-extrabold text-2xl w-[122px]">
              {selectedDate.format('YYYY.MM.')}
            </div>
            <div className="flex gap-2">
              <button onClick={handlePreviousWeek}>
                <NavigateArrow />
              </button>
              <button onClick={handleNextWeek}>
                <NavigateArrow className="rotate-180" />
              </button>
            </div>
          </div>
          <button onClick={handleToday} className="text-[15px] font-medium text-[#999]">
            오늘
          </button>
        </div>
        <div className="flex gap-6 text-center justify-between mb-5">
          {daysOfWeek.map((day, index) => (
            <div
              key={day}
              className={dayClass({
                dayType: index === 0 ? SUNDAY : index === 6 ? SATURDAY : DEFAULT
              })}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="flex gap-6 text-center justify-between">
          {weekDatesArray.map((date, index) => (
            <div key={date.date()}>
              <button
                onClick={() => handleDateClick(date)}
                className={dateClass({
                  isSelected: date.isSame(selectedDate, 'day'),
                  isToday: date.isSame(dayjs(), 'day'),
                  dayType: index === 0 ? SUNDAY : index === 6 ? SATURDAY : DEFAULT
                })}
              >
                <span
                  className={backgroundClass({
                    isSelected: date.isSame(selectedDate, 'day'),
                    isToday: date.isSame(dayjs(), 'day')
                  })}
                />
                {date.date()}
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-6 text-center justify-between h-5">
          {weeklyRecipePresence.map((presence: any, index: number) => (
            <div key={index} className="w-5 h-5 mt-[2px] mx-auto flex justify-center items-center">
              {!!presence && <span className="w-1 h-1 rounded-full bg-red-500" />}
            </div>
          ))}
        </div>
      </div>
      {!isRecipesPending &&
        (recipes.length > 0 ? (
          <CardList className="mt-[60px]">
            {recipes.map((recipe: any, index: number) => (
              <CardItem href={`/detail/${recipe.id}`} key={index}>
                <CardImage src={recipe.thumbnail} />
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.subtitle}</CardDescription>
              </CardItem>
            ))}
          </CardList>
        ) : (
          <Typography
            as="p"
            size="sm"
            weight="light"
            className="text-center mt-[50px] text-gray-500"
          >
            글이 없어요
          </Typography>
        ))}
    </>
  );
};

export default MyRecipePage;
