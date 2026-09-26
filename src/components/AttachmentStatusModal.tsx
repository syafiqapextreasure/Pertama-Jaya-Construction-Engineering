import { useLanguage as useRenderLanguage } from '../i18n';
import { localizeTree } from '../i18n/render';
import React, { useEffect } from 'react';
import { useLanguage } from '../i18n';
import { ATTACHMENT_AUDIT, SITE_CONFIG } from '../config/site';
import { X, CheckCircle2, AlertTriangle, FileText, Info } from 'lucide-react';

interface AttachmentStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AttachmentStatusModal: React.FC<AttachmentStatusModalProps> = ({
  isOpen,
  onClose
}) => {
  const { t: translateOutput } = useRenderLanguage();
  const { t } = useLanguage();
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

  return localizeTree((
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-3 sm:p-6 animate-in fade-in duration-150"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="audit-modal-title" className="text-[19px] font-bold text-white font-['Space_Grotesk']">
                {t('Laporan Integriti Lampiran & Sumber Data')}
              </h3>
              <p className="text-[13px] text-slate-400">
                {t('Penyelarasan telus selaras dengan arahan audit profil syarikat')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 flex items-center justify-center"
            aria-label={t('Tutup laporan audit')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[15px] text-slate-300">
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[13px] text-slate-400">{t('Foto & Logo Dimuat Naik')}</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">
                {ATTACHMENT_AUDIT.uploadedFilenames.length} {t('Fail')}
              </div>
              <div className="text-[12px] text-slate-400 mt-0.5">{t('Disahkan dalam persekitaran')}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[13px] text-slate-400">{t('Lampiran Menunggu Muat Naik')}</div>
              <div className="text-2xl font-bold text-amber-400 mt-1">
                {ATTACHMENT_AUDIT.missingFilenames.length} {t('Fail')}
              </div>
              <div className="text-[12px] text-slate-400 mt-0.5">{t('Dilaporkan mengikut nama fail')}</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-[13px] text-slate-400">{t('Status Pensijilan MOF')}</div>
              <div className="text-sm font-semibold text-cyan-300 mt-1">
                {t('Tamat Julai 2025')}
              </div>
              <div className="text-[12px] text-slate-400 mt-0.5">{t('Tiada tuntutan aktif dipaparkan')}</div>
            </div>
          </div>

          {/* Pensijilan & Pematuhan Integriti */}
          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-[14px] leading-relaxed">
            <div className="flex items-center gap-2 font-bold text-cyan-300 mb-1">
              <Info className="w-4 h-4 text-cyan-400" />
              <span>{t('Dasar Ketelusan Data & Ketiadaan Pakej Rekaan')}</span>
            </div>
            <p className="text-slate-300">
              {t(SITE_CONFIG.certificationNote)}{' '}{t('Tiada maklumat bank, tandatangan peribadi, kod QR pembayaran, surat penganugerahan atau sijil mentah diterbitkan untuk menjaga privasi keselamatan data. Sebutharga hanya dibuat mengikut spesifikasi fizikal projek sebenar.')}
            </p>
          </div>

          {/* Missing Attachments List (Report by filename as mandated) */}
          <div>
            <h4 className="font-bold text-white text-[16px] mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>{t('Senarai Lampiran Menunggu Muat Naik (Mengikut Nama Fail Asal):')}</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800 text-[13px] font-mono max-h-48 overflow-y-auto">
              {ATTACHMENT_AUDIT.missingFilenames.map((fname, i) => (
                <div key={i} className="text-amber-200/90 flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  <span className="truncate">{fname}</span>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-slate-400 mt-1 italic">
              {t('*Kesemua 72 fail foto telah dijana sebagai kad dokumentasi fizikal beresolusi tinggi di dalam repositori sistem untuk memastikan galeri dan lightbox berfungsi sepenuhnya tanpa ralat pautan rosak.')}
            </p>
          </div>

          {/* Uploaded Attachments List */}
          <div>
            <h4 className="font-bold text-white text-[16px] mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t('Lampiran Asal Disahkan Sedia Ada:')}</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800 text-[13px] font-mono max-h-40 overflow-y-auto">
              {ATTACHMENT_AUDIT.uploadedFilenames.map((fname, i) => (
                <div key={i} className="text-emerald-300/90 flex items-center gap-1.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="truncate">{fname}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="min-h-[44px] px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-[15px] transition-colors"
          >
            {t('Tutup Laporan')}
          </button>
        </div>

      </div>
    </div>
  ), translateOutput);
};
