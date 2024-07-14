import { cva } from 'class-variance-authority';
import { DEFAULT, SATURDAY, SUNDAY } from '../_constants';

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const WeekDays = () => (
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
);

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

export default WeekDays;
