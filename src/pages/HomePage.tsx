import React from 'react';
import { RoutePath } from '../types';
import { SITE_CONFIG } from '../config/site';
import { SERVICES_DATA } from '../data/servicesData';
import { PORTFOLIO_ITEMS, RECORDED_PROJECTS, getFallbackPhoto } from '../data/portfolioData';
import { ENQUIRY_STEPS, FAQS_DATA } from '../data/homeData';
import {
  ArrowRight,
  Building2,
  HardHat,
  Droplets,
  Layers,
  Wrench,
  Cog,
  CheckCircle,
  HelpCircle,
  MapPin,
  Calendar,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenWhatsApp: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenWhatsApp }) => {
  // Service icons lookup
  const getServiceIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'pembinaan-bangunan':
        return <Building2 className="w-6 h-6 text-cyan-400" />;
      case 'jambatan-kerja-awam':
        return <HardHat className="w-6 h-6 text-cyan-400" />;
      case 'saliran-pembetungan':
        return <Droplets className="w-6 h-6 text-cyan-400" />;
      case 'perlindungan-slab-gas':
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'ubah-suai-rumah':
        return <Wrench className="w-6 h-6 text-cyan-400" />;
      case 'pam-blower-stp':
        return <Cog className="w-6 h-6 text-cyan-400" />;
      default:
        return <Building2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  // Selected sample of real photo cards across categories for showcase
  const selectedPhotos = [
    PORTFOLIO_ITEMS.find((p) => p.id === 'p30-01') || PORTFOLIO_ITEMS[0],
    PORTFOLIO_ITEMS.find((p) => p.id === 'p27-01') || PORTFOLIO_ITEMS[1],
    PORTFOLIO_ITEMS.find((p) => p.id === 'p29-01') || PORTFOLIO_ITEMS[2],
    PORTFOLIO_ITEMS.find((p) => p.id === 'p28-01') || PORTFOLIO_ITEMS[3],
    PORTFOLIO_ITEMS.find((p) => p.id === 'p30-02') || PORTFOLIO_ITEMS[4],
  ].filter(Boolean);

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION: Corporate Architectural Style like Screenshot 1 */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-[#030816] border-b border-slate-800/80">
        
        {/* Layer 1: Photographic Architectural Engineering Background (Screenshot 1: Glass & steel trusses + skyscrapers) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/assets/hero/hero-corporate-bg.jpg"
            alt="Latar Belakang Korporat Pembinaan Pertama Jaya"
            className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Layer 2: Screenshot 1 Signature Angular Brushed Blue Metallic Plates & Golden Highlights */}
        <div 
          className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen opacity-75"
          style={{
            backgroundImage: `url('/assets/hero/hero-screenshot1-graphic.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />

        {/* Layer 3: High-Contrast Dark Vignette for Pristine Text Readability */}
        <div 
          className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-r from-[#020617] via-[#020617]/85 to-transparent" 
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80" 
          aria-hidden="true"
        />

        {/* Subtle high-tech architectural coordinate grid */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none z-[3]"
          style={{
            backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (7 cols on desktop) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-[14px] font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Pertama Jaya Construction & Engineering (1411274-D)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] font-['Space_Grotesk']">
                Penyelesaian Pembinaan & Kejuruteraan untuk Projek Anda
              </h1>

              <p className="text-[18px] lg:text-[20px] text-slate-300 leading-[1.6] max-w-2xl">
                Menawarkan khidmat kontraktor berwibawa bagi pembinaan bangunan, jambatan & kerja awam, sistem saliran perparitan, papak perlindungan paip gas, renovasi kediaman dan servis loji rawatan kumbahan (STP).
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                <button
                  onClick={() => onNavigate('/hubungi')}
                  className="min-h-[48px] px-7 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 text-slate-950 font-bold text-[18px] flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-950/40 focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Bincang Projek Anda</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onNavigate('/portfolio')}
                  className="min-h-[48px] px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-[18px] border border-slate-700/80 flex items-center justify-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span>Lihat Portfolio Projek</span>
                </button>
              </div>

              {/* Quick Info Bar */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 text-[14px] text-slate-300">
                <div>
                  <span className="text-slate-400 block text-[12px]">Pengalaman Operasi:</span>
                  <span className="font-semibold text-white">Enterprise 2010 • Sdn Bhd 2021</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[12px]">Penetapan Harga:</span>
                  <span className="font-semibold text-white">Berdasarkan Skop Fizikal Tapak</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[12px]">Talian Pejabat:</span>
                  <span className="font-semibold text-cyan-300">{SITE_CONFIG.phoneDisplay}</span>
                </div>
              </div>

            </div>

            {/* Right: Modest Real-Photo Cards Grid (Architectural Composition) */}
            <div className="lg:col-span-5">
              <div className="relative p-3 rounded-2xl bg-slate-900/70 border border-slate-700/70 backdrop-blur-md shadow-2xl">
                
                <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800 text-[13px] text-slate-400">
                  <span className="font-semibold text-cyan-300 flex items-center gap-1.5">
                    <HardHat className="w-4 h-4" />
                    <span>Dokumentasi Fizikal Tapak Kerja</span>
                  </span>
                  <span>72 Rekod Foto</span>
                </div>

                {/* 2x2 Showcase of modest real-photo cards (contain rather than crop) */}
                <div className="grid grid-cols-2 gap-2.5 pt-3">
                  {selectedPhotos.slice(0, 4).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => onNavigate('/portfolio')}
                      className="group relative cursor-pointer overflow-hidden rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/60 transition-all p-1.5"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden rounded bg-slate-900 flex items-center justify-center">
                        <img
                          src={item.photoUrl || item.relPath}
                          alt={item.altText}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const fallback = getFallbackPhoto(item.category);
                            if (e.currentTarget.src !== fallback && !e.currentTarget.src.endsWith(fallback)) {
                              e.currentTarget.src = fallback;
                            }
                          }}
                        />
                      </div>
                      <div className="mt-1 px-1 flex items-center justify-between text-[12px]">
                        <span className="font-bold text-slate-200">{item.category}</span>
                        <span className="text-slate-400 font-mono text-[11px]">{item.id}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 pt-2 text-center border-t border-slate-800/60">
                  <button
                    onClick={() => onNavigate('/portfolio')}
                    className="text-[14px] text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>Terokai keseluruhan 72 foto projek mengikut kategori</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION: 6 Core Service Cards */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold tracking-wider uppercase">
              Kepakaran Kejuruteraan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              Perkhidmatan Pembinaan & Kerja Khusus
            </h2>
            <p className="text-[18px] text-slate-300 leading-[1.6]">
              Setiap perkhidmatan dirangka dengan teliti mengikut spesifikasi teknikal, piawaian keselamatan industri dan peruntukan tapak anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 shadow-lg shadow-black/20"
              >
                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                      {getServiceIcon(srv.id)}
                    </div>
                    <span className="px-2.5 py-1 text-[13px] font-semibold text-cyan-300 bg-cyan-950/60 rounded border border-cyan-500/30">
                      {srv.category}
                    </span>
                  </div>

                  <h3 className="text-[20px] font-bold text-white mb-2.5 font-['Space_Grotesk'] leading-snug group-hover:text-cyan-200 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-[16px] text-slate-300 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>

                  {/* Key Features snippet */}
                  <ul className="space-y-2 mb-6 text-[14px] text-slate-400 border-t border-slate-800/80 pt-3">
                    {srv.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <button
                    onClick={() => onNavigate('/servis')}
                    className="w-full min-h-[44px] px-4 py-2 rounded-lg bg-slate-950 hover:bg-cyan-950 text-cyan-300 hover:text-cyan-200 font-semibold text-[15px] border border-slate-800 hover:border-cyan-500/40 flex items-center justify-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span>Skop Terperinci & Foto</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[15px] text-slate-400 max-w-xl mx-auto">
              *Sebutharga bergantung kepada skop projek sebenar dan perancangan tapak. Tiada pakej harga umum rekaan.
            </p>
          </div>

        </div>
      </section>

      {/* 3. SELECTED PROJECTS SHOWCASE (CONTAIN RATHER THAN CROP) */}
      <section className="py-20 bg-slate-900/60 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold tracking-wider uppercase">
                Galeri Tapak
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk'] mt-2">
                Dokumentasi Projek Terpilih
              </h2>
              <p className="text-[17px] text-slate-300 mt-1 max-w-xl">
                Paparan rekod kerja pembinaan fizikal dari portfolio sebenar syarikat (nisbah aspek dikekalkan sepenuhnya).
              </p>
            </div>

            <button
              onClick={() => onNavigate('/portfolio')}
              className="min-h-[48px] px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white font-semibold text-[16px] border border-slate-700 inline-flex items-center gap-2 self-start md:self-auto transition-colors"
            >
              <span>Lihat Semua 72 Foto</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedPhotos.map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('/portfolio')}
                className="cursor-pointer group rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/60 p-3 flex flex-col justify-between transition-all duration-200 shadow-md hover:shadow-cyan-950/20"
              >
                <div className="aspect-[4/3] w-full rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center">
                  <img
                    src={item.photoUrl || item.relPath}
                    alt={item.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const fallback = getFallbackPhoto(item.category);
                      if (e.currentTarget.src !== fallback && !e.currentTarget.src.endsWith(fallback)) {
                        e.currentTarget.src = fallback;
                      }
                    }}
                  />
                </div>

                <div className="pt-3 px-1">
                  <div className="flex items-center justify-between text-[13px] mb-1">
                    <span className="font-bold text-cyan-300">{item.category}</span>
                    <span className="font-mono text-slate-400 text-[12px]">{item.filename}</span>
                  </div>
                  <h4 className="text-[15px] font-medium text-slate-200 group-hover:text-white line-clamp-2 leading-snug">
                    {item.subcategory}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ABOUT PREVIEW SECTION: Kenali Pertama Jaya */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold tracking-wider uppercase">
                Kenali Syarikat Kami
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
                Sejarah & Komitmen Pertama Jaya Construction & Engineering
              </h2>

              <div className="space-y-4 text-[18px] text-slate-300 leading-[1.6]">
                <p>
                  Diterajui oleh <strong className="text-white">Jayabalan A/L Santhiran</strong>, perniagaan kami bermula seawal tahun <strong className="text-white">2010</strong> sebagai entiti enterprise sebelum diperbadankan secara rasmi sebagai <strong className="text-white">Pertama Jaya Construction & Engineering Sdn Bhd (1411274-D)</strong> pada tahun <strong className="text-white">2021</strong>.
                </p>
                <p>
                  Dengan rekod pelaksanaan melebihi 11 tahun seperti dicatatkan dalam profil syarikat, kami mengutamakan mutu kerja berkualiti, keselamatan tapak yang ketat dan perancangan telus berlandaskan etika profesionalisme.
                </p>
              </div>

              {/* Milestones timeline pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-[18px] mb-1 font-['Space_Grotesk']">
                    <Calendar className="w-5 h-5" />
                    <span>Tahun 2010</span>
                  </div>
                  <p className="text-[15px] text-slate-400">
                    Penubuhan awal entiti enterprise mengendalikan projek pembinaan awam dan perparitan.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-[18px] mb-1 font-['Space_Grotesk']">
                    <Calendar className="w-5 h-5" />
                    <span>Tahun 2021</span>
                  </div>
                  <p className="text-[15px] text-slate-400">
                    Pemerbadanan rasmi sebagai Sendirian Berhad (1411274-D) di Suruhanjaya Syarikat Malaysia.
                  </p>
                </div>
              </div>

              {/* Action Button to dedicated /tentang-kami */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/tentang-kami')}
                  className="min-h-[48px] px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 text-slate-950 font-bold text-[17px] inline-flex items-center gap-2 transition-all shadow-md shadow-cyan-950/30 focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Kenali Pertama Jaya</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Right: Company Profile Facts Box */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0b1730] border border-slate-700/80 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-[20px] font-bold text-white font-['Space_Grotesk']">
                    Profil Entiti Korporat
                  </h3>
                  <span className="text-[12px] font-semibold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30">
                    Ringkasan
                  </span>
                </div>

                <div className="space-y-4 text-[16px]">
                  <div>
                    <span className="text-[13px] text-slate-400 block">Nama Entiti Penuh:</span>
                    <span className="font-semibold text-white">PERTAMA JAYA CONSTRUCTION & ENGINEERING SDN BHD</span>
                  </div>

                  <div>
                    <span className="text-[13px] text-slate-400 block">Peneraju Syarikat:</span>
                    <span className="font-semibold text-cyan-300">Jayabalan A/L Santhiran</span>
                  </div>

                  <div>
                    <span className="text-[13px] text-slate-400 block">Nombor Pendaftaran SSM:</span>
                    <span className="font-mono text-cyan-300 font-semibold">{SITE_CONFIG.registrationNumber}</span>
                  </div>

                  <div>
                    <span className="text-[13px] text-slate-400 block">Talian Telefon Pejabat:</span>
                    <a href={`tel:${SITE_CONFIG.phoneLandline}`} className="text-white hover:text-cyan-300 font-semibold transition-colors">
                      {SITE_CONFIG.phoneDisplay} (Talian Tetap)
                    </a>
                  </div>

                  <div>
                    <span className="text-[13px] text-slate-400 block">Cawangan Penyelarasan:</span>
                    <span className="text-slate-200">Melaka • Johor Bahru • Permatang Pauh</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <button
                    onClick={() => onNavigate('/tentang-kami')}
                    className="w-full min-h-[44px] px-4 py-2 rounded-lg bg-slate-950 hover:bg-cyan-950/60 text-cyan-300 hover:text-cyan-200 text-[15px] font-semibold border border-slate-800 hover:border-cyan-500/30 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Baca Profil Lengkap & Objektif</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ENQUIRY STEPS: 4-Step Process (Enquiry -> Scope Review -> Quotation -> Agreed Execution) */}
      <section className="py-20 bg-slate-900/40 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold tracking-wider uppercase">
              Aliran Kerja
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              4 Langkah Mudah Berurusan Bersama Kami
            </h2>
            <p className="text-[18px] text-slate-300 leading-[1.6]">
              Proses penilaian kerja yang tersusun daripada perbincangan awal sehingga penyerahan tapak secara berjadual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENQUIRY_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="relative p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-cyan-400/40 font-['Space_Grotesk']">
                      {step.stepNumber}
                    </span>
                    <span className="px-2.5 py-1 text-[12px] font-semibold text-cyan-300 bg-cyan-950/80 rounded border border-cyan-500/30">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-[19px] font-bold text-white mb-2.5 font-['Space_Grotesk']">
                    {step.title}
                  </h3>

                  <p className="text-[15px] text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-900 text-[13px] text-slate-400">
                  Piawaian Pertama Jaya
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('/hubungi')}
              className="min-h-[48px] px-8 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[18px] inline-flex items-center gap-2 transition-all shadow-lg focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Mulakan Pertanyaan Projek Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. KAWASAN SERVIS SUMMARY: Historical Project Locations & Branches with Disclaimer */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold tracking-wider uppercase">
              Jejak Rekod Tapak
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              Kawasan Servis & Lokasi Projek Bersejarah
            </h2>
            <p className="text-[18px] text-slate-300 leading-[1.6]">
              Pertama Jaya mempunyai rekod pelaksanaan projek di pelbagai lokasi strategik serta cawangan sokongan koordinasi.
            </p>
          </div>

          {/* Explicit Mandatory Disclaimer Box */}
          <div className="mb-10 p-5 rounded-xl bg-amber-950/30 border border-amber-500/40 text-amber-200 flex items-start gap-3.5">
            <MapPin className="w-6 h-6 text-amber-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-[17px] block text-white">
                Ketetapan Ketersediaan Liputan:
              </span>
              <p className="text-[16px] text-amber-100/90 leading-relaxed mt-0.5">
                "{SITE_CONFIG.serviceAreaDisclaimer}" Syarikat tidak menjanjikan liputan menyeluruh seluruh negara secara automatik. Sila hubungi kami terlebih dahulu untuk semakan jadual dan logistik pasukan kerja tapak.
              </p>
            </div>
          </div>

          {/* Grid of recorded project locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECORDED_PROJECTS.map((rec, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[12px] font-semibold bg-slate-800 text-cyan-300 border border-slate-700">
                    {rec.state}
                  </span>
                  <span className="text-[13px] text-slate-400">{rec.location}</span>
                </div>
                <h4 className="font-bold text-white text-[17px] font-['Space_Grotesk'] leading-snug">
                  {rec.title}
                </h4>
                <p className="text-[14px] text-slate-400 leading-relaxed">
                  {rec.scopeSummary}
                </p>
              </div>
            ))}
          </div>

          {/* Branches list */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h4 className="text-[18px] font-bold text-white font-['Space_Grotesk'] mb-3">
              Cawangan Penyelarasan Pejabat
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SITE_CONFIG.branches.map((b, i) => (
                <div key={i} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-cyan-400 font-bold block text-[16px]">{b.city} ({b.state})</span>
                  <span className="text-[13px] text-slate-400">{b.role}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 bg-slate-900/50 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-3">
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold tracking-wider uppercase">
              Soalan Lazim
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              Soalan Kerap Ditanya (FAQ)
            </h2>
            <p className="text-[18px] text-slate-300 leading-[1.6]">
              Maklumat praktikal mengenai prosedur permohonan sebutharga, liputan perkhidmatan dan pelaksanaan tapak.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800/90 shadow-md space-y-2.5"
              >
                <h3 className="text-[19px] font-bold text-white font-['Space_Grotesk'] flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-[16px] text-slate-300 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-t from-slate-950 via-[#0a162e] to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
            Sedia Untuk Memulakan Projek Pembinaan Anda?
          </h2>
          
          <p className="text-[18px] lg:text-[20px] text-slate-300 max-w-2xl mx-auto leading-[1.6]">
            Hubungi pasukan teknikal Pertama Jaya Construction & Engineering Sdn Bhd untuk semakan pelan dan perbincangan skop kerja yang bersesuaian dengan tapak anda.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/hubungi')}
              className="min-h-[48px] w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[18px] flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-950/40 focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Hubungi Pejabat & Mohon Sebutharga</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="min-h-[48px] w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[18px] border border-slate-700 flex items-center justify-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Pertanyaan Pantas WhatsApp</span>
            </button>
          </div>

          <p className="text-[14px] text-slate-400 pt-2">
            Talian Pejabat: {SITE_CONFIG.phoneDisplay} • Emel: {SITE_CONFIG.email}
          </p>
        </div>
      </section>

    </div>
  );
};
