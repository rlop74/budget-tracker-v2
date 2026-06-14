import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, ShieldCheck, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    try {
      setIsSubmitting(true);
      setErrorMessage('');
      setSuccessMessage('');

      const { data, error } = await supabase.auth.signUp({
        email: trimmedEmail,
        password,
        options: {
          data: {
            first_name: trimmedFirstName,
            last_name: trimmedLastName,
          },
        },
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setSuccessMessage(
        `Account for ${data.user?.email ?? trimmedEmail} has been created. Check your email for the confirmation link.`,
      );
      setPassword('');
    } catch (err) {
      console.error('Sign up failed: ', err);
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f1] text-[#17211b]">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-[1fr_520px]">
        <section className="relative hidden overflow-hidden bg-[#14342b] px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between">
          <Link to="/" className="text-2xl font-semibold tracking-normal">
            Ledgerly
          </Link>

          <div className="relative z-10 max-w-xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-[#dfeee3]">
              <ShieldCheck className="h-4 w-4 text-[#f6c85f]" />
              Private monthly money tracking
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-normal">
              Start with one clear view of your money.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[#d6e5db]">
              Track paychecks, expenses, bills, budgets, and savings goals
              without turning your budget into accounting work.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-white/15 bg-white/10 p-5">
              <p className="text-sm text-[#c6d9cd]">Monthly balance</p>
              <p className="mt-3 text-3xl font-semibold">$2,840</p>
              <div className="mt-5 h-2 rounded-full bg-white/15">
                <div className="h-2 w-2/3 rounded-full bg-[#f6c85f]" />
              </div>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/10 p-5">
              <p className="text-sm text-[#c6d9cd]">Budget status</p>
              <p className="mt-3 text-3xl font-semibold">78%</p>
              <p className="mt-5 text-sm text-[#d6e5db]">
                Groceries and bills are on pace.
              </p>
            </div>
          </div>
        </section>

        <main className="flex items-center justify-center px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <Link to="/" className="text-2xl font-semibold text-[#14342b]">
                Ledgerly
              </Link>
            </div>

            <div className="rounded-lg border border-[#d8e0d3] bg-white p-6 shadow-[0_20px_60px_rgba(20,52,43,0.12)] sm:p-8">
              <div className="mb-8">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#e8f0e8] px-3 py-1 text-sm font-medium text-[#1e6b5c]">
                  <User className="h-4 w-4" />
                  Create account
                </p>
                <h2 className="text-3xl font-semibold tracking-normal text-[#17211b]">
                  Sign up for Ledgerly
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5f6f64]">
                  Build a monthly view around the money you actually manage.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-5 rounded-lg border border-[#f2b6a8] bg-[#fff3ef] px-4 py-3 text-sm text-[#9d341f]">
                  {errorMessage}
                </div>
              )}

              {successMessage && (
                <div className="mb-5 flex gap-3 rounded-lg border border-[#b7dbc4] bg-[#edf8f0] px-4 py-3 text-sm text-[#245b37]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-medium text-[#344238]"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Russell"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      autoComplete="given-name"
                      className="w-full rounded-lg border border-[#cfd8ca] bg-[#fbfcfa] px-4 py-3 text-[#17211b] outline-none transition focus:border-[#1e6b5c] focus:ring-4 focus:ring-[#1e6b5c]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-medium text-[#344238]"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Lopez"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      autoComplete="family-name"
                      className="w-full rounded-lg border border-[#cfd8ca] bg-[#fbfcfa] px-4 py-3 text-[#17211b] outline-none transition focus:border-[#1e6b5c] focus:ring-4 focus:ring-[#1e6b5c]/10"
                    />
                  </div>
                </div>

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
                    placeholder="At least 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    autoComplete="new-password"
                    className="w-full rounded-lg border border-[#cfd8ca] bg-[#fbfcfa] px-4 py-3 text-[#17211b] outline-none transition focus:border-[#1e6b5c] focus:ring-4 focus:ring-[#1e6b5c]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#14342b] px-5 py-3 font-semibold text-white transition hover:bg-[#1e6b5c] disabled:cursor-not-allowed disabled:bg-[#8aa097]"
                >
                  {isSubmitting ? 'Creating account...' : 'Create account'}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-[#5f6f64]">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-semibold text-[#1e6b5c] hover:text-[#14342b]"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
