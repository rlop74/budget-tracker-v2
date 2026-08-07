import { apiClient } from '@/lib/apiClient';
import type { Goal, NewGoalForm } from '@/types/goal';

export const fetchGoals = async (): Promise<Goal[]> => {
  try {
    const { data } = await apiClient.get<Goal[]>('/goals');
    return data;
  } catch (err) {
    console.error('Failed to fetch goals: ', err);
    alert('Something went wrong');
    if (err instanceof Error) throw err;

    // fallback
    throw new Error('Failed to fetch goals');
  }
};

export const addGoal = async (newGoal: NewGoalForm): Promise<Goal> => {
  const { data } = await apiClient.post<Goal>(`/goals/add-goal`, newGoal);

  return data;
};

export const deleteGoal = async (id: Goal['id']): Promise<void> => {
  await apiClient.delete(`/goals/delete-goal/${id}`);
};

export const editGoal = async (goalToEdit: Goal): Promise<void> => {
  await apiClient.patch(`/goals/edit-goal/${goalToEdit.id}`, goalToEdit);
};

export const increaseGoalAmount = async (
  goalToIncrease: Goal,
  addGoalAmount: string | number,
): Promise<void> => {
  await apiClient.patch(`/goals/edit-goal/${goalToIncrease.id}`, {
    ...goalToIncrease,
    current_amount: goalToIncrease.current_amount + Number(addGoalAmount),
  });
};
