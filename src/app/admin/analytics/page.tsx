"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardContent } from "../../../components/admin/dashboard-content";
import { AnalyticsHeader } from "../../../components/admin/analytics/analytics-header";
import { MetricsGrid } from "../../../components/admin/analytics/metrics-grid";
import { RevenueAnalytics } from "../../../components/admin/analytics/revenue-analytics";
import { ClicksAnalytics } from "../../../components/admin/analytics/clicks-analytics";
import { ConversionFunnel } from "../../../components/admin/analytics/conversion-funnel";
import { TopPerformers } from "../../../components/admin/analytics/top-performers";
import { RealtimeMetrics } from "../../../components/admin/analytics/realtime-metrics";

export default function AdminAnalyticsPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="p-6 space-y-6">
          {/* Header */}
          <AnalyticsHeader />
          
          {/* Realtime Metrics */}
          <RealtimeMetrics />
          
          {/* Main Metrics Grid */}
          <MetricsGrid />
          
          {/* Charts Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueAnalytics />
            <ClicksAnalytics />
          </div>
          
          {/* Charts Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ConversionFunnel />
            <TopPerformers />
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Insights IA</h3>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">📈 Receita de gorjetas subiu 23% esta semana</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">👥 Modelo "Isabella" teve 45% mais cliques</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-700">🔥 Afiliado "João" converteu 12 novos assinantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}