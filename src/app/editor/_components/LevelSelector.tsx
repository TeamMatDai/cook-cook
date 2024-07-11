import React from 'react';

type Level = 'easy' | 'medium' | 'hard';

interface LevelSelectorProps {
  level: Level;
  setLevel: (level: Level) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ level, setLevel }) => {
  const levelMap: { [key in Level]: string } = {
    easy: '초급',
    medium: '중급',
    hard: '고급'
  };

  return (
    <>
      <h4 className="w-15 h-4 font-semibold mt-7 mb-4">난이도</h4>
      <div className="flex flex-row gap-[10px]">
        {Object.keys(levelMap).map((key) => {
          const currentLevel = key as Level;
          return (
            <button
              key={currentLevel}
              type="button"
              onClick={() => setLevel(currentLevel)}
              className={`h-10 font-semibold flex flex-row justify-center items-center gap-[10px] py-[10px] px-[16px] rounded-[30px] ${
                level === currentLevel ? 'bg-gray-200' : 'bg-[#f5f5f5]'
              }`}
            >
              {levelMap[currentLevel]}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default LevelSelector;
