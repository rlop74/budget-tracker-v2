import { create } from 'zustand';

type AuthStore = {
  isAuthLoading: boolean;
  setIsAuthLoading: (bool: boolean) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthLoading: true,
  setIsAuthLoading: (bool) => set({ isAuthLoading: bool }),
}));
