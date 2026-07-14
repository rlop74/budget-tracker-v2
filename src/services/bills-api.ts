import axios from 'axios';
import type { NewBill, Bill } from '@/types/bill';

export const fetchBills = async (): Promise<Bill[]> => {
  try {
    const { data } = await axios.get<Bill[]>('http://localhost:3000/bills');
    return data;
  } catch (err) {
    console.error('Failed to get bills: ', err);
    alert('Something went wrong');
    if (err instanceof Error) throw err;

    // fallback
    throw new Error('Failed to fetch bills');
  }
};

export const addBill = async (newBill: NewBill): Promise<Bill> => {
  try {
    const { data } = await axios.post<Bill>(
      'http://localhost:3000/bills/add-bill',
      newBill,
    );
    return data;
  } catch (err) {
    console.error('Failed to add bill: ', err);
    alert('Something went wrong');
    if (err instanceof Error) throw err;

    // fallback
    throw new Error('Failed to add bill');
  }
};
