import MainLayout from '../_components/MainLayout';
import { Metadata } from 'next';

type ParamsProps = {
  params: { id: string };
};

export const metadata: Metadata = {
  title: 'Cook Cook : 상세',
  description: 'Cook Cook : 상세'
};

export default function DetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout isShowHeader={false}>
      <section className="pb-[90px] overflow-hidden break-words">{children}</section>
    </MainLayout>
  );
}
