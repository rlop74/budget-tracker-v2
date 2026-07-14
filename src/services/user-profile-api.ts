import axios from 'axios';
import type { UserProfile } from '@/types/userProfile';

export const fetchUser = async (id: string | number): Promise<UserProfile> => {
  try {
    const { data } = await axios.get<UserProfile>(
      `http://localhost:3000/users/${id}`,
    );
    return data;
  } catch (err) {
    alert('Something went wrong');
    if (err instanceof Error) throw err;
    throw new Error('Failed to fetch user');
  }
};
