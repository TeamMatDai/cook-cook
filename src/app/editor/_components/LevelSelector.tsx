import React from 'react';

interface LevelSelectorProps {
  level: string;
  setLevel: (level: string) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ level, setLevel }) => {
  return (
    <div>
      <p>난이도</p>
      <button
        onClick={() => setLevel('상')}
        style={{ backgroundColor: level === '상' ? 'gray' : 'white' }}
      >
        상
      </button>
      <button
        onClick={() => setLevel('중')}
        style={{ backgroundColor: level === '중' ? 'gray' : 'white' }}
      >
        중
      </button>
      <button
        onClick={() => setLevel('하')}
        style={{ backgroundColor: level === '하' ? 'gray' : 'white' }}
      >
        하
      </button>
    </div>
  );
};

export default LevelSelector;
