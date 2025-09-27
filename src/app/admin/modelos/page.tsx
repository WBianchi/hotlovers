"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardContent } from "../../../components/admin/dashboard-content";
import { ModelosHeader } from "../../../components/admin/modelos/modelos-header";
import { ModelosStats } from "../../../components/admin/modelos/modelos-stats";
import { ModelosTable } from "../../../components/admin/modelos/modelos-table";
import { ModelosFilters } from "../../../components/admin/modelos/modelos-filters";

export default function AdminModelosPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="p-6 space-y-6">
          {/* Header */}
          <ModelosHeader />
          
          {/* Stats Cards */}
          <ModelosStats />
          
          {/* Filters */}
          <ModelosFilters />
          
          {/* Modelos Table */}
          <ModelosTable />
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}