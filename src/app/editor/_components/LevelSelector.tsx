import React from 'react';
import { LEVEL_MAP, LEVELS } from '../_utils/constants';

export type Level = 'easy' | 'medium' | 'hard';
interface LevelSelectorProps {
  level: Level;
  setLevel: (level: Level) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ level, setLevel }) => {
  return (
    <>
      <h4 className="w-15 h-4 font-semibold mt-7 mb-4">난이도</h4>
      <div className="flex flex-row gap-[10px]">
        {LEVELS.map((currentLevel) => (
          <button
            key={currentLevel}
            type="button"
            onClick={() => setLevel(currentLevel)}
            className={`h-10 font-semibold flex flex-row justify-center items-center gap-[10px] py-[10px] px-[16px] rounded-[30px] ${
              level === currentLevel ? 'bg-gray-200' : 'bg-[#f5f5f5]'
            }`}
          >
            {LEVEL_MAP[currentLevel]}
          </button>
        ))}
      </div>
    </>
  );
};

export default LevelSelector;
