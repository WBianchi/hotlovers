"use client";

import { useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";

const languages = [
  { code: "pt-BR", name: "Português", flag: "🇧🇷", nativeName: "Português (Brasil)" },
  { code: "en-US", name: "English", flag: "🇺🇸", nativeName: "English (US)" },
  { code: "es-ES", name: "Español", flag: "🇪🇸", nativeName: "Español" },
  { code: "fr-FR", name: "Français", flag: "🇫🇷", nativeName: "Français" },
  { code: "de-DE", name: "Deutsch", flag: "🇩🇪", nativeName: "Deutsch" },
  { code: "it-IT", name: "Italiano", flag: "🇮🇹", nativeName: "Italiano" }
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  const handleSelectLanguage = (lang: typeof languages[0]) => {
    setCurrentLang(lang);
    setIsOpen(false);
    // TODO: Integrar com i18n
  };
  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 group w-[46px] h-[46px] flex items-center justify-center"
      >
        <div className="text-base">
          {currentLang.flag}
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-14 right-0 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 w-80 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 overflow-hidden">
            
            {/* Header */}
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-hotlovers-red/5 to-pink-500/5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">Selecionar Idioma</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Escolha seu idioma preferido</p>
                </div>
              </div>
            </div>

            {/* Languages List */}
            <div className="p-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 group ${
                    currentLang.code === lang.code
                      ? 'bg-gradient-to-r from-hotlovers-red/10 to-pink-500/10 border-2 border-red-600/30'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Flag */}
                    <div className="text-3xl transform group-hover:scale-125 transition-transform">
                      {lang.flag}
                    </div>
                    
                    {/* Language Info */}
                    <div className="text-left">
                      <p className={`font-bold text-sm ${
                        currentLang.code === lang.code
                          ? 'text-red-600 dark:text-red-400'
                          : 'text-gray-800 dark:text-gray-200'
                      }`}>
                        {lang.nativeName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{lang.name}</p>
                    </div>
                  </div>

                  {/* Check Icon */}
                  {currentLang.code === lang.code && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center animate-in zoom-in duration-200">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                ✨ Tradução automática em {languages.length} idiomas
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
