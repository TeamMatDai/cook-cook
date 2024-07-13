import type { Dayjs } from 'dayjs';
import { useState } from 'react';

const useWeekNavigation = (initialDate: Dayjs) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [offsetWeeks, setOffsetWeeks] = useState(0);

  const updateDate = (newOffsetWeeks: number, newDate: Dayjs) => {
    setOffsetWeeks((prev) => (newOffsetWeeks === 0 ? 0 : prev + newOffsetWeeks));
    setSelectedDate(newDate);
  };

  const calculateNewDate = (weekOffset: number, isStartOfWeek: boolean) => {
    const newDate = initialDate.add(offsetWeeks + weekOffset, 'week');
    return isStartOfWeek ? newDate.startOf('week') : newDate.endOf('week');
  };

  const handlePreviousWeek = () => {
    updateDate(-1, calculateNewDate(-1, true));
  };

  const handleNextWeek = () => {
    updateDate(+1, calculateNewDate(+1, false));
  };

  const handleToday = () => {
    updateDate(0, initialDate);
  };

  const handleDateClick = (date: Dayjs) => {
    setSelectedDate(date);
  };

  return {
    selectedDate,
    offsetWeeks,
    handlePreviousWeek,
    handleNextWeek,
    handleToday,
    handleDateClick
  };
};

export default useWeekNavigation;
