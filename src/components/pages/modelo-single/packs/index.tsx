"use client";

import { useState } from "react";
import { Crown, Star, Heart, Camera, Video, MessageCircle, Gift, Zap } from "lucide-react";

interface ModeloPacksProps {
  modelo: {
    nome: string;
  };
  usuario: {
    assinante: boolean;
  };
  onComprar: (pack: any) => void;
}

export function ModeloPacks({ modelo, usuario, onComprar }: ModeloPacksProps) {
  const [packSelecionado, setPackSelecionado] = useState<string | null>(null);

  // Mock dos packs premium
  const packs = [
    {
      id: "basic",
      nome: "Pack Básico 📸",
      preco: 19.90,
      descricao: "Fotos exclusivas e conteúdo especial",
      itens: [
        "15 fotos em alta resolução",
        "3 vídeos curtos (1-2 min)",
        "Acesso ao chat por 7 dias",
        "Wallpapers exclusivos"
      ],
      destaque: false,
      cor: "border-blue-500",
      icone: Camera,
      corIcone: "text-blue-500",
      bgIcone: "bg-blue-500/10"
    },
    {
      id: "premium", 
      nome: "Pack Premium 🔥",
      preco: 49.90,
      descricao: "Experiência VIP completa",
      itens: [
        "50 fotos exclusivas HD",
        "10 vídeos longos (5-15 min)",
        "Chat privado ilimitado por 30 dias",
        "Videochamada personalizada (15 min)",
        "Conteúdo customizado sob demanda",
        "Acesso antecipado a novos conteúdos"
      ],
      destaque: true,
      cor: "border-hotlovers-red",
      icone: Crown,
      corIcone: "text-hotlovers-red",
      bgIcone: "bg-hotlovers-red/10"
    },
    {
      id: "ultimate",
      nome: "Pack Ultimate 💎",
      preco: 99.90,
      descricao: "Experiência única e personalizada",
      itens: [
        "100+ fotos e vídeos exclusivos",
        "Conteúdo personalizado mensal",
        "Chat privado VIP permanente",
        "3 videochamadas personalizadas",
        "Encontro virtual exclusivo (30 min)",
        "Presente físico autografado",
        "Acesso a lives privadas",
        "Conteúdo behind-the-scenes"
      ],
      destaque: false,
      cor: "border-purple-500",
      icone: Star,
      corIcone: "text-purple-500",
      bgIcone: "bg-purple-500/10"
    },
    {
      id: "custom",
      nome: "Pack Customizado ✨",
      preco: 149.90,
      descricao: "Totalmente personalizado para você",
      itens: [
        "Conteúdo 100% personalizado",
        "Seu nome em fotos/vídeos",
        "Pedidos específicos atendidos",
        "Chat exclusivo permanente",
        "Videochamadas ilimitadas",
        "Acesso total à criadora",
        "Experiências únicas",
        "Prioridade máxima"
      ],
      destaque: false,
      cor: "border-yellow-500",
      icone: Gift,
      corIcone: "text-yellow-500",
      bgIcone: "bg-yellow-500/10"
    }
  ];

  const handleComprarPack = (pack: any) => {
    setPackSelecionado(pack.id);
    onComprar(pack);
  };

  return (
    <section className="py-12 bg-background">
      <div className="w-full max-w-none mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">
            💎 Packs Exclusivos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experiências únicas e conteúdo personalizado só para você. 
            Cada pack é uma jornada especial com {modelo.nome}!
          </p>
        </div>

        {/* Grid de packs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packs.map((pack) => {
            const Icon = pack.icone;
            return (
              <div
                key={pack.id}
                className={`relative bg-background border-2 ${pack.cor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 ${
                  pack.destaque ? 'scale-105 shadow-lg' : 'hover:scale-105'
                } ${
                  packSelecionado === pack.id ? 'ring-4 ring-hotlovers-red/20' : ''
                }`}
              >
                {/* Badge de destaque */}
                {pack.destaque && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-hotlovers-gradient text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      🔥 MAIS POPULAR
                    </div>
                  </div>
                )}

                {/* Header do pack */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${pack.bgIcone} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${pack.corIcone}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {pack.nome}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {pack.descricao}
                  </p>

                  <div className="mb-6">
                    <span className="text-3xl font-black text-foreground">
                      R$ {pack.preco.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">
                      única
                    </span>
                  </div>
                </div>

                {/* Lista de itens */}
                <div className="space-y-3 mb-8">
                  {pack.itens.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleComprarPack(pack)}
                  className={`w-full py-3 font-bold rounded-xl transition-all duration-300 ${
                    pack.destaque
                      ? 'bg-hotlovers-gradient text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'border-2 border-current text-foreground hover:bg-foreground hover:text-background'
                  }`}
                >
                  {packSelecionado === pack.id ? 'Processando...' : 'Comprar Agora'}
                </button>

                {/* Garantia */}
                <div className="text-center mt-4">
                  <p className="text-xs text-muted-foreground">
                    ✅ Garantia de 7 dias
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ModeloPacks;
