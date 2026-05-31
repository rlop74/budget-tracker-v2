export type NewExpense = {
  user_id?: string | number;
  name: string;
  amount: string | number;
  category: string;
};

export type Expense = NewExpense & {
  id?: string | number;
  created_at: string | number | Date;
  type?: string;
};
