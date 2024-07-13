import { cva } from 'class-variance-authority';
import dayjs from 'dayjs';
import { DEFAULT, SATURDAY, SUNDAY } from '../_constants';

const WeekDates = ({ weekDatesArray, selectedDate, handleDateClick }) => (
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
);

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

export default WeekDates;
