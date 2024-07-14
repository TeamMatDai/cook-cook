import type { StrictPropsWithChildren } from '@/types/common';
import MainLayout from '../_components/MainLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cook Cook : 메인',
  description: 'Cook Cook : 메인'
};

const HomeLayout = ({ children }: StrictPropsWithChildren) => {
  return <MainLayout className="py-8">{children}</MainLayout>;
};

export default HomeLayout;
