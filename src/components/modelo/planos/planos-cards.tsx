"use client";

import { Edit, Trash2, Image, Video, Package, Check, X, Users } from "lucide-react";

const mockPlanos = [
  {
    id: 1,
    nome: "Básico",
    valorReceber: 27.00,
    valorFinal: 30.00,
    periodo: "mensal",
    assinantes: 89,
    ativo: true,
    beneficios: {
      fotos: 10,
      videos: 2,
      packs: false,
      chat: true
    }
  },
  {
    id: 2,
    nome: "Premium",
    valorReceber: 45.00,
    valorFinal: 50.00,
    periodo: "mensal",
    assinantes: 124,
    ativo: true,
    beneficios: {
      fotos: 30,
      videos: 8,
      packs: true,
      chat: true
    }
  },
  {
    id: 3,
    nome: "VIP Anual",
    valorReceber: 450.00,
    valorFinal: 500.00,
    periodo: "anual",
    assinantes: 32,
    ativo: true,
    beneficios: {
      fotos: 999,
      videos: 999,
      packs: true,
      chat: true
    }
  }
];

export function PlanosCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockPlanos.map((plano) => (
        <div
          key={plano.id}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
        >
          {/* Header */}
          <div className={`p-6 ${
            plano.nome === "Premium" 
              ? "bg-gradient-to-r from-red-600 to-red-700" 
              : "bg-gray-50 dark:bg-gray-900"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-2xl font-black ${
                plano.nome === "Premium" 
                  ? "text-white" 
                  : "text-gray-800 dark:text-gray-100"
              }`}>
                {plano.nome}
              </h3>
              
              {plano.ativo && (
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  plano.nome === "Premium"
                    ? "bg-white/20 text-white"
                    : "bg-green-100 dark:bg-green-900/30 text-green-600"
                }`}>
                  Ativo
                </div>
              )}
            </div>

            <div className="mb-2">
              <p className={`text-xs ${
                plano.nome === "Premium" 
                  ? "text-white/70" 
                  : "text-gray-500 dark:text-gray-400"
              }`}>
                Você recebe
              </p>
              <p className={`text-4xl font-black ${
                plano.nome === "Premium" 
                  ? "text-white" 
                  : "text-red-600"
              }`}>
                R$ {plano.valorReceber.toFixed(2)}
              </p>
              <p className={`text-xs ${
                plano.nome === "Premium" 
                  ? "text-white/70" 
                  : "text-gray-500 dark:text-gray-400"
              }`}>
                Assinante paga R$ {plano.valorFinal.toFixed(2)}/{plano.periodo === "mensal" ? "mês" : "ano"}
              </p>
            </div>

            <div className={`flex items-center space-x-2 ${
              plano.nome === "Premium" 
                ? "text-white/90" 
                : "text-gray-600 dark:text-gray-400"
            }`}>
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">{plano.assinantes} assinantes ativos</span>
            </div>
          </div>

          {/* Benefícios */}
          <div className="p-6 space-y-3">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-3">Benefícios Inclusos</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Fotos por mês</span>
              </div>
              <span className="font-bold text-gray-800 dark:text-gray-100">
                {plano.beneficios.fotos === 999 ? "Ilimitado" : plano.beneficios.fotos}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Video className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Vídeos por mês</span>
              </div>
              <span className="font-bold text-gray-800 dark:text-gray-100">
                {plano.beneficios.videos === 999 ? "Ilimitado" : plano.beneficios.videos}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Package className="w-4 h-4 text-red-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Acesso a Packs</span>
              </div>
              {plano.beneficios.packs ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <X className="w-5 h-5 text-red-600" />
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-2">
            <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all font-semibold text-gray-700 dark:text-gray-300">
              <Edit className="w-4 h-4" />
              <span>Editar</span>
            </button>
            <button className="p-2 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-xl transition-all">
              <Trash2 className="w-4 h-4 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
