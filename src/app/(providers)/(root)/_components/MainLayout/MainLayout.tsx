import type { StrictPropsWithChildren } from '@/types/common';
import Header from '../Header';
import BottomNav from '../BottomNav';

const MainLayout = ({ children, className }: StrictPropsWithChildren<{ className?: string }>) => {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <BottomNav />
    </>
  );
};

export default MainLayout;
