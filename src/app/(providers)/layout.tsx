import QueryProvider from '@/providers/QueryProvider';
import type { StrictPropsWithChildren } from '@/types/common';

const ProvidersLayout = ({ children }: StrictPropsWithChildren) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default ProvidersLayout;
