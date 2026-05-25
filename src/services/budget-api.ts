import axios from 'axios';
import type { BudgetCategory } from '@/types/budget';

export const fetchBudget = async (): Promise<BudgetCategory[]> => {
  try {
    const { data } = await axios.get('http://localhost:3000/budget');
    return data;
  } catch (err) {
    console.error('Failed to fetch budget: ', err);
    alert('Something went wrong');

    if (err instanceof Error) throw err;

    throw new Error('Failed to fetch budget');
  }
};
