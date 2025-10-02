"use client";

import Link from "next/link";
import { Bell, DollarSign } from "lucide-react";
import { FaFire } from "react-icons/fa";
import { AfiliadoProfile } from "./afiliado-profile";
import { ThemeToggle } from "./theme-toggle";
import { NotificationsCenter } from "./notifications-center";
import { LanguageSelector } from "./language-selector";

export function AfiliadoTopbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      {/* Red accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
      
      <div className="flex items-center justify-between px-6 h-16">
        
        {/* Logo */}
        <Link href="/afiliado/dashboard" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
            <FaFire className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black">
              <span className="text-red-600">Hot</span>
              <span className="text-gray-800 dark:text-gray-100">Lovers</span>
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-bold">Programa de Afiliados</p>
          </div>
        </Link>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* Comissões Display */}
          <Link
            href="/afiliado/comissoes"
            className="relative p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 group"
          >
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-green-600 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                <DollarSign className="w-3 h-3 text-white" />
              </div>
              <div className="hidden xl:flex xl:flex-col">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight">Comissões</p>
                <p className="text-xs font-black text-gray-800 dark:text-gray-100">R$ 1.245,80</p>
              </div>
            </div>
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Language Selector */}
          <LanguageSelector />

          {/* Notificações */}
          <NotificationsCenter />

          {/* Profile Dropdown */}
          <AfiliadoProfile />
        </div>
      </div>
    </header>
  );
}
