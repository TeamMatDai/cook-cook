'use client';
import dayjs, { type Dayjs } from 'dayjs';
import { useState } from 'react';
import NavigateArrow from '@/icons/navigate-arrow.svg';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const getWeekDates = (baseDate: Dayjs, offsetWeeks: number = 0) => {
  const date = dayjs(baseDate).add(offsetWeeks, 'week');
  const startOfWeek = date.startOf('week');

  return Array.from({ length: 7 }, (_, index) => startOfWeek.add(index, 'day'));
};

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
    <div className="p-[26px_26px_20px] rounded-[16px] shadow-[0_20px_30px_0_rgba(220,224,249,0.5)] border border-solid border-[#dbddeb] bg-white">
      <div className="flex justify-between mb-7">
        <div className="flex">
          <div className="font-extrabold text-2xl w-[122px]">{selectedDate.format('YYYY.MM.')}</div>
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
            className={`w-7 text-[16px] font-medium ${
              index === 0
                ? 'text-[#F72A25]'
                : index === array.length - 1
                ? 'text-[#2686FB]'
                : 'text-[#666]'
            }`}
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
              className={`relative ${
                date.isSame(selectedDate, 'day') || date.isSame(dayjs(), 'day')
                  ? 'text-white font-semibold'
                  : index === 0
                  ? 'text-[#F72A25]'
                  : index === array.length - 1
                  ? 'text-[#2686FB]'
                  : ''
              } w-7 h-7 -z-0`}
            >
              {!date.isSame(selectedDate, 'day') && date.isSame(dayjs(), 'day') && (
                <span className="absolute top-0 left-0 w-7 h-7 rounded-full bg-[#ccc] -z-[1]" />
              )}
              {date.isSame(selectedDate, 'day') && (
                <span className="absolute top-0 left-0 w-7 h-7 rounded-full bg-[#222] -z-[1]" />
              )}
              {date.date()}
            </button>
            <div className="w-5 h-5 mt-[2px] mx-auto flex justify-center items-center">
              {date.isSame(selectedDate, 'day') && (
                <span className="w-1 h-1 rounded-full bg-red-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRecipePage;
