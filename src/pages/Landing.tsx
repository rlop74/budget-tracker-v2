import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  PiggyBank,
  ReceiptText,
  WalletCards,
} from 'lucide-react';

const monthlyRows = [
  { label: 'Paycheck', amount: '+$2,180', color: 'text-[#1e6b5c]' },
  { label: 'Rent', amount: '-$1,450', color: 'text-[#e35d3f]' },
  { label: 'Groceries', amount: '-$284', color: 'text-[#e35d3f]' },
  { label: 'Savings', amount: '-$350', color: 'text-[#1e6b5c]' },
];

export const Landing = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f1] text-[#17211b]">
      <section className="relative min-h-[88vh] overflow-hidden px-5 py-6 sm:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-24 h-[620px] w-[1040px] -translate-x-1/2 rounded-[32px] border border-[#d8e0d3] bg-white/70 shadow-[0_40px_120px_rgba(20,52,43,0.16)] backdrop-blur-sm" />
          <div className="absolute left-1/2 top-36 h-[560px] w-[980px] -translate-x-1/2 overflow-hidden rounded-[24px] border border-[#d8e0d3] bg-[#fbfcfa] shadow-[0_30px_80px_rgba(20,52,43,0.12)]">
            <div className="flex h-14 items-center justify-between border-b border-[#d8e0d3] bg-[#14342b] px-6 text-white">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#e35d3f]" />
                <div className="h-3 w-3 rounded-full bg-[#f6c85f]" />
                <div className="h-3 w-3 rounded-full bg-[#1e6b5c]" />
              </div>
              <p className="text-sm text-[#d6e5db]">June budget review</p>
            </div>

            <div className="grid h-full grid-cols-[230px_1fr]">
              <aside className="border-r border-[#d8e0d3] bg-[#eff4ed] p-6">
                <p className="text-lg font-semibold text-[#14342b]">
                  Ledgerly
                </p>
                <div className="mt-8 space-y-3">
                  {['Dashboard', 'Transactions', 'Bills', 'Goals'].map(
                    (item, index) => (
                      <div
                        key={item}
                        className={`rounded-lg px-4 py-3 text-sm ${
                          index === 0
                            ? 'bg-[#14342b] text-white'
                            : 'bg-white text-[#5f6f64]'
                        }`}
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </aside>

              <div className="p-7">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg border border-[#d8e0d3] bg-white p-5">
                    <p className="text-sm text-[#5f6f64]">Remaining</p>
                    <p className="mt-3 text-3xl font-semibold text-[#14342b]">
                      $2,840
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#d8e0d3] bg-white p-5">
                    <p className="text-sm text-[#5f6f64]">Bills due</p>
                    <p className="mt-3 text-3xl font-semibold text-[#e35d3f]">
                      $980
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#d8e0d3] bg-white p-5">
                    <p className="text-sm text-[#5f6f64]">Savings pace</p>
                    <p className="mt-3 text-3xl font-semibold text-[#1e6b5c]">
                      72%
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-[1.2fr_0.8fr] gap-4">
                  <div className="rounded-lg border border-[#d8e0d3] bg-white p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <p className="font-semibold text-[#14342b]">
                        Money flow
                      </p>
                      <BarChart3 className="h-5 w-5 text-[#1e6b5c]" />
                    </div>
                    <div className="flex h-48 items-end gap-3">
                      {[40, 68, 52, 82, 60, 76].map((height, index) => (
                        <div
                          key={index}
                          className="flex flex-1 flex-col justify-end gap-2"
                        >
                          <div
                            className="rounded-t-md bg-[#1e6b5c]"
                            style={{ height: `${height}%` }}
                          />
                          <div
                            className="rounded-t-md bg-[#e35d3f]"
                            style={{ height: `${Math.max(22, height - 30)}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-[#d8e0d3] bg-white p-5">
                    <p className="mb-4 font-semibold text-[#14342b]">
                      Recent activity
                    </p>
                    <div className="space-y-3">
                      {monthlyRows.map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between rounded-lg bg-[#f4f7f1] px-3 py-3 text-sm"
                        >
                          <span className="text-[#5f6f64]">{row.label}</span>
                          <span className={`font-semibold ${row.color}`}>
                            {row.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="text-2xl font-semibold text-[#14342b]">
            Ledgerly
          </Link>

          <nav className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#344238] transition hover:bg-white"
            >
              Log in
            </Link>
            <Link
              to="/sign-up"
              className="rounded-full bg-[#14342b] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1e6b5c]"
            >
              Sign up
            </Link>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[76vh] max-w-6xl flex-col justify-center pb-10 pt-20">
          <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#cfd8ca] bg-white/80 px-4 py-2 text-sm font-medium text-[#1e6b5c] shadow-sm">
            <WalletCards className="h-4 w-4" />
            Personal money dashboard
          </p>
          <h1 className="max-w-3xl text-6xl font-semibold leading-none tracking-normal text-[#17211b] sm:text-7xl">
            Ledgerly
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5f54] sm:text-xl">
            Track paychecks, expenses, bills, budgets, and savings goals in one
            monthly view built for real day-to-day decisions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/sign-up"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#14342b] px-6 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(20,52,43,0.22)] transition hover:bg-[#1e6b5c]"
            >
              Start tracking
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-lg border border-[#c9d5c5] bg-white/85 px-6 py-4 font-semibold text-[#14342b] transition hover:border-[#1e6b5c] hover:text-[#1e6b5c]"
            >
              Log in
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8e0d3] bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-[#d8e0d3] p-6">
            <ReceiptText className="h-7 w-7 text-[#e35d3f]" />
            <h2 className="mt-5 text-xl font-semibold text-[#17211b]">
              Daily tracking
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5f6f64]">
              Log expenses and savings quickly, then see how each choice affects
              the month.
            </p>
          </div>

          <div className="rounded-lg border border-[#d8e0d3] p-6">
            <CalendarClock className="h-7 w-7 text-[#1e6b5c]" />
            <h2 className="mt-5 text-xl font-semibold text-[#17211b]">
              Bills in context
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5f6f64]">
              Keep planned bills visible beside income, spending, and remaining
              cash.
            </p>
          </div>

          <div className="rounded-lg border border-[#d8e0d3] p-6">
            <PiggyBank className="h-7 w-7 text-[#f6a21a]" />
            <h2 className="mt-5 text-xl font-semibold text-[#17211b]">
              Goals that update
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5f6f64]">
              Track savings goals and contributions without losing sight of
              spendable money.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
