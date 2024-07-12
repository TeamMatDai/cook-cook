import BackIcon from '@icons/editor/back.svg';

interface HeaderProps {
  onSubmit: () => void;
}

const Header = ({ onSubmit }: HeaderProps) => (
  <header className="flex justify-between items-center border-b border-gray-300 px-6 py-4 gap-5 font-semibold mb-3">
    <button>
      <BackIcon />
    </button>
    <strong>글쓰기</strong>
    <button onClick={onSubmit}>작성</button>
  </header>
);

export default Header;
