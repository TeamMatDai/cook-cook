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
      <body
        className={`${pretendard.variable} font-pretendard max-w-[500px] mx-auto bg-baseBackground`}
      >
        <div className="mx-auto fixed h-full max-w-[500px] bg-white top-0 left-1/2 w-full z-[-1] transform -translate-x-1/2 pointer-events-none" />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
