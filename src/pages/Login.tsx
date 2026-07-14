import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowRight, Lock, Mail, ShieldCheck, WalletCards } from 'lucide-react';

import { supabase } from '@/lib/supabase';
import { useUserStore } from '@/store/user-store';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload on submit

    try {
      setLoading(true);
      setErrorMessage('');

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) {
        console.error(error);
        setErrorMessage(error.message);
        return;
      }

      const { data: profile } = await axios.get(
        `http://localhost:3000/users/${data.user.id}`,
      );

      if (!profile) {
        setErrorMessage('Cannot load profile');
        return;
      }

      setUser(profile); // set user to public table's data
      navigate('/dashboard'); // redirect to /dashboard
    } catch (err) {
      console.error('Login failed: ', err);
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f1] text-[#17211b]">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-[520px_1fr]">
        <main className="flex items-center justify-center px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <Link to="/" className="text-2xl font-semibold text-[#14342b]">
                Ledgerly
              </Link>
            </div>

            <div className="rounded-lg border border-[#d8e0d3] bg-white p-6 shadow-[0_20px_60px_rgba(20,52,43,0.12)] sm:p-8">
              <div className="mb-8">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#e8f0e8] px-3 py-1 text-sm font-medium text-[#1e6b5c]">
                  <Lock className="h-4 w-4" />
                  Welcome back
                </p>
                <h2 className="text-3xl font-semibold tracking-normal text-[#17211b]">
                  Log in to Ledgerly
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5f6f64]">
                  Review your monthly cash flow and pick up where you left off.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-5 rounded-lg border border-[#f2b6a8] bg-[#fff3ef] px-4 py-3 text-sm text-[#9d341f]">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#344238]"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7c8b80]" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="w-full rounded-lg border border-[#cfd8ca] bg-[#fbfcfa] px-4 py-3 pl-12 text-[#17211b] outline-none transition focus:border-[#1e6b5c] focus:ring-4 focus:ring-[#1e6b5c]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-[#344238]"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="w-full rounded-lg border border-[#cfd8ca] bg-[#fbfcfa] px-4 py-3 text-[#17211b] outline-none transition focus:border-[#1e6b5c] focus:ring-4 focus:ring-[#1e6b5c]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#14342b] px-5 py-3 font-semibold text-white transition hover:bg-[#1e6b5c] disabled:cursor-not-allowed disabled:bg-[#8aa097]"
                >
                  {loading ? 'Logging in...' : 'Log in'}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-[#5f6f64]">
                Do not have an account?{' '}
                <Link
                  to="/sign-up"
                  className="font-semibold text-[#1e6b5c] hover:text-[#14342b]"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </main>

        <section className="relative hidden overflow-hidden bg-[#14342b] px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="flex justify-end">
            <Link
              to="/sign-up"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-[#d6e5db] transition hover:border-white/50 hover:text-white"
            >
              Create account
            </Link>
          </div>

          <div className="max-w-xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-[#dfeee3]">
              <ShieldCheck className="h-4 w-4 text-[#f6c85f]" />
              Private by default
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-normal">
              See the month before it surprises you.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[#d6e5db]">
              Ledgerly keeps your income, spending, bills, and savings goals in
              one repeatable monthly rhythm.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-white/15 bg-white/10 p-5">
              <WalletCards className="h-6 w-6 text-[#f6c85f]" />
              <p className="mt-5 text-sm text-[#c6d9cd]">Cash remaining</p>
              <p className="mt-2 text-3xl font-semibold">$1,420</p>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/10 p-5">
              <p className="text-sm text-[#c6d9cd]">Bills covered</p>
              <p className="mt-2 text-3xl font-semibold">9 of 11</p>
              <div className="mt-5 h-2 rounded-full bg-white/15">
                <div className="h-2 w-4/5 rounded-full bg-[#e35d3f]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
