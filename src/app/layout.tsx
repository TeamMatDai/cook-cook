import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
});

export const metadata: Metadata = {
  title: 'Cook Cook',
  description: 'Cook Cook'
};

const AppLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard bg-baseBackground`}>{children}</body>
    </html>
  );
};

export default AppLayout;
