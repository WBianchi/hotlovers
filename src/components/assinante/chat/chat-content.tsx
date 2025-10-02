"use client";

import { MessageCircle, Send, Image, Smile, Paperclip } from "lucide-react";
import { FaComments } from "react-icons/fa";
import { useState } from "react";

const conversas = [
  { id: "1", modelo: { id: "1", nome: "Isabella Santos", foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=100&h=100&fit=crop&crop=face" }, online: true, ultimaMensagem: "Oi! Como você está?", horario: "14:32" },
  { id: "2", modelo: { id: "2", nome: "Amanda Silva", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" }, online: false, ultimaMensagem: "Obrigada pelo apoio! 💕", horario: "Ontem" },
  { id: "3", modelo: { id: "3", nome: "Juliana Costa", foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face" }, online: true, ultimaMensagem: "Vou postar conteúdo novo hoje!", horario: "12:15" }
];

export function ChatContent() {
  const [selectedChat, setSelectedChat] = useState(conversas[0]);
  const [mensagem, setMensagem] = useState("");

  const mensagens = [
    { id: "1", tipo: "recebida", texto: "Oi! Como você está?", horario: "14:30" },
    { id: "2", tipo: "enviada", texto: "Oi! Tudo bem e você?", horario: "14:31" },
    { id: "3", tipo: "recebida", texto: "Muito bem! Obrigada por perguntar 💕", horario: "14:32" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-3 flex items-center space-x-3">
            <FaComments className="w-10 h-10 text-red-600" />
            <span>Chat ao Vivo</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Converse diretamente com suas modelos favoritas
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex h-[600px]">
          {/* Sidebar */}
          <div className="w-80 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
            {conversas.map((conversa) => (
              <button
                key={conversa.id}
                onClick={() => setSelectedChat(conversa)}
                className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all ${
                  selectedChat.id === conversa.id ? "bg-red-50 dark:bg-red-900/20" : ""
                }`}
              >
                <div className="relative">
                  <img src={conversa.modelo.foto} alt={conversa.modelo.nome} className="w-12 h-12 rounded-xl object-cover" />
                  {conversa.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  )}
                </div>
                <div className="flex-1 text-left">
                  <p className="font-bold text-gray-900 dark:text-white">{conversa.modelo.nome}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{conversa.ultimaMensagem}</p>
                </div>
                <span className="text-xs text-gray-500">{conversa.horario}</span>
              </button>
            ))}
          </div>

          {/* Chat */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3">
              <img src={selectedChat.modelo.foto} alt={selectedChat.modelo.nome} className="w-10 h-10 rounded-xl object-cover" />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{selectedChat.modelo.nome}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{selectedChat.online ? "Online" : "Offline"}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {mensagens.map((msg) => (
                <div key={msg.id} className={`flex ${msg.tipo === "enviada" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                    msg.tipo === "enviada"
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  }`}>
                    <p>{msg.texto}</p>
                    <p className={`text-xs mt-1 ${msg.tipo === "enviada" ? "text-white/70" : "text-gray-500"}`}>{msg.horario}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all">
                  <Paperclip className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all">
                  <Image className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <input
                  type="text"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600/30"
                />
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all">
                  <Smile className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
