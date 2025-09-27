"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardHeader } from "../../../components/admin/dashboard/dashboard-header";
import { StatsGrid } from "../../../components/admin/dashboard/stats-grid";
import { RevenueChart } from "../../../components/admin/dashboard/revenue-chart";
import { RecentActivity } from "../../../components/admin/dashboard/recent-activity";
import { QuickActions } from "../../../components/admin/dashboard/quick-actions";
import { TopModels } from "../../../components/admin/dashboard/top-models";
import { SystemHealth } from "../../../components/admin/dashboard/system-health";
import { DashboardContent } from "../../../components/admin/dashboard-content";

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="p-6 space-y-6">
          {/* Header */}
          <DashboardHeader />
          
          {/* Stats Grid */}
          <StatsGrid />
          
          {/* Charts & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            <RecentActivity />
          </div>
          
          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <QuickActions />
            <TopModels />
            <SystemHealth />
          </div>
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}