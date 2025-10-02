"use client";

import { Package, ShoppingBag } from "lucide-react";
import { FaBox } from "react-icons/fa";
import Link from "next/link";

const packs = [
  {
    id: "p1",
    titulo: "Pack Exclusivo - Lingerie Collection",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop",
    modelo: { id: "2", nome: "Amanda Silva" },
    itens: "45 fotos + 3 vídeos",
    valor: 89.90,
    desconto: 20
  },
  {
    id: "p2",
    titulo: "Mega Pack - Edição Especial",
    thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop",
    modelo: { id: "6", nome: "Beatriz Lima" },
    itens: "120 fotos + 8 vídeos",
    valor: 149.90,
    desconto: 30
  }
];

export function PacksContent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-3 flex items-center space-x-3">
            <FaBox className="w-10 h-10 text-red-600" />
            <span>Packs Exclusivos</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Adquira packs com desconto e acesso a conteúdo exclusivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((pack) => (
            <div key={pack.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="relative aspect-video overflow-hidden">
                <img src={pack.thumbnail} alt={pack.titulo} className="w-full h-full object-cover" />
                {pack.desconto > 0 && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-green-600 rounded-full">
                    <span className="text-sm font-bold text-white">-{pack.desconto}%</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-black text-xl text-gray-900 dark:text-white mb-2">{pack.titulo}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Por {pack.modelo.nome}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">📦 {pack.itens}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-3xl font-black text-red-600">R$ {pack.valor.toFixed(2)}</p>
                    {pack.desconto > 0 && (
                      <p className="text-sm text-gray-500 line-through">R$ {(pack.valor / (1 - pack.desconto/100)).toFixed(2)}</p>
                    )}
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Comprar Pack</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
