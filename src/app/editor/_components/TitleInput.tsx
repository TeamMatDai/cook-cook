import React from 'react';

interface TitleInputProps {
  title: string;
  setTitle: (value: string) => void;
}

const TitleInput: React.FC<TitleInputProps> = ({ title, setTitle }) => {
  return (
    <input
      type="text"
      placeholder="제목을 입력하세요"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
};

export default TitleInput;
