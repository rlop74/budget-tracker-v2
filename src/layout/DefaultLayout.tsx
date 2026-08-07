import { useState } from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from '@/components/Sidebar';
import { useThemeStore } from '@/store/theme-store';
import { useAccountInfo } from '@/hooks/useAccountInfo';

export const DefaultLayout = () => {
  const theme = useThemeStore((state) => state.theme);
  const [showSidebar, setShowSidebar] = useState(true);
  const { isAccountDataLoading } = useAccountInfo();

  return (
    <div
      className={`flex h-screen transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-bg-dark text-text-dark'
          : 'bg-[var(--color-bg-light)] text-[var(--color-text-light)]'
      }`}
    >
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        theme={theme}
      />
      <div className="flex-1 overflow-y-auto">
        {isAccountDataLoading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div
                  className={`animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 ${
                    theme === 'dark' ? 'border-primary-hover' : 'border-primary'
                  }`}
                ></div>
              </div>
              <p
                className={`text-lg font-medium ${
                  theme === 'dark' ? 'text-text-dark' : 'text-text-light'
                }`}
              >
                Loading...
              </p>
              <p
                className={`text-sm mt-2 ${
                  theme === 'dark' ? 'text-muted-dark' : 'text-muted-light'
                }`}
              >
                Please wait while we prepare everything
              </p>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};
