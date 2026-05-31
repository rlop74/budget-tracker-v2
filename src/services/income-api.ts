import axios from 'axios';

export const updateIncome = async (
  amount: string | number,
  id: string | number,
): Promise<void> => {
  try {
    // update income
    await axios.post(`http://localhost:3000/users/update-income/${id}`, {
      updatedIncome: amount,
    });
  } catch (err) {
    alert('Something went wrong');

    if (err instanceof Error) throw err;

    throw new Error('Failed to update income');
  }
};
