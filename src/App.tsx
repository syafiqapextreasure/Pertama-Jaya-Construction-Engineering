import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { SITE_CONFIG } from './config/site';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingEnquiry } from './components/FloatingEnquiry';
import { WhatsAppNoticeModal } from './components/WhatsAppNoticeModal';
import { AttachmentStatusModal } from './components/AttachmentStatusModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  // Derive initial path from window.location.pathname
  const getCleanPath = (pathname: string): RoutePath | '404' => {
    const p = pathname.replace(/\/$/, '') || '/';
    if (p === '/' || p === '/servis' || p === '/portfolio' || p === '/hubungi' || p === '/tentang-kami') {
      return p as RoutePath;
    }
    return '404';
  };

  const [currentPath, setCurrentPath] = useState<RoutePath | '404'>(() => {
    return getCleanPath(window.location.pathname);
  });

  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [whatsAppPresetMessage, setWhatsAppPresetMessage] = useState<string | undefined>(undefined);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getCleanPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Page Title and Meta Tags dynamically per route
  useEffect(() => {
    let pageTitle = SITE_CONFIG.companyName;
    let pageDesc = 'Penyelesaian Pembinaan & Kejuruteraan untuk Projek Anda.';

    switch (currentPath) {
      case '/':
        pageTitle = `${SITE_CONFIG.shortName} | Kontraktor Pembinaan & Kejuruteraan Awam`;
        pageDesc = 'Laman rasmi Pertama Jaya Construction & Engineering Sdn Bhd (1411274-D). Pembinaan bangunan, jambatan, saliran dan loji STP.';
        break;
      case '/servis':
        pageTitle = `Perkhidmatan Kami | ${SITE_CONFIG.shortName}`;
        pageDesc = 'Skop kerja pembinaan rumah/kilang, jambatan, saliran pembetungan, slab gas, ubah suai dan servis loji kumbahan.';
        break;
      case '/portfolio':
        pageTitle = `Portfolio Project | ${SITE_CONFIG.shortName}`;
        pageDesc = 'Galeri foto dokumentasi tapak pembinaan dan senarai rekod projek Pertama Jaya Construction & Engineering.';
        break;
      case '/hubungi':
        pageTitle = `Hubungi Pejabat & Sebutharga | ${SITE_CONFIG.shortName}`;
        pageDesc = 'Hubungi talian pejabat +606-270 0490 atau kirimkan pertanyaan sebutharga projek anda kepada Pertama Jaya.';
        break;
      case '/tentang-kami':
        pageTitle = `Tentang Kami | ${SITE_CONFIG.shortName}`;
        pageDesc = 'Pengenalan Pertama Jaya Construction & Engineering Sdn Bhd (1411274-D), objektif korporat, falsafah syarikat, misi, visi dan kepimpinan.';
        break;
      default:
        pageTitle = `404 Halaman Tidak Dijumpai | ${SITE_CONFIG.shortName}`;
        break;
    }

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDesc);
    }
  }, [currentPath]);

  // Navigate function with smooth scroll to top
  const handleNavigate = (path: RoutePath) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWhatsApp = (presetMsg?: string) => {
    setWhatsAppPresetMessage(presetMsg);
    setWhatsAppModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Shared Header */}
      <Header
        currentPath={currentPath === '404' ? '/' : currentPath}
        onNavigate={handleNavigate}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Main Routed Content */}
      <main className="flex-1 w-full" id="kandungan-utama">
        {currentPath === '/' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenWhatsApp={() => handleOpenWhatsApp()}
          />
        )}
        {currentPath === '/servis' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenWhatsApp={() => handleOpenWhatsApp()}
          />
        )}
        {currentPath === '/portfolio' && (
          <PortfolioPage />
        )}
        {currentPath === '/hubungi' && (
          <ContactPage
            onOpenWhatsAppModal={(msg) => handleOpenWhatsApp(msg)}
          />
        )}
        {currentPath === '/tentang-kami' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenWhatsApp={() => handleOpenWhatsApp()}
          />
        )}
        {currentPath === '404' && (
          <NotFoundPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Shared Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAudit={() => setAuditModalOpen(true)}
      />

      {/* Floating Enquiry Button (Discreet, does not cover content) */}
      <FloatingEnquiry
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onNavigateToContact={() => handleNavigate('/hubungi')}
      />

      {/* WhatsApp Notice Modal (Handles both configured & unconfigured states) */}
      <WhatsAppNoticeModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        presetMessage={whatsAppPresetMessage}
      />

      {/* Attachment & Data Integrity Audit Modal */}
      <AttachmentStatusModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />

    </div>
  );
}

export default App;
