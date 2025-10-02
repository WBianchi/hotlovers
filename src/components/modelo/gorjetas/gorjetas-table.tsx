"use client";

import { Heart, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";

const mockGorjetas = [
  {
    id: 1,
    cliente: "João Silva",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    valor: 500.00,
    data: "20/09/2024",
    hora: "14:35",
    status: "confirmado",
    mensagem: "Você é incrível! ❤️"
  },
  {
    id: 2,
    cliente: "Carlos Lima",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    valor: 200.00,
    data: "19/09/2024",
    hora: "18:20",
    status: "confirmado",
    mensagem: "Obrigado pelo conteúdo!"
  },
  {
    id: 3,
    cliente: "Pedro Costa",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    valor: 100.00,
    data: "18/09/2024",
    hora: "20:15",
    status: "pendente",
    mensagem: null
  },
  {
    id: 4,
    cliente: "Rafael Oliveira",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    valor: 50.00,
    data: "17/09/2024",
    hora: "16:45",
    status: "confirmado",
    mensagem: "Maravilhosa! 😍"
  }
];

export function GorjetasTable() {
  const getStatusBadge = (status: string) => {
    if (status === "confirmado") return { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600", icon: CheckCircle };
    if (status === "pendente") return { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-600", icon: Clock };
    return { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-600", icon: XCircle };
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Valor
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Data & Hora
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Mensagem
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {mockGorjetas.map((gorjeta) => {
              const statusInfo = getStatusBadge(gorjeta.status);
              
              return (
                <tr key={gorjeta.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={gorjeta.avatar}
                        alt={gorjeta.cliente}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-gray-800 shadow"
                      />
                      <p className="font-bold text-gray-800 dark:text-gray-100">{gorjeta.cliente}</p>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-red-600 fill-current" />
                      <span className="text-xl font-black text-red-600">R$ {gorjeta.valor.toFixed(2)}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-1 text-sm text-gray-700 dark:text-gray-300">
                        <Calendar className="w-3 h-3" />
                        <span className="font-semibold">{gorjeta.data}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{gorjeta.hora}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full w-fit ${statusInfo.bg}`}>
                      <statusInfo.icon className={`w-4 h-4 ${statusInfo.text}`} />
                      <span className={`text-xs font-bold uppercase ${statusInfo.text}`}>
                        {gorjeta.status}
                      </span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    {gorjeta.mensagem ? (
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">"{gorjeta.mensagem}"</p>
                    ) : (
                      <span className="text-xs text-gray-400 dark:text-gray-500">Sem mensagem</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
