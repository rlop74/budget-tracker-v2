import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from '@/routes/router';
import { supabase } from '@/lib/supabase';
import { useUserStore } from '@/store/user-store';
import { useAuthStore } from '@/store/authStore';
import { fetchUser } from '@/services/user-profile-api';
import { useThemeStore } from '@/store/theme-store';

function App() {
  const theme = useThemeStore((state) => state.theme);
  const setUser = useUserStore((state) => state.setUser);
  const setIsAuthLoading = useAuthStore((state) => state.setIsAuthLoading);

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          alert(`Something went wrong: ${error.message}`);
          return;
        }

        if (!data.session) {
          return;
        }

        const profile = await fetchUser(data.session.user.id);
        setUser(profile); // set user to public table's data
      } catch (err) {
        if (err instanceof Error) {
          console.error('Failed to load session ', err.message);
        } else {
          console.error('Failed to load session ', err);
        }

        alert('Something went wrong');
      } finally {
        setIsAuthLoading(false);
      }
    };

    // Run the async session check without returning its Promise from useEffect.
    // useEffect callbacks cannot be async, so run the async session check here.
    void getSession();
  }, [setIsAuthLoading, setUser]);

  // this is for Zustand to be able to add <html class="dark">
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;
