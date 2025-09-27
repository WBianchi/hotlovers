"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardContent } from "../../../components/admin/dashboard-content";
import { AfiliadosHeader } from "../../../components/admin/afiliados/afiliados-header";
import { AfiliadosStats } from "../../../components/admin/afiliados/afiliados-stats";
import { ComissionsChart } from "../../../components/admin/afiliados/comissions-chart";
import { AfiliadosTable } from "../../../components/admin/afiliados/afiliados-table";
import { TopAffiliates } from "../../../components/admin/afiliados/top-affiliates";

export default function AdminAfiliadosPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="p-6 space-y-6">
          {/* Header */}
          <AfiliadosHeader />
          
          {/* Stats Cards */}
          <AfiliadosStats />
          
          {/* Charts & Top Affiliates */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ComissionsChart />
            <TopAffiliates />
          </div>
          
          {/* Afiliados Table */}
          <AfiliadosTable />
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}