"use client";

import { useState } from "react";
import { 
  Camera, Upload, Grid3X3, List, Filter, Search, MoreHorizontal,
  Eye, Heart, DollarSign, Star, Crown, Zap, Plus, Edit, Trash2,
  Download, Share, Lock, Unlock, Calendar, TrendingUp
} from "lucide-react";
import { FaCrown, FaFire, FaHeart, FaEye } from "react-icons/fa";
import { useLanguage } from "../../../contexts/language-context";

export function FotosContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const { t } = useLanguage();

  // Mock data - depois vem da API
  const photosData = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=300&h=400&fit=crop",
      title: "Selfie na praia",
      description: "Foto linda do pôr do sol",
      status: "public",
      price: 15.00,
      views: 2340,
      likes: 156,
      earnings: 450.00,
      uploadDate: "2024-01-15",
      isVip: false,
      rating: 4.8
    },
    {
      id: "2", 
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop",
      title: "Ensaio romântico",
      description: "Fotos especiais para fãs VIP",
      status: "vip",
      price: 25.00,
      views: 1890,
      likes: 234,
      earnings: 675.00,
      uploadDate: "2024-01-12",
      isVip: true,
      rating: 4.9
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=400&fit=crop",
      title: "Look do dia",
      description: "Outfit casual e elegante",
      status: "public",
      price: 10.00,
      views: 3210,
      likes: 89,
      earnings: 320.00,
      uploadDate: "2024-01-10",
      isVip: false,
      rating: 4.6
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop",
      title: "Sessão profissional",
      description: "Fotos do estúdio profissional",
      status: "premium",
      price: 35.00,
      views: 1567,
      likes: 198,
      earnings: 890.00,
      uploadDate: "2024-01-08",
      isVip: true,
      rating: 5.0
    }
  ];

  const stats = [
    {
      label: "Total de Fotos",
      value: "234",
      change: "+12",
      trend: "up",
      icon: Camera,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      label: "Views Totais",
      value: "125.8K",
      change: "+25.4%",
      trend: "up", 
      icon: Eye,
      color: "text-green-600 dark:text-green-400"
    },
    {
      label: "Receita do Mês",
      value: "R$ 2.3K",
      change: "+18.3%",
      trend: "up",
      icon: DollarSign,
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      label: "Curtidas",
      value: "8.9K",
      change: "+156",
      trend: "up",
      icon: Heart,
      color: "text-red-600 dark:text-red-400"
    }
  ];

  const handleSelectPhoto = (id: string) => {
    setSelectedPhotos(prev => 
      prev.includes(id) 
        ? prev.filter(photoId => photoId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedPhotos(prev => 
      prev.length === photosData.length ? [] : photosData.map(p => p.id)
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "public": return "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400";
      case "vip": return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400";
      case "premium": return "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400";
      case "private": return "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400";
      default: return "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "public": return <Unlock className="w-3 h-3" />;
      case "vip": return <Crown className="w-3 h-3" />;
      case "premium": return <Star className="w-3 h-3" />;
      case "private": return <Lock className="w-3 h-3" />;
      default: return <Unlock className="w-3 h-3" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-black dark:text-white mb-2">Minhas Fotos</h1>
          <p className="text-gray-600 dark:text-gray-400">Gerencie seu conteúdo visual e maximize seus ganhos</p>
        </div>

        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-hotlovers-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Nova Foto</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-black dark:text-white">{stat.value}</p>
                <p className={`text-xs font-medium ${
                  stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {stat.change}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters & Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          
          {/* Search & Filters */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar fotos..."
                className="w-64 px-4 py-2 pl-10 bg-gray-50 dark:bg-gray-700 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 text-black dark:text-white"
            >
              <option value="all">Todas</option>
              <option value="public">Públicas</option>
              <option value="vip">VIP</option>
              <option value="premium">Premium</option>
              <option value="private">Privadas</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 text-black dark:text-white"
            >
              <option value="recent">Mais recentes</option>
              <option value="views">Mais vistas</option>
              <option value="likes">Mais curtidas</option>
              <option value="earnings">Maior receita</option>
              <option value="rating">Melhor avaliação</option>
            </select>
          </div>

          {/* View Controls */}
          <div className="flex items-center space-x-3">
            {selectedPhotos.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedPhotos.length} selecionadas
                </span>
                <button className="px-3 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="px-3 py-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" 
                    ? 'bg-white dark:bg-gray-600 text-black dark:text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" 
                    ? 'bg-white dark:bg-gray-600 text-black dark:text-white shadow-sm' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Photos Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photosData.map((photo) => (
            <div
              key={photo.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group ${
                selectedPhotos.includes(photo.id) ? 'ring-2 ring-hotlovers-red' : ''
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors">
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <input
                      type="checkbox"
                      checked={selectedPhotos.includes(photo.id)}
                      onChange={() => handleSelectPhoto(photo.id)}
                      className="w-5 h-5 rounded border-2 border-white text-hotlovers-red focus:ring-hotlovers-red bg-white/20 backdrop-blur-sm"
                    />
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(photo.status)}`}>
                      {getStatusIcon(photo.status)}
                      <span className="ml-1 capitalize">{photo.status}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 px-2 py-1 bg-black/50 rounded-full text-white text-xs">
                          <FaEye className="w-3 h-3" />
                          <span>{photo.views}</span>
                        </div>
                        <div className="flex items-center space-x-1 px-2 py-1 bg-black/50 rounded-full text-white text-xs">
                          <FaHeart className="w-3 h-3" />
                          <span>{photo.likes}</span>
                        </div>
                      </div>
                      <button className="w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-black dark:text-white truncate">{photo.title}</h3>
                  {photo.isVip && <FaCrown className="w-4 h-4 text-yellow-500" />}
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{photo.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-lg font-black text-hotlovers-red">R$ {photo.price.toFixed(2)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Receita: R$ {photo.earnings.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{photo.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(photo.uploadDate).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List View
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-100 dark:border-gray-700">
                <tr>
                  <th className="text-left py-4 px-6">
                    <input
                      type="checkbox"
                      checked={selectedPhotos.length === photosData.length}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 dark:border-gray-600 text-hotlovers-red focus:ring-hotlovers-red"
                    />
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Foto</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Preço</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Performance</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Receita</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Ações</th>
                </tr>
              </thead>
              <tbody>
                {photosData.map((photo) => (
                  <tr 
                    key={photo.id}
                    className={`border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      selectedPhotos.includes(photo.id) ? 'bg-hotlovers-red/5 dark:bg-hotlovers-red/10' : ''
                    }`}
                  >
                    <td className="py-4 px-6">
                      <input
                        type="checkbox"
                        checked={selectedPhotos.includes(photo.id)}
                        onChange={() => handleSelectPhoto(photo.id)}
                        className="rounded border-gray-300 dark:border-gray-600 text-hotlovers-red focus:ring-hotlovers-red"
                      />
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-16 h-20 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-black dark:text-white">{photo.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{photo.description}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {new Date(photo.uploadDate).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(photo.status)}`}>
                        {getStatusIcon(photo.status)}
                        <span className="ml-1 capitalize">{photo.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-hotlovers-red">R$ {photo.price.toFixed(2)}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <FaEye className="w-3 h-3 text-gray-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{photo.views}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaHeart className="w-3 h-3 text-red-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{photo.likes}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{photo.rating}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-green-600 dark:text-green-400">R$ {photo.earnings.toFixed(2)}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/20 hover:bg-blue-200 dark:hover:bg-blue-900/40 flex items-center justify-center transition-colors">
                          <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors">
                          <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-colors">
                          <MoreHorizontal className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Mostrando {photosData.length} de 234 fotos
        </p>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-black dark:text-white">
            Anterior
          </button>
          <span className="px-4 py-2 bg-hotlovers-red text-white rounded-lg">1</span>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-black dark:text-white">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}