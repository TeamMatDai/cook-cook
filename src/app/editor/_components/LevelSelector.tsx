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
        onClick={() => setLevel('쉬움')}
        style={{ backgroundColor: level === '쉬움' ? 'gray' : 'white' }}
      >
        쉬움
      </button>
      <button
        onClick={() => setLevel('보통')}
        style={{ backgroundColor: level === '보통' ? 'gray' : 'white' }}
      >
        보통
      </button>
      <button
        onClick={() => setLevel('어려움')}
        style={{ backgroundColor: level === '어려움' ? 'gray' : 'white' }}
      >
        어려움
      </button>
    </div>
  );
};

export default LevelSelector;
