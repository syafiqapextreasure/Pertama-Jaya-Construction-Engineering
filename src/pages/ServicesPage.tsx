import React from 'react';
import { RoutePath } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { SITE_CONFIG } from '../config/site';
import { getFallbackPhoto } from '../data/portfolioData';
import { CheckCircle, ArrowRight, Phone, MessageSquare, Info } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenWhatsApp: () => void;
  onOpenImageInLightbox?: (relPath: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenWhatsApp
}) => {
  return (
    <div className="w-full pb-20">
      
      {/* Header Banner */}
      <section className="relative py-14 sm:py-18 bg-gradient-to-b from-slate-950 via-[#071329] to-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-[14px] font-semibold tracking-wider uppercase">
              Perkhidmatan Kejuruteraan & Pembinaan
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              Skop Perkhidmatan Pertama Jaya
            </h1>
            <p className="text-[18px] lg:text-[20px] text-slate-300 leading-[1.6]">
              Daripada kerja-kerja struktur awam berskala besar seperti jambatan dan saliran monsun, hingga pembinaan kediaman, papak perlindungan paip gas dan servis mekanikal loji STP.
            </p>

            {/* Note on transparent pricing */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-[15px] text-slate-300 flex items-start gap-3 mt-4">
              <Info className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white block">Dasar Anggaran & Sebutharga:</strong>
                Sebutharga bergantung kepada skop projek fizikal, keadaan tapak dan kuantiti bahan (BQ). Kami tidak menyediakan pakej harga rekaan umum kerana setiap tapak memerlukan penyelesaian tersendiri.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Detailed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Text & Specs (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md text-[13px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      Servis 0{index + 1}
                    </span>
                    <span className="text-[14px] text-slate-400 font-medium">
                      Kategori: {service.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-['Space_Grotesk'] leading-snug">
                    {service.title}
                  </h2>

                  <p className="text-[17px] sm:text-[18px] text-slate-300 leading-[1.6]">
                    {service.fullDesc}
                  </p>

                  {/* Scope Checklist */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-[16px] font-bold text-white uppercase tracking-wider text-slate-200">
                      Skop Kerja Lazim:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[15px] text-slate-300">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Specific Enquiry Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onNavigate('/hubungi')}
                      className="min-h-[48px] px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[16px] inline-flex items-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <span>Bincang Skop Servis Ini</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={onOpenWhatsApp}
                      className="min-h-[48px] px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 font-medium text-[16px] border border-slate-700 inline-flex items-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      <span>Pertanyaan Pantas</span>
                    </button>
                  </div>
                </div>

                {/* Matching Photos Showcase (Contain rather than crop, 5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="text-[13px] font-semibold text-slate-400 uppercase tracking-wider">
                    Foto Tapak Berkaitan (Portfolio Fizikal):
                  </div>

                  {service.sampleImages.length > 0 ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                        {service.sampleImages.map((imgPath, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="rounded-xl bg-slate-950 border border-slate-800 p-2 overflow-hidden"
                          >
                            <div className="aspect-[16/10] w-full rounded bg-slate-900 overflow-hidden flex items-center justify-center">
                              <img
                                src={imgPath}
                                alt={`Dokumentasi tapak bagi ${service.title} (${imgIdx + 1})`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  const fallback = getFallbackPhoto(service.category);
                                  if (e.currentTarget.src !== fallback && !e.currentTarget.src.endsWith(fallback)) {
                                    e.currentTarget.src = fallback;
                                  }
                                }}
                              />
                            </div>
                            <div className="mt-1.5 px-1 flex items-center justify-between text-[12px] text-slate-400 font-mono">
                              <span>{imgPath.split('/').pop()}</span>
                              <span className="text-cyan-400">Rekod Tapak</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="text-[12px] text-slate-400 italic">
                        *Imej mengekalkan perkadaran nisbah aspek sebenar tanpa pemotongan (contain).
                      </p>
                    </>
                  ) : (
                    <div className="rounded-xl bg-slate-950 border border-dashed border-slate-700 p-4 text-[14px] text-slate-400 leading-relaxed">
                      Foto tapak untuk kategori ini belum dimuat naik ke laman web. Hubungi pejabat untuk rujukan projek berkaitan.
                    </div>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
            Perlu Penilaian Khusus untuk Lokasi Anda?
          </h3>
          <p className="text-[17px] text-slate-300 max-w-2xl mx-auto">
            Pasukan kami sedia menyemak pelan struktur, lukisan arkitek atau lawatan tapak bagi menyediakan anggaran sebutharga yang bertepatan.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneLandline}`}
              className="min-h-[48px] px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-[16px] border border-slate-700 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>Hubungi Pejabat ({SITE_CONFIG.phoneDisplay})</span>
            </a>
            <button
              onClick={() => onNavigate('/hubungi')}
              className="min-h-[48px] px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[16px] inline-flex items-center gap-2"
            >
              <span>Isi Maklumat Tapak</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
