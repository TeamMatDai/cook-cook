import BackIcon from '@/icons/editor/back.svg';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  onSubmit: () => void;
}

const Header = ({ onSubmit }: HeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <header className="flex justify-between items-center border-b border-gray-300 px-6 py-4 gap-5 font-semibold mb-3">
      <button onClick={handleBack}>
        <BackIcon />
      </button>
      <strong>글쓰기</strong>
      <button onClick={onSubmit}>작성</button>
    </header>
  );
};

export default Header;
