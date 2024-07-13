import IconShare from '@/icons/share.svg';
import showSwal from '@/utils/swal';

const handleShare = () => {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        showSwal({ icon: 'warning', title: 'URL이 클립보드에 복사되었습니다.' });
      })
      .catch((error) => {
        showSwal({ icon: 'warning', title: 'error가 발생하였습니다..' });
      });
  } else {
    console.log('Clipboard API not supported in this browser.');
  }
};
const ShareButton: React.FC = () => {
  return (
    <button
      type="button"
      className="rounded-lg w-[66px] h-[66px] flex flex-col gap-2 justify-center items-center border border-lightgray"
      onClick={handleShare}
    >
      <IconShare />
      공유
    </button>
  );
};

export default ShareButton;
