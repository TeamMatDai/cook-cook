'use client';
import CloseIcon from '@/icons/loginClose.svg';
import { useRouter } from 'next/navigation';

const CloseButton = () => {
  const router = useRouter();

  return (
    <button className="absolute top-[25px] right-[17px] z-10" onClick={() => router.push('/')}>
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
