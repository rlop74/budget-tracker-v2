import { create } from 'zustand';
import type { Goal } from '@/types/goal';

type GoalsStore = {
  totalGoalsTargetAmount: number;
  allGoals: Goal[];
  setTotalGoalsTargetAmount: (allGoalsArr: Goal[]) => void;
  setAllGoals: (allGoalsArr: Goal[]) => void;
  addNewGoal: (newGoal: Goal) => void;
};

export const useGoals = create<GoalsStore>((set) => ({
  totalGoalsTargetAmount: 0,
  allGoals: [],
  setTotalGoalsTargetAmount: (allGoalsArr) =>
    set({
      totalGoalsTargetAmount: allGoalsArr.reduce(
        (acc, goal) => acc + Number(goal.target_amount),
        0,
      ),
    }),
  setAllGoals: (allGoalsArr) =>
    set({
      allGoals: allGoalsArr,
    }),
  addNewGoal: (newGoal) =>
    set((state) => ({
      allGoals: [...state.allGoals, newGoal],
      totalGoalsTargetAmount:
        state.totalGoalsTargetAmount + Number(newGoal.target_amount),
    })),
}));
