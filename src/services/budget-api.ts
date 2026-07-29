import { apiClient } from '@/lib/apiClient';
import type { BudgetCategory } from '@/types/budget';

export const fetchBudget = async (): Promise<BudgetCategory[]> => {
  try {
    const { data } = await apiClient.get('/budget');
    return data;
  } catch (err) {
    console.error('Failed to fetch budget: ', err);
    alert('Something went wrong');

    if (err instanceof Error) throw err;

    throw new Error('Failed to fetch budget');
  }
};
