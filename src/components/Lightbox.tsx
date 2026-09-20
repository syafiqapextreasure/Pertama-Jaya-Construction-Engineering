import React, { useEffect } from 'react';
import { IllustrationBadge } from './IllustrationBadge';
import { PortfolioItem } from '../types';
import { getFallbackPhoto } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, FileText, Info } from 'lucide-react';

interface LightboxProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Paparan penuh imej projek ${item.filename}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Lightbox Container */}
      <div className="relative z-10 w-full max-w-5xl max-h-[95vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-y-auto">
        
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 py-3.5 bg-slate-950/80 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-3">
            {item.imageProvenance === 'ai-generated' && <IllustrationBadge />}
            <span className="px-2.5 py-1 text-[13px] font-bold tracking-wider uppercase rounded bg-cyan-400 text-slate-950">
              {item.category}
            </span>
            <span className="text-[15px] sm:text-[16px] text-slate-200 font-mono">
              {item.photoUrl?.split('/').pop() || item.filename}
            </span>
            <span className="text-[13px] text-slate-400 hidden sm:inline">
              ({currentIndex + 1} daripada {items.length})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none flex items-center justify-center"
              aria-label="Tutup paparan imej penuh (Escape)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Image Display Area (contain rather than crop, preserves aspect ratio) */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] md:min-h-[540px] flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 overflow-hidden">
          <img
            src={item.photoUrl || item.relPath}
            alt={item.altText}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-lg border border-slate-800"
            loading="eager"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const fallback = getFallbackPhoto(item.category);
              if (e.currentTarget.src !== fallback && !e.currentTarget.src.endsWith(fallback)) {
                e.currentTarget.src = fallback;
              }
            }}
          />

          {/* Previous Button */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 min-h-[48px] min-w-[48px] p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 shadow-xl transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 flex items-center justify-center"
            aria-label="Imej Sebelumnya (Kekunci Panah Kiri)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 min-h-[48px] min-w-[48px] p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 shadow-xl transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 flex items-center justify-center"
            aria-label="Imej Seterusnya (Kekunci Panah Kanan)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer Meta & Caption Details */}
        <div className="px-4 sm:px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-300">
          <div>
            <h4 className="text-[16px] sm:text-[17px] font-semibold text-white">
              {item.subcategory}
            </h4>
            <p className="text-[14px] text-slate-400 flex items-center gap-1.5 mt-0.5">
              <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>
                {item.imageProvenance === 'ai-generated'
                  ? 'Ilustrasi janaan AI, bukan foto dokumentasi tapak sebenar. Rujuk foto asal untuk rekod sumber.'
                  : 'Imej portfolio. Tiada nama klien atau lokasi khusus dilabelkan tanpa kapsyen rasmi.'}
              </span>
            </p>
            <a href={item.relPath} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center text-[14px] text-cyan-300 underline underline-offset-4 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              Lihat foto asal (JPEG)
            </a>
          </div>

          <div className="text-[13px] text-slate-400 font-mono bg-slate-950 px-3 py-1.5 rounded border border-slate-800 flex items-center gap-2 self-start sm:self-center">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>ID: {item.id}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
