import { apiClient } from '@/lib/apiClient';

export const updateIncome = async (
  amount: string | number,
  id: string | number,
): Promise<void> => {
  try {
    // update income
    await apiClient.post(`/users/update-income/${id}`, {
      updatedIncome: amount,
    });
  } catch (err) {
    alert('Something went wrong');

    if (err instanceof Error) throw err;

    throw new Error('Failed to update income');
  }
};
