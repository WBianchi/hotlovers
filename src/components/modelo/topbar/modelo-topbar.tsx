"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { FaFire } from "react-icons/fa";
import { useSidebar } from "../../../contexts/sidebar-context";
import { LanguageSelector } from './language-selector';
import { NotificationsCenter } from './notifications-center';
import { ChatLive } from './chat-live';
import { ProfileDropdown } from './profile-dropdown';
import { ThemeToggle } from './theme-toggle';
import { EarningsDisplay } from './earnings-display';

export function ModeloTopbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      {/* Red accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
      
      <div className="flex items-center justify-between px-6 h-16">
        
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          {/* Menu Button */}
          <button
            onClick={toggleSidebar}
            className="relative w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-600 flex items-center justify-center transition-all hover:scale-105 group"
          >
            <Menu className="w-5 h-5" />
            {/* Red dot indicator */}
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          {/* Logo & Brand */}
          <Link href="/modelo/dashboard" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
              <FaFire className="w-5 h-5 text-white" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-black">
                <span className="text-red-600">Hot</span>
                <span className="text-gray-800 dark:text-gray-100">Lovers</span>
              </h1>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:block">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-red-600 transition-colors" />
              <input
                type="search"
                placeholder="Buscar..."
                className="w-64 pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600/50 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Right Side - COMPONENTES NOVOS */}
        <div className="flex items-center space-x-3">
          <EarningsDisplay />
          <ThemeToggle />
          <LanguageSelector />
          <NotificationsCenter />
          <ChatLive />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}
