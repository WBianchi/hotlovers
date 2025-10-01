"use client";

import { Search, Circle } from "lucide-react";
import { useState } from "react";

export function ChatSidebar() {
  const [selectedChat, setSelectedChat] = useState("1");

  const conversas = [
    {
      id: "1",
      modelo: "Larissa Silva",
      assinante: "João Santos",
      ultimaMensagem: "Acabei de enviar as fotos...",
      timestamp: "Agora",
      online: true,
      naoLidas: 3
    },
    {
      id: "2",
      modelo: "Amanda Fire",
      assinante: "Carlos Lima",
      ultimaMensagem: "Quanto custa o pack?",
      timestamp: "2 min",
      online: true,
      naoLidas: 1
    },
    {
      id: "3",
      modelo: "Juliana Hot",
      assinante: "Pedro Costa",
      ultimaMensagem: "Obrigado pelo conteúdo!",
      timestamp: "15 min",
      online: false,
      naoLidas: 0
    },
    {
      id: "4",
      modelo: "Larissa Silva",
      assinante: "Ricardo Alves",
      ultimaMensagem: "Aceita PIX?",
      timestamp: "1h",
      online: true,
      naoLidas: 2
    }
  ];

  return (
    <div className="lg:col-span-1 bg-card border border-border rounded-xl flex flex-col overflow-hidden">
      {/* Search */}
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar conversas..."
            className="w-full pl-10 pr-4 py-2 bg-muted border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-hotlovers-red"
          />
        </div>
      </div>

      {/* Lista de Conversas */}
      <div className="flex-1 overflow-y-auto">
        {conversas.map((conversa) => (
          <button
            key={conversa.id}
            onClick={() => setSelectedChat(conversa.id)}
            className={`w-full p-4 flex items-start space-x-3 hover:bg-muted/50 transition-colors border-b border-border ${
              selectedChat === conversa.id ? "bg-muted" : ""
            }`}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-hotlovers-red to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                {conversa.modelo[0]}
              </div>
              {conversa.online && (
                <Circle className="absolute -bottom-0.5 -right-0.5 w-3 h-3 fill-green-500 text-green-500" />
              )}
            </div>

            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-bold text-foreground truncate">
                  {conversa.modelo} ↔ {conversa.assinante}
                </p>
                <span className="text-xs text-muted-foreground">{conversa.timestamp}</span>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                {conversa.ultimaMensagem}
              </p>
            </div>

            {conversa.naoLidas > 0 && (
              <div className="w-5 h-5 bg-hotlovers-red rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">{conversa.naoLidas}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
