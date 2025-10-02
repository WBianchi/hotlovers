"use client";

import { Send, Paperclip, Image, Video, Package, DollarSign, Smile, Mic } from "lucide-react";
import { useState } from "react";

export function ChatFooter() {
  const [mensagem, setMensagem] = useState("");
  const [showPaidOptions, setShowPaidOptions] = useState(false);

  const paidOptions = [
    { icon: Image, label: "Enviar Fotos", valor: "R$ 29,90", color: "text-blue-600" },
    { icon: Video, label: "Enviar Vídeo", valor: "R$ 49,90", color: "text-purple-600" },
    { icon: Package, label: "Enviar Pack", valor: "R$ 89,90", color: "text-red-600" },
    { icon: Video, label: "Videochamada", valor: "R$ 5,00/min", color: "text-pink-600" }
  ];

  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      {/* Paid Options */}
      {showPaidOptions && (
        <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
          <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase mb-3">Conteúdo Pago</p>
          <div className="grid grid-cols-2 gap-2">
            {paidOptions.map((option, idx) => (
              <button
                key={idx}
                className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all group border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-2">
                  <option.icon className={`w-4 h-4 ${option.color}`} />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{option.label}</span>
                </div>
                <span className="text-xs font-bold text-red-600">{option.valor}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="flex items-center space-x-3">
        <button 
          onClick={() => setShowPaidOptions(!showPaidOptions)}
          className={`p-3 rounded-xl transition-all hover:scale-105 ${
            showPaidOptions 
              ? 'bg-red-100 dark:bg-red-900/30 text-red-600' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
          }`}
          title="Conteúdo Pago"
        >
          <DollarSign className="w-5 h-5" />
        </button>
        
        <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all hover:scale-105">
          <Paperclip className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
        
        <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all hover:scale-105">
          <Image className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
        
        <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all hover:scale-105">
          <Smile className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
        
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="flex-1 px-6 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition-all"
        />

        <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all hover:scale-105">
          <Mic className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>

        <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl transition-all hover:scale-105 shadow-lg">
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
      
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center font-medium">
        💡 Use o botão <DollarSign className="w-3 h-3 inline" /> para enviar conteúdo pago
      </p>
    </div>
  );
}
