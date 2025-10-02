"use client";

import { Shield, Eye, EyeOff, Lock } from "lucide-react";

export function PerfilPrivacidade() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <Shield className="w-6 h-6 text-red-600" />
          <div>
            <h2 className="text-xl font-black text-gray-800 dark:text-gray-100">Privacidade & Segurança</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Configure suas preferências de privacidade</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Perfil Público */}
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <div>
              <p className="font-bold text-gray-800 dark:text-gray-100">Perfil Público</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Seu perfil aparece nas buscas</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
          </label>
        </div>

        {/* Mostrar Online */}
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="font-bold text-gray-800 dark:text-gray-100">Mostrar Status Online</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Assinantes veem quando você está online</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
        </div>

        {/* Conteúdo Privado */}
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <div>
              <p className="font-bold text-gray-800 dark:text-gray-100">Conteúdo Apenas para Assinantes</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ocultar preview de fotos/vídeos</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
          </label>
        </div>

        {/* Bloquear Países */}
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <div className="flex items-center space-x-3">
            <EyeOff className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <div>
              <p className="font-bold text-gray-800 dark:text-gray-100">Bloquear Países Específicos</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ocultar perfil em determinados países</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-sm font-semibold text-gray-700 dark:text-gray-300 transition-all">
            Configurar
          </button>
        </div>

        {/* Alterar Senha */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all font-semibold text-gray-700 dark:text-gray-300">
            <Lock className="w-5 h-5" />
            <span>Alterar Senha</span>
          </button>
        </div>
      </div>
    </div>
  );
}
