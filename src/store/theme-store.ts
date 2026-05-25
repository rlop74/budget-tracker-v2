import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';
type ThemeStore = {
  theme: Theme;
  changeTheme: (newTheme: Theme) => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      changeTheme: (newTheme) =>
        set({
          theme: newTheme,
        }),
    }),
    { name: 'theme', partialize: (state) => ({ theme: state.theme }) },
  ),
);
