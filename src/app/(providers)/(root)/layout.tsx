import { LAYOUT } from '@/constants/tailwind';
import { StrictPropsWithChildren } from '@/types/common';

const RootLayout = ({ children }: StrictPropsWithChildren) => {
  return (
    <>
      <div
        className={`mx-auto fixed h-full ${LAYOUT.CONTAINER_MAX_WIDTH} bg-white top-0 left-1/2 w-full z-[-1] transform -translate-x-1/2 pointer-events-none`}
      />
      <div className={`${LAYOUT.CONTAINER_MAX_WIDTH} mx-auto relative`}>{children}</div>
    </>
  );
};

export default RootLayout;
