import React from 'react';

interface CommonInputProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const CommonInput: React.FC<CommonInputProps> = ({ placeholder, value, setValue }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default CommonInput;
