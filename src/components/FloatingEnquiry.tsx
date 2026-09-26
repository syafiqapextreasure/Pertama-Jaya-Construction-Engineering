import { useLanguage as useRenderLanguage } from '../i18n';
import { localizeTree } from '../i18n/render';
import React, { useState } from 'react';
import { useLanguage } from '../i18n';
import { MessageSquare, Phone, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface FloatingEnquiryProps {
  onOpenWhatsApp: () => void;
  onNavigateToContact: () => void;
}

export const FloatingEnquiry: React.FC<FloatingEnquiryProps> = ({
  onOpenWhatsApp,
  onNavigateToContact
}) => {
  const { t: translateOutput } = useRenderLanguage();
  const { t } = useLanguage();
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-30 pointer-events-auto">
        <button
          onClick={() => setIsMinimized(false)}
          className="min-h-[48px] min-w-[48px] px-3.5 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-bold shadow-xl shadow-cyan-950/40 hover:bg-cyan-300 transition-all flex items-center gap-2 text-[15px] border border-cyan-300 focus-visible:ring-2 focus-visible:ring-white"
          aria-label={t('Kembangkan butang pertanyaan projek')}
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline">{t('Tanya Projek')}</span>
        </button>
      </div>
    );
  }

  return localizeTree((
    <aside
      aria-label={t('Pertanyaan Projek Segera')}
      className="fixed bottom-6 right-6 z-30 pointer-events-auto max-w-[320px] bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 rounded-xl p-3.5 shadow-2xl shadow-black/60 transition-all animate-in fade-in slide-in-from-bottom-4 duration-200"
    >
      <div className="flex items-start justify-between gap-2 pb-2 mb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[14px] font-bold text-white tracking-wide">
            {t('Pertanyaan Projek')}
          </span>
        </div>
        <button
          onClick={() => setIsMinimized(true)}
          className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label={t('Kecilkan bar pertanyaan projek')}
          title={t('Kecilkan')}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-[13px] text-slate-300 mb-3 leading-snug">
        {t('Bincangkan keperluan tapak pembinaan, saliran atau penyelenggaraan loji anda bersama kami.')}
      </p>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={onOpenWhatsApp}
          className="min-h-[44px] px-2.5 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[14px] flex items-center justify-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-white"
        >
          <MessageSquare className="w-4 h-4 flex-shrink-0" />
          <span>WhatsApp</span>
        </button>

        <a
          href={`tel:${SITE_CONFIG.phoneMobile}`}
          aria-label={`${t('Hubungi Telefon Bimbit')}: ${SITE_CONFIG.phoneMobileDisplay}`}
          className="min-h-[44px] px-2.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-[14px] flex items-center justify-center gap-1.5 border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span>{t('Telefon')}</span>
        </a>
      </div>

      <div className="mt-2 text-center">
        <button
          onClick={onNavigateToContact}
          className="text-[12px] text-slate-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
        >
          {t('Isi Borang Sebutharga Lengkap')}
        </button>
      </div>
    </aside>
  ), translateOutput);
};
