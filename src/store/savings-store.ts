import { create } from 'zustand';
import type { Savings } from '@/types/savings';

type SavingsStore = {
  totalSavings: number;
  allSavings: Savings[];
  setSavings: (savingsArr: Savings[]) => void;
  setTotalSavings: (savings: Savings[]) => void;
  addTotalSavings: (newSavings: Savings) => void;
};

export const useSavings = create<SavingsStore>((set) => ({
  totalSavings: 0,
  allSavings: [],
  setSavings: (savingsArr) => set({ allSavings: savingsArr }),
  setTotalSavings: (savings) =>
    set({
      totalSavings: savings.reduce(
        (acc, curr) => acc + Number(curr.amount || 0),
        0,
      ),
    }),
  addTotalSavings: (newSavings) =>
    set((state) => ({
      totalSavings: Number(state.totalSavings) + Number(newSavings.amount),
      allSavings: [...state.allSavings, newSavings],
    })),
}));
