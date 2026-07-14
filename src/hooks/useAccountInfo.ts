import { useEffect } from 'react';
import { useExpenses } from '@/store/expenses-store';
import { useSavings } from '@/store/savings-store';
import { fetchExpenses } from '@/services/expenses-api';
import { fetchSavings } from '@/services/savings-api';
import { useAccountDataStore } from '@/store/accountDataStore';
import { useUserStore } from '@/store/user-store';
import { useBills } from '@/store/bills-store';
import { fetchBills } from '@/services/bills-api';
import { useGoals } from '@/store/goals-store';
import { fetchGoals } from '@/services/goals-api';
import { useBudget } from '@/store/budget-store';
import { fetchBudget } from '@/services/budget-api';

export const useAccountInfo = () => {
  const user = useUserStore((state) => state.user);
  const isAccountDataLoading = useAccountDataStore(
    (state) => state.isAccountDataLoading,
  );
  const setIsAccountDataLoading = useAccountDataStore(
    (state) => state.setIsAccountDataLoading,
  );
  const setAllExpenses = useExpenses((state) => state.setAllExpenses);
  const setTotalExpense = useExpenses((state) => state.setTotalExpense);
  const setSavings = useSavings((state) => state.setSavings);
  const setTotalSavings = useSavings((state) => state.setTotalSavings);
  const allTransactions = useAccountDataStore((state) => state.allTransactions);
  const setAllTransactions = useAccountDataStore(
    (state) => state.setAllTransactions,
  );
  const setAllBills = useBills((state) => state.setAllBills);
  const setTotalBills = useBills((state) => state.setTotalBills);
  const setAllGoals = useGoals((state) => state.setAllGoals);
  const setAllBudgets = useBudget((state) => state.setAllBudgets);

  useEffect(() => {
    if (!user) return;

    const loadAccountData = async (userId: string | number) => {
      try {
        setIsAccountDataLoading(true);

        // fetch account data
        const savingsData = await fetchSavings(userId);
        const expenseData = await fetchExpenses(userId);
        const billsData = await fetchBills();
        const goalsData = await fetchGoals();
        const budgetData = await fetchBudget();

        // populate stores
        setAllExpenses(expenseData);
        setTotalExpense(expenseData);
        setTotalSavings(savingsData);
        setSavings(savingsData);
        setAllTransactions([...expenseData, ...savingsData]);
        setAllBills(billsData);
        setTotalBills(billsData);
        setAllGoals(goalsData);
        setAllBudgets(budgetData);
      } catch (err) {
        console.error('Failed to load account info: ', err);
        alert('Something went wrong');
      } finally {
        setIsAccountDataLoading(false);
      }
    };

    // useEffect callbacks cannot be async, so run the async loader without returning its Promise.
    void loadAccountData(user.id);
  }, [
    user,
    setAllExpenses,
    setTotalExpense,
    setTotalSavings,
    setSavings,
    setAllTransactions,
    setAllBills,
    setTotalBills,
    setAllGoals,
    setAllBudgets,
    setIsAccountDataLoading,
  ]);

  return { allTransactions, isAccountDataLoading, user };
};
