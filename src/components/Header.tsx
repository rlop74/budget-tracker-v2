import { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { useUserStore } from '@/store/user-store';

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const user = useUserStore((state) => state.user);

  return (
    <header className="w-full">
      <div className="flex justify-between px-5 py-6">
        {/* left side, greeting */}
        <div className="">
          <h1 className="text-4xl font-bold text-text-light dark:text-text-dark">
            Welcome back, {user?.first_name || 'User'}!
          </h1>
          <p className="mt-1 text-muted-light dark:text-muted-dark">
            It's the best time to manage your finances
          </p>
        </div>

        {/* right side, buttons */}
        <div className="flex items-center gap-1">
          <div
            className={`flex items-center rounded-full border p-3 cursor-pointer select-none border-border-light dark:border-border-dark hover:bg-primary-hover/50 text-text-light dark:text-text-dark hover:text-primary-hover transition-all duration-300 ease-in-out ${
              isSearchOpen ? 'w-74 gap-1' : 'w-12'
            }`}
          >
            <Search onClick={() => setIsSearchOpen(!isSearchOpen)} />
            <input
              type="text"
              placeholder="Search transactions, accounts..."
              className={`rounded-full outline-none transition-all duration-350 ease-in-out bg-transparent text-text-light placeholder:text-muted-light dark:text-text-dark dark:placeholder:text-muted-dark
                  ${isSearchOpen ? 'w-full' : 'w-0'}`}
            />
          </div>

          <button className="flex items-center rounded-full border p-3 cursor-pointer border-border-light dark:border-border-dark text-text-light dark:text-text-dark hover:bg-primary-hover/50 hover:text-primary-hover transition-all duration-300 ease-in-out">
            <Bell />
          </button>

          <button className="flex items-center gap-3 rounded-full border border-border-light dark:border-border-dark px-4 py-2 cursor-pointer transition hover:border-primary-hover hover:shadow-sm text-text-light dark:text-text-dark">
            <img
              src={user?.img}
              alt="User avatar"
              className="h-10 w-10 rounded-full"
            />
            <div className="hidden text-left sm:block">
              <div className="text-sm font-medium">
                {user?.first_name} {user?.last_name}
              </div>
              <div className="text-xs text-muted-light dark:text-muted-dark">
                {user?.email}
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
