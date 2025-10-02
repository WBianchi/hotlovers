"use client";

import { Gift, Heart, DollarSign } from "lucide-react";
import { FaGift } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const modelos = [
  { id: "1", nome: "Isabella Santos", foto: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=100&h=100&fit=crop&crop=face", online: true },
  { id: "2", nome: "Amanda Silva", foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", online: false },
  { id: "3", nome: "Juliana Costa", foto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face", online: true }
];

const valores = [10, 20, 50, 100, 200, 500];

export function GorjetasContent() {
  const [selectedModelo, setSelectedModelo] = useState<string | null>(null);
  const [valor, setValor] = useState(50);
  const [mensagem, setMensagem] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-3 flex items-center space-x-3">
            <FaGift className="w-10 h-10 text-red-600" />
            <span>Enviar Gorjeta</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Apoie suas modelos favoritas com gorjetas
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Selecione a Modelo</label>
            <div className="grid grid-cols-3 gap-4">
              {modelos.map((modelo) => (
                <button
                  key={modelo.id}
                  onClick={() => setSelectedModelo(modelo.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedModelo === modelo.id
                      ? "border-red-600 bg-red-50 dark:bg-red-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-red-600/50"
                  }`}
                >
                  <div className="relative mb-2">
                    <img src={modelo.foto} alt={modelo.nome} className="w-16 h-16 rounded-xl mx-auto object-cover" />
                    {modelo.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                    )}
                  </div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white text-center">{modelo.nome}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Valor da Gorjeta</label>
            <div className="grid grid-cols-3 gap-3">
              {valores.map((v) => (
                <button
                  key={v}
                  onClick={() => setValor(v)}
                  className={`px-4 py-3 rounded-xl font-bold transition-all ${
                    valor === v
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  R$ {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Mensagem (Opcional)</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Deixe uma mensagem carinhosa..."
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-red-600/30"
              rows={4}
            />
          </div>

          <button
            disabled={!selectedModelo}
            className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg transition-all hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Gift className="w-6 h-6" />
            <span>Enviar Gorjeta de R$ {valor.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
