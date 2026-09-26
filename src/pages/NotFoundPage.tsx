import { useLanguage as useRenderLanguage } from '../i18n';
import { localizeTree } from '../i18n/render';
import React from 'react';
import { RoutePath } from '../types';
import { HardHat, ArrowLeft, Home } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const { t: translateOutput } = useRenderLanguage();
  return localizeTree((
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
        
        <div className="w-20 h-20 mx-auto rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
          <HardHat className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-black text-cyan-400 font-mono">404</span>
          <h1 className="text-2xl font-bold text-white font-['Space_Grotesk']">
            Halaman Tidak Dijumpai
          </h1>
          <p className="text-[16px] text-slate-300 leading-relaxed">
            Halaman yang anda cari tiada dalam pelan struktur laman web Pertama Jaya Construction & Engineering Sdn Bhd.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="min-h-[48px] px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[16px] flex items-center justify-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-white"
          >
            <Home className="w-5 h-5" />
            <span>Kembali ke Laman Utama</span>
          </button>

          <button
            onClick={() => onNavigate('/servis')}
            className="min-h-[48px] px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-[16px] border border-slate-800 flex items-center justify-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Lihat Senarai Perkhidmatan</span>
          </button>
        </div>

      </div>
    </div>
  ), translateOutput);
};
