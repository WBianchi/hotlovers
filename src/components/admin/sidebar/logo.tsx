"use client";

import { FaFire, FaHeart } from "react-icons/fa";

interface SidebarLogoProps {
  isExpanded: boolean;
}

export function SidebarLogo({ isExpanded }: SidebarLogoProps) {
  return (
    <div className="p-6 border-b border-gray-100 dark:border-gray-700 dark:border-gray-700">
      <div className="flex items-center space-x-3 group cursor-pointer">
        {/* Logo Icon */}
        <div className="relative">
          <div className="w-12 h-12 bg-hotlovers-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <FaFire className="w-6 h-6 text-white animate-pulse" />
          </div>
          
          {/* Pulse effect */}
          <div className="absolute inset-0 bg-hotlovers-gradient rounded-2xl opacity-75 animate-ping group-hover:animate-pulse"></div>
          
          {/* Admin Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 dark:border-gray-800">
            <div className="w-2 h-2 bg-white dark:bg-gray-800 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Text */}
        {isExpanded && (
          <div className="flex flex-col animate-in slide-in-from-left duration-200">
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-black">
                <span className="text-hotlovers-red">Hot</span>
                <span className="text-gray-800 dark:text-gray-100">Lovers</span>
              </span>
              <FaFire className="w-5 h-5 text-hotlovers-red animate-bounce" />
            </div>
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 dark:text-gray-400 tracking-wide uppercase">
              Painel Administrativo
            </span>
          </div>
        )}
      </div>
    </div>
  );
}