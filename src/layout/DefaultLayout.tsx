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
          ? 'bg-gray-950 text-gray-100' // Main recommendation
          : 'bg-gray-50 text-gray-900' // Light mode (add this for consistency)
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
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-violet-500"></div>
              </div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Loading...
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
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
