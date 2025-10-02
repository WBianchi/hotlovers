"use client";

import { Link2, Copy, Eye, MousePointerClick, ShoppingCart, TrendingUp, Plus, Filter, Search } from "lucide-react";
import { FaLink } from "react-icons/fa";
import { useState } from "react";

const links = [
  {
    id: "1",
    tipo: "Modelo",
    nome: "Isabella Santos - Perfil Completo",
    url: "https://hotlovers.com/aff/12345/modelo/isabella-santos",
    cliques: 342,
    vendas: 12,
    comissao: 456.80,
    conversao: 3.5,
    ips: 287,
    dataCriacao: "2024-01-15",
    status: "ativo"
  },
  {
    id: "2",
    tipo: "Pack",
    nome: "Pack Exclusivo - Lingerie Collection",
    url: "https://hotlovers.com/aff/12345/pack/lingerie-collection",
    cliques: 189,
    vendas: 8,
    comissao: 287.20,
    conversao: 4.2,
    ips: 156,
    dataCriacao: "2024-01-18",
    status: "ativo"
  },
  {
    id: "3",
    tipo: "Vídeo",
    nome: "Ensaio Sensual Premium - Isabella",
    url: "https://hotlovers.com/aff/12345/video/ensaio-sensual",
    cliques: 156,
    vendas: 5,
    comissao: 189.50,
    conversao: 3.2,
    ips: 134,
    dataCriacao: "2024-01-20",
    status: "ativo"
  },
  {
    id: "4",
    tipo: "Foto",
    nome: "Ensaio Fashion - Camila Rodrigues",
    url: "https://hotlovers.com/aff/12345/foto/fashion-camila",
    cliques: 98,
    vendas: 3,
    comissao: 89.70,
    conversao: 3.1,
    ips: 87,
    dataCriacao: "2024-01-22",
    status: "ativo"
  },
  {
    id: "5",
    tipo: "Assinatura",
    nome: "Assinatura Premium - Amanda Silva",
    url: "https://hotlovers.com/aff/12345/assinatura/amanda-silva",
    cliques: 234,
    vendas: 7,
    comissao: 209.30,
    conversao: 3.0,
    ips: 198,
    dataCriacao: "2024-01-10",
    status: "ativo"
  }
];

export function LinksContent() {
  const [filter, setFilter] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredLinks = links.filter(link => {
    if (filter !== "todos" && link.tipo.toLowerCase() !== filter) return false;
    if (searchQuery && !link.nome.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-8">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center space-x-3">
            <FaLink className="w-8 h-8 text-red-600" />
            <span>Links Compartilhados</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gerencie e acompanhe o desempenho dos seus links de afiliado
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Link2 className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-black text-gray-900 dark:text-white">{links.length}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Links Ativos</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <MousePointerClick className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-black text-gray-900 dark:text-white">1.019</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Cliques Totais</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <ShoppingCart className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-black text-gray-900 dark:text-white">35</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Vendas Geradas</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-orange-600" />
              <span className="text-2xl font-black text-gray-900 dark:text-white">3.4%</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Taxa Média</p>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="search"
              placeholder="Buscar links..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600/30"
            />
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setFilter("todos")}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                filter === "todos"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter("modelo")}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                filter === "modelo"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Modelos
            </button>
            <button
              onClick={() => setFilter("pack")}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                filter === "pack"
                  ? "bg-red-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              }`}
            >
              Packs
            </button>
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all hover:scale-105 flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Novo Link</span>
            </button>
          </div>
        </div>

        {/* Links Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Link</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Tipo</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Cliques</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">IPs Únicos</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Vendas</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Conversão</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Comissão</th>
                  <th className="text-left py-4 px-6 text-sm font-bold text-gray-600 dark:text-gray-400">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredLinks.map((link) => (
                  <tr key={link.id} className="border-t border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="max-w-xs">
                        <p className="font-bold text-gray-900 dark:text-white mb-1">{link.nome}</p>
                        <div className="flex items-center space-x-2">
                          <code className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded truncate max-w-[200px]">
                            {link.url}
                          </code>
                          <button
                            onClick={() => copyToClipboard(link.url, link.id)}
                            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-all"
                          >
                            {copiedId === link.id ? (
                              <span className="text-xs text-green-600 font-bold">✓</span>
                            ) : (
                              <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold rounded-full">
                        {link.tipo}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <MousePointerClick className="w-4 h-4 text-purple-600" />
                        <span className="font-bold text-gray-900 dark:text-white">{link.cliques}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-blue-600" />
                        <span className="font-bold text-gray-900 dark:text-white">{link.ips}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <ShoppingCart className="w-4 h-4 text-green-600" />
                        <span className="font-bold text-gray-900 dark:text-white">{link.vendas}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-orange-600">{link.conversao}%</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-bold text-green-600">R$ {link.comissao.toFixed(2)}</span>
                    </td>
                    <td className="py-4 px-6">
                      <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-bold text-sm transition-all">
                        Detalhes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
