export type NewBill = {
  name: string;
  amount: string | number;
};

export type Bill = NewBill & {
  id: string | number;
  created_at?: string | number | Date;
};
