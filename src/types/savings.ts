export type NewSavings = {
  user_id?: string | number;
  amount: string | number;
};

export type Savings = NewSavings & {
  id?: string | number;
  created_at: string | number | Date;
  name?: string;
  type?: string;
};
