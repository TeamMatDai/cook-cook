import type { StrictPropsWithChildren } from '@/types/common';
import MainLayout from '../_components/MainLayout';

const HomeLayout = ({ children }: StrictPropsWithChildren) => {
  return <MainLayout className="py-8">{children}</MainLayout>;
};

export default HomeLayout;
