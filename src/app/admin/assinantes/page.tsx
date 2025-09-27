"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardContent } from "../../../components/admin/dashboard-content";
import { AssinantesHeader } from "../../../components/admin/assinantes/assinantes-header";
import { AssinantesStats } from "../../../components/admin/assinantes/assinantes-stats";
import { AssinantesFilters } from "../../../components/admin/assinantes/assinantes-filters";
import { AssinantesTable } from "../../../components/admin/assinantes/assinantes-table";
import { PlansOverview } from "../../../components/admin/assinantes/plans-overview";

export default function AdminAssinantesPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="p-6 space-y-6">
          {/* Header */}
          <AssinantesHeader />
          
          {/* Stats Cards */}
          <AssinantesStats />
          
          {/* Plans Overview */}
          <PlansOverview />
          
          {/* Filters */}
          <AssinantesFilters />
          
          {/* Assinantes Table */}
          <AssinantesTable />
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}