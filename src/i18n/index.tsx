import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { coreTranslations } from './pages-core';
import { otherTranslations } from './pages-other';
import { sharedTranslations } from './shared';

export type Language = 'en' | 'ms' | 'zh';
export type Translations = Record<string, { en: string; zh: string }>;
export const LANGUAGE_STORAGE_KEY = 'pertama-jaya-language';
const translations: Translations = { ...coreTranslations, ...otherTranslations, ...sharedTranslations };
const isLanguage = (value: unknown): value is Language => value === 'en' || value === 'ms' || value === 'zh';
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (source: string) => string } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, updateLanguage] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return isLanguage(saved) ? saved : 'en';
    } catch { return 'en'; }
  });
  const setLanguage = useCallback((next: Language) => {
    if (!isLanguage(next)) return;
    updateLanguage(next);
    try { window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next); } catch { /* Storage may be disabled. Keep the in-memory preference. */ }
  }, []);
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : language;
  }, [language]);
  const t = useCallback((source: string): string => {
    if (language === 'ms') return source;
    const key = source.replace(/\s+/g, ' ').trim();
    const translated = translations[key]?.[language];
    if (translated === undefined) return source;
    return (source.match(/^\s*/)?.[0] ?? '') + translated + (source.match(/\s*$/)?.[0] ?? '');
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
