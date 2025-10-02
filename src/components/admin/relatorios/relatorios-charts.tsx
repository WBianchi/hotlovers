"use client";

import { TrendingUp, Users, Package } from "lucide-react";

export function RelatoriosCharts() {
  const acessosDados = [
    { mes: "Jan", acessos: 28000 },
    { mes: "Fev", acessos: 32000 },
    { mes: "Mar", acessos: 35000 },
    { mes: "Abr", acessos: 38000 },
    { mes: "Mai", acessos: 42000 },
    { mes: "Jun", acessos: 45800 }
  ];

  const cadastrosDados = [
    { tipo: "Modelos", valor: 234, cor: "bg-pink-500" },
    { tipo: "Assinantes", valor: 1800, cor: "bg-emerald-500" },
    { tipo: "Afiliados", valor: 89, cor: "bg-purple-500" }
  ];

  const vendasDados = [
    { mes: "Jan", packs: 18000, assinaturas: 95000, fotos: 8000, videos: 5000 },
    { mes: "Fev", packs: 22000, assinaturas: 108000, fotos: 9500, videos: 6200 },
    { mes: "Mar", packs: 25000, assinaturas: 125000, fotos: 11000, videos: 7100 },
    { mes: "Abr", packs: 24500, assinaturas: 130000, fotos: 10500, videos: 6800 },
    { mes: "Mai", packs: 27000, assinaturas: 138000, fotos: 12000, videos: 7500 },
    { mes: "Jun", packs: 28300, assinaturas: 142000, fotos: 12800, videos: 8000 }
  ];

  const maxAcessos = Math.max(...acessosDados.map(d => d.acessos));
  const maxVendas = Math.max(...vendasDados.map(d => d.packs + d.assinaturas + d.fotos + d.videos));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Gráfico de Acessos */}
      <div className="bg-white dark:bg-gray-800 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 dark:border-gray-700/50 dark:border-gray-700/50">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 dark:text-gray-100">Evolução de Acessos</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-400">Últimos 6 meses</p>
          </div>
        </div>

        <div className="h-64 flex items-end justify-between space-x-4">
          {acessosDados.map((item, index) => {
            const heightPercent = (item.acessos / maxAcessos) * 100;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-indigo-600 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all cursor-pointer"
                  style={{ height: `${heightPercent}%` }}
                ></div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 dark:text-gray-400">{item.mes}</span>
                <span className="text-xs font-bold text-gray-800 dark:text-gray-100 dark:text-gray-100">{(item.acessos / 1000).toFixed(1)}K</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gráfico de Cadastros */}
      <div className="bg-white dark:bg-gray-800 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 dark:border-gray-700/50 dark:border-gray-700/50">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 dark:text-gray-100">Cadastros por Tipo</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-400">Últimos 30 dias</p>
          </div>
        </div>

        <div className="space-y-4">
          {cadastrosDados.map((item) => {
            const maxCadastros = Math.max(...cadastrosDados.map(d => d.valor));
            const percentage = (item.valor / maxCadastros) * 100;
            
            return (
              <div key={item.tipo} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 dark:text-gray-300">{item.tipo}</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-100 dark:text-gray-100">{item.valor}</span>
                </div>
                <div className="w-full h-4 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.cor} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 dark:text-gray-400">Total de Cadastros</span>
            <span className="text-2xl font-black text-gray-800 dark:text-gray-100 dark:text-gray-100">
              {cadastrosDados.reduce((acc, item) => acc + item.valor, 0).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Gráfico de Vendas (Full Width) */}
      <div className="lg:col-span-2 bg-white dark:bg-gray-800 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 dark:border-gray-700/50 dark:border-gray-700/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 dark:text-gray-100">Vendas por Categoria</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 dark:text-gray-400">Últimos 6 meses - Receita em R$</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400 dark:text-gray-400">Assinaturas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400 dark:text-gray-400">Packs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400 dark:text-gray-400">Fotos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400 dark:text-gray-400">Vídeos</span>
            </div>
          </div>
        </div>

        <div className="h-64 flex items-end justify-between space-x-4">
          {vendasDados.map((item, index) => {
            const total = item.assinaturas + item.packs + item.fotos + item.videos;
            const heightPercent = (total / maxVendas) * 100;
            
            const assinaturasPercent = (item.assinaturas / total) * 100;
            const packsPercent = (item.packs / total) * 100;
            const fotosPercent = (item.fotos / total) * 100;
            const videosPercent = (item.videos / total) * 100;

            return (
              <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                <div 
                  className="w-full rounded-lg overflow-hidden flex flex-col-reverse shadow-sm hover:shadow-md transition-all"
                  style={{ height: `${heightPercent}%` }}
                >
                  <div className="bg-blue-500" style={{ height: `${assinaturasPercent}%` }}></div>
                  <div className="bg-purple-500" style={{ height: `${packsPercent}%` }}></div>
                  <div className="bg-orange-500" style={{ height: `${fotosPercent}%` }}></div>
                  <div className="bg-red-500" style={{ height: `${videosPercent}%` }}></div>
                </div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 dark:text-gray-400">{item.mes}</span>
                <span className="text-xs font-bold text-gray-800 dark:text-gray-100 dark:text-gray-100">R$ {(total / 1000).toFixed(0)}K</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
