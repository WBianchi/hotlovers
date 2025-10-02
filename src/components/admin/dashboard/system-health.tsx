"use client";

import { Activity, Server, Database, Wifi, Shield, CheckCircle, AlertTriangle } from "lucide-react";

const systemMetrics = [
  {
    name: "API Server",
    status: "healthy",
    uptime: "99.9%",
    responseTime: "120ms",
    icon: Server,
    color: "green"
  },
  {
    name: "Database", 
    status: "healthy",
    uptime: "99.8%",
    responseTime: "45ms",
    icon: Database,
    color: "green"
  },
  {
    name: "CDN",
    status: "healthy", 
    uptime: "100%",
    responseTime: "35ms",
    icon: Wifi,
    color: "green"
  },
  {
    name: "Security",
    status: "warning",
    uptime: "98.5%", 
    responseTime: "200ms",
    icon: Shield,
    color: "orange"
  }
];

const recentAlerts = [
  {
    type: "info",
    message: "Backup automático concluído",
    time: "5 min atrás"
  },
  {
    type: "warning", 
    message: "Alto uso de CPU detectado",
    time: "1 hora atrás"
  },
  {
    type: "success",
    message: "Atualização de segurança aplicada",
    time: "2 horas atrás"
  }
];

export function SystemHealth() {
  const healthyCount = systemMetrics.filter(m => m.status === "healthy").length;
  const healthPercentage = Math.round((healthyCount / systemMetrics.length) * 100);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50 dark:border-gray-700/50 dark:border-gray-700/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">System Health</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Status dos serviços</p>
          </div>
        </div>
        
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${
          healthPercentage >= 90 ? 'bg-green-100 text-green-700' :
          healthPercentage >= 70 ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'
        }`}>
          {healthPercentage >= 90 ? 
            <CheckCircle className="w-4 h-4" /> :
            <AlertTriangle className="w-4 h-4" />
          }
          <span>{healthPercentage}%</span>
        </div>
      </div>

      {/* System Metrics */}
      <div className="space-y-3 mb-6">
        {systemMetrics.map((metric) => (
          <div
            key={metric.name}
            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-900 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                metric.color === 'green' ? 'bg-green-100' :
                metric.color === 'orange' ? 'bg-orange-100' :
                'bg-red-100'
              }`}>
                <metric.icon className={`w-4 h-4 ${
                  metric.color === 'green' ? 'text-green-600' :
                  metric.color === 'orange' ? 'text-orange-600' :
                  'text-red-600'
                }`} />
              </div>
              
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-100">{metric.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Uptime: {metric.uptime}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                metric.status === 'healthy' ? 'bg-green-100 text-green-700' :
                metric.status === 'warning' ? 'bg-orange-100 text-orange-700' :
                'bg-red-100 text-red-700'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  metric.status === 'healthy' ? 'bg-green-500 animate-pulse' :
                  metric.status === 'warning' ? 'bg-orange-500' :
                  'bg-red-500'
                }`}></div>
                <span className="capitalize">{metric.status}</span>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 dark:text-gray-400 mt-1">{metric.responseTime}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Alerts */}
      <div>
        <h4 className="font-semibold text-gray-800 dark:text-gray-100 dark:text-gray-100 mb-3 flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-orange-500" />
          <span>Alertas Recentes</span>
        </h4>
        
        <div className="space-y-2 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
          {recentAlerts.map((alert, index) => (
            <div key={index} className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:bg-gray-800 dark:hover:bg-gray-800">
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                alert.type === 'success' ? 'bg-green-500' :
                alert.type === 'warning' ? 'bg-orange-500' :
                alert.type === 'info' ? 'bg-blue-500' :
                'bg-red-500'
              }`}></div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800 dark:text-gray-100">{alert.message}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 dark:border-gray-700 text-center">
        <button className="text-sm text-hotlovers-red hover:text-hotlovers-red/80 font-medium">
          Ver logs detalhados
        </button>
      </div>
    </div>
  );
}