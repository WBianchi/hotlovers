"use client";

import { Image, Video, Package, Zap, DollarSign } from "lucide-react";

const planosImpulsionamento = [
  {
    id: 1,
    tipo: "Foto",
    icon: Image,
    nome: "Destaque na Home",
    descricao: "Sua foto aparece na página inicial por 24h",
    alcance: "5K - 10K visualizações",
    valor: 50.00,
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    textColor: "text-blue-600"
  },
  {
    id: 2,
    tipo: "Vídeo",
    icon: Video,
    nome: "Banner Principal",
    descricao: "Vídeo em destaque no topo por 48h",
    alcance: "10K - 20K visualizações",
    valor: 100.00,
    color: "from-purple-600 to-purple-700",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    textColor: "text-purple-600"
  },
  {
    id: 3,
    tipo: "Pack",
    icon: Package,
    nome: "Seção Especial",
    descricao: "Pack em destaque na seção premium por 72h",
    alcance: "15K - 30K visualizações",
    valor: 150.00,
    color: "from-red-600 to-red-700",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    textColor: "text-red-600"
  },
  {
    id: 4,
    tipo: "Perfil",
    icon: Zap,
    nome: "Perfil em Destaque",
    descricao: "Seu perfil aparece em todas as páginas por 7 dias",
    alcance: "50K+ visualizações",
    valor: 300.00,
    color: "from-yellow-600 to-orange-600",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    textColor: "text-yellow-600"
  }
];

export function ImpulsionarCards() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-gray-800 dark:text-gray-100">Planos de Impulsionamento</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Escolha o melhor para você</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {planosImpulsionamento.map((plano) => (
          <div
            key={plano.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            {/* Header */}
            <div className={`p-6 bg-gradient-to-br ${plano.color}`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${plano.bgColor} flex items-center justify-center`}>
                  <plano.icon className={`w-6 h-6 ${plano.textColor}`} />
                </div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                  {plano.tipo}
                </span>
              </div>

              <h3 className="text-xl font-black text-white mb-2">{plano.nome}</h3>
              <p className="text-sm text-white/80">{plano.descricao}</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Zap className="w-4 h-4" />
                <span>{plano.alcance}</span>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Investimento</span>
                  <div className="flex items-center space-x-1">
                    <DollarSign className={`w-5 h-5 ${plano.textColor}`} />
                    <span className={`text-2xl font-black ${plano.textColor}`}>
                      {plano.valor.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className={`w-full py-3 bg-gradient-to-r ${plano.color} text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg`}>
                  Impulsionar Agora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
