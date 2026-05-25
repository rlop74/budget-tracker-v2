export type UserProfile = {
  id: string | number;
  created_at?: string | number | Date;
  auth_id: string | number;
  first_name?: string;
  last_name?: string;
  income: number;
  email?: string;
  img: string;
};
