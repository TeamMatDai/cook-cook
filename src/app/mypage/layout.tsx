import type { PropsWithChildren } from 'react';

const MyPageLayout = ({ children }: PropsWithChildren) => {
  return <main className="px-[22px] pb-12">{children}</main>;
};

export default MyPageLayout;
