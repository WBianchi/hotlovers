"use client";

import { Camera, Upload, X } from "lucide-react";

export function PerfilFotos() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-black text-gray-800 dark:text-gray-100">Fotos do Perfil</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Personalize sua identidade visual</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Foto de Capa - Banner Wide */}
        <div>
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
            Foto de Capa (Banner)
          </label>
          <div className="relative group">
            <div className="w-full h-48 bg-gradient-to-br from-red-600 via-pink-600 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <Upload className="w-12 h-12 text-white/50 mx-auto mb-2" />
                <p className="text-sm text-white/70 font-semibold">Clique para adicionar capa</p>
                <p className="text-xs text-white/50">Recomendado: 1920x400px</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
              <button className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-800 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg">
                <Upload className="w-5 h-5" />
                <span>Upload Capa</span>
              </button>
            </div>
          </div>
        </div>

        {/* Foto de Perfil - Circular */}
        <div>
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
            Foto de Perfil
          </label>
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <img
                src="/image.jpg"
                alt="Perfil"
                className="w-32 h-32 rounded-full object-cover shadow-xl ring-4 ring-white dark:ring-gray-800"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
                <button className="p-3 bg-white rounded-full hover:scale-110 transition-all shadow-lg">
                  <Camera className="w-6 h-6 text-gray-800" />
                </button>
              </div>
            </div>
            
            <div className="flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Escolha uma foto que represente você. Esta será exibida em todo o site.
              </p>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:scale-105 transition-all shadow-lg">
                  <Camera className="w-4 h-4" />
                  <span>Alterar Foto</span>
                </button>
                <button className="p-2 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-xl transition-all">
                  <X className="w-4 h-4 text-red-600" />
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Recomendado: 400x400px • Máximo: 5MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
