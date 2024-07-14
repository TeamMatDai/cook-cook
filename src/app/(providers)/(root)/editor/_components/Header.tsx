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
    <header className="sticky top-0 z-50 h-[70px] flex justify-between items-center border-b border-[#f0f0f0] px-6 py-4 gap-5 font-semibold mb-3 bg-white">
      <button onClick={handleBack}>
        <BackIcon />
      </button>
      <h1>글쓰기</h1>
      <button className="text-4" onClick={onSubmit}>
        작성
      </button>
    </header>
  );
};

export default Header;
