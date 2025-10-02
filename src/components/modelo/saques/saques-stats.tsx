"use client";

import { Image, Video, Package, Heart } from "lucide-react";

export function SaquesStats() {
  const lucros = [
    {
      label: "Fotos",
      value: "R$ 1.890",
      quantidade: "245 vendas",
      icon: Image,
      color: "from-blue-600 to-blue-700",
      textColor: "text-blue-600"
    },
    {
      label: "Vídeos",
      value: "R$ 2.450",
      quantidade: "89 vendas",
      icon: Video,
      color: "from-purple-600 to-purple-700",
      textColor: "text-purple-600"
    },
    {
      label: "Packs",
      value: "R$ 3.120",
      quantidade: "67 vendas",
      icon: Package,
      color: "from-red-600 to-red-700",
      textColor: "text-red-600"
    },
    {
      label: "Gorjetas",
      value: "R$ 4.890",
      quantidade: "108 gorjetas",
      icon: Heart,
      color: "from-pink-600 to-rose-700",
      textColor: "text-pink-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {lucros.map((lucro, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${lucro.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
              <lucro.icon className="w-6 h-6 text-white" />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{lucro.label}</p>
            <p className={`text-3xl font-black ${lucro.textColor} mb-2`}>{lucro.value}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">{lucro.quantidade}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
