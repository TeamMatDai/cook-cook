import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export const Button = ({ children, onClick, className = '' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg w-[66px] h-[66px] flex flex-col gap-2 justify-center items-center border border-lightgray ${className}`}
    >
      {children}
    </button>
  );
};
