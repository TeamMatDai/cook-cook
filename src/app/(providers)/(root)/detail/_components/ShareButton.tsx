import React from 'react';
import { IconShare } from '@/icons/IconShare';
import { Button } from '@/app/(providers)/(root)/detail/_components/ShareButton';

const ShareButton: React.FC = () => {
  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          alert('URL이 클립보드에 복사되었습니다.');
        })
        .catch((error) => {
          console.error('Error copying URL:', error);
        });
    } else {
      console.log('Clipboard API not supported in this browser.');
    }
  };

  return (
    <button className='rounded-lg w-[66px] h-[66px] flex flex-col gap-2 justify-center items-center border border-lightgray' onClick={handleShare}>
      <IconShare />
      공유
    </button>
  );
};

export default ShareButton;
