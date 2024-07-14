import NavigateArrow from '@/icons/navigate-arrow.svg';
import { Dayjs } from 'dayjs';

type WeekNavigationProps = {
  selectedDate: Dayjs;
  handlePreviousWeek: () => void;
  handleNextWeek: () => void;
  handleToday: () => void;
};

const WeekNavigation = ({
  selectedDate,
  handlePreviousWeek,
  handleNextWeek,
  handleToday
}: WeekNavigationProps) => (
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
);

export default WeekNavigation;
