import { apiClient } from '@/lib/apiClient';
import type { UserProfile } from '@/types/userProfile';

export const fetchUser = async (id: string | number): Promise<UserProfile> => {
  try {
    const { data } = await apiClient.get(`/users/${id}`);
    return data;
  } catch (err) {
    alert('Something went wrong');
    if (err instanceof Error) throw err;
    throw new Error('Failed to fetch user');
  }
};
