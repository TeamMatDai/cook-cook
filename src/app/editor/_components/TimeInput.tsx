import React from 'react';

interface TimeInputProps {
  time: number;
  setTime: (value: number) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({ time, setTime }) => (
  <div>
    <p>소요시간</p>
    <div className="flex items-center">
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        className="border border-gray-300 p-1 w-20"
      />
      <p>분</p>
    </div>
  </div>
);

export default TimeInput;
