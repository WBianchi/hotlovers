"use client";

import { ChatHeader } from "./chat-header";
import { ChatMessages } from "./chat-messages";
import { ChatFooter } from "./chat-footer";

export function ChatMain() {
  return (
    <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
      <ChatHeader />
      <ChatMessages />
      <ChatFooter />
    </div>
  );
}
