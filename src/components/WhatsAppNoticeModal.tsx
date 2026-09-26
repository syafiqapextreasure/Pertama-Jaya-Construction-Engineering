import { useLanguage as useRenderLanguage } from '../i18n';
import { localizeTree } from '../i18n/render';
import React, { useEffect, useRef } from 'react';
import { SITE_CONFIG } from '../config/site';
import { useLanguage } from '../i18n';
import { X, MessageSquare, CheckCircle2 } from 'lucide-react';

interface WhatsAppNoticeModalProps { isOpen: boolean; onClose: () => void; presetMessage?: string; }
export const WhatsAppNoticeModal: React.FC<WhatsAppNoticeModalProps> = ({ isOpen, onClose, presetMessage }) => {
  const { t: translateOutput } = useRenderLanguage();
  const { t } = useLanguage();
  const dialog = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog.current?.querySelector<HTMLButtonElement>('button')?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        const controls = dialog.current?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!controls?.length) return;
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', handleKeyDown); document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const defaultMessage = presetMessage || t('Salam sejahtera Pertama Jaya Construction & Engineering Sdn Bhd. Saya ingin bertanyakan mengenai perkhidmatan dan anggaran sebutharga projek.');
  const url = `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMessage)}`;
  return localizeTree(<div role="dialog" aria-modal="true" aria-labelledby="whatsapp-modal-title" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4">
    <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
    <div ref={dialog} className="relative z-10 w-full max-w-lg max-h-[90dvh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8">
      <button onClick={onClose} className="absolute top-3 right-3 min-h-[44px] min-w-[44px] p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-cyan-400 flex items-center justify-center" aria-label={t('Tutup tetingkap makluman')}><X className="w-5 h-5" /></button>
      <div className="flex items-center gap-3 mb-4 pr-8"><div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400"><MessageSquare className="w-6 h-6" /></div><div><h3 id="whatsapp-modal-title" className="text-[20px] font-bold text-white font-['Space_Grotesk']">{t('Buka Saluran WhatsApp')}</h3><p className="text-[14px] text-slate-400">{t('Nombor disahkan:')} {SITE_CONFIG.phoneMobileDisplay}</p></div></div>
      <p className="text-[16px] text-slate-300 mb-4 leading-relaxed">{t('Anda akan dihubungkan terus ke aplikasi WhatsApp untuk menghantar pertanyaan mengenai projek kepada pihak Pertama Jaya.')}</p>
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 mb-5"><span className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">{t('Pratonton Mesej:')}</span><p className="text-[15px] text-cyan-200 italic font-mono leading-relaxed whitespace-pre-wrap break-words">“{defaultMessage}”</p></div>
      <div className="text-[13px] text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 mb-6 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /><span>{t('Pendedahan Data: Maklumat yang anda masukkan dihantar terus melalui WhatsApp kepada pihak syarikat untuk tujuan perbincangan projek.')}</span></div>
      <div className="flex flex-col sm:flex-row gap-3"><a href={url} target="_blank" rel="noopener noreferrer" onClick={onClose} className="flex-1 min-h-[48px] px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[17px] flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-white"><MessageSquare className="w-5 h-5 shrink-0" /><span>{t('Teruskan ke WhatsApp')}</span></a><button onClick={onClose} className="min-h-[48px] px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-[16px]">{t('Batal')}</button></div>
    </div>
  </div>, translateOutput);
};
