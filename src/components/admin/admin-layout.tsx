"use client";

import { AdminTopbar } from "./topbar";
import { AdminSidebar } from "./sidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Topbar */}
      <AdminTopbar />
      
      {/* Sidebar */}
      <AdminSidebar />
      
      {/* Main Content */}
      <main className="pt-16 transition-all duration-300">
        <div className="w-full">
          {children}
        </div>
      </main>
    </div>
  );
}