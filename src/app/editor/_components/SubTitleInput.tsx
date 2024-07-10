import React from 'react';

interface SubTitleInputProps {
  subtitle: string;
  setSubtitle: (value: string) => void;
}

const SubTitleInput: React.FC<SubTitleInputProps> = ({ subtitle, setSubtitle }) => (
  <input
    type="text"
    placeholder="한줄설명을 입력하세요"
    value={subtitle}
    onChange={(e) => setSubtitle(e.target.value)}
  />
);

export default SubTitleInput;
