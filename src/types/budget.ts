export type BudgetCategory = {
  id: string | number;
  created_at?: string | number | Date;
  name: string;
  spent: string | number;
  budget: string | number;
  icon?: string;
  color?: string;
};
