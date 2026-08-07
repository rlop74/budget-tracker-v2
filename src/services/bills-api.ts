import { apiClient } from '@/lib/apiClient';
import type { NewBill, Bill } from '@/types/bill';

export const fetchBills = async (): Promise<Bill[]> => {
  try {
    const { data } = await apiClient.get<Bill[]>('/bills');
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
    const { data } = await apiClient.post<Bill>('/bills/add-bill', newBill);
    return data;
  } catch (err) {
    console.error('Failed to add bill: ', err);
    alert('Something went wrong');
    if (err instanceof Error) throw err;

    // fallback
    throw new Error('Failed to add bill');
  }
};

export const deleteBill = async (id: string | number): Promise<void> => {
  await apiClient.delete(`/bills/delete-bill/${id}`);
};

export const editBill = async (
  id: string | number,
  billToEdit: Bill,
): Promise<Bill> => {
  const { data } = await apiClient.post<Bill>(
    `/bills/edit-bill/${id}`,
    billToEdit,
  );
  return data;
};
