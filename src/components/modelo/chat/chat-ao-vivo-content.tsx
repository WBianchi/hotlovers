"use client";

import { ChatSidebar } from "./chat-sidebar";
import { ChatMain } from "./chat-main";

export function ChatAoVivoContent() {
  return (
    <div className="h-[calc(100vh-4rem)] p-6">
      <div className="grid grid-cols-12 gap-6 h-full">
        {/* Sidebar - Lista de conversas */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 h-full">
          <ChatSidebar />
        </div>

        {/* Main Chat Area */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 h-full">
          <ChatMain />
        </div>
      </div>
    </div>
  );
}