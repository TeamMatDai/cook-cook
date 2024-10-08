import type { StrictPropsWithChildren } from '@/types/common';
import Header from '../Header';
import BottomNav from '../BottomNav';
import { LAYOUT } from '@/constants/tailwind';

const MainLayout = ({
  children,
  isShowHeader = true,
  isShowBottomNav = true,
  className
}: StrictPropsWithChildren<{
  className?: string;
  isShowHeader?: boolean;
  isShowBottomNav?: boolean;
}>) => {
  return (
    <div className={LAYOUT.BOTTOM_NAV_PADDING_BOTTOM}>
      {isShowHeader && <Header />}
      <main className={className}>{children}</main>
      {isShowBottomNav && <BottomNav />}
    </div>
  );
};

export default MainLayout;
