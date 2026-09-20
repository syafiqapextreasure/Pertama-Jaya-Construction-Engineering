import React, { useState, useMemo } from 'react';
import { PortfolioItem } from '../types';
import { PORTFOLIO_ITEMS, RECORDED_PROJECTS, getFallbackPhoto } from '../data/portfolioData';
import { Lightbox } from '../components/Lightbox';
import { MapPin, Info, Image as ImageIcon, ZoomIn } from 'lucide-react';

type FilterCategory = 'Semua' | 'Saliran' | 'Rumah' | 'Slab Gas' | 'Jambatan' | 'Pam/Blower/STP';

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('Semua');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'Semua') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  };

  const handleNextLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  };

  const categories: { label: FilterCategory; count: number }[] = [
    { label: 'Semua', count: PORTFOLIO_ITEMS.length },
    { label: 'Saliran', count: PORTFOLIO_ITEMS.filter((p) => p.category === 'Saliran').length },
    { label: 'Rumah', count: PORTFOLIO_ITEMS.filter((p) => p.category === 'Rumah').length },
    { label: 'Slab Gas', count: PORTFOLIO_ITEMS.filter((p) => p.category === 'Slab Gas').length },
    { label: 'Jambatan', count: PORTFOLIO_ITEMS.filter((p) => p.category === 'Jambatan').length },
    { label: 'Pam/Blower/STP', count: PORTFOLIO_ITEMS.filter((p) => p.category === 'Pam/Blower/STP').length },
  ];

  return (
    <div className="w-full pb-20">
      
      {/* Header Banner */}
      <section className="relative py-14 sm:py-18 bg-gradient-to-b from-slate-950 via-[#071329] to-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-[14px] font-semibold tracking-wider uppercase">
              Arkib Dokumentasi Fizikal
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              Portfolio Project
            </h1>
            <p className="text-[18px] lg:text-[20px] text-slate-300 leading-[1.6]">
              Dokumentasi visual kerja-kerja pembinaan, perparitan, papak saluran gas, struktur jejambat jambatan dan penyelenggaraan sistem mekanikal loji kumbahan.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-[14px] text-slate-300 flex items-start gap-3">
              <Info className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white block">Ketelusan Kapsyen Tapak:</strong>
                Selaras dengan piawaian integriti data, foto-foto dokumentasi tapak ini tidak dilabelkan dengan nama klien atau lokasi khusus melainkan apa yang telah didokumentasikan dalam rekod fizikal rasmi.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. SEPARATELY LISTED RECORDED HISTORICAL PROJECTS */}
      <section className="py-12 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2.5">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <span>Rekod Projek Bersejarah Yang Tercatat Dalam Profil</span>
            </h2>
            <p className="text-[16px] text-slate-400 mt-1">
              Senarai lokasi projek yang direkodkan dalam dokumen syarikat terdahulu (tidak ditautkan secara spekulatif pada foto-foto individu):
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RECORDED_PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between text-[13px]">
                  <span className="font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-500/30">
                    {proj.state}
                  </span>
                  <span className="text-slate-400">{proj.location}</span>
                </div>
                <h3 className="text-[17px] font-bold text-white font-['Space_Grotesk'] leading-snug">
                  {proj.title}
                </h3>
                <p className="text-[14px] text-slate-300 leading-relaxed">
                  {proj.scopeSummary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FILTERABLE 72-PHOTO GALLERY */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs (>=48px tap targets, white-space: nowrap) */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10" role="tablist" aria-label="Penapis Kategori Portfolio">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`min-h-[48px] px-4 sm:px-5 py-2.5 rounded-xl text-[16px] font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                    isActive
                      ? 'bg-cyan-400 text-slate-950 shadow-md shadow-cyan-950/30 scale-[1.02]'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[12px] px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Count & Lightbox Hint */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80 text-[15px] text-slate-400">
            <div>
              Menunjukkan <strong className="text-white">{filteredItems.length}</strong> foto tapak pembinaan bagi kategori{' '}
              <span className="text-cyan-300 font-semibold">"{selectedCategory}"</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-[13px] font-medium">
                <ImageIcon className="w-4 h-4 text-cyan-400" />
                <span>Dokumentasi Fotografi Fizikal</span>
              </span>

              <div className="hidden lg:flex items-center gap-1.5 text-[13px] text-slate-400">
                <ZoomIn className="w-4 h-4 text-cyan-400" />
                <span>Klik untuk skrin penuh</span>
              </div>
            </div>
          </div>

          {/* Photos Grid (contain rather than crop, preserves aspect ratio, lazy loaded) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(index);
                  }
                }}
                className="group relative cursor-pointer rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/60 p-3 flex flex-col justify-between transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-cyan-950/20 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                aria-label={`Buka foto ${item.filename} kategori ${item.category}`}
              >
                {/* Image Box */}
                <div className="relative aspect-[4/3] w-full rounded-xl bg-slate-950 overflow-hidden flex items-center justify-center">
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

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 rounded-full bg-cyan-400/90 text-slate-950 shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="pt-3 px-1">
                  <div className="flex items-center justify-between text-[12px] mb-1">
                    <span className="font-bold text-cyan-300 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="font-mono text-slate-400">{item.filename}</span>
                  </div>
                  <h3 className="text-[14px] font-semibold text-slate-200 group-hover:text-white line-clamp-2 leading-snug">
                    {item.subcategory}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Accessible Full-Image Lightbox */}
      <Lightbox
        item={activeItem}
        items={filteredItems}
        currentIndex={activeLightboxIndex ?? 0}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />

    </div>
  );
};
