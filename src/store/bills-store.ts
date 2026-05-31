import { create } from 'zustand';
import type { Bill } from '@/types/bill';

type BillsStore = {
  totalBill: number;
  allBills: Bill[];
  setTotalBills: (billsArr: Bill[]) => void;
  setAllBills: (billsArr: Bill[]) => void;
  addNewBill: (newBillObj: Bill) => void;
  updateBill: (updatedBill: Bill) => void;
};

export const useBills = create<BillsStore>((set) => ({
  totalBill: 0,
  allBills: [],
  setTotalBills: (billsArr) =>
    set({
      totalBill: billsArr.reduce((acc, curr) => acc + Number(curr.amount), 0),
    }),
  setAllBills: (billsArr) =>
    set({
      allBills: billsArr,
    }),
  addNewBill: (newBillObj) =>
    set((state) => ({
      allBills: [...state.allBills, newBillObj],
      totalBill: Number(state.totalBill) + Number(newBillObj.amount),
    })),
  updateBill: (updatedBill) => {
    set((state) => ({
      allBills: [
        ...state.allBills.filter((bill) => bill.id !== updatedBill.id),
        updatedBill,
      ],
    }));
  },
}));
