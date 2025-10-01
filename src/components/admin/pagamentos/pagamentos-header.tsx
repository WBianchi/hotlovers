"use client";

import { Banknote, Download, Filter, Plus } from "lucide-react";

export function PagamentosHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
            <Banknote className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-foreground">
              Pagamentos
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Gestão de todos os pagamentos da plataforma
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filtrar</span>
        </button>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-hotlovers-gradient text-white rounded-lg hover:opacity-90 transition-opacity shadow-lg">
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Exportar</span>
        </button>
      </div>
    </div>
  );
}
