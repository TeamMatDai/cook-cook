import React from 'react';
import { LEVEL_MAP, LEVELS } from '../_utils/constants';
import { Level } from '../_types/editorInput';

interface LevelSelectorProps {
  level: Level;
  setLevel: (level: Level) => void;
}

const LevelSelector = ({ level, setLevel }: LevelSelectorProps) => {
  return (
    <>
      <strong className="w-15 h-4 font-semibold mt-7 mb-4">난이도</strong>
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
