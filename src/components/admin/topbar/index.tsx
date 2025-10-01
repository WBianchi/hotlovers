"use client";

import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSelector } from "./language-selector";
import { NotificationCenter } from "./notification-center";
import { ProfileDropdown } from "./profile-dropdown";

export function AdminTopbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm transition-colors">
      <div className="flex items-center justify-between px-6 h-16">
        
        {/* Left Side - Empty for alignment */}
        <div className="flex items-center space-x-4">
        </div>

        {/* Right Side - Controls */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <LanguageSelector />
          <NotificationCenter />
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}