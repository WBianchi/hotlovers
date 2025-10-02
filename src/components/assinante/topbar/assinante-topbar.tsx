"use client";

import Link from "next/link";
import { Search, Heart, ShoppingBag, Bell, MessageCircle, Image, Play, Package, Gift } from "lucide-react";
import { FaFire } from "react-icons/fa";
import { AssinanteProfile } from "./assinante-profile";
import { ThemeToggle } from "./theme-toggle";

export function AssinanteTopbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      {/* Red accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
      
      <div className="flex items-center justify-between px-6 h-16">
        
        {/* Logo */}
        <Link href="/assinante/dashboard" className="flex items-center space-x-3 group">
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

        {/* Navigation Menu */}
        <nav className="hidden xl:flex items-center space-x-1 ml-8">
          <Link
            href="/assinante/fotos"
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 font-bold transition-colors flex items-center space-x-2"
          >
            <Image className="w-4 h-4" />
            <span>Fotos</span>
          </Link>
          <Link
            href="/assinante/videos"
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 font-bold transition-colors flex items-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>Vídeos</span>
          </Link>
          <Link
            href="/assinante/packs"
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 font-bold transition-colors flex items-center space-x-2"
          >
            <Package className="w-4 h-4" />
            <span>Packs</span>
          </Link>
          <Link
            href="/assinante/chat-ao-vivo"
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 font-bold transition-colors flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat</span>
          </Link>
          <Link
            href="/assinante/gorjetas"
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500 font-bold transition-colors flex items-center space-x-2"
          >
            <Gift className="w-4 h-4" />
            <span>Gorjetas</span>
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8 hidden lg:block">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
            <input
              type="search"
              placeholder="Buscar modelos, conteúdo..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600/50 transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Favoritos */}
          <Link
            href="/assinante/favoritos"
            className="relative p-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 group"
          >
            <Heart className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-600 transition-colors" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              3
            </div>
          </Link>

          {/* Compras */}
          <Link
            href="/assinante/compras"
            className="relative p-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 group"
          >
            <ShoppingBag className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-600 transition-colors" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
              5
            </div>
          </Link>

          {/* Notificações */}
          <button className="relative p-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 group">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-600 transition-colors" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
              2
            </div>
          </button>

          {/* Profile Dropdown */}
          <AssinanteProfile />
        </div>
      </div>
    </header>
  );
}
