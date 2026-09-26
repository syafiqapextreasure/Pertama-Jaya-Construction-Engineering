import { useLanguage as useRenderLanguage } from '../i18n';
import { localizeTree } from '../i18n/render';
import React, { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import { SITE_CONFIG } from '../config/site';
import { useLanguage, type Language } from '../i18n';
import { Menu, X, MessageSquare, Phone, ChevronRight, Languages } from 'lucide-react';

interface HeaderProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenWhatsApp: () => void;
}

function LanguageSelector({ id }: { id: string }) {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className="flex items-center gap-2 shrink-0">
      <Languages className="w-5 h-5 text-cyan-400" aria-hidden="true" />
      <label htmlFor={id} className="sr-only">{t('Pilih bahasa')}</label>
      <select id={id} value={language} onChange={event => setLanguage(event.target.value as Language)} className="min-h-[44px] rounded-md border border-slate-700 bg-slate-900 px-2 py-2 text-[15px] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
        <option value="en" lang="en">English</option>
        <option value="ms" lang="ms">Bahasa Melayu</option>
        <option value="zh" lang="zh-Hans">简体中文</option>
      </select>
    </div>
  );
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenWhatsApp }) => {
  const { t: translateOutput } = useRenderLanguage();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setMobileMenuOpen(false); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  useEffect(() => setMobileMenuOpen(false), [currentPath]);
  const navItems: { path: RoutePath; label: string }[] = [
    { path: '/', label: 'Utama' }, { path: '/tentang-kami', label: 'Tentang Kami' },
    { path: '/servis', label: 'Servis' }, { path: '/portfolio', label: 'Portfolio' }, { path: '/hubungi', label: 'Hubungi' },
  ];
  const handleNavClick = (path: RoutePath) => { onNavigate(path); setMobileMenuOpen(false); };
  return localizeTree((
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-20 sm:h-24">
          <button onClick={() => handleNavClick('/')} className="min-w-0 flex items-center text-left focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded-lg p-1 transition-opacity hover:opacity-95" aria-label={t('Kembali ke Laman Utama Pertama Jaya Construction & Engineering')}>
            <img src={SITE_CONFIG.logoPath} alt={t('Logo Rasmi Pertama Jaya Construction & Engineering Sdn Bhd')} className="h-12 sm:h-16 w-auto max-w-[55vw] md:max-w-[320px] xl:max-w-[290px] object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" loading="eager" />
          </button>
          <nav className="hidden xl:flex items-center gap-1" aria-label={t('Navigasi Utama')}>
            {navItems.map(item => <button key={item.path} onClick={() => handleNavClick(item.path)} className={`min-h-[48px] px-3 py-2.5 rounded-md text-[16px] whitespace-nowrap font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${currentPath === item.path ? 'text-cyan-300 bg-cyan-950/50 border border-cyan-500/30' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'}`} aria-current={currentPath === item.path ? 'page' : undefined}>{t(item.label)}</button>)}
          </nav>
          <div className="hidden xl:flex items-center gap-3">
            <LanguageSelector id="desktop-language" />
            <a href={`tel:${SITE_CONFIG.phoneMobile}`} className="min-h-[48px] px-3 py-2.5 inline-flex items-center gap-2 text-[14px] whitespace-nowrap font-medium text-slate-200 hover:text-white bg-slate-900 border border-slate-700 rounded-md focus-visible:ring-2 focus-visible:ring-cyan-400" title={t('Hubungi Telefon Bimbit')} aria-label={`${t('Hubungi Telefon Bimbit')}: ${SITE_CONFIG.phoneMobileDisplay}`}>
              <Phone className="w-4 h-4 text-cyan-400" aria-hidden="true" /><span>{SITE_CONFIG.phoneMobileDisplay}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <a href={`tel:${SITE_CONFIG.phoneMobile}`} className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-slate-200 bg-slate-900 border border-slate-800 rounded-md focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label={`${t('Hubungi Telefon Bimbit')}: ${SITE_CONFIG.phoneMobileDisplay}`}><Phone className="w-5 h-5 text-cyan-400" aria-hidden="true" /></a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="min-h-[44px] min-w-[44px] p-2 flex items-center justify-center text-slate-200 bg-slate-900 border border-slate-800 rounded-md focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" aria-label={t(mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi')}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <div className="flex xl:hidden justify-end pb-3"><LanguageSelector id="mobile-language" /></div>
      </div>
      {mobileMenuOpen && (
        <nav id="mobile-navigation" className="xl:hidden max-h-[calc(100dvh-140px)] overflow-y-auto border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl" aria-label={t('Menu Navigasi Mudah Alih')}>
          <div className="pb-2 text-[13px] text-slate-400 border-b border-slate-800/80">Sdn Bhd ({SITE_CONFIG.registrationNumber})</div>
          {navItems.map(item => <button key={item.path} onClick={() => handleNavClick(item.path)} className={`w-full min-h-[48px] flex items-center justify-between px-4 py-3 rounded-lg text-[18px] font-medium text-left focus-visible:ring-2 focus-visible:ring-cyan-400 ${currentPath === item.path ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30' : 'text-slate-200 hover:bg-slate-900'}`} aria-current={currentPath === item.path ? 'page' : undefined}><span>{t(item.label)}</span><ChevronRight className="w-5 h-5 shrink-0" /></button>)}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a href={`tel:${SITE_CONFIG.phoneMobile}`} className="min-h-[48px] px-4 py-3 flex flex-wrap items-center justify-center gap-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200"><Phone className="w-5 h-5 text-cyan-400" /><span>{t('Telefon Bimbit')}: {SITE_CONFIG.phoneMobileDisplay}</span></a>
            <a href={`tel:${SITE_CONFIG.phoneLandline}`} className="min-h-[48px] px-4 py-3 flex flex-wrap items-center justify-center gap-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200"><Phone className="w-5 h-5 text-cyan-400" /><span>{t('Hubungi Pejabat')}: {SITE_CONFIG.phoneDisplay}</span></a>
            <button onClick={() => { setMobileMenuOpen(false); onOpenWhatsApp(); }} className="w-full min-h-[48px] px-4 py-3 flex items-center justify-center gap-2 rounded-lg bg-cyan-400 text-slate-950 font-bold text-[18px]"><MessageSquare className="w-5 h-5 shrink-0" /><span>{t('Bincang Melalui WhatsApp')}</span></button>
          </div>
        </nav>
      )}
    </header>
  ), translateOutput);
};
