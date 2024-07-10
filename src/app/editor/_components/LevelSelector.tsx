import React from 'react';

interface LevelSelectorProps {
  level: string;
  setLevel: (level: string) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ level, setLevel }) => {
  return (
    <>
      <p className="w-15 h-4 font-semibold mt-7 mb-4">난이도</p>
      <div className="flex flex-row gap-[10px]">
        <button
          onClick={() => setLevel('고급')}
          className={`h-10 font-semibold flex flex-row justify-center items-center gap-[10px] py-[10px] px-[16px] rounded-[30px] ${
            level === '고급' ? 'bg-gray-200' : 'bg-[#f5f5f5]'
          }`}
        >
          고급
        </button>
        <button
          onClick={() => setLevel('중급')}
          className={`h-10 font-semibold flex flex-row justify-center items-center gap-[10px] py-[10px] px-[16px] rounded-[30px] ${
            level === '중급' ? 'bg-gray-200' : 'bg-[#f5f5f5]'
          }`}
        >
          중급
        </button>
        <button
          onClick={() => setLevel('초급')}
          className={`h-10 font-semibold flex flex-row justify-center items-center gap-[10px] py-[10px] px-[16px] rounded-[30px] ${
            level === '초급' ? 'bg-gray-200' : 'bg-[#f5f5f5]'
          }`}
        >
          초급
        </button>
      </div>
    </>
  );
};

export default LevelSelector;
