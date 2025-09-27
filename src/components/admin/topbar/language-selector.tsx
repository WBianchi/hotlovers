"use client";

import { useState } from "react";
import { Globe, Check } from "lucide-react";

const languages = [
  { 
    code: 'pt-BR', 
    name: 'Português (Brasil)', 
    flag: '🇧🇷',
    native: 'Português'
  },
  { 
    code: 'en-US', 
    name: 'English (United States)', 
    flag: '🇺🇸',
    native: 'English'
  },
  { 
    code: 'es-ES', 
    name: 'Español (España)', 
    flag: '🇪🇸',
    native: 'Español'
  },
  { 
    code: 'fr-FR', 
    name: 'Français (France)', 
    flag: '🇫🇷',
    native: 'Français'
  }
];

export function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState('pt-BR');
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find(lang => lang.code === selectedLang) || languages[0];

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-105 group relative overflow-hidden"
      >
        {/* Flag Background */}
        <span className="text-lg group-hover:scale-110 transition-transform">
          {currentLang.flag}
        </span>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
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
          <div className="absolute top-12 right-0 z-20 bg-white rounded-2xl shadow-2xl border border-gray-200/50 p-2 min-w-[280px] backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
            
            {/* Header */}
            <div className="px-3 py-2 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-hotlovers-red" />
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Idioma / Language
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="py-1 max-h-64 overflow-y-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLang(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-left transition-all duration-200 hover:bg-gray-50 group ${
                    selectedLang === lang.code ? 'bg-hotlovers-red/5 border border-hotlovers-red/20' : ''
                  }`}
                >
                  {/* Flag */}
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-lg">{lang.flag}</span>
                  </div>
                  
                  {/* Language Info */}
                  <div className="flex-1">
                    <p className={`font-medium ${selectedLang === lang.code ? 'text-hotlovers-red' : 'text-gray-700'}`}>
                      {lang.native}
                    </p>
                    <p className="text-xs text-gray-500">
                      {lang.name}
                    </p>
                  </div>

                  {/* Selected Indicator */}
                  {selectedLang === lang.code && (
                    <div className="w-6 h-6 bg-hotlovers-gradient rounded-full flex items-center justify-center animate-in zoom-in duration-200">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-3 py-2 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">
                Tradução automática disponível
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}