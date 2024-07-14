import { User } from '@supabase/supabase-js';
import { create } from 'zustand';

type UserType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const useUserStore = create<UserType>()((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user: user })
}));

export default useUserStore;
