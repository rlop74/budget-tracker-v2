import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from '@/routes/router';
import { supabase } from '@/lib/supabase';
// import axios from "axios";
import { useUserStore } from '@/store/user-store';
import { useAppStore } from '@/store/app-store';
import { fetchUser } from './services/user-profile-api';

function App() {
  const setUser = useUserStore((state) => state.setUser);
  const setLoading = useAppStore((state) => state.setLoading);

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
        setLoading(false);
      }
    };

    // Run the async session check without returning its Promise from useEffect.
    // useEffect callbacks cannot be async, so run the async session check here.
    void getSession();
  }, [setLoading, setUser]);

  return <RouterProvider router={router} />;
}

export default App;
