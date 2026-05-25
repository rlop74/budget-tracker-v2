// ask user to login, if no active session
// should not allow user to view protected components without matching creds
// redirect to signup or back to login page

import { Navigate, Outlet } from 'react-router-dom';
import { useAccountInfo } from '@/hooks/getAccountInfo';

export const Protected = () => {
  const { allTransactions, loading, user } = useAccountInfo();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-4xl">
        Loading...{' '}
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet context={{ allTransactions }} />;
};
