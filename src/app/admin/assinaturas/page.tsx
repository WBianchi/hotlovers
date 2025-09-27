"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardContent } from "../../../components/admin/dashboard-content";
import { AssinaturasHeader } from "../../../components/admin/assinaturas/assinaturas-header";
import { AssinaturasStats } from "../../../components/admin/assinaturas/assinaturas-stats";
import { RevenueFlow } from "../../../components/admin/assinaturas/revenue-flow";
import { AssinaturasTable } from "../../../components/admin/assinaturas/assinaturas-table";
import { PlansComparison } from "../../../components/admin/assinaturas/plans-comparison";

export default function AdminAssinaturasPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="p-6 space-y-6">
          {/* Header */}
          <AssinaturasHeader />
          
          {/* Stats Cards */}
          <AssinaturasStats />
          
          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueFlow />
            <PlansComparison />
          </div>
          
          {/* Assinaturas Table */}
          <AssinaturasTable />
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}