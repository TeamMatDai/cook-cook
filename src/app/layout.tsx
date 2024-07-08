import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import QueryProvider from '@/providers/QueryProvider';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
