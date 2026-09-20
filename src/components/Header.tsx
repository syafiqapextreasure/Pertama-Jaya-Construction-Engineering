import React, { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import { SITE_CONFIG } from '../config/site';
import { Menu, X, MessageSquare, Phone, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems: { path: RoutePath; label: string }[] = [
    { path: '/', label: 'Utama' },
    { path: '/tentang-kami', label: 'Tentang Kami' },
    { path: '/servis', label: 'Servis' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/hubungi', label: 'Hubungi' },
  ];

  const handleNavClick = (path: RoutePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo & Company Identity */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center text-left focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none rounded-lg p-1 transition-opacity hover:opacity-95"
            aria-label="Kembali ke Laman Utama Pertama Jaya Construction & Engineering"
          >
            <img
              src={SITE_CONFIG.logoPath}
              alt="Logo Rasmi Pertama Jaya Construction & Engineering Sdn Bhd"
              className="h-12 sm:h-16 lg:h-20 w-auto max-w-[58vw] md:max-w-[360px] lg:max-w-[460px] object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              loading="eager"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navigasi Utama">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`min-h-[48px] px-4 py-2.5 rounded-md text-[18px] font-medium transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/50 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs - Screenshot 3: WhatsApp button removed from menu header */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phoneLandline}`}
              className="min-h-[48px] px-4 py-2.5 inline-flex items-center gap-2 text-[16px] font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm"
              title="Hubungi Talian Pejabat"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Menu Button - Screenshot 3: WhatsApp removed from mobile header bar */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${SITE_CONFIG.phoneLandline}`}
              className="min-h-[48px] min-w-[48px] p-2 flex items-center justify-center text-slate-200 hover:text-white bg-slate-900 border border-slate-800 rounded-md focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Hubungi Talian Pejabat"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[48px] min-w-[48px] p-2 flex items-center justify-center text-slate-200 hover:text-white bg-slate-900 border border-slate-800 rounded-md focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150"
          role="dialog"
          aria-label="Menu Navigasi Mudah Alih"
        >
          <div className="pb-2 text-[13px] text-slate-400 border-b border-slate-800/80">
            Sdn Bhd ({SITE_CONFIG.registrationNumber})
          </div>

          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`w-full min-h-[48px] flex items-center justify-between px-4 py-3 rounded-lg text-[18px] font-medium text-left transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/30'
                    : 'text-slate-200 hover:bg-slate-900'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.label}</span>
                <ChevronRight className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} />
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={`tel:${SITE_CONFIG.phoneLandline}`}
              className="w-full min-h-[48px] px-4 py-3 flex items-center justify-center gap-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-[17px] font-medium"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>Hubungi Pejabat: {SITE_CONFIG.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full min-h-[48px] px-4 py-3 flex items-center justify-center gap-2 rounded-lg bg-cyan-400 text-slate-950 font-bold text-[18px]"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Bincang Melalui WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
