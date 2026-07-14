// ask user to login, if no active session
// should not allow user to view protected components without matching creds
// redirect to signup or back to login page

import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '@/store/authStore';
import { useUserStore } from '@/store/user-store';

export const Protected = () => {
  const loading = useAuthStore((state) => state.isAuthLoading);
  const user = useUserStore((state) => state.user);

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

  return <Outlet />;
};
