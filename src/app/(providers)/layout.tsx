import QueryProvider from '@/providers/QueryProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import { UserProvider } from '@/providers/UserProvider';
import type { StrictPropsWithChildren } from '@/types/common';
import { getUserInfo } from '../(providers)/(root)/login/_utils/getUserInfo';

const ProvidersLayout = async ({ children }: StrictPropsWithChildren) => {
  const user = await getUserInfo();

  return (
    <QueryProvider>
      <SupabaseProvider>
        <UserProvider value={user}>{children}</UserProvider>
      </SupabaseProvider>
    </QueryProvider>
  );
};

export default ProvidersLayout;
