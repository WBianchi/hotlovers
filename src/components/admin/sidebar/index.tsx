"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SidebarLogo } from "./logo";
import { NavigationMenu } from "./navigation-menu";
import { SidebarFooter } from "./footer";

// Context para compartilhar o estado da sidebar
export const SidebarContext = createContext<{
  isExpanded: boolean;
  toggleSidebar: () => void;
}>({
  isExpanded: true,
  toggleSidebar: () => {}
});

export const useSidebar = () => useContext(SidebarContext);

export function AdminSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setIsExpanded(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <SidebarContext.Provider value={{ isExpanded, toggleSidebar }}>
      {/* Mobile Overlay */}
      {isMobile && isExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 bottom-0 z-50 bg-white border-r border-gray-200/50 shadow-xl transition-all duration-300 ease-in-out ${
          isExpanded ? 'w-72' : 'w-16'
        } ${isMobile && !isExpanded ? '-translate-x-full' : ''}`}
      >
        
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-20 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 z-10"
        >
          {isExpanded ? (
            <ChevronLeft className="w-3 h-3 text-gray-600" />
          ) : (
            <ChevronRight className="w-3 h-3 text-gray-600" />
          )}
        </button>

        <div className="flex flex-col h-full">
          {/* Logo */}
          <SidebarLogo isExpanded={isExpanded} />
          
          {/* Navigation */}
          <div className="flex-1 overflow-hidden">
            <NavigationMenu isExpanded={isExpanded} />
          </div>
          
          {/* Footer */}
          <SidebarFooter isExpanded={isExpanded} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none"></div>
      </aside>
    </SidebarContext.Provider>
  );
}