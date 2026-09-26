import { useLanguage as useRenderLanguage } from '../i18n';
import { localizeTree } from '../i18n/render';
import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/site';
import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onOpenWhatsAppModal: (presetMsg?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenWhatsAppModal }) => {
  const { t: translateOutput } = useRenderLanguage();
  const [formData, setFormData] = useState({
    nama: '',
    telefon: '',
    lokasi: '',
    jenisServis: 'Pembinaan Bangunan & Rumah',
    mesej: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'submitted_email_client'>('idle');

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.nama.trim()) errs.nama = 'Sila masukkan nama penuh anda.';
    if (!formData.telefon.trim()) {
      errs.telefon = 'Sila masukkan nombor telefon untuk dihubungi.';
    } else if (formData.telefon.replace(/[^0-9]/g, '').length < 8) {
      errs.telefon = 'Sila masukkan nombor telefon yang sah (sekurang-kurangnya 8 digit).';
    }
    if (!formData.lokasi.trim()) errs.lokasi = 'Sila nyatakan lokasi tapak projek anda.';
    if (!formData.mesej.trim()) errs.mesej = 'Sila nyatakan keterangan ringkas keperluan projek anda.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    const politeMalayMessage = `${translateOutput('Salam sejahtera Pertama Jaya Construction & Engineering Sdn Bhd. Saya ingin bertanyakan mengenai perkhidmatan dan anggaran sebutharga projek.')}\n\n${translateOutput('Nama Penuh')}: ${formData.nama}\n${translateOutput('Nombor Telefon')}: ${formData.telefon}\n${translateOutput('Lokasi Tapak Projek')}: ${formData.lokasi}\n${translateOutput('Jenis Servis Utama')}: ${translateOutput(formData.jenisServis)}\n${translateOutput('Keterangan Skop & Keperluan')}:\n${formData.mesej}`;

    const hasConfiguredWhatsApp = Boolean(SITE_CONFIG.WHATSAPP_NUMBER && SITE_CONFIG.WHATSAPP_NUMBER.trim() !== '');

    if (hasConfiguredWhatsApp) {
      onOpenWhatsAppModal(politeMalayMessage);
    } else {
      // Direct user to email draft or office phone options honestly without faking backend database storage
      onOpenWhatsAppModal(politeMalayMessage);
      setSubmittedStatus('submitted_email_client');
    }
  };

  return localizeTree((
    <div className="w-full pb-20">
      
      {/* Header Banner */}
      <section className="relative py-14 sm:py-18 bg-gradient-to-b from-slate-950 via-[#071329] to-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-[14px] font-semibold tracking-wider uppercase">
              Perhubungan Rasmi
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              Hubungi Pasukan Kejuruteraan Kami
            </h1>
            <p className="text-[18px] lg:text-[20px] text-slate-300 leading-[1.6]">
              Kami sedia membincangkan spesifikasi fizikal tapak, lawatan penilaian awal dan penyediaan sebutharga berlandaskan kehendak sebenar projek anda.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Contact Details + Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info & Recorded Locations (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Direct Channels Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
                <h2 className="text-2xl font-bold text-white font-['Space_Grotesk'] border-b border-slate-800 pb-3">
                  Saluran Rasmi Syarikat
                </h2>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-[13px] text-slate-400 block">Telefon Bimbit</span>
                    <a href={`tel:${SITE_CONFIG.phoneMobile}`} className="text-[20px] font-bold text-cyan-300">{SITE_CONFIG.phoneMobileDisplay}</a>
                    <p className="text-slate-300">James</p>
                  </div>
                  {/* Phone Landline */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[13px] text-slate-400 block">Talian Tetap Pejabat:</span>
                      <a
                        href={`tel:${SITE_CONFIG.phoneLandline}`}
                        className="text-[20px] font-bold text-white hover:text-cyan-300 transition-colors"
                      >
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                      <p className="text-[13px] text-slate-400 mt-0.5">
                        Panggilan suara terus bagi pertanyaan pejabat & pengurusan projek tapak.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[13px] text-slate-400 block">E-mel Rasmi Permohonan Sebutharga:</span>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-[18px] font-bold text-cyan-300 hover:underline break-all transition-colors"
                      >
                        {SITE_CONFIG.email}
                      </a>
                      <p className="text-[13px] text-slate-400 mt-0.5">
                        Kirimkan lukisan pelan struktur (PDF/CAD) atau senarai kuantiti bahan (BQ).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conflict Notice: Addresses/Maps omitted */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[13px] text-slate-400 leading-normal">
                  <span className="font-semibold text-slate-300 block mb-1">Nota Ketelusan Alamat Fizikal:</span>
                  Alamat jalan terperinci dan peta interaktif ditangguhkan buat sementara waktu kerana perbezaan rekod alamat terdahulu dalam fail profil. Sebarang penyerahan fizikal perlu diselaraskan terus melalui talian telefon pejabat.
                </div>
              </div>

              {/* Service Coverage & Historical Project Locations */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-5">
                <h3 className="text-[20px] font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Kawasan Servis & Rekod Tapak</span>
                </h3>

                {/* Mandatory Disclaimer */}
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-amber-200 text-[14px]">
                  <p className="font-semibold text-white mb-1">
                    Ketetapan Ketersediaan Liputan:
                  </p>
                  <p className="text-amber-100/90 leading-relaxed">
                    "{SITE_CONFIG.serviceAreaDisclaimer}" Syarikat tidak menjanjikan liputan menyeluruh seluruh negara tanpa had.
                  </p>
                </div>

                <div className="space-y-3 text-[14px] text-slate-300">
                  <p className="font-semibold text-white">
                    Lokasi Projek Bersejarah Yang Direkodkan:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400">
                    <li className="flex items-center gap-1.5">• Melaka (Marina Bay & Rumah)</li>
                    <li className="flex items-center gap-1.5">• Gambang, Pahang (UIA)</li>
                    <li className="flex items-center gap-1.5">• Ipoh, Perak (SK Tamil)</li>
                    <li className="flex items-center gap-1.5">• Rawang, Selangor (Paip Kumbahan)</li>
                    <li className="flex items-center gap-1.5">• Terengganu (Jambatan Angkat)</li>
                    <li className="flex items-center gap-1.5">• Ampang / Hulu Klang (SUKE)</li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[14px]">
                  <span className="font-semibold text-white block mb-1.5">Cawangan Koordinasi:</span>
                  <div className="flex flex-wrap gap-2">
                    {SITE_CONFIG.branches.map((b, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-[13px] text-slate-300">
                        {b.city} ({b.state})
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
                
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk']">
                    Borang Permohonan Sebutharga Tapak
                  </h2>
                  <p className="text-[16px] text-slate-300 mt-1">
                    Lengkapkan butiran asas di bawah untuk penilaian awal pasukan teknikal kami.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Nama */}
                  <div>
                    <label htmlFor="contact-nama" className="block text-[18px] font-semibold text-slate-200 mb-1.5">
                      Nama Penuh <span className="text-cyan-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-nama"
                      type="text"
                      required
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      placeholder="Contoh: En. Ahmad Razak"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-slate-950 text-white text-[16px] border ${
                        errors.nama ? 'border-rose-500 focus:ring-rose-400' : 'border-slate-800 focus:border-cyan-400'
                      } focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition-colors`}
                    />
                    {errors.nama && (
                      <p className="text-[14px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.nama}</span>
                      </p>
                    )}
                  </div>

                  {/* Telefon & Lokasi Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Telefon */}
                    <div>
                      <label htmlFor="contact-telefon" className="block text-[18px] font-semibold text-slate-200 mb-1.5">
                        Nombor Telefon <span className="text-cyan-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-telefon"
                        type="tel"
                        required
                        value={formData.telefon}
                        onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                        placeholder="Contoh: 012-3456789"
                        className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-slate-950 text-white text-[16px] border ${
                          errors.telefon ? 'border-rose-500 focus:ring-rose-400' : 'border-slate-800 focus:border-cyan-400'
                        } focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition-colors`}
                      />
                      {errors.telefon && (
                        <p className="text-[14px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.telefon}</span>
                        </p>
                      )}
                    </div>

                    {/* Lokasi Projek */}
                    <div>
                      <label htmlFor="contact-lokasi" className="block text-[18px] font-semibold text-slate-200 mb-1.5">
                        Lokasi Tapak Projek <span className="text-cyan-400" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-lokasi"
                        type="text"
                        required
                        value={formData.lokasi}
                        onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
                        placeholder="Contoh: Ayer Keroh, Melaka"
                        className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-slate-950 text-white text-[16px] border ${
                          errors.lokasi ? 'border-rose-500 focus:ring-rose-400' : 'border-slate-800 focus:border-cyan-400'
                        } focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition-colors`}
                      />
                      {errors.lokasi && (
                        <p className="text-[14px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.lokasi}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Jenis Servis */}
                  <div>
                    <label htmlFor="contact-servis" className="block text-[18px] font-semibold text-slate-200 mb-1.5">
                      Jenis Servis Utama <span className="text-cyan-400" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="contact-servis"
                      value={formData.jenisServis}
                      onChange={(e) => setFormData({ ...formData, jenisServis: e.target.value })}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-slate-950 text-white text-[16px] border border-slate-800 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition-colors cursor-pointer"
                    >
                      <option value="Pembinaan Bangunan & Rumah">Pembinaan Bangunan, Rumah & Kilang</option>
                      <option value="Jambatan & Kerja Awam">Jambatan & Kerja Kejuruteraan Awam</option>
                      <option value="Saliran & Pembetungan">Saliran & Sistem Pembetungan / Box Culvert</option>
                      <option value="Perlindungan Slab Gas">Perlindungan Slab Saluran Gas (RC Protection)</option>
                      <option value="Ubah Suai Rumah">Ubah Suai Rumah & Pengukuhan Struktur Sedia Ada</option>
                      <option value="Servis Pam/Blower/STP">Servis Pam Air/Minyak, Air Blower & Loji STP</option>
                      <option value="Lain-lain Kerja Kejuruteraan">Lain-lain Kerja Kejuruteraan Awam</option>
                    </select>
                  </div>

                  {/* Mesej / Keterangan Projek */}
                  <div>
                    <label htmlFor="contact-mesej" className="block text-[18px] font-semibold text-slate-200 mb-1.5">
                      Keterangan Skop & Keperluan <span className="text-cyan-400" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-mesej"
                      required
                      rows={5}
                      value={formData.mesej}
                      onChange={(e) => setFormData({ ...formData, mesej: e.target.value })}
                      placeholder="Sila nyatakan anggaran keluasan tapak, jangka masa pelaksanaan atau keperluan pelan..."
                      className={`w-full p-4 rounded-xl bg-slate-950 text-white text-[16px] border ${
                        errors.mesej ? 'border-rose-500 focus:ring-rose-400' : 'border-slate-800 focus:border-cyan-400'
                      } focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition-colors`}
                    />
                    {errors.mesej && (
                      <p className="text-[14px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.mesej}</span>
                      </p>
                    )}
                  </div>

                  {/* Data Disclosure Notice */}
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-[13px] text-slate-400 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-300">Pendedahan Privasi:</strong> Maklumat yang diisi akan disalurkan secara terus kepada saluran komunikasi syarikat (WhatsApp/emel rasmi) bagi tujuan penyediaan sebutharga projek. Kami tidak menjual atau berkongsi maklumat anda dengan pihak ketiga.
                    </span>
                  </div>

                  {/* Submit Button (>=48px tap target) */}
                  <div>
                    <button
                      type="submit"
                      className="w-full min-h-[52px] px-6 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 text-slate-950 font-bold text-[18px] flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-cyan-950/40 focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <Send className="w-5 h-5" />
                      <span>Hantar Butiran Projek untuk Sebutharga</span>
                    </button>
                  </div>

                  {submittedStatus === 'submitted_email_client' && (
                    <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-cyan-200 text-[14px]">
                      Pilihan saluran telah dipaparkan. Sila gunakan talian telefon rasmi atau draf emel yang disediakan untuk menyelesaikan penghantaran butiran anda.
                    </div>
                  )}

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  ), translateOutput);
};
