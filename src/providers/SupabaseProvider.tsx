'use client';

import { useState } from 'react';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { StrictPropsWithChildren } from '@/types/common';

const SupabaseProvider = ({ children }: StrictPropsWithChildren) => {
  const [supabaseClient] = useState(() => createClientComponentClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>{children}</SessionContextProvider>
  );
};

export default SupabaseProvider;
