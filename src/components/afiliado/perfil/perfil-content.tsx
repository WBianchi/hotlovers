"use client";

import { User, Mail, Phone, MapPin, Edit, Camera, Shield, CreditCard } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

export function PerfilContent() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2 flex items-center space-x-3">
            <FaUser className="w-8 h-8 text-red-600" />
            <span>Meu Perfil</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gerencie suas informações e dados bancários
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-black text-gray-900 dark:text-white">Informações Pessoais</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center space-x-2 ${
                isEditing ? "bg-green-600 hover:bg-green-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"
              }`}
            >
              <Edit className="w-5 h-5" />
              <span>{isEditing ? "Salvar" : "Editar"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
              <input type="text" disabled={!isEditing} defaultValue="Carlos Afiliado" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-600/30 disabled:opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">E-mail</label>
              <input type="email" disabled={!isEditing} defaultValue="carlos@afiliado.com" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-red-600/30 disabled:opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
