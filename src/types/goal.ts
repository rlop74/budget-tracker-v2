export type Goal = {
  id: string | number;
  created_at: string | number | Date;
  name: string;
  current_amount: number;
  target_amount: number;
};
