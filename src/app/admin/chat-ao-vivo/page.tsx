"use client";

import { AdminLayout } from "../../../components/admin/admin-layout";
import { DashboardContent } from "../../../components/admin/dashboard-content";
import { ChatHeader } from "../../../components/admin/chat/chat-header";
import { ChatSidebar } from "../../../components/admin/chat/chat-sidebar";
import { ChatArea } from "../../../components/admin/chat/chat-area";

export default function AdminChatAoVivoPage() {
  return (
    <AdminLayout>
      <DashboardContent>
        <div className="h-[calc(100vh-80px)] flex flex-col p-6">
          {/* Header */}
          <ChatHeader />
          
          {/* Chat Container */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 overflow-hidden">
            {/* Sidebar - Lista de Conversas */}
            <ChatSidebar />
            
            {/* Chat Area */}
            <ChatArea />
          </div>
        </div>
      </DashboardContent>
    </AdminLayout>
  );
}
