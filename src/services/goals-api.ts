import axios from 'axios';
import type { Goal } from '@/types/goal';

export const fetchGoals = async (): Promise<Goal[]> => {
  try {
    const { data } = await axios.get<Goal[]>('http://localhost:3000/goals');
    return data;
  } catch (err) {
    console.error('Failed to fetch goals: ', err);
    alert('Something went wrong');
    if (err instanceof Error) throw err;

    // fallback
    throw new Error('Failed to fetch goals');
  }
};
