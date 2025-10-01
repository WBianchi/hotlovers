"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardContent } from "../../../components/admin/dashboard-content";
import { ConfiguracoesHeader } from "../../../components/admin/configuracoes/configuracoes-header";
import { ConfiguracoesCards } from "../../../components/admin/configuracoes/configuracoes-cards";

export default function AdminConfiguracoesPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="p-6 space-y-6">
          {/* Header */}
          <ConfiguracoesHeader />
          
          {/* Configuration Cards */}
          <ConfiguracoesCards />
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}
