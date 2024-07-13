import QueryProvider from '@/providers/QueryProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import type { StrictPropsWithChildren } from '@/types/common';

const ProvidersLayout = ({ children }: StrictPropsWithChildren) => {
  return (
    <QueryProvider>
      <SupabaseProvider>{children}</SupabaseProvider>
    </QueryProvider>
  );
};

export default ProvidersLayout;
