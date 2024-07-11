import type { StrictPropsWithChildren } from '@/types/common';
import MainLayout from '../_components/MainLayout';

const MyPageLayout = ({ children }: StrictPropsWithChildren) => {
  return <MainLayout className="px-[22px] pb-12">{children}</MainLayout>;
};

export default MyPageLayout;
