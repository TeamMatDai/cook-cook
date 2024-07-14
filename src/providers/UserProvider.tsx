'use client';
import { User } from '@supabase/supabase-js';
import { createContext, useContext, ReactNode } from 'react';

type UserContextType = {
  user: User | null;
};

type UserProps = {
  value: User | null;
  children: ReactNode;
};

const UserContext = createContext<UserContextType>({ user: null });

export const UserProvider = ({ value, children }: UserProps) => {
  return <UserContext.Provider value={{ user: value }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`${useUserContext.name} UserProvider안에서 사용`);
  }
  return context;
};
