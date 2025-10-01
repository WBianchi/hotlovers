"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardContent } from "../../../components/admin/dashboard-content";
import { RelatoriosHeader } from "../../../components/admin/relatorios/relatorios-header";
import { RelatoriosStats } from "../../../components/admin/relatorios/relatorios-stats";
import { RelatoriosCharts } from "../../../components/admin/relatorios/relatorios-charts";

export default function AdminRelatoriosPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="p-6 space-y-6">
          {/* Header */}
          <RelatoriosHeader />
          
          {/* Stats Cards */}
          <RelatoriosStats />
          
          {/* Charts */}
          <RelatoriosCharts />
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}
