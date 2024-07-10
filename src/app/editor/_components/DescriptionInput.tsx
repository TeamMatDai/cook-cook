import React from 'react';

interface DescriptionInputProps {
  description: string;
  setDescription: (value: string) => void;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({ description, setDescription }) => (
  <input
    type="text"
    placeholder="내용을 입력하세요"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />
);

export default DescriptionInput;
