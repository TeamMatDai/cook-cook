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
    <header className="sticky top-0 z-50 flex justify-between items-center border-b border-[#f1f1f1] px-6 py-4 gap-5 font-semibold mb-3 bg-white">
      <button onClick={handleBack}>
        <BackIcon />
      </button>
      <strong>글쓰기</strong>
      <button onClick={onSubmit}>작성</button>
    </header>
  );
};

export default Header;
