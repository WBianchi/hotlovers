"use client";

import { Dumbbell, Heart, Camera, Sparkles, Flame, Star, Crown, Zap } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "fitness",
    nome: "Fitness",
    icon: Dumbbell,
    cor: "from-blue-500 to-cyan-500",
    modelos: 45,
    conteudos: "2.3K"
  },
  {
    id: "lingerie",
    nome: "Lingerie",
    icon: Heart,
    cor: "from-pink-500 to-rose-500",
    modelos: 67,
    conteudos: "4.1K"
  },
  {
    id: "fashion",
    nome: "Fashion",
    icon: Sparkles,
    cor: "from-purple-500 to-indigo-500",
    modelos: 52,
    conteudos: "3.2K"
  },
  {
    id: "sensual",
    nome: "Sensual",
    icon: Flame,
    cor: "from-red-500 to-orange-500",
    modelos: 89,
    conteudos: "5.8K"
  },
  {
    id: "premium",
    nome: "Premium",
    icon: Crown,
    cor: "from-yellow-500 to-amber-500",
    modelos: 34,
    conteudos: "1.9K"
  },
  {
    id: "exclusivo",
    nome: "Exclusivo",
    icon: Zap,
    cor: "from-emerald-500 to-teal-500",
    modelos: 28,
    conteudos: "1.2K"
  },
  {
    id: "ensaios",
    nome: "Ensaios",
    icon: Camera,
    cor: "from-violet-500 to-purple-500",
    modelos: 41,
    conteudos: "2.7K"
  },
  {
    id: "top-rated",
    nome: "Top Rated",
    icon: Star,
    cor: "from-orange-500 to-red-500",
    modelos: 23,
    conteudos: "1.5K"
  }
];

export function CategoriesSection() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2">
          Explorar por Categoria
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Descubra conteúdo exclusivo nas suas categorias favoritas
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.id}
              href={`/assinante/categoria/${category.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.cor} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-4 text-white">
                <div className="w-12 h-12 mb-3 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-black text-sm text-center mb-1">
                  {category.nome}
                </h3>
                <p className="text-xs opacity-90">
                  {category.modelos} modelos
                </p>
                <p className="text-xs opacity-75">
                  {category.conteudos} posts
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
