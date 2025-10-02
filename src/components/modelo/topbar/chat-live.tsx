"use client";

import { useState } from "react";
import { MessageCircle, Pin, Circle, Send, Image as ImageIcon, Video, Clock } from "lucide-react";
import Link from "next/link";

const mockChats = [
  {
    id: 1,
    user: "João Silva",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    lastMessage: "Oi! Você poderia enviar aquelas fotos?",
    time: "2 min",
    unread: 3,
    online: true,
    pinned: true,
    type: "text"
  },
  {
    id: 2,
    user: "Carlos Lima",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    lastMessage: "Quanto custa o pack exclusivo?",
    time: "5 min",
    unread: 1,
    online: true,
    pinned: true,
    type: "text"
  },
  {
    id: 3,
    user: "Pedro Costa",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    lastMessage: "Enviou uma foto",
    time: "10 min",
    unread: 0,
    online: false,
    pinned: false,
    type: "image"
  },
  {
    id: 4,
    user: "Rafael Oliveira",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    lastMessage: "Obrigado pelo conteúdo!",
    time: "15 min",
    unread: 0,
    online: false,
    pinned: false,
    type: "text"
  },
  {
    id: 5,
    user: "Lucas Souza",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    lastMessage: "Enviou um vídeo",
    time: "30 min",
    unread: 2,
    online: true,
    pinned: false,
    type: "video"
  }
];

export function ChatLive() {
  const [isOpen, setIsOpen] = useState(false);
  const [chats, setChats] = useState(mockChats);

  const totalUnread = chats.reduce((acc, chat) => acc + chat.unread, 0);
  const pinnedChats = chats.filter(c => c.pinned);
  const regularChats = chats.filter(c => !c.pinned);

  const togglePin = (id: number) => {
    setChats(prev => prev.map(c => c.id === id ? { ...c, pinned: !c.pinned } : c));
  };

  const getMessageIcon = (type: string) => {
    switch (type) {
      case "image": return <ImageIcon className="w-3 h-3" />;
      case "video": return <Video className="w-3 h-3" />;
      default: return null;
    }
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
      >
        <MessageCircle className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
        
        {/* Unread Badge */}
        {totalUnread > 0 && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse shadow-lg">
            {totalUnread}
          </div>
        )}

        {/* Online Indicator */}
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-14 right-0 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-96 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 overflow-hidden">
            
            {/* Header */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-blue-500/5 to-indigo-500/5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg relative">
                    <MessageCircle className="w-5 h-5 text-white" />
                    {totalUnread > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-red-600">{totalUnread}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-100">Mensagens</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {totalUnread > 0 ? `${totalUnread} não lidas` : 'Todas lidas'}
                    </p>
                  </div>
                </div>

                <Link 
                  href="/modelo/chat"
                  className="px-3 py-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
                >
                  Ver Todas
                </Link>
              </div>
            </div>

            {/* Pinned Chats */}
            {pinnedChats.length > 0 && (
              <div className="border-b border-gray-100 dark:border-gray-700">
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900/50">
                  <div className="flex items-center space-x-2">
                    <Pin className="w-3 h-3 text-red-600" />
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                      Fixadas ({pinnedChats.length})
                    </span>
                  </div>
                </div>
                {pinnedChats.map((chat) => (
                  <ChatItem key={chat.id} chat={chat} togglePin={togglePin} getMessageIcon={getMessageIcon} />
                ))}
              </div>
            )}

            {/* Regular Chats */}
            <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
              {regularChats.length === 0 ? (
                <div className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Nenhuma conversa</p>
                </div>
              ) : (
                regularChats.map((chat) => (
                  <ChatItem key={chat.id} chat={chat} togglePin={togglePin} getMessageIcon={getMessageIcon} />
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <Link 
                href="/modelo/chat"
                className="w-full flex items-center justify-center space-x-2 text-sm font-semibold text-red-600 dark:text-red-400 hover:underline"
              >
                <Send className="w-4 h-4" />
                <span>Abrir Chat Completo</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function ChatItem({ chat, togglePin, getMessageIcon }: any) {
  return (
    <Link
      href={`/modelo/chat/${chat.id}`}
      className="block p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all group"
    >
      <div className="flex items-start space-x-3">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <img
            src={chat.avatar}
            alt={chat.user}
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
              chat.unread > 0 
                ? 'text-gray-900 dark:text-gray-100' 
                : 'text-gray-700 dark:text-gray-300'
            }`}>
              {chat.user}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{chat.time}</span>
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  togglePin(chat.id);
                }}
                className={`p-1 rounded transition-colors ${
                  chat.pinned 
                    ? 'text-red-600' 
                    : 'text-gray-400 hover:text-red-600'
                }`}
              >
                <Pin className="w-3 h-3" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <p className={`text-xs truncate flex items-center space-x-1 ${
              chat.unread > 0 
                ? 'text-gray-700 dark:text-gray-300 font-medium' 
                : 'text-gray-500 dark:text-gray-400'
            }`}>
              {getMessageIcon(chat.type)}
              <span>{chat.lastMessage}</span>
            </p>
            
            {chat.unread > 0 && (
              <div className="w-5 h-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {chat.unread}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
