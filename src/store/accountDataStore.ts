import { create } from 'zustand';

type AppTransaction = {
  id?: string | number;
  created_at: string | number | Date;
  amount?: string | number | null;
  type?: string | null;
  name?: string;
  category?: string;
};

type AccountDataStore = {
  allTransactions: AppTransaction[];
  isAccountDataLoading: boolean;
  setAllTransactions: (transactionArr: AppTransaction[]) => void;
  setIsAccountDataLoading: (bool: boolean) => void;
};

export const useAccountDataStore = create<AccountDataStore>((set) => ({
  allTransactions: [],
  isAccountDataLoading: true,
  setAllTransactions: (transactionsArr) =>
    set({
      allTransactions: transactionsArr,
    }),
  setIsAccountDataLoading: (bool) => set({ isAccountDataLoading: bool }),
}));
