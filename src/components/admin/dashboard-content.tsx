"use client";

import { useSidebar } from "./sidebar";

interface DashboardContentProps {
  children: React.ReactNode;
}

export function DashboardContent({ children }: DashboardContentProps) {
  const { isExpanded } = useSidebar();

  return (
    <div 
      className={`transition-all duration-300 ease-in-out ${
        isExpanded ? 'ml-72' : 'ml-16'
      }`}
    >
      {children}
    </div>
  );
}