"use client";

import { useState } from "react";
import { 
  Video, Upload, Grid3X3, List, Filter, Search, MoreHorizontal,
  Eye, Heart, DollarSign, Star, Crown, Zap, Plus, Edit, Trash2,
  Download, Share, Lock, Unlock, Calendar, TrendingUp, Play,
  Clock, Volume2, Maximize
} from "lucide-react";
import { FaCrown, FaFire, FaHeart, FaEye, FaPlay } from "react-icons/fa";
import { useLanguage } from "../../../contexts/language-context";

export function VideosContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const { t } = useLanguage();

  // Mock data - depois vem da API
  const videosData = [
    {
      id: "1",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c96d8e42?w=400&h=300&fit=crop",
      title: "Good morning ☀️",
      description: "Vídeo especial do bom dia para meus fãs",
      status: "public",
      price: 25.00,
      duration: "02:45",
      views: 5240,
      likes: 298,
      earnings: 1250.00,
      uploadDate: "2024-01-15",
      isVip: false,
      rating: 4.9,
      type: "video"
    },
    {
      id: "2", 
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
      title: "Live Especial VIP",
      description: "Live exclusiva para assinantes VIP",
      status: "vip",
      price: 45.00,
      duration: "15:30",
      views: 2890,
      likes: 456,
      earnings: 2340.00,
      uploadDate: "2024-01-12",
      isVip: true,
      rating: 5.0,
      type: "live"
    },
    {
      id: "3",
      thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop",
      title: "Tutorial de Maquiagem",
      description: "Como fazer uma make perfeita",
      status: "public",
      price: 15.00,
      duration: "08:12",
      views: 7210,
      likes: 189,
      earnings: 890.00,
      uploadDate: "2024-01-10",
      isVip: false,
      rating: 4.7,
      type: "video"
    },
    {
      id: "4",
      thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
      title: "Ensaio Premium",
      description: "Conteúdo exclusivo premium",
      status: "premium",
      price: 65.00,
      duration: "12:45",
      views: 1567,
      likes: 234,
      earnings: 3250.00,
      uploadDate: "2024-01-08",
      isVip: true,
      rating: 5.0,
      type: "video"
    }
  ];

  const stats = [
    {
      label: "Total de Vídeos",
      value: "67",
      change: "+5",
      trend: "up",
      icon: Video,
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      label: "Views Totais",
      value: "89.2K",
      change: "+32.1%",
      trend: "up", 
      icon: Eye,
      color: "text-green-600 dark:text-green-400"
    },
    {
      label: "Receita do Mês",
      value: "R$ 4.8K",
      change: "+28.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      label: "Tempo Total",
      value: "12.5h",
      change: "+2.3h",
      trend: "up",
      icon: Clock,
      color: "text-blue-600 dark:text-blue-400"
    }
  ];

  const handleSelectVideo = (id: string) => {
    setSelectedVideos(prev => 
      prev.includes(id) 
        ? prev.filter(videoId => videoId !== id)
        : [...prev, videoId]
    );
  };

  const handleSelectAll = () => {
    setSelectedVideos(prev => 
      prev.length === videosData.length ? [] : videosData.map(v => v.id)
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video": return "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400";
      case "live": return "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400";
      default: return "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-400";
    }
  };

  const formatDuration = (duration: string) => {
    return duration;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-black dark:text-white mb-2">Meus Vídeos</h1>
          <p className="text-gray-600 dark:text-gray-400">Gerencie seu conteúdo em vídeo e maximize seus ganhos</p>
        </div>

        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2">
            <Video className="w-4 h-4" />
            <span>Iniciar Live</span>
          </button>
          <button className="px-4 py-2 bg-hotlovers-red text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Novo Vídeo</span>
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
                placeholder="Buscar vídeos..."
                className="w-64 px-4 py-2 pl-10 bg-gray-50 dark:bg-gray-700 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 text-black dark:text-white"
            >
              <option value="all">Todos</option>
              <option value="public">Públicos</option>
              <option value="vip">VIP</option>
              <option value="premium">Premium</option>
              <option value="private">Privados</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-50 dark:bg-gray-700 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-hotlovers-red/20 text-black dark:text-white"
            >
              <option value="recent">Mais recentes</option>
              <option value="views">Mais vistos</option>
              <option value="likes">Mais curtidos</option>
              <option value="earnings">Maior receita</option>
              <option value="duration">Duração</option>
            </select>
          </div>

          {/* View Controls */}
          <div className="flex items-center space-x-3">
            {selectedVideos.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedVideos.length} selecionados
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

      {/* Videos Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosData.map((video) => (
            <div
              key={video.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group ${
                selectedVideos.includes(video.id) ? 'ring-2 ring-hotlovers-red' : ''
              }`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaPlay className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>

                {/* Top Overlays */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <input
                    type="checkbox"
                    checked={selectedVideos.includes(video.id)}
                    onChange={() => handleSelectVideo(video.id)}
                    className="w-5 h-5 rounded border-2 border-white text-hotlovers-red focus:ring-hotlovers-red bg-white/20 backdrop-blur-sm"
                  />
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(video.type)}`}>
                      {video.type === 'live' ? '🔴 LIVE' : '📹 VÍDEO'}
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(video.status)}`}>
                      {getStatusIcon(video.status)}
                      <span className="ml-1 capitalize">{video.status}</span>
                    </span>
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3">
                  <div className="px-2 py-1 bg-black/70 rounded text-white text-xs font-medium">
                    {formatDuration(video.duration)}
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-black/50 rounded-full text-white text-xs">
                      <FaEye className="w-3 h-3" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 px-2 py-1 bg-black/50 rounded-full text-white text-xs">
                      <FaHeart className="w-3 h-3" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-black dark:text-white truncate">{video.title}</h3>
                  {video.isVip && <FaCrown className="w-4 h-4 text-yellow-500" />}
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{video.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-lg font-black text-hotlovers-red">R$ {video.price.toFixed(2)}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Receita: R$ {video.earnings.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{video.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(video.uploadDate).toLocaleDateString('pt-BR')}
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
                      checked={selectedVideos.length === videosData.length}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 dark:border-gray-600 text-hotlovers-red focus:ring-hotlovers-red"
                    />
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Vídeo</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Tipo</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Duração</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Performance</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Receita</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-700 dark:text-gray-300">Ações</th>
                </tr>
              </thead>
              <tbody>
                {videosData.map((video) => (
                  <tr 
                    key={video.id}
                    className={`border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      selectedVideos.includes(video.id) ? 'bg-hotlovers-red/5 dark:bg-hotlovers-red/10' : ''
                    }`}
                  >
                    <td className="py-4 px-6">
                      <input
                        type="checkbox"
                        checked={selectedVideos.includes(video.id)}
                        onChange={() => handleSelectVideo(video.id)}
                        className="rounded border-gray-300 dark:border-gray-600 text-hotlovers-red focus:ring-hotlovers-red"
                      />
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-20 h-14 rounded-lg object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                            <FaPlay className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-black dark:text-white">{video.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{video.description}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {new Date(video.uploadDate).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(video.type)}`}>
                        {video.type === 'live' ? '🔴 LIVE' : '📹 VÍDEO'}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(video.status)}`}>
                        {getStatusIcon(video.status)}
                        <span className="ml-1 capitalize">{video.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-medium text-black dark:text-white">{formatDuration(video.duration)}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <FaEye className="w-3 h-3 text-gray-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{video.views}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaHeart className="w-3 h-3 text-red-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{video.likes}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{video.rating}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-bold text-hotlovers-red">R$ {video.price.toFixed(2)}</p>
                        <p className="text-xs text-green-600 dark:text-green-400">R$ {video.earnings.toFixed(2)}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/20 hover:bg-blue-200 dark:hover:bg-blue-900/40 flex items-center justify-center transition-colors">
                          <Play className="w-4 h-4 text-blue-600 dark:text-blue-400" />
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
          Mostrando {videosData.length} de 67 vídeos
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