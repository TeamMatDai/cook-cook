import { StrictPropsWithChildren } from '@/types/common';

const RootLayout = ({ children }: StrictPropsWithChildren) => {
  return (
    <>
      <div className="mx-auto fixed h-full max-w-[500px] bg-white top-0 left-1/2 w-full z-[-1] transform -translate-x-1/2 pointer-events-none" />
      <main className="max-w-[500px] mx-auto relative">{children}</main>
    </>
  );
};

export default RootLayout;
