"use client";

import { Search, Filter, Pin, Circle, Image, Video } from "lucide-react";
import { useState } from "react";

const mockConversas = [
  {
    id: 1,
    nome: "João Silva",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    ultimaMensagem: "Oi! Você poderia enviar aquelas fotos?",
    timestamp: "2 min",
    naoLidas: 3,
    online: true,
    pinned: true,
    tipo: "premium"
  },
  {
    id: 2,
    nome: "Carlos Lima",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    ultimaMensagem: "Quanto custa o pack exclusivo?",
    timestamp: "5 min",
    naoLidas: 1,
    online: true,
    pinned: true,
    tipo: "vip"
  },
  {
    id: 3,
    nome: "Pedro Costa",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    ultimaMensagem: "Obrigado pelo conteúdo!",
    timestamp: "10 min",
    naoLidas: 0,
    online: false,
    pinned: false,
    tipo: "basico"
  },
  {
    id: 4,
    nome: "Rafael Oliveira",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    ultimaMensagem: "Enviou uma foto",
    timestamp: "15 min",
    naoLidas: 0,
    online: true,
    pinned: false,
    tipo: "premium"
  },
  {
    id: 5,
    nome: "Lucas Souza",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    ultimaMensagem: "Quando vai ter conteúdo novo?",
    timestamp: "30 min",
    naoLidas: 2,
    online: false,
    pinned: false,
    tipo: "vip"
  }
];

export function ChatSidebar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChat, setSelectedChat] = useState(1);

  const pinnedChats = mockConversas.filter(c => c.pinned);
  const regularChats = mockConversas.filter(c => !c.pinned);

  const getTipoBadge = (tipo: string) => {
    if (tipo === "premium") return "bg-red-100 dark:bg-red-900/30 text-red-600";
    if (tipo === "vip") return "bg-purple-100 dark:bg-purple-900/30 text-purple-600";
    return "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400";
  };

  return (
    <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-black text-gray-800 dark:text-gray-100 mb-4">Conversas</h2>
        
        {/* Search */}
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="search"
            placeholder="Buscar conversas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition-all"
          />
        </div>

        {/* Filter */}
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all text-gray-700 dark:text-gray-300 font-semibold">
          <Filter className="w-4 h-4" />
          <span>Filtros</span>
        </button>
      </div>

      {/* Conversas List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        {/* Pinned */}
        {pinnedChats.length > 0 && (
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center space-x-2">
                <Pin className="w-3 h-3 text-red-600" />
                <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">Fixadas</span>
              </div>
            </div>
            {pinnedChats.map((chat) => (
              <ConversaItem 
                key={chat.id} 
                chat={chat} 
                isSelected={selectedChat === chat.id}
                onClick={() => setSelectedChat(chat.id)}
                getTipoBadge={getTipoBadge}
              />
            ))}
          </div>
        )}

        {/* Regular */}
        <div>
          {regularChats.map((chat) => (
            <ConversaItem 
              key={chat.id} 
              chat={chat} 
              isSelected={selectedChat === chat.id}
              onClick={() => setSelectedChat(chat.id)}
              getTipoBadge={getTipoBadge}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ConversaItem({ chat, isSelected, onClick, getTipoBadge }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all text-left ${
        isSelected ? 'bg-red-50 dark:bg-red-900/10 border-l-4 border-l-red-600' : ''
      }`}
    >
      <div className="flex items-start space-x-3">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <img
            src={chat.avatar}
            alt={chat.nome}
            className="w-12 h-12 rounded-xl object-cover ring-2 ring-white dark:ring-gray-800 shadow-md"
          />
          {chat.online && (
            <Circle className="absolute -bottom-1 -right-1 w-4 h-4 fill-green-500 text-green-500 ring-2 ring-white dark:ring-gray-800" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <p className={`text-sm font-bold truncate ${
              chat.naoLidas > 0 
                ? 'text-gray-900 dark:text-gray-100' 
                : 'text-gray-700 dark:text-gray-300'
            }`}>
              {chat.nome}
            </p>
            <span className="text-xs text-gray-400 dark:text-gray-500">{chat.timestamp}</span>
          </div>
          
          <p className={`text-xs truncate mb-2 ${
            chat.naoLidas > 0 
              ? 'text-gray-700 dark:text-gray-300 font-medium' 
              : 'text-gray-500 dark:text-gray-400'
          }`}>
            {chat.ultimaMensagem}
          </p>

          <div className="flex items-center justify-between">
            <span className={`text-xs px-2 py-0.5 rounded-full font-bold uppercase ${getTipoBadge(chat.tipo)}`}>
              {chat.tipo}
            </span>
            
            {chat.naoLidas > 0 && (
              <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {chat.naoLidas}
              </div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
