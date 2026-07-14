import axios from 'axios';
import type { NewExpense, Expense } from '@/types/expense';

export const fetchExpenses = async (
  id: string | number,
): Promise<Expense[]> => {
  try {
    const { data } = await axios.get(`http://localhost:3000/expenses/${id}`);
    return data;
  } catch (err) {
    alert('Something went wrong');
    if (err instanceof Error) throw err;
    throw new Error('Failed to fetch expenses');
  }
};

export const addExpense = async (
  newExpense: NewExpense,
): Promise<Expense | undefined> => {
  try {
    const { data } = await axios.post(
      'http://localhost:3000/expenses/add-expense',
      newExpense,
    );
    return data;
  } catch (err) {
    console.error('Failed to add expense: ', err);
    alert('Something went wrong');
    if (err instanceof Error) throw err; // if err is an Error instance, throw error and exit
    throw new Error('Failed to add expense'); // otherwise, give this message (this line won't be reachable if above line works)
  }
};
