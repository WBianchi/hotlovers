"use client";

import { useState } from "react";
import { Search, Filter, X, Star, Users, MapPin, Calendar, Zap } from "lucide-react";

interface FiltrosProps {
  className?: string;
  onFiltrosChange?: (filtros: any) => void;
}

export function Filtros({ className, onFiltrosChange }: FiltrosProps) {
  const [busca, setBusca] = useState("");
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);
  const [filtros, setFiltros] = useState({
    categoria: "todos",
    idade: "todos",
    localizacao: "todos",
    status: "todos",
    ordenar: "popularidade"
  });

  const categorias = [
    { id: "todos", label: "Todas", icon: Star },
    { id: "premium", label: "Premium", icon: Zap },
    { id: "verificadas", label: "Verificadas", icon: Star },
    { id: "online", label: "Online Agora", icon: Users }
  ];

  const idades = [
    { id: "todos", label: "Todas as Idades" },
    { id: "18-24", label: "18-24 anos" },
    { id: "25-30", label: "25-30 anos" },
    { id: "31-35", label: "31-35 anos" },
    { id: "36+", label: "36+ anos" }
  ];

  const localizacoes = [
    { id: "todos", label: "Todas as Localizações" },
    { id: "br", label: "Brasil" },
    { id: "eua", label: "Estados Unidos" },
    { id: "europa", label: "Europa" },
    { id: "outros", label: "Outros" }
  ];

  const statusOptions = [
    { id: "todos", label: "Todos" },
    { id: "online", label: "Online" },
    { id: "ocupada", label: "Ocupada" },
    { id: "offline", label: "Offline" }
  ];

  const ordenacaoOptions = [
    { id: "popularidade", label: "Mais Populares" },
    { id: "recentes", label: "Mais Recentes" },
    { id: "avaliacoes", label: "Melhor Avaliadas" },
    { id: "alfabetica", label: "A-Z" }
  ];

  const handleFiltroChange = (key: string, value: string) => {
    const novosFiltros = { ...filtros, [key]: value };
    setFiltros(novosFiltros);
    onFiltrosChange?.(novosFiltros);
  };

  const limparFiltros = () => {
    const filtrosLimpos = {
      categoria: "todos",
      idade: "todos", 
      localizacao: "todos",
      status: "todos",
      ordenar: "popularidade"
    };
    setFiltros(filtrosLimpos);
    setBusca("");
    onFiltrosChange?.(filtrosLimpos);
  };

  const contarFiltrosAtivos = () => {
    return Object.values(filtros).filter(valor => valor !== "todos" && valor !== "popularidade").length + 
           (busca ? 1 : 0);
  };

  return (
    <div className={`bg-background border-b border-border ${className || ""}`}>
      <div className="w-full max-w-none mx-auto px-6 lg:px-16 py-6">
        
        {/* Barra de busca principal */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar modelos..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full h-12 pl-10 pr-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 focus:border-hotlovers-red/30 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setFiltrosAbertos(!filtrosAbertos)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                filtrosAbertos || contarFiltrosAtivos() > 0
                  ? 'bg-hotlovers-red text-white border-hotlovers-red' 
                  : 'bg-background border-border hover:border-hotlovers-red/30 hover:bg-muted'
              }`}
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filtros</span>
              {contarFiltrosAtivos() > 0 && (
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{contarFiltrosAtivos()}</span>
                </div>
              )}
            </button>

            {contarFiltrosAtivos() > 0 && (
              <button
                onClick={limparFiltros}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <X className="w-4 h-4" />
                <span className="font-medium">Limpar</span>
              </button>
            )}
          </div>
        </div>

        {/* Filtros expandidos */}
        {filtrosAbertos && (
          <div className="mt-6 p-6 bg-muted/30 rounded-2xl space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Categoria */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground flex items-center space-x-2">
                  <Star className="w-4 h-4 text-hotlovers-red" />
                  <span>Categoria</span>
                </label>
                <div className="space-y-2">
                  {categorias.map((categoria) => {
                    const Icon = categoria.icon;
                    return (
                      <button
                        key={categoria.id}
                        onClick={() => handleFiltroChange('categoria', categoria.id)}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-300 ${
                          filtros.categoria === categoria.id
                            ? 'bg-hotlovers-red text-white'
                            : 'bg-background hover:bg-muted border border-border'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{categoria.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Idade */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-hotlovers-red" />
                  <span>Idade</span>
                </label>
                <select
                  value={filtros.idade}
                  onChange={(e) => handleFiltroChange('idade', e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20"
                >
                  {idades.map((idade) => (
                    <option key={idade.id} value={idade.id}>
                      {idade.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Localização */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-hotlovers-red" />
                  <span>Localização</span>
                </label>
                <select
                  value={filtros.localizacao}
                  onChange={(e) => handleFiltroChange('localizacao', e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20"
                >
                  {localizacoes.map((local) => (
                    <option key={local.id} value={local.id}>
                      {local.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground flex items-center space-x-2">
                  <Users className="w-4 h-4 text-hotlovers-red" />
                  <span>Status</span>
                </label>
                <select
                  value={filtros.status}
                  onChange={(e) => handleFiltroChange('status', e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20"
                >
                  {statusOptions.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Ordenação */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <label className="text-sm font-semibold text-foreground">
                Ordenar por:
              </label>
              <select
                value={filtros.ordenar}
                onChange={(e) => handleFiltroChange('ordenar', e.target.value)}
                className="p-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20"
              >
                {ordenacaoOptions.map((opcao) => (
                  <option key={opcao.id} value={opcao.id}>
                    {opcao.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Filtros;
