"use client";

import { Activity, Wifi, WifiOff, Database, Server } from "lucide-react";

interface SidebarFooterProps {
  isExpanded: boolean;
}

export function SidebarFooter({ isExpanded }: SidebarFooterProps) {
  const systemStatus = {
    server: "online",
    database: "online", 
    api: "online",
    version: "v2.1.0"
  };

  return (
    <div className="p-4 border-t border-gray-100 dark:border-gray-700">
      {/* System Status */}
      {isExpanded ? (
        <div className="space-y-3">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              © 2024 HotLovers
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Desenvolvido com 💕
            </p>
          </div>
        </div>
      ) : (
        /* Collapsed - Nothing */
        <div className="flex flex-col items-center space-y-2">
          <div className="w-1 h-1 bg-hotlovers-red rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
}