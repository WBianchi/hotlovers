"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardContent } from "../../../components/admin/dashboard-content";
import { PagamentosHeader } from "../../../components/admin/pagamentos/pagamentos-header";
import { PagamentosStats } from "../../../components/admin/pagamentos/pagamentos-stats";
import { PagamentosChart } from "../../../components/admin/pagamentos/pagamentos-chart";
import { PagamentosTable } from "../../../components/admin/pagamentos/pagamentos-table";

export default function AdminPagamentosPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="p-6 space-y-6">
          {/* Header */}
          <PagamentosHeader />
          
          {/* Stats Cards */}
          <PagamentosStats />
          
          {/* Chart */}
          <PagamentosChart />
          
          {/* Pagamentos Table */}
          <PagamentosTable />
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}
