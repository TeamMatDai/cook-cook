import type { StrictPropsWithChildren } from '@/types/common';
import Header from '../Header';
import BottomNav from '../BottomNav';
import { LAYOUT } from '@/constants/tailwind';

const MainLayout = ({ children, className }: StrictPropsWithChildren<{ className?: string }>) => {
  return (
    <div className={LAYOUT.BOTTOM_NAV_PADDING_BOTTOM}>
      <Header />
      <main className={className}>{children}</main>
      <BottomNav />
    </div>
  );
};

export default MainLayout;
