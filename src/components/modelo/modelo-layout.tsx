"use client";

import { ModeloTopbar } from "./topbar/modelo-topbar";
import { ModeloSidebar } from "./sidebar/modelo-sidebar";
import { ThemeProvider } from "../../contexts/theme-context";
import { LanguageProvider } from "../../contexts/language-context";
import { SidebarProvider, useSidebar } from "../../contexts/sidebar-context";

interface ModeloLayoutProps {
  children: React.ReactNode;
}

function ModeloLayoutContent({ children }: ModeloLayoutProps) {
  const { isExpanded } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Modelo Topbar */}
      <ModeloTopbar />

      {/* Layout Container */}
      <div className="flex">
        {/* Modelo Sidebar */}
        <ModeloSidebar />

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${
          isExpanded ? 'lg:ml-64' : 'lg:ml-16'
        }`}>
          <div className="pt-16"> {/* Space for fixed topbar */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export function ModeloLayout({ children }: ModeloLayoutProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SidebarProvider>
          <ModeloLayoutContent>{children}</ModeloLayoutContent>
        </SidebarProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}