"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardContent } from "../../../components/admin/dashboard-content";
import { ComissoesHeader } from "../../../components/admin/comissoes/comissoes-header";
import { ComissoesStats } from "../../../components/admin/comissoes/comissoes-stats";
import { ComissoesChart } from "../../../components/admin/comissoes/comissoes-chart";
import { ComissoesTable } from "../../../components/admin/comissoes/comissoes-table";

export default function AdminComissoesPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="p-6 space-y-6">
          {/* Header */}
          <ComissoesHeader />
          
          {/* Stats Cards */}
          <ComissoesStats />
          
          {/* Chart */}
          <ComissoesChart />
          
          {/* Comissões Table */}
          <ComissoesTable />
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}
