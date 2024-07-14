'use client';

import { type ReactNode, createContext, useRef, useContext, useEffect } from 'react';
import { useStore } from 'zustand';
import { type AuthStoreTypes, createAuthStore } from '@/stores/authStore';
import { createClient } from '@/utils/supabase/supabaseClient';

export type AuthStoreApi = ReturnType<typeof createAuthStore>;
export const AuthStoreContext = createContext<AuthStoreApi | undefined>(undefined);
export interface AuthStoreProviderProps {
  children: ReactNode;
}

export const AuthStoreProvider = ({ children }: AuthStoreProviderProps) => {
  const storeRef = useRef<AuthStoreApi>();
  const supabase = createClient();

  if (!storeRef.current) {
    storeRef.current = createAuthStore();
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        storeRef.current?.getState().login(session.user);
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  return <AuthStoreContext.Provider value={storeRef.current}>{children}</AuthStoreContext.Provider>;
};

export const useAuthStore = <T,>(selector: (store: AuthStoreTypes) => T): T => {
  const authStoreContext = useContext(AuthStoreContext);

  if (!authStoreContext) {
    throw new Error(`useAuthStore must be used within AuthStoreProvider`);
  }

  return useStore(authStoreContext, selector);
};
