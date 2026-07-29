import { apiClient } from '@/lib/apiClient';
import type { Goal } from '@/types/goal';

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
