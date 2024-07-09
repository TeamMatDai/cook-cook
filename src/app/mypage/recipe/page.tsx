'use client';
import dayjs, { type Dayjs } from 'dayjs';
import { useState } from 'react';
import NavigateArrow from '@/icons/navigate-arrow.svg';
import { cva } from 'class-variance-authority';
import Typography from '@/components/Typography';
import { CardImage, CardList, CardItem, CardTitle, CardDescription } from '@/components/Card';

const SUNDAY = 'sunday';
const SATURDAY = 'saturday';
const DEFAULT = 'default';
const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

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
  const array = getWeekDates(today, offsetWeeks);

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
          {array.map((date, index) => (
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
              {/* !TODO: 게시글이 있는 날만 색칠하기 */}
              <div className="w-5 h-5 mt-[2px] mx-auto flex justify-center items-center">
                {date.isSame(selectedDate, 'day') && (
                  <span className="w-1 h-1 rounded-full bg-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CardList className="mt-[60px]">
        {Array.from({ length: 4 }, (_, index) => (
          <CardItem href="/" key={index}>
            <CardImage src="https://static.wtable.co.kr/image/production/service/product/35966/608f87f9-3193-4497-95dd-f163a4871b81.jpg?size=500x500" />
            <CardTitle>전복 황태 삼계탕</CardTitle>
            <CardDescription>간장을 태워 불맛을 낸 전복과 황태를 넣은 삼계탕</CardDescription>
          </CardItem>
        ))}
      </CardList>
    </>
  );
};

export default MyRecipePage;
