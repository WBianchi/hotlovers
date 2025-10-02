"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type Theme = 'light' | 'dark' | 'system';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [isOpen, setIsOpen] = useState(false);

  // Aplicar tema no carregamento
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  // Função para aplicar o tema
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else if (newTheme === 'light') {
      root.classList.remove('dark');
    } else {
      // System theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
    
    // Salvar no localStorage
    localStorage.setItem('theme', newTheme);
  };

  // Handler para mudar o tema
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const themes = [
    { id: 'light', label: 'Light', icon: Sun, color: 'text-yellow-500' },
    { id: 'dark', label: 'Dark', icon: Moon, color: 'text-indigo-500' },
    { id: 'system', label: 'System', icon: Monitor, color: 'text-gray-500' }
  ] as const;

  const currentTheme = themes.find(t => t.id === theme) || themes[0];

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center transition-all duration-200 hover:scale-105 group"
      >
        <currentTheme.icon className={`w-5 h-5 ${currentTheme.color} transition-transform group-hover:rotate-12`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-12 right-0 z-20 bg-white dark:bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-2 min-w-[180px] backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
            
            {/* Header */}
            <div className="px-3 py-2 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Aparência
              </p>
            </div>

            {/* Options */}
            <div className="py-1">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.id}
                  onClick={() => handleThemeChange(themeOption.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 group ${
                    theme === themeOption.id ? 'bg-hotlovers-red/5 border border-hotlovers-red/20' : ''
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform ${
                    theme === themeOption.id ? 'bg-hotlovers-gradient' : ''
                  }`}>
                    <themeOption.icon className={`w-4 h-4 transition-colors ${
                      theme === themeOption.id ? 'text-white' : themeOption.color
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <p className={`font-medium ${theme === themeOption.id ? 'text-hotlovers-red' : 'text-gray-700'}`}>
                      {themeOption.label}
                    </p>
                    <p className="text-xs text-gray-500">
                      {themeOption.id === 'light' && 'Tema claro'}
                      {themeOption.id === 'dark' && 'Tema escuro'} 
                      {themeOption.id === 'system' && 'Seguir sistema'}
                    </p>
                  </div>

                  {theme === themeOption.id && (
                    <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-3 py-2 border-t border-gray-100">
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
                Preferência salva automaticamente
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}