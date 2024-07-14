import React from 'react';
import { LEVEL_MAP, LEVELS } from '../_utils/constants';
import { Level } from '@/types/recipe';

interface LevelSelectorProps {
  level: Level;
  setLevel: (level: Level) => void;
}

const LevelSelector = ({ level, setLevel }: LevelSelectorProps) => {
  return (
    <div className="pt-4">
      <p className="w-15 h-4 font-weight:500 mt-7 mb-4">난이도</p>
      <div className="flex flex-row gap-[10px]">
        {LEVELS.map((currentLevel) => (
          <button
            key={currentLevel}
            type="button"
            onClick={() => setLevel(currentLevel)}
            className={`h-[40px] text-[14px] font-semibold flex flex-row justify-center items-center gap-[10px] py-[10px] px-[16px] rounded-[30px] border border-[#F0F0F0] border-solid ${
              level === currentLevel ? 'bg-[#F5F5F5]' : 'bg-white'
            }`}
          >
            {LEVEL_MAP[currentLevel]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;
