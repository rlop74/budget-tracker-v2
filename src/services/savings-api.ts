import { apiClient } from '@/lib/apiClient';
import type { NewSavings, Savings } from '@/types/savings';

export const fetchSavings = async (id: string | number): Promise<Savings[]> => {
  try {
    const { data } = await apiClient.get(`/savings/${id}`);
    return data;
  } catch (err) {
    alert('Something went wrong');

    if (err instanceof Error) throw err;

    throw new Error('Failed to fetch savings');
  }
};

export const addSavings = async (
  newSavings: NewSavings,
): Promise<Savings | undefined> => {
  if (!newSavings.amount) {
    alert('Fill out amount');
    return;
  }
  try {
    const { data } = await apiClient.post(`/savings/new-savings`, newSavings);
    return data;
  } catch (err) {
    alert('Something went wrong');

    if (err instanceof Error) throw err;

    throw new Error('Failed to add savings');
  }
};
