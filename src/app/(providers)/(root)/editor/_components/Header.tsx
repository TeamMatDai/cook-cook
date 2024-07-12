import BackIcon from '@icons/editor/back.svg';
import Link from 'next/link';

interface HeaderProps {
  onSubmit: () => void;
}

const Header = ({ onSubmit }: HeaderProps) => (
  <header className="flex justify-between items-center border-b border-gray-300 px-6 py-4 gap-5 font-semibold mb-3">
    <Link href="/">
      <button>
        <BackIcon />
      </button>
    </Link>
    <strong>글쓰기</strong>
    <button onClick={onSubmit}>작성</button>
  </header>
);

export default Header;
