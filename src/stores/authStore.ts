import type { User } from '@supabase/supabase-js';
import { createStore } from 'zustand/vanilla';

export type UserType = User | null;

export type AuthState = {
  user: UserType;
  isLogin: boolean;
};

export type AuthActions = {
  login: (user: User) => void;
  logout: () => void;
};

export type AuthStoreTypes = AuthState & AuthActions;

export const initAuthStore = (): AuthState => {
  return { user: null, isLogin: false };
};

export const defaultInitState: AuthState = {
  user: null,
  isLogin: false
};

export const createAuthStore = (initState = defaultInitState) => {
  return createStore<AuthStoreTypes>()((set) => ({
    ...initState,
    login: (user: User) => set(() => ({ user, isLogin: true })),
    logout: () => set(() => ({ user: null, isLogin: false }))
  }));
};
