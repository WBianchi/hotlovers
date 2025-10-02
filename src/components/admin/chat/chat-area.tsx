"use client";

import { Image, Video, Package, Heart, DollarSign, Send, Paperclip, Smile, MoreVertical, Phone, VideoIcon } from "lucide-react";

export function ChatArea() {
  const mensagens = [
    {
      id: "1",
      remetente: "assinante",
      nome: "João Santos",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      mensagem: "Oi, tudo bem?",
      timestamp: "14:30",
      tipo: "texto"
    },
    {
      id: "2",
      remetente: "modelo",
      nome: "Larissa Silva",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      mensagem: "Oi! Tudo ótimo e você?",
      timestamp: "14:31",
      tipo: "texto"
    },
    {
      id: "3",
      remetente: "assinante",
      nome: "João Santos",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      mensagem: "Tem fotos novas?",
      timestamp: "14:32",
      tipo: "texto"
    },
    {
      id: "4",
      remetente: "modelo",
      nome: "Larissa Silva",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      mensagem: "Sim! Acabei de enviar 5 fotos exclusivas 📸",
      timestamp: "14:33",
      tipo: "foto",
      valor: 29.90,
      thumbnails: [
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop"
      ]
    },
    {
      id: "5",
      remetente: "sistema",
      mensagem: "💳 Compra realizada: 5 fotos por R$ 29,90",
      timestamp: "14:34",
      tipo: "transacao"
    },
    {
      id: "6",
      remetente: "sistema",
      mensagem: "💰 Gorjeta enviada: R$ 50,00",
      timestamp: "14:35",
      tipo: "gorjeta",
      valor: 50.00
    }
  ];

  return (
    <div className="lg:col-span-3 bg-white dark:bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 dark:border-gray-700/50 dark:border-gray-700/50 flex flex-col overflow-hidden">
      {/* Chat Header - SOFISTICADO */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Avatar com Status */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Larissa"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-hotlovers-red/20"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2">
                <p className="font-bold text-gray-800 dark:text-gray-100 dark:text-gray-100">Larissa Silva</p>
                <span className="text-gray-400">↔</span>
                <p className="font-semibold text-gray-600 dark:text-gray-400 dark:text-gray-400">João Santos</p>
              </div>
              <p className="text-xs text-green-600 flex items-center space-x-1 mt-0.5">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
                <span>Online • Digitando...</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <div className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl">
              <span className="text-sm font-bold text-emerald-700">R$ 79,90 transacionado</span>
            </div>
            
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:bg-gray-700 rounded-lg transition-colors">
              <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400 dark:text-gray-400" />
            </button>
            
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:bg-gray-700 rounded-lg transition-colors">
              <VideoIcon className="w-5 h-5 text-gray-600 dark:text-gray-400 dark:text-gray-400" />
            </button>
            
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:bg-gray-700 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Messages - SOFISTICADO */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50 dark:bg-gray-900 dark:bg-gray-900">
        {mensagens.map((msg) => {
          // Sistema Messages
          if (msg.tipo === "transacao") {
            return (
              <div key={msg.id} className="flex justify-center">
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg flex items-center space-x-2 animate-in zoom-in duration-300">
                  <DollarSign className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">{msg.mensagem}</span>
                </div>
              </div>
            );
          }

          if (msg.tipo === "gorjeta") {
            return (
              <div key={msg.id} className="flex justify-center">
                <div className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full shadow-lg flex items-center space-x-2 animate-in zoom-in duration-300">
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
                <img
                  src={msg.avatar}
                  alt={msg.nome}
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0 ring-2 ring-white shadow"
                />
                
                {/* Message Bubble */}
                <div className={`flex flex-col ${isModelo ? "items-end" : "items-start"} space-y-1`}>
                  <span className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-400 px-3">
                    {msg.nome} • {msg.timestamp}
                  </span>
                  
                  <div
                    className={`px-4 py-3 rounded-2xl shadow-sm ${
                      isModelo
                        ? "bg-gradient-to-r from-hotlovers-red to-pink-600 text-white rounded-br-none"
                        : "bg-white text-gray-800 dark:text-gray-100 dark:text-gray-100 border border-gray-200 dark:border-gray-700 dark:border-gray-700 rounded-bl-none"
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
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chat Input - SOFISTICADO */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 dark:border-gray-700 bg-white">
        <div className="flex items-center space-x-3">
          <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:bg-gray-700 rounded-xl transition-all hover:scale-105">
            <Paperclip className="w-5 h-5 text-gray-600 dark:text-gray-400 dark:text-gray-400" />
          </button>
          
          <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:bg-gray-700 rounded-xl transition-all hover:scale-105">
            <Image className="w-5 h-5 text-gray-600 dark:text-gray-400 dark:text-gray-400" />
          </button>
          
          <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:bg-gray-700 rounded-xl transition-all hover:scale-105">
            <Smile className="w-5 h-5 text-gray-600 dark:text-gray-400 dark:text-gray-400" />
          </button>
          
          <input
            type="text"
            placeholder="👁️ Modo visualização - Admin não envia mensagens"
            disabled
            className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 dark:bg-gray-700 border-none rounded-xl text-sm font-medium text-gray-400 dark:text-gray-500 cursor-not-allowed"
          />

          <button disabled className="px-6 py-3 bg-gray-200 dark:bg-gray-600 rounded-xl opacity-50 cursor-not-allowed">
            <Send className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-400 mt-3 text-center font-medium">
          🔒 Admin monitora conversas em tempo real mas não pode participar
        </p>
      </div>
    </div>
  );
}
