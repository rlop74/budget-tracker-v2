import { NavLink, useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import {
  ArrowLeftRight,
  LayoutDashboard,
  Wallet,
  Goal,
  HandCoins,
  ChartNoAxesCombined,
  Settings,
  Vault,
  MessageCircleQuestionMark,
  LogOut,
  Sun,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';

import { useThemeStore } from '@/store/theme-store';
import { supabase } from '@/lib/supabase';
import { useUserStore } from '@/store/user-store';
import { useAccountDataStore } from '@/store/accountDataStore';

type SidebarProps = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  theme: string;
};

export const Sidebar = ({
  showSidebar,
  setShowSidebar,
  theme,
}: SidebarProps) => {
  const menuItems = [
    {
      icon: <LayoutDashboard size={20} />,
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      icon: <ArrowLeftRight size={20} />,
      name: 'Transactions',
      path: '/transactions',
    },
    { icon: <Wallet size={20} />, name: 'Bills', path: '/bills' },
    { icon: <Goal size={20} />, name: 'Goals', path: '/goals' },
    { icon: <HandCoins size={20} />, name: 'Budget', path: '/budget' },
    {
      icon: <ChartNoAxesCombined size={20} />,
      name: 'Analytics',
      path: '/analytics',
    },
    { icon: <Settings size={20} />, name: 'Settings', path: '/settings' },
  ];

  const changeTheme = useThemeStore((state) => state.changeTheme);
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const setAllTransactions = useAccountDataStore(
    (state) => state.setAllTransactions,
  );
  const setIsAccountDataLoading = useAccountDataStore(
    (state) => state.setIsAccountDataLoading,
  );

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error(error);
        return;
      }

      setUser(null);
      setAllTransactions([]);
      setIsAccountDataLoading(true);
      navigate('/login', { replace: true });
    } catch (error) {
      console.error('Logout failed: ', error);
      alert('Something went wrong');
    }
  };

  return (
    <>
      {/* sidebar */}
      <div
        className={`flex flex-col justify-between list-none bg-gray-900 text-gray-100 h-auto transition-all duration-300 ease-in-out ${
          showSidebar ? 'w-[15%] translate-x-0 p-5' : 'w-0 -translate-x-50 p-0'
        }`}
      >
        <div className="flex flex-col">
          {/* logo */}
          <div className="flex items-center gap-3 mb-10">
            <Vault size={28} className="text-violet-400" />
            <span className="text-xl font-semibold tracking-tight">
              Budget Tracker
            </span>
          </div>

          {/* navigation */}
          <nav className="space-y-1">
            {menuItems.map((item) => {
              return (
                <NavLink
                  to={item.path}
                  key={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-violet-600 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* bottom section */}
        <div className="flex flex-col text-m gap-15 border-t border-gray-700 pt-10">
          <div>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-violet-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              <MessageCircleQuestionMark size={20} />
              Help
            </NavLink>
            <button
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200"
              onClick={handleLogout}
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>

          {/* theme toggle */}
          <div className="flex items-center gap-2 pb-4">
            <button
              onClick={() => changeTheme('light')}
              className={`p-2 rounded-lg transition-all ${
                theme === 'light'
                  ? 'bg-gray-700 text-yellow-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sun size={18} />
            </button>
            <button
              onClick={() => changeTheme('dark')}
              className={`p-2 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'bg-gray-700 text-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Moon size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* sidebar toggle button */}
      <div className="inline">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="p-3 bg-gray-800/80 text-white rounded-xl shadow-lg hover:bg-gray-700! transition-all"
        >
          {showSidebar ? (
            <PanelLeftClose size={20} />
          ) : (
            <PanelLeftOpen size={20} />
          )}
        </button>
      </div>
    </>
  );
};
