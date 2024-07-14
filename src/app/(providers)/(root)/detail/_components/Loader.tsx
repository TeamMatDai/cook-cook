import { LAYOUT } from '@/constants/tailwind';

const Loader = () => {
  return (
    <div
      className={`fixed top-0 bottom-0 left-1/2 transform -translate-x-1/2 bg-white z-40 ${LAYOUT.CONTAINER_MAX_WIDTH} w-full ${LAYOUT.BOTTOM_NAV_HEIGHT} border-t border-[#F1F1F1] flex items-center justify-center h-dvh`}
    >
      <div className="lds-ellipsis relative w-[45px] h-[35px]">
        <div className="absolute top-[11.33333px] w-[10px] h-[10px] bg-black rounded-full animate-lds-ellipsis1 left-[6px]"></div>
        <div className="absolute top-[11.33333px] w-[10px] h-[10px] bg-black rounded-full animate-lds-ellipsis2 left-[6px]"></div>
        <div className="absolute top-[11.33333px] w-[10px] h-[10px] bg-black rounded-full animate-lds-ellipsis2 left-[20px]"></div>
        <div className="absolute top-[11.33333px] w-[10px] h-[10px] bg-black rounded-full animate-lds-ellipsis3 left-[28px]"></div>
      </div>
    </div>
  );
};

export default Loader;
