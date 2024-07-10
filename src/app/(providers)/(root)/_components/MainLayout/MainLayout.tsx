import type { StrictPropsWithChildren } from '@/types/common';
import Header from '../Header';
import BottomNav from '../BottomNav';

const MainLayout = ({ children }: StrictPropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <BottomNav />
    </>
  );
};

export default MainLayout;
