"use client";

import { Settings, Shield, Bell, CreditCard } from "lucide-react";
import { FaCog } from "react-icons/fa";

export function ConfiguracoesContent() {
  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center space-x-3">
            <FaCog className="w-8 h-8 text-red-600" />
            <span>Configurações</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Personalize sua experiência como afiliado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">Segurança</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Proteja sua conta</p>
              </div>
            </div>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-left transition-all">
                Alterar Senha
              </button>
              <button className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl font-bold text-left transition-all">
                Autenticação 2FA
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">Notificações</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gerencie alertas</p>
              </div>
            </div>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Novas vendas</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-600" />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Comissões aprovadas</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-red-600 focus:ring-red-600" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
