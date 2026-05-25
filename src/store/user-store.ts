import { create } from 'zustand';
// import { persist } from "zustand/middleware";
import type { UserProfile } from '@/types/userProfile';

type UserStore = {
  user: UserProfile | null;
  setUser: (userObj: UserProfile | null) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (userObj) => set({ user: userObj }),
}));
