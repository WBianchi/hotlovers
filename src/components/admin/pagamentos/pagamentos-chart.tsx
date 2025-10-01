"use client";

import { TrendingUp } from "lucide-react";

export function PagamentosChart() {
  const metodos = [
    { nome: "Cartão de Crédito", valor: 125000, cor: "bg-blue-500", percentual: 66 },
    { nome: "PIX", valor: 45000, cor: "bg-emerald-500", percentual: 24 },
    { nome: "Boleto", valor: 12450, cor: "bg-purple-500", percentual: 6 },
    { nome: "Outros", valor: 7000, cor: "bg-gray-400", percentual: 4 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Métodos de Pagamento */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Métodos de Pagamento</h3>
            <p className="text-sm text-muted-foreground">Distribuição por método</p>
          </div>
        </div>

        <div className="space-y-4">
          {metodos.map((metodo) => (
            <div key={metodo.nome} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{metodo.nome}</span>
                <span className="text-sm font-bold text-foreground">
                  R$ {(metodo.valor / 1000).toFixed(0)}K ({metodo.percentual}%)
                </span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full ${metodo.cor} transition-all duration-500`}
                  style={{ width: `${metodo.percentual}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status dos Pagamentos */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Status dos Pagamentos</h3>
            <p className="text-sm text-muted-foreground">Visão geral do processamento</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-sm text-muted-foreground mb-1">Aprovados</p>
            <p className="text-3xl font-black text-green-600">98.7%</p>
            <p className="text-xs text-muted-foreground mt-1">1.847 pagamentos</p>
          </div>
          
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <p className="text-sm text-muted-foreground mb-1">Pendentes</p>
            <p className="text-3xl font-black text-orange-600">1.2%</p>
            <p className="text-xs text-muted-foreground mt-1">23 pagamentos</p>
          </div>
          
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <p className="text-sm text-muted-foreground mb-1">Recusados</p>
            <p className="text-3xl font-black text-red-600">0.1%</p>
            <p className="text-xs text-muted-foreground mt-1">2 pagamentos</p>
          </div>
          
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-muted-foreground mb-1">Processando</p>
            <p className="text-3xl font-black text-blue-600">0%</p>
            <p className="text-xs text-muted-foreground mt-1">0 pagamentos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
