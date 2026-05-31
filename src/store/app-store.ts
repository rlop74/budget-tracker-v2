import { create } from 'zustand';

type AppTransaction = {
  id?: string | number;
  created_at: string | number | Date;
  amount?: string | number | null;
  type?: string | null;
  name?: string;
  category?: string;
};

type AppStore = {
  allTransactions: AppTransaction[];
  loading: boolean;
  setAllTransactions: (transactionArr: AppTransaction[]) => void;
  setLoading: (bool: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  allTransactions: [],
  loading: true,
  setAllTransactions: (transactionsArr) =>
    set({
      allTransactions: transactionsArr,
    }),
  setLoading: (bool) => set({ loading: bool }),
}));
