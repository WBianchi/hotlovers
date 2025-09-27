"use client";

import { Crown, Shield } from "lucide-react";
import { FaFire } from "react-icons/fa";

export function AdminLogo() {
  return (
    <div className="flex items-center space-x-3 group cursor-pointer">
      {/* Icon Container */}
      <div className="relative">
        <div className="w-10 h-10 bg-hotlovers-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <Crown className="w-5 h-5 text-white" />
        </div>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-hotlovers-gradient rounded-xl opacity-75 animate-ping group-hover:animate-pulse"></div>
        
        {/* Admin Badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
          <Shield className="w-2 h-2 text-white" />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <span className="text-xl font-black bg-hotlovers-gradient bg-clip-text text-transparent">
            HotLovers
          </span>
          <FaFire className="w-4 h-4 text-hotlovers-red animate-pulse" />
        </div>
        <span className="text-xs font-medium text-gray-500 tracking-wide uppercase">
          Admin Panel
        </span>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-hotlovers-red/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}