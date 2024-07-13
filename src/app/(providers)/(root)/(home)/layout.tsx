import type { StrictPropsWithChildren } from '@/types/common';
import MainLayout from '../_components/MainLayout';

const HomeLayout = ({ children }: StrictPropsWithChildren) => {
  return <MainLayout className="px-[22px] py-8 pr-0">{children}</MainLayout>;
};

export default HomeLayout;
