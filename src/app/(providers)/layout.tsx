import QueryProvider from '@/providers/QueryProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import { CounterStoreProvider } from '@/providers/CounterStoreProvider';
import type { StrictPropsWithChildren } from '@/types/common';

const ProvidersLayout = ({ children }: StrictPropsWithChildren) => {
  return (
    <QueryProvider>
      <SupabaseProvider>
        <CounterStoreProvider>{children}</CounterStoreProvider>
      </SupabaseProvider>
    </QueryProvider>
  );
};

export default ProvidersLayout;
