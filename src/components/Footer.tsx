import { useLanguage as useRenderLanguage } from '../i18n';
import { localizeTree } from '../i18n/render';
import React from 'react';
import { RoutePath } from '../types';
import { SITE_CONFIG } from '../config/site';
import { useLanguage } from '../i18n';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps { onNavigate: (path: RoutePath) => void; onOpenAudit: () => void; }
export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t: translateOutput } = useRenderLanguage();
  const { t, language } = useLanguage();
  const services = ['Pembinaan Bangunan & Kilang', 'Jambatan & Kerja Kejuruteraan Awam', 'Saliran & Sistem Pembetungan', 'Perlindungan Papak (Slab) Gas', 'Ubah Suai Rumah & Struktur Sedia Ada', 'Servis Pam, Air Blower & Loji STP'];
  const links: { path: RoutePath; label: string }[] = [{ path: '/', label: 'Laman Utama' }, { path: '/tentang-kami', label: 'Tentang Kami' }, { path: '/servis', label: 'Perkhidmatan Kami' }, { path: '/portfolio', label: 'Portfolio Project' }, { path: '/hubungi', label: 'Hubungi Pejabat' }];
  const heading = "text-[18px] font-bold text-white uppercase tracking-wider font-['Space_Grotesk'] border-l-2 border-cyan-400 pl-3";
  return localizeTree(<footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-300 pt-16 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
        <div className="space-y-4 min-w-0">
          <img src={SITE_CONFIG.logoPath} alt={t('Logo Rasmi Pertama Jaya Construction & Engineering Sdn Bhd')} className="h-16 sm:h-20 w-auto max-w-full object-contain filter drop-shadow-md" loading="lazy" />
          <p className="text-[15px] sm:text-[16px] text-slate-400 leading-relaxed">{t(SITE_CONFIG.history.summary)}{' '}{t('Beroperasi dalam penyediaan perkhidmatan pembinaan kejuruteraan awam, saliran, struktur jambatan dan penyelenggaraan loji perindustrian.')}</p>
        </div>
        <div className="space-y-4">
          <h4 className={heading}>{t('Perkhidmatan Teras')}</h4>
          <ul className="space-y-2.5 text-[16px]">{services.map(service => <li key={service}><button onClick={() => onNavigate('/servis')} className="text-slate-300 hover:text-cyan-300 transition-colors text-left flex items-start gap-1.5"><ArrowUpRight className="w-4 h-4 mt-1 shrink-0 text-cyan-500/70" /><span>{t(service)}</span></button></li>)}</ul>
        </div>
        <div className="space-y-4">
          <h4 className={heading}>{t('Pautan Pantas')}</h4>
          <ul className="space-y-2.5 text-[16px]">{links.map(link => <li key={link.path}><button onClick={() => onNavigate(link.path)} className="text-left text-slate-300 hover:text-cyan-300 transition-colors">{t(link.label)}</button></li>)}</ul>
          <div className="pt-2 text-[14px] text-slate-400 bg-slate-900/60 p-3 rounded-md border border-slate-800"><span className="text-cyan-300 font-semibold block mb-1">{t('Ketetapan Sebutharga:')}</span>{t('Tiada pakej harga am ciptaan. Sebutharga disediakan berdasarkan skop fizikal & lukisan tapak.')}</div>
        </div>
        <div className="space-y-4 min-w-0">
          <h4 className={heading}>{t('Perhubungan Pejabat')}</h4>
          <div className="space-y-3 text-[16px]">
            <a href={`tel:${SITE_CONFIG.phoneMobile}`} className="flex items-start gap-3 text-slate-300 hover:text-cyan-300"><Phone className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" /><div><span className="block font-semibold text-white">{SITE_CONFIG.phoneMobileDisplay}</span><span className="text-[13px] text-slate-400">{t('Telefon Bimbit')} · {SITE_CONFIG.leaderName}</span></div></a>
            <a href={`https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center text-cyan-300 underline underline-offset-4">{t('Bincang Melalui WhatsApp')}</a>
            <a href={`tel:${SITE_CONFIG.phoneLandline}`} className="flex items-start gap-3 text-slate-300 hover:text-cyan-300"><Phone className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" /><div><span className="block font-semibold text-white">{SITE_CONFIG.phoneDisplay}</span><span className="text-[13px] text-slate-400">{t('Talian Tetap Pejabat (Panggilan Suara)')}</span></div></a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-3 text-slate-300 hover:text-cyan-300 break-all"><Mail className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" /><div><span className="block font-semibold text-white text-[15px]">{SITE_CONFIG.email}</span><span className="text-[13px] text-slate-400">{t('Pertanyaan Sebutharga & Dokumen')}</span></div></a>
            <div className="flex items-start gap-3 text-slate-300 pt-1"><MapPin className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" /><div><span className="block font-semibold text-white text-[15px]">{t('Cawangan & Operasi:')}</span><span className="text-[13px] text-slate-400 block">{t('Melaka (Pusat) • Johor Bahru • Permatang Pauh')}</span></div></div>
          </div>
          <p className="text-[13px] text-slate-400 italic pt-1 leading-normal">*{t(SITE_CONFIG.serviceAreaDisclaimer)}</p>
        </div>
      </div>
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] text-slate-400">
        <p>© {new Date().getFullYear()} {SITE_CONFIG.companyName} ({SITE_CONFIG.registrationNumber}). {t('Hak Cipta Terpelihara.')}</p>
        <div className="flex flex-wrap items-center gap-4 text-[13px]"><span>{language === 'en' ? 'English' : language === 'zh' ? '简体中文' : 'Bahasa Melayu (Malaysia)'}</span><span className="text-slate-600">•</span><span>{t('Piawaian Pembinaan CIDB & Kejuruteraan')}</span></div>
      </div>
    </div>
  </footer>, translateOutput);
};
