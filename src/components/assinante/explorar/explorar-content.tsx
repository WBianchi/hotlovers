"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Grid3x3, LayoutList } from "lucide-react";
import { FiltrosSection } from "./filtros-section";
import { ModelosGrid } from "./modelos-grid";
import { ModelosList } from "./modelos-list";

export function ExplorarContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    categoria: "todas",
    status: "todas",
    ordenacao: "popularidade",
    premium: false,
    verificadas: false
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-[1920px] mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-3">
            Explorar Modelos
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Descubra as modelos mais incríveis da plataforma
          </p>
        </div>

        {/* Search & Controls */}
        <div className="mb-6 flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
            <input
              type="search"
              placeholder="Buscar por nome, categoria, localização..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600/50 transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Filtros Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-6 py-4 rounded-xl font-bold transition-all flex items-center space-x-2 ${
                showFilters
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
              }`}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filtros</span>
            </button>

            {/* View Mode */}
            <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-red-600 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-red-600 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <LayoutList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-6">
          {/* Filtros Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <FiltrosSection filters={filters} setFilters={setFilters} />
            </div>
          )}

          {/* Modelos */}
          <div className="flex-1">
            {viewMode === "grid" ? (
              <ModelosGrid searchQuery={searchQuery} filters={filters} />
            ) : (
              <ModelosList searchQuery={searchQuery} filters={filters} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
