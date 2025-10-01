"use client";

import { BarChart3 } from "lucide-react";

export function ComissoesChart() {
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
  const dados = [
    { mes: "Jan", assinaturas: 18000, gorjetas: 5000, packs: 3500, fotos: 1500, videos: 800 },
    { mes: "Fev", assinaturas: 22000, gorjetas: 6200, packs: 4100, fotos: 1800, videos: 950 },
    { mes: "Mar", assinaturas: 25000, gorjetas: 7100, packs: 4800, fotos: 2100, videos: 1100 },
    { mes: "Abr", assinaturas: 24500, gorjetas: 6800, packs: 4500, fotos: 1950, videos: 1050 },
    { mes: "Mai", assinaturas: 27000, gorjetas: 7800, packs: 5200, fotos: 2250, videos: 1150 },
    { mes: "Jun", assinaturas: 28450, gorjetas: 8230, packs: 5670, fotos: 2340, videos: 1200 }
  ];

  const maxValor = Math.max(...dados.map(d => d.assinaturas + d.gorjetas + d.packs + d.fotos + d.videos));

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Evolução das Comissões</h3>
            <p className="text-sm text-muted-foreground">Últimos 6 meses por categoria</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-muted-foreground">Assinaturas</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span className="text-muted-foreground">Gorjetas</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-muted-foreground">Packs</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-muted-foreground">Fotos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-muted-foreground">Vídeos</span>
          </div>
        </div>
      </div>

      <div className="h-64 flex items-end justify-between space-x-4">
        {dados.map((item, index) => {
          const total = item.assinaturas + item.gorjetas + item.packs + item.fotos + item.videos;
          const heightPercent = (total / maxValor) * 100;
          
          const assinaturasPercent = (item.assinaturas / total) * 100;
          const gorjetasPercent = (item.gorjetas / total) * 100;
          const packsPercent = (item.packs / total) * 100;
          const fotosPercent = (item.fotos / total) * 100;
          const videosPercent = (item.videos / total) * 100;

          return (
            <div key={index} className="flex-1 flex flex-col items-center space-y-2">
              <div 
                className="w-full rounded-lg overflow-hidden flex flex-col-reverse"
                style={{ height: `${heightPercent}%` }}
              >
                <div className="bg-blue-500" style={{ height: `${assinaturasPercent}%` }}></div>
                <div className="bg-pink-500" style={{ height: `${gorjetasPercent}%` }}></div>
                <div className="bg-purple-500" style={{ height: `${packsPercent}%` }}></div>
                <div className="bg-orange-500" style={{ height: `${fotosPercent}%` }}></div>
                <div className="bg-red-500" style={{ height: `${videosPercent}%` }}></div>
              </div>
              <span className="text-xs font-medium text-muted-foreground">{item.mes}</span>
              <span className="text-xs font-bold text-foreground">R$ {(total / 1000).toFixed(1)}K</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
