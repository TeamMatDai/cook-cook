import React from 'react';
import BackIcon from '../../../icons/editor/back.svg';

const Header = ({ onSubmit }: { onSubmit: () => {} }) => (
  <header className="flex justify-between items-center border-b border-gray-300 px-6 py-4 gap-5 font-semibold mb-3">
    <button>
      <BackIcon />
    </button>
    <p>글쓰기</p>
    <button onClick={onSubmit}>작성</button>
  </header>
);

export default Header;
