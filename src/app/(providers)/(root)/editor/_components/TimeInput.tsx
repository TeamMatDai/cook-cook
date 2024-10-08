import TimeIcon from '@/icons/editor/time.svg';

interface TimeInputProps {
  time: number;
  setTime: (value: number) => void;
}

const TimeInput = ({ time, setTime }: TimeInputProps) => (
  <>
    <p className="w-15 h-4 font-weight:500 mb-5">소요시간</p>
    <div className="flex items-center gap-2">
      <TimeIcon />
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        className="w-14 h-8 text-center justify-center gap-2 rounded-[6px] border border-solid border-[#dbddeb]"
      />
      <span>분</span>
    </div>
  </>
);

export default TimeInput;
