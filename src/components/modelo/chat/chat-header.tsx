"use client";

import { Phone, Video, MoreVertical, DollarSign, Info } from "lucide-react";

export function ChatHeader() {
  const chatUser = {
    nome: "João Silva",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    online: true,
    tipo: "Premium",
    totalGasto: 450.00
  };

  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="relative">
            <img
              src={chatUser.avatar}
              alt={chatUser.nome}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-red-600/20"
            />
            {chatUser.online && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
            )}
          </div>
          
          <div>
            <div className="flex items-center space-x-2">
              <p className="font-bold text-gray-800 dark:text-gray-100">{chatUser.nome}</p>
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 font-bold uppercase">
                {chatUser.tipo}
              </span>
            </div>
            <p className="text-xs text-green-600 dark:text-green-400 flex items-center space-x-1 mt-0.5">
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
              <span>Online • Digitando...</span>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <div className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-xl">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">R$ {chatUser.totalGasto.toFixed(2)}</span>
            </div>
          </div>
          
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Ligar">
            <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          
          <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors group" title="Videochamada">
            <Video className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Informações">
            <Info className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
