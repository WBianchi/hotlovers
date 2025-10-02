"use client";

import { DollarSign, Heart, Image as ImageIcon, Video, Package, Check, CheckCheck } from "lucide-react";

const mockMensagens = [
  {
    id: 1,
    remetente: "assinante",
    nome: "João Silva",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    mensagem: "Oi! Tudo bem?",
    timestamp: "14:30",
    tipo: "texto",
    lida: true
  },
  {
    id: 2,
    remetente: "modelo",
    mensagem: "Oi João! Tudo ótimo e você? 😊",
    timestamp: "14:31",
    tipo: "texto",
    lida: true
  },
  {
    id: 3,
    remetente: "assinante",
    nome: "João Silva",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    mensagem: "Tem fotos novas?",
    timestamp: "14:32",
    tipo: "texto",
    lida: true
  },
  {
    id: 4,
    remetente: "modelo",
    mensagem: "Sim! Acabei de enviar 5 fotos exclusivas 📸",
    timestamp: "14:33",
    tipo: "foto",
    valor: 29.90,
    thumbnails: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop"
    ],
    lida: true
  },
  {
    id: 5,
    remetente: "sistema",
    mensagem: "💳 João Silva comprou 5 fotos por R$ 29,90",
    timestamp: "14:34",
    tipo: "transacao"
  },
  {
    id: 6,
    remetente: "sistema",
    mensagem: "💰 João Silva enviou R$ 50,00 de gorjeta",
    timestamp: "14:35",
    tipo: "gorjeta",
    valor: 50.00
  },
  {
    id: 7,
    remetente: "assinante",
    nome: "João Silva",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    mensagem: "Obrigado! Ficaram incríveis! 😍",
    timestamp: "14:36",
    tipo: "texto",
    lida: false
  }
];

export function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50 dark:bg-gray-900 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
      {mockMensagens.map((msg) => {
        // Sistema Messages
        if (msg.tipo === "transacao") {
          return (
            <div key={msg.id} className="flex justify-center">
              <div className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg flex items-center space-x-2 animate-in zoom-in duration-300">
                <DollarSign className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">{msg.mensagem}</span>
              </div>
            </div>
          );
        }

        if (msg.tipo === "gorjeta") {
          return (
            <div key={msg.id} className="flex justify-center">
              <div className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg flex items-center space-x-2 animate-in zoom-in duration-300">
                <Heart className="w-4 h-4 text-white fill-current" />
                <span className="text-sm font-bold text-white">{msg.mensagem}</span>
              </div>
            </div>
          );
        }

        const isModelo = msg.remetente === "modelo";

        return (
          <div
            key={msg.id}
            className={`flex ${isModelo ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-2 duration-300`}
          >
            <div className={`flex ${isModelo ? "flex-row-reverse" : "flex-row"} items-end space-x-2 max-w-[75%]`}>
              {/* Avatar */}
              {!isModelo && (
                <img
                  src={msg.avatar}
                  alt={msg.nome}
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0 ring-2 ring-white dark:ring-gray-800 shadow"
                />
              )}
              
              {/* Message Bubble */}
              <div className={`flex flex-col ${isModelo ? "items-end" : "items-start"} space-y-1`}>
                {!isModelo && (
                  <span className="text-xs text-gray-500 dark:text-gray-400 px-3">
                    {msg.nome} • {msg.timestamp}
                  </span>
                )}
                
                <div
                  className={`px-4 py-3 rounded-2xl shadow-sm ${
                    isModelo
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white rounded-br-none"
                      : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.mensagem}</p>
                  
                  {/* Photo Thumbnails */}
                  {msg.tipo === "foto" && msg.thumbnails && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {msg.thumbnails.map((thumb, idx) => (
                        <img
                          key={idx}
                          src={thumb}
                          alt="Foto"
                          className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:scale-110 transition-transform shadow-md"
                        />
                      ))}
                      {msg.valor && (
                        <div className="flex items-center space-x-2 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                          <DollarSign className="w-4 h-4" />
                          <span className="text-sm font-bold">R$ {msg.valor.toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Read Status */}
                {isModelo && (
                  <div className="flex items-center space-x-1 px-3">
                    <span className="text-xs text-gray-400 dark:text-gray-500">{msg.timestamp}</span>
                    {msg.lida ? (
                      <CheckCheck className="w-3 h-3 text-blue-500" />
                    ) : (
                      <Check className="w-3 h-3 text-gray-400" />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
