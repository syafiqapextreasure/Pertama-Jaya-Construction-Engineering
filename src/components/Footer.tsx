import React from 'react';
import { RoutePath } from '../types';
import { SITE_CONFIG } from '../config/site';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAudit }) => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Company Profile & Logo */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={SITE_CONFIG.logoPath}
                alt="Logo Rasmi Pertama Jaya Construction & Engineering Sdn Bhd"
                className="h-16 sm:h-20 w-auto max-w-full object-contain filter drop-shadow-md"
                loading="lazy"
              />
            </div>

            <p className="text-[15px] sm:text-[16px] text-slate-400 leading-relaxed">
              {SITE_CONFIG.history.summary} Beroperasi dalam penyediaan perkhidmatan pembinaan kejuruteraan awam, saliran, struktur jambatan dan penyelenggaraan loji perindustrian.
            </p>
          </div>

          {/* Column 2: Perkhidmatan Ringkas */}
          <div className="space-y-4">
            <h4 className="text-[18px] font-bold text-white uppercase tracking-wider font-['Space_Grotesk'] border-l-2 border-cyan-400 pl-3">
              Perkhidmatan Teras
            </h4>
            <ul className="space-y-2.5 text-[16px]">
              <li>
                <button
                  onClick={() => onNavigate('/servis')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-4 h-4 text-cyan-500/70" />
                  <span>Pembinaan Bangunan & Kilang</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servis')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-4 h-4 text-cyan-500/70" />
                  <span>Jambatan & Kerja Kejuruteraan Awam</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servis')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-4 h-4 text-cyan-500/70" />
                  <span>Saliran & Sistem Pembetungan</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servis')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-4 h-4 text-cyan-500/70" />
                  <span>Perlindungan Papak (Slab) Gas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servis')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-4 h-4 text-cyan-500/70" />
                  <span>Ubah Suai Rumah & Struktur Sedia Ada</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servis')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors text-left flex items-center gap-1.5"
                >
                  <ArrowUpRight className="w-4 h-4 text-cyan-500/70" />
                  <span>Servis Pam, Air Blower & Loji STP</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigasi Laman */}
          <div className="space-y-4">
            <h4 className="text-[18px] font-bold text-white uppercase tracking-wider font-['Space_Grotesk'] border-l-2 border-cyan-400 pl-3">
              Pautan Pantas
            </h4>
            <ul className="space-y-2.5 text-[16px]">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Laman Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/tentang-kami')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/servis')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Perkhidmatan Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/portfolio')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Portfolio Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/hubungi')}
                  className="text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Hubungi Pejabat
                </button>
              </li>
            </ul>

            <div className="pt-2 text-[14px] text-slate-400 bg-slate-900/60 p-3 rounded-md border border-slate-800">
              <span className="text-cyan-300 font-semibold block mb-1">Ketetapan Sebutharga:</span>
              Tiada pakej harga am ciptaan. Sebutharga disediakan berdasarkan skop fizikal & lukisan tapak.
            </div>
          </div>

          {/* Column 4: Hubungi & Maklumat Rasmi */}
          <div className="space-y-4">
            <h4 className="text-[18px] font-bold text-white uppercase tracking-wider font-['Space_Grotesk'] border-l-2 border-cyan-400 pl-3">
              Perhubungan Pejabat
            </h4>
            
            <div className="space-y-3 text-[16px]">
              <a
                href={`tel:${SITE_CONFIG.phoneLandline}`}
                className="flex items-start gap-3 text-slate-300 hover:text-cyan-300 transition-colors group"
              >
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block font-semibold text-white">{SITE_CONFIG.phoneDisplay}</span>
                  <span className="text-[13px] text-slate-400">Talian Tetap Pejabat (Panggilan Suara)</span>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-start gap-3 text-slate-300 hover:text-cyan-300 transition-colors group break-all"
              >
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block font-semibold text-white text-[15px]">{SITE_CONFIG.email}</span>
                  <span className="text-[13px] text-slate-400">Pertanyaan Sebutharga & Dokumen</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300 pt-1">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-semibold text-white text-[15px]">Cawangan & Operasi:</span>
                  <span className="text-[13px] text-slate-400 block">
                    Melaka (Pusat) • Johor Bahru • Permatang Pauh
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[13px] text-slate-400 italic pt-1 leading-normal">
              *{SITE_CONFIG.serviceAreaDisclaimer}
            </p>
          </div>

        </div>

        {/* Copyright & Disclaimer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] text-slate-400">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.companyName} ({SITE_CONFIG.registrationNumber}). Hak Cipta Terpelihara.
          </p>
          <div className="flex items-center gap-4 text-[13px]">
            <span>Bahasa Melayu (Malaysia)</span>
            <span className="text-slate-600">•</span>
            <span>Piawaian Pembinaan CIDB & Kejuruteraan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
