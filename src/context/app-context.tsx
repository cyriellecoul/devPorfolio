
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/lib/translations';

type Theme = 'light' | 'dark';

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Language>('en');

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const savedLang = localStorage.getItem('lang') as Language;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark if no preference
      setTheme('dark');
    }
    
    if (savedLang) setLang(savedLang);
  }, []);

  // Update HTML class when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const t = translations[lang];

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, setLang, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppContextProvider');
  return context;
}
