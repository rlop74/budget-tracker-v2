import { create } from 'zustand';
import type { Expense } from '@/types/expense';

type ExpensesStore = {
  totalExpense: number;
  allExpenses: Expense[];
  setAllExpenses: (expenses: Expense[]) => void;
  setTotalExpense: (expenses: Expense[]) => void;
  addNewExpense: (expense: Expense) => void;
};

export const useExpenses = create<ExpensesStore>((set) => ({
  totalExpense: 0,
  allExpenses: [],
  setAllExpenses: (expenses) =>
    set({
      allExpenses: expenses,
    }),
  setTotalExpense: (expenses) =>
    set({
      totalExpense: expenses.reduce(
        (acc, curr) => acc + Number(curr?.amount || 0),
        0,
      ),
    }),
  addNewExpense: (expense) =>
    set((state) => ({
      allExpenses: [...state.allExpenses, expense],
      totalExpense: Number(state.totalExpense) + Number(expense.amount),
    })),
}));
