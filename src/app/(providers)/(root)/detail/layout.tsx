import MainLayout from '../_components/MainLayout';

export default function DetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout isShowHeader={false}>
      <section className="pb-[90px] overflow-hidden break-words">{children}</section>
    </MainLayout>
  );
}
