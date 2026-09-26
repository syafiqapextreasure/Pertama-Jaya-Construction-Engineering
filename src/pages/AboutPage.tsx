import { useLanguage as useRenderLanguage } from '../i18n';
import { localizeTree } from '../i18n/render';
import React from 'react';
import { useLanguage } from '../i18n';
import { RoutePath } from '../types';
import { SITE_CONFIG } from '../config/site';
import {
  ABOUT_COMPANY_INFO,
  OBJECTIVES_DATA,
  COMPANY_VALUES,
  MISSION_PILLARS,
  VISION_STATEMENT,
  LEADERSHIP_DATA,
  ACHIEVEMENTS_DATA,
  PROFILE_CLIENTS
} from '../data/aboutData';
import {
  Building2,
  Calendar,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Target,
  Compass,
  Briefcase,
  Users,
  Eye,
  Award,
  ArrowRight,
  Sparkles,
  Info,
  Clock
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenWhatsApp: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenWhatsApp }) => {
  const { t: translateOutput } = useRenderLanguage();
  const { t, language } = useLanguage();
  const publishedAchievements = ACHIEVEMENTS_DATA.filter((item) => item.isPublished);
  const unpublishedCount = ACHIEVEMENTS_DATA.filter((item) => !item.isPublished).length;

  return localizeTree((
    <div className="w-full pb-20" lang={language === 'zh' ? 'zh-Hans' : language}>
      
      {/* Header Banner */}
      <section className="relative py-14 sm:py-18 bg-gradient-to-b from-slate-950 via-[#071329] to-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-[14px] font-semibold tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Profil Rasmi Syarikat</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              Tentang Pertama Jaya Construction & Engineering
            </h1>
            <p className="text-[18px] lg:text-[20px] text-slate-300 leading-[1.7]">
              Latar belakang korporat, objektif, pegangan integriti dan rekod perkhidmatan kami berasaskan dokumen rasmi syarikat.
            </p>
          </div>
        </div>
      </section>

      {/* 1. TENTANG KAMI / PENGENALAN (PDF Halaman 2) */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800/80" id="pengenalan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold uppercase tracking-wider">
                <span>01. Pengenalan Syarikat</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk'] leading-snug">
                Peneraju Pembinaan & Kejuruteraan Berwibawa
              </h2>

              <div className="space-y-4 text-[18px] text-slate-300 leading-[1.7]">
                <p>
                  {t('Pertama Jaya Construction & Engineering Sdn Bhd merupakan sebuah syarikat pembinaan dan kejuruteraan awam yang diterajui oleh James, berdaftar secara rasmi di Suruhanjaya Syarikat Malaysia (SSM).')}
                </p>
                <p>
                  {t('Operasi perniagaan ini bermula sebagai sebuah entiti perniagaan Enterprise pada tahun 2010 dan kemudiannya berkembang pesat sehingga dinaik taraf dan ditukar status kepada Sendirian Berhad (Sdn Bhd) pada tahun 2021 menurut dokumen profil syarikat.')}
                </p>
                <p>
                  Dokumen profil syarikat mencatatkan pengalaman terkumpul melebihi 11 tahun dalam pelaksanaan pelbagai jenis projek pembinaan dan kejuruteraan. Di bawah kepimpinan pengurus syarikat, Pertama Jaya terus memegang kredibiliti teguh dalam mengurus dan mengendalikan kerja-kerja pembinaan yang diamanahkan oleh pihak berwajib, menyemai keupayaan teknikal tempatan serta menyumbang secara positif kepada kemajuan pembangunan negara.
                </p>
              </div>

              {/* Timeline 2010 -> 2021 (Simple, Faithful to Source) */}
              <div className="pt-4">
                <h3 className="text-[16px] font-bold text-slate-300 uppercase tracking-wider mb-3 font-['Space_Grotesk']">
                  Garis Masa Evolusi Korporat (2010 → 2021)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ABOUT_COMPANY_INFO.pemerbadananTimeline.map((tl) => (
                    <div
                      key={tl.tahun}
                      className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-colors shadow-lg"
                    >
                      <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-[20px] mb-1.5 font-['Space_Grotesk']">
                        <Calendar className="w-5 h-5" />
                        <span>{t('Tahun {year}').replace('{year}', tl.tahun)}</span>
                      </div>
                      <h4 className="text-[17px] font-semibold text-white mb-2">
                        {tl.status}
                      </h4>
                      <p className="text-[16px] text-slate-400 leading-relaxed">
                        {tl.keterangan}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center gap-2 text-[14px] text-slate-400 italic">
                  <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>
                    Nota ketelusan: Pengalaman dicatatkan lebih 11 tahun dalam dokumen profil syarikat tanpa ditukar sewenang-wenangnya kepada dakwaan tahun semasa yang belum disahkan.
                  </span>
                </div>
              </div>

            </div>

            {/* Right: Glassmorphism Quote Card from PDF */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a1835] to-slate-900 border border-cyan-500/30 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Building2 className="w-6 h-6" />
                </div>

                <blockquote className="space-y-3">
                  <p className="text-[20px] font-medium text-white italic leading-relaxed">
                    “Profil perniagaan ini memaparkan kemampuan syarikat untuk mengendalikan segala kerja yang diamanahkan oleh pihak berwajib, menyahut seruan pembangunan negara serta memperkasa penyertaan kontraktor tempatan berwibawa.”
                  </p>
                  <footer className="text-[14px] text-cyan-300 font-semibold tracking-wide">
                    — Pertama Jaya Construction & Engineering Sdn Bhd
                  </footer>
                </blockquote>

                <div className="pt-4 border-t border-slate-800 text-[15px] text-slate-300 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>{t('Diterajui: {name}').replace('{name}', 'James')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Status SSM: Sendirian Berhad (1411274-D)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>Fokus: Pembinaan Struktur & Kejuruteraan Mekanikal</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROFIL / MAKLUMAT SYARIKAT (PDF Halaman 7) */}
      <section className="py-16 sm:py-20 bg-slate-900/60 border-b border-slate-800/80" id="maklumat-syarikat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold uppercase tracking-wider">
              <span>02. Profil & Maklumat Rasmi</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              Grid Maklumat Korporat
            </h2>
            <p className="text-[18px] text-slate-300 leading-[1.7]">
              Susunan butiran korporat rasmi dan entiti pendaftaran perniagaan Pertama Jaya Construction & Engineering Sdn Bhd.
            </p>
          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Nama & SSM */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-lg">
              <span className="text-[13px] font-bold text-cyan-400 uppercase tracking-wider block">
                Nama & Pendaftaran
              </span>
              <h3 className="text-[19px] font-bold text-white font-['Space_Grotesk'] leading-snug">
                {ABOUT_COMPANY_INFO.nama}
              </h3>
              <div className="text-[16px] text-slate-300 space-y-1">
                <div>No. Pendaftaran: <span className="font-mono text-cyan-300 font-semibold">{ABOUT_COMPANY_INFO.noPendaftaran}</span></div>
                <div>Bentuk Entiti: <span className="text-slate-200">Syarikat Sendirian Berhad (Sdn Bhd)</span></div>
              </div>
            </div>

            {/* Card 2: Bidang & Skop Pembinaan */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-lg">
              <span className="text-[13px] font-bold text-cyan-400 uppercase tracking-wider block">
                Bidang & Pembinaan
              </span>
              <h3 className="text-[19px] font-bold text-white font-['Space_Grotesk'] leading-snug">
                {ABOUT_COMPANY_INFO.bidang}
              </h3>
              <p className="text-[16px] text-slate-300 leading-relaxed">
                <strong className="text-white">Skop Pembinaan:</strong> {ABOUT_COMPANY_INFO.skopPembinaan}.
              </p>
            </div>

            {/* Card 3: Kejuruteraan Khusus */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-lg">
              <span className="text-[13px] font-bold text-cyan-400 uppercase tracking-wider block">
                Kejuruteraan Khusus
              </span>
              <h3 className="text-[19px] font-bold text-white font-['Space_Grotesk'] leading-snug">
                Mekanikal & Loji
              </h3>
              <p className="text-[16px] text-slate-300 leading-relaxed">
                <strong className="text-white">Skop Kejuruteraan:</strong> {ABOUT_COMPANY_INFO.skopKejuruteraan}.
              </p>
            </div>

            {/* Card 4: Perhubungan (Telefon Profil) */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-lg">
              <span className="text-[13px] font-bold text-cyan-400 uppercase tracking-wider block">
                Telefon Pejabat Profil
              </span>
              <div className="flex items-center gap-3 pt-1">
                <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <a
                    href={`tel:${ABOUT_COMPANY_INFO.telefonProfil}`}
                    className="text-[20px] font-bold text-white hover:text-cyan-300 transition-colors font-['Space_Grotesk']"
                  >
                    {ABOUT_COMPANY_INFO.telefonPaparan}
                  </a>
                  <span className="text-[13px] text-slate-400 block">Talian Tetap Pejabat (Profil)</span>
                </div>
              </div>
            </div>

            {/* Card 5: E-mel Rasmi */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-lg">
              <span className="text-[13px] font-bold text-cyan-400 uppercase tracking-wider block">
                E-mel Rasmi Syarikat
              </span>
              <div className="flex items-center gap-3 pt-1">
                <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <a
                    href={`mailto:${ABOUT_COMPANY_INFO.emelProfil}`}
                    className="text-[17px] font-bold text-cyan-300 hover:underline break-all transition-colors"
                  >
                    {ABOUT_COMPANY_INFO.emelProfil}
                  </a>
                  <span className="text-[13px] text-slate-400 block">Pertanyaan Sebutharga & Dokumen</span>
                </div>
              </div>
            </div>

            {/* Card 6: Lokasi Disenaraikan */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 shadow-lg">
              <span className="text-[13px] font-bold text-cyan-400 uppercase tracking-wider block">
                Lokasi dalam Profil
              </span>
              <div className="flex items-start gap-3 pt-1">
                <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[17px] font-bold text-white font-['Space_Grotesk']">
                    {ABOUT_COMPANY_INFO.lokasiProfil.join(' • ')}
                  </div>
                  <span className="text-[13px] text-slate-400 block mt-0.5">
                    Melaka (Pusat) • Johor Bahru • Permatang Pauh
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Attribution & Integrity Notices */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-[14px] text-slate-300 space-y-1">
              <span className="font-semibold text-cyan-300 block">Status Modal Berbayar:</span>
              <p className="text-slate-400 leading-normal">
                {ABOUT_COMPANY_INFO.modalBerbayarProfil}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-[14px] text-slate-300 space-y-1">
              <span className="font-semibold text-slate-200 block">Dasar Ketepatan Data:</span>
              <p className="text-slate-400 leading-normal">
                Maklumat akaun bank persendirian dan nombor kad pengenalan (IC) dikecualikan sepenuhnya daripada laman web demi mematuhi privasi dan keselamatan data. Klasifikasi "sole proprietorship" dalam sesetengah perenggan profil lama tidak diguna pakai kerana status entiti rasmi yang sah adalah Sendirian Berhad (Sdn Bhd).
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OBJEKTIF (PDF Halaman 3) */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800/80" id="objektif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold uppercase tracking-wider">
              <span>03. Objektif Syarikat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              4 Teras Objektif Utama
            </h2>
            <p className="text-[18px] text-slate-300 leading-[1.7]">
              Berasaskan pengalaman dan kepakaran yang dimiliki, syarikat memastikan setiap projek dilaksanakan mengikut objektif ketat bagi menjamin kepuasan pelanggan dan piawaian industri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {OBJECTIVES_DATA.map((obj) => (
              <div
                key={obj.id}
                className="group p-7 sm:p-8 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[28px] font-bold text-cyan-400 font-['Space_Grotesk'] opacity-80 group-hover:opacity-100 transition-opacity">
                    {obj.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                    <Target className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-[22px] font-bold text-white font-['Space_Grotesk'] leading-snug group-hover:text-cyan-200 transition-colors">
                  {obj.title}
                </h3>

                <p className="text-[17px] text-slate-300 leading-relaxed">
                  {obj.description}
                </p>

                <ul className="space-y-2.5 pt-3 border-t border-slate-800/80 text-[16px] text-slate-400">
                  {obj.points.map((pt, pidx) => (
                    <li key={pidx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FALSAFAH SYARIKAT / PEGANGAN KORPORAT (PDF Halaman 4) */}
      <section className="py-16 sm:py-20 bg-slate-900/50 border-b border-slate-800/80" id="falsafah">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold uppercase tracking-wider">
              <span>04. Falsafah & Pegangan Korporat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              10 Nilai Teras Pegangan Kami
            </h2>
            <p className="text-[18px] text-slate-300 leading-[1.7]">
              Prinsip etika, keharmonian tenaga kerja dan integriti perkhidmatan yang membentuk budaya kerja harian di Pertama Jaya.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {COMPANY_VALUES.map((val, idx) => (
              <div
                key={val.id}
                className="p-5 sm:p-6 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-cyan-500/40 transition-colors flex items-start gap-4 shadow-md"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-950/90 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-300 font-mono text-[14px] font-bold mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-[18px] font-medium text-slate-200 leading-snug">
                  {val.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-[14px] text-slate-400 leading-normal">
            <span className="font-semibold text-slate-300 block mb-0.5">Nota Penafian Kawasan Liputan:</span>
            Walaupun profil menyebut aspirasi operasi peringkat nasional dan antarabangsa, ketersediaan servis sebenar Pertama Jaya adalah tertakluk kepada pengesahan lokasi fizikal dan skop projek sedia ada. {SITE_CONFIG.serviceAreaDisclaimer}
          </div>

        </div>
      </section>

      {/* 5. MISI (PDF Halaman 5) */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800/80" id="misi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold uppercase tracking-wider">
              <span>05. Misi Korporat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              5 Tiang Aspirasi Misi
            </h2>
            <p className="text-[18px] text-slate-300 leading-[1.7]">
              Aspirasi dan sasaran syarikat dalam menjayakan perkhidmatan kontraktor berkualiti dan berdaya saing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MISSION_PILLARS.map((mis) => (
              <div
                key={mis.number}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[13px] font-mono font-bold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30">
                      {t('Tiang {number}').replace('{number}', mis.number)}
                    </span>
                    <Compass className="w-5 h-5 text-slate-500" />
                  </div>
                  <h3 className="text-[20px] font-bold text-white mb-2 font-['Space_Grotesk'] leading-snug">
                    {mis.title}
                  </h3>
                  <p className="text-[17px] text-slate-300 leading-relaxed">
                    {mis.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[14px] text-slate-400 italic">
            *Tiang misi di atas dipersembahkan sebagai aspirasi korporat syarikat, bukan sebagai bukti pensijilan antarabangsa.
          </p>

        </div>
      </section>

      {/* 6. VISI (PDF Halaman 5) */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800/80" id="visi">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold uppercase tracking-wider">
            <Eye className="w-4 h-4" />
            <span>06. Visi Syarikat</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
            Hala Tuju & Wawasan Jangka Panjang
          </h2>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/80 border border-cyan-500/30 shadow-2xl backdrop-blur-md">
            <p className="text-[20px] sm:text-[22px] font-medium text-slate-100 leading-[1.8] italic">
              “{VISION_STATEMENT}”
            </p>
          </div>

        </div>
      </section>

      {/* 7. KEPIMPINAN DAN CARTA ORGANISASI */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800/80" id="kepimpinan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold uppercase tracking-wider">
              <Users className="w-4 h-4" />
              <span>07. Kepimpinan & Pengurusan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              Peneraju Syarikat
            </h2>
            <p className="text-[18px] text-slate-300 leading-[1.7]">
              Pengurusan syarikat digalas oleh barisan kepimpinan berwibawa selaras dengan rekod pendaftaran rasmi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Leadership Card (James) */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-900 to-slate-950 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[13px] font-bold text-cyan-400 tracking-wider uppercase block">
                      {LEADERSHIP_DATA.peneraju.jawatan}
                    </span>
                    <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                      James
                    </h3>
                  </div>
                </div>

                <p className="text-[17px] text-slate-300 leading-relaxed">
                  {t('Berdasarkan dokumen profil syarikat, Encik James menerajui pengurusan operasi pembinaan dan kejuruteraan Pertama Jaya. Di bawah bimbingan beliau, syarikat telah melaksanakan pelbagai projek pembinaan, saliran dan mekanikal di pelbagai negeri semenanjung Malaysia.')}
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[14px] text-slate-400 leading-normal flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>
                    {t('Status Sumber: {source}. Tiada gambar potret rekaan atau biografi tambahan ditambah tanpa pengesahan sumber rasmi.').replace('{source}', t(LEADERSHIP_DATA.peneraju.statusSumber))}
                  </span>
                </div>
              </div>
            </div>

            {/* Editable Organisation Chart Placeholder (Stored safely, hidden pending owner approval) */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 shadow-xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h3 className="text-[20px] font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span>Carta Organisasi Syarikat</span>
                  </h3>
                  <span className="px-3 py-1 rounded-full text-[12px] font-bold bg-amber-950/70 text-amber-300 border border-amber-500/40">
                    Menunggu Kelulusan Pemilik
                  </span>
                </div>

                <p className="text-[16px] text-slate-300 leading-relaxed">
                  {LEADERSHIP_DATA.chartNotice}
                </p>

                {/* Structured component display illustrating readiness without fictional placeholders */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-[14px]">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="font-semibold text-white">Struktur Data Komponen:</span>
                    <span className="font-mono text-cyan-400">Siap Sedia (Editable JSON)</span>
                  </div>
                  <div className="text-slate-400 space-y-1">
                    <div>{t('• Peneraju: James (Disahkan)')}</div>
                    <div>• Jabatan Operasi & HSE: <span className="text-amber-300/90">Menunggu data nama kakitangan rasmi</span></div>
                    <div>• Bahagian Kejuruteraan & STP: <span className="text-amber-300/90">Menunggu carta jawatan rasmi</span></div>
                  </div>
                </div>

                <p className="text-[13px] text-slate-400 italic">
                  Carta hierarki visual penuh akan dipaparkan secara automatik sebaik sahaja data kakitangan dan jawatan diluluskan oleh pemilik syarikat.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. PENCAPAIAN SYARIKAT */}
      <section className="py-16 sm:py-20 bg-slate-900/50 border-b border-slate-800/80" id="pencapaian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>08. Pencapaian Syarikat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              Pencapaian &amp; Rekod Projek
            </h2>
            <p className="text-[18px] text-slate-300 leading-[1.7]">
              Statistik pencapaian dan rekod penyiapan projek pembinaan serta kejuruteraan oleh Pertama Jaya Construction &amp; Engineering.
            </p>
          </div>

          {/* Published Achievement Cards (Modern Villa 350+, Hotels Building 75+) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl">
            {publishedAchievements.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl space-y-3"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-cyan-400 font-['Space_Grotesk'] tracking-tight">
                  {item.count}
                </div>
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                  {item.label}
                </h3>
                <p className="text-[14px] text-slate-400 border-t border-slate-800/80 pt-2">
                  {item.sourceAttribution}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. PELANGGAN & RAKAN KERJASAMA */}
      <section className="py-16 sm:py-20 bg-slate-950 border-b border-slate-800/80" id="pelanggan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-[14px] font-semibold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>09. Rakan Kerjasama &amp; Pelanggan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-['Space_Grotesk']">
              Pelanggan &amp; Rakan Kerjasama Kami
            </h2>
            <p className="text-[18px] text-slate-300 leading-[1.7]">
              Senarai organisasi dan syarikat korporat yang telah bekerjasama bersama Pertama Jaya Construction &amp; Engineering Sdn Bhd dalam pelbagai projek pembinaan dan kejuruteraan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {PROFILE_CLIENTS.map((client, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800/90 hover:border-cyan-500/30 transition-colors flex items-center gap-3 text-left"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                <span className="text-[15px] font-semibold text-slate-200 leading-snug">
                  {client}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION: Bincang Projek Anda */}
      <section className="py-20 bg-gradient-to-t from-slate-950 via-[#071329] to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Bincang Projek Anda Bersama Kami
          </h2>
          <p className="text-[18px] sm:text-[20px] text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Perlukan kontraktor pembinaan atau kepakaran kejuruteraan awam dan mekanikal? Hubungi pasukan kami untuk semakan spesifikasi dan perbincangan sebutharga telus.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/hubungi')}
              className="w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 text-slate-950 font-bold text-[18px] inline-flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-cyan-950/40 focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Bincang Projek Anda</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto min-h-[48px] px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-white font-semibold text-[18px] border border-slate-700 inline-flex items-center justify-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Hubungi Melalui WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  ), translateOutput);
};
