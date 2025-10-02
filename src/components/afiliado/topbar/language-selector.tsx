"use client";

import { useState } from "react";
import { Globe, Check } from "lucide-react";

const languages = [
  { code: "pt-BR", name: "Português", flag: "🇧🇷", nativeName: "Português (Brasil)" },
  { code: "en-US", name: "English", flag: "🇺🇸", nativeName: "English (US)" },
  { code: "es-ES", name: "Español", flag: "🇪🇸", nativeName: "Español" }
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  const handleSelectLanguage = (lang: typeof languages[0]) => {
    setCurrentLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all hover:scale-105 group w-[46px] h-[46px] flex items-center justify-center"
      >
        <div className="text-base">
          {currentLang.flag}
        </div>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          
          <div className="absolute top-14 right-0 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-80 overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">Selecionar Idioma</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Escolha seu idioma</p>
                </div>
              </div>
            </div>

            <div className="p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all group ${
                    currentLang.code === lang.code
                      ? 'bg-red-50 dark:bg-red-900/20 border-2 border-red-600/30'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{lang.flag}</div>
                    <div className="text-left">
                      <p className={`font-bold text-sm ${
                        currentLang.code === lang.code ? 'text-red-600' : 'text-gray-800 dark:text-gray-200'
                      }`}>
                        {lang.nativeName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{lang.name}</p>
                    </div>
                  </div>
                  {currentLang.code === lang.code && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
