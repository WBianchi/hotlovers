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
    <div className="p-4 border-t border-gray-100">
      {/* System Status */}
      {isExpanded ? (
        <div className="space-y-3">
          {/* Status Grid */}
          <div className="grid grid-cols-3 gap-2">
            {/* Server Status */}
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
              <Server className="w-4 h-4 text-green-500 mb-1" />
              <span className="text-xs text-gray-600">Server</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mt-0.5"></div>
            </div>

            {/* Database Status */}
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
              <Database className="w-4 h-4 text-green-500 mb-1" />
              <span className="text-xs text-gray-600">DB</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mt-0.5"></div>
            </div>

            {/* API Status */}
            <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
              <Wifi className="w-4 h-4 text-green-500 mb-1" />
              <span className="text-xs text-gray-600">API</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mt-0.5"></div>
            </div>
          </div>

          {/* Version Info */}
          <div className="flex items-center justify-between p-2 bg-hotlovers-red/5 rounded-lg border border-hotlovers-red/20">
            <div className="flex items-center space-x-2">
              <Activity className="w-3 h-3 text-hotlovers-red" />
              <span className="text-xs font-medium text-hotlovers-red">Sistema Online</span>
            </div>
            <span className="text-xs text-gray-500 font-mono">{systemStatus.version}</span>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-gray-400">
              © 2024 HotLovers
            </p>
            <p className="text-xs text-gray-400">
              Desenvolvido com 💕
            </p>
          </div>
        </div>
      ) : (
        /* Collapsed Status */
        <div className="flex flex-col items-center space-y-2">
          {/* Status Indicator */}
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <Activity className="w-4 h-4 text-green-500 animate-pulse" />
          </div>
          
          {/* Dots */}
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
            <div className="w-1 h-1 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}