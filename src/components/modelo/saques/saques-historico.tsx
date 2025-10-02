"use client";

import { Calendar, CheckCircle, Clock, XCircle, DollarSign } from "lucide-react";

const mockSaques = [
  {
    id: 1,
    valor: 2500.00,
    data: "15/09/2024",
    status: "aprovado",
    metodo: "PIX",
    taxaPlataforma: 250.00,
    valorLiquido: 2250.00
  },
  {
    id: 2,
    valor: 1800.00,
    data: "01/09/2024",
    status: "processando",
    metodo: "Transferência Bancária",
    taxaPlataforma: 180.00,
    valorLiquido: 1620.00
  },
  {
    id: 3,
    valor: 3200.00,
    data: "20/08/2024",
    status: "aprovado",
    metodo: "PIX",
    taxaPlataforma: 320.00,
    valorLiquido: 2880.00
  },
  {
    id: 4,
    valor: 1500.00,
    data: "10/08/2024",
    status: "rejeitado",
    metodo: "PIX",
    taxaPlataforma: 150.00,
    valorLiquido: 1350.00
  }
];

export function SaquesHistorico() {
  const getStatusBadge = (status: string) => {
    if (status === "aprovado") return { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-600", icon: CheckCircle };
    if (status === "processando") return { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-600", icon: Clock };
    return { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-600", icon: XCircle };
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-black text-gray-800 dark:text-gray-100">Histórico de Saques</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Últimas solicitações</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Data
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Valor Bruto
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Taxa (10%)
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Valor Líquido
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Método
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {mockSaques.map((saque) => {
              const statusInfo = getStatusBadge(saque.status);
              
              return (
                <tr key={saque.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-700 dark:text-gray-300">
                      <Calendar className="w-3 h-3" />
                      <span className="font-semibold">{saque.data}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-800 dark:text-gray-100">R$ {saque.valor.toFixed(2)}</span>
                  </td>
                  
                  <td className="px-6 py-4">
                    <span className="text-sm text-red-600 font-semibold">- R$ {saque.taxaPlataforma.toFixed(2)}</span>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4 text-emerald-600" />
                      <span className="text-lg font-black text-emerald-600">R$ {saque.valorLiquido.toFixed(2)}</span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{saque.metodo}</span>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full w-fit ${statusInfo.bg}`}>
                      <statusInfo.icon className={`w-4 h-4 ${statusInfo.text}`} />
                      <span className={`text-xs font-bold uppercase ${statusInfo.text}`}>
                        {saque.status}
                      </span>
                    </div>
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
