"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardContent } from "../../../components/admin/dashboard-content";
import { IntegracoesHeader } from "../../../components/admin/integracoes/integracoes-header";
import { IntegracoesCards } from "../../../components/admin/integracoes/integracoes-cards";

export default function AdminIntegracoesPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="p-6 space-y-6">
          {/* Header */}
          <IntegracoesHeader />
          
          {/* Integration Cards */}
          <IntegracoesCards />
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}
