import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';
import { X, Phone, Mail, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';

interface WhatsAppNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetMessage?: string;
}

export const WhatsAppNoticeModal: React.FC<WhatsAppNoticeModalProps> = ({
  isOpen,
  onClose,
  presetMessage
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasConfiguredWhatsApp = Boolean(SITE_CONFIG.WHATSAPP_NUMBER && SITE_CONFIG.WHATSAPP_NUMBER.trim() !== '');

  const defaultMessage = presetMessage || 'Salam sejahtera Pertama Jaya Construction & Engineering Sdn Bhd. Saya ingin bertanyakan mengenai perkhidmatan dan anggaran sebutharga projek.';

  const handleOpenWhatsAppDirect = () => {
    if (hasConfiguredWhatsApp) {
      const cleanNumber = SITE_CONFIG.WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
      const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(defaultMessage)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 animate-in fade-in duration-150"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 min-h-[44px] min-w-[44px] p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 flex items-center justify-center"
          aria-label="Tutup tetingkap makluman"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content depending on WhatsApp configuration */}
        {hasConfiguredWhatsApp ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 id="whatsapp-modal-title" className="text-[20px] font-bold text-white font-['Space_Grotesk']">
                  Buka Saluran WhatsApp
                </h3>
                <p className="text-[14px] text-slate-400">
                  Nombor disahkan: +{SITE_CONFIG.WHATSAPP_NUMBER}
                </p>
              </div>
            </div>

            <p className="text-[16px] text-slate-300 mb-4 leading-relaxed">
              Anda akan dihubungkan terus ke aplikasi WhatsApp untuk menghantar pertanyaan mengenai projek kepada pihak Pertama Jaya.
            </p>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 mb-5">
              <span className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Pratonton Mesej:
              </span>
              <p className="text-[15px] text-cyan-200 italic font-mono leading-relaxed">
                "{defaultMessage}"
              </p>
            </div>

            <div className="text-[13px] text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 mb-6 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span>
                Pendedahan Data: Maklumat yang anda masukkan dihantar terus melalui WhatsApp kepada pihak syarikat untuk tujuan perbincangan projek.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleOpenWhatsAppDirect}
                className="flex-1 min-h-[48px] px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[17px] flex items-center justify-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Teruskan ke WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="min-h-[48px] px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-[16px] transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 id="whatsapp-modal-title" className="text-[20px] font-bold text-white font-['Space_Grotesk']">
                  Saluran Perhubungan Rasmi
                </h3>
                <p className="text-[14px] text-amber-300">
                  Talian WhatsApp Terus Belum Dikonfigurasikan
                </p>
              </div>
            </div>

            <div className="text-[16px] text-slate-300 space-y-3 mb-6 leading-relaxed">
              <p>
                Harap maklum bahawa nombor telefon rasmi syarikat{' '}
                <strong className="text-white">{SITE_CONFIG.phoneDisplay}</strong> adalah talian tetap pejabat untuk panggilan suara. Dokumen profil syarikat sedia ada tidak menyertakan nombor telefon mudah alih WhatsApp rasmi yang telah disahkan.
              </p>
              <p className="text-[14px] text-slate-400 bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                Untuk pertanyaan segera dan sebutharga projek, sila hubungi kami melalui talian tetap rasmi atau kirimkan dokumen spesifikasi projek anda terus ke peti emel rasmi syarikat.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <a
                href={`tel:${SITE_CONFIG.phoneLandline}`}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-[17px] flex items-center justify-center gap-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-5 h-5" />
                <span>Hubungi Talian Pejabat: {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent('Pertanyaan Projek Pertama Jaya')}&body=${encodeURIComponent(defaultMessage)}`}
                className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-[16px] flex items-center justify-center gap-2.5 border border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Hantar Emel: {SITE_CONFIG.email}</span>
              </a>
            </div>

            <div className="text-[13px] text-slate-400 border-t border-slate-800 pt-3">
              <span className="font-semibold text-slate-300">Nota Pentadbiran:</span> Nombor WhatsApp boleh diaktifkan melalui pembolehubah <code className="text-cyan-300 font-mono">WHATSAPP_NUMBER</code> dalam konfigurasi laman apabila nombor mudah alih rasmi dibekalkan.
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
