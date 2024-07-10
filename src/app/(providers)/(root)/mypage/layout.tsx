import type { StrictPropsWithChildren } from '@/types/common';

const MyPageLayout = ({ children }: StrictPropsWithChildren) => {
  return <main className="px-[22px] pb-12">{children}</main>;
};

export default MyPageLayout;
