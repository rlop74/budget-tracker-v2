import { create } from 'zustand';
import type { BudgetCategory } from '@/types/budget';

type BudgetStore = {
  allBudgets: BudgetCategory[];
  setAllBudgets: (budgetsArr: BudgetCategory[]) => void;
};

export const useBudget = create<BudgetStore>((set) => ({
  allBudgets: [],
  setAllBudgets: (budgetsArr) =>
    set({
      allBudgets: budgetsArr,
    }),
}));
