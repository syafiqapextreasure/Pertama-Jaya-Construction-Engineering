/**
 * Konfigurasi Utama Laman Web
 * PERTAMA JAYA CONSTRUCTION & ENGINEERING SDN BHD (1411274-D)
 */

export const SITE_CONFIG = {
  companyName: "PERTAMA JAYA CONSTRUCTION & ENGINEERING SDN BHD",
  shortName: "Pertama Jaya Construction",
  registrationNumber: "1411274-D",
  tagline: "Penyelesaian Pembinaan & Kejuruteraan untuk Projek Anda",
  
  // Hubungi
  phoneLandline: "+6062700490",
  phoneDisplay: "+60 6-270 0490",
  email: "pertamajayasdnbhd@gmail.com",
  
  /**
   * Konfigurasi WhatsApp:
   * Pada mulanya dibiarkan kosong ("") kerana tiada nombor telefon bimbit WhatsApp
   * rasmi disahkan dalam dokumen profil (talian +6062700490 adalah talian tetap pejabat).
   * Apabila nombor mudah alih dimasukkan (contoh: "60123456789"), butang WhatsApp
   * akan membuka sembang terus ke wa.me/{nombor}.
   */
  WHATSAPP_NUMBER: "", // Sunting di sini jika nombor WhatsApp disahkan tersedia

  // Sejarah korporat dari profil
  history: {
    enterpriseYear: 2010,
    sdnBhdYear: 2021,
    summary: "Bermula sebagai perniagaan enterprise pada tahun 2010 sebelum diperbadankan sebagai Pertama Jaya Construction & Engineering Sdn Bhd pada tahun 2021."
  },

  // Penafian kawasan servis & liputan
  serviceAreaDisclaimer: "Ketersediaan servis mengikut lokasi dan skop projek. Hubungi kami untuk pengesahan.",
  
  // Aset logo & label rasmi (fail SVG asal)
  logoPath: "/assets/logo/Pertama-Jaya-Logo.svg",
  labelPath: "/assets/logo/Pertama-Jaya-Label.svg",
  
  // Rekod cawangan yang disenaraikan dalam profil
  branches: [
    { city: "Melaka", role: "Pejabat Operasi & Pusat Pertanyaan", state: "Melaka" },
    { city: "Johor Bahru", role: "Cawangan Penyelarasan Selatan", state: "Johor" },
    { city: "Permatang Pauh", role: "Cawangan Penyelarasan Utara", state: "Pulau Pinang" }
  ],

  // Sijil & pengesahan
  certificationNote: "Pensijilan MOF (Kementerian Kewangan) sebelum ini tamat tempoh pada Julai 2025 dan sedang dalam proses pengesahan/pembaharuan dokumen terkini. Tiada tuntutan perakuan yang tidak disahkan diterbitkan."
};

/**
 * Laporan Audit Lampiran (27 fail dimuat naik, 46 foto projek dan dokumen sumber belum dimuat naik)
 */
export const ATTACHMENT_AUDIT = {
  totalProjectPhotosExpected: 72,
  uploadedPhotosCount: 26,
  uploadedLogoCount: 1,
  missingPhotosCount: 46,
  uploadedFilenames: [
    "assets/logo/pertama-jaya-exact-logo.png (Logo asal)",
    "p27-01.png", "p27-02.png", "p27-03.png", "p27-04.png", "p27-05.png",
    "p28-10.png", "p28-11.png", "p28-12.png", "p28-13.png", "p28-14.png", "p28-15.png",
    "p29-01.png", "p29-02.png", "p29-03.png", "p29-04.png",
    "p30-07.png", "p30-08.png", "p30-09.png", "p30-10.png", "p30-11.png", "p30-12.png",
    "p31-01.png", "p31-02.png", "p31-03.png", "p31-04.png", "p31-05.png"
  ],
  missingFilenames: [
    // Saliran (13 fail)
    "p27-06.png", "p27-07.png", "p27-08.png", "p27-09.png", "p27-10.png",
    "p27-11.png", "p27-12.png", "p27-13.png", "p27-14.png", "p27-15.png",
    "p27-16.png", "p27-17.png", "p27-18.png",
    // Rumah (9 fail)
    "p28-01.png", "p28-02.png", "p28-03.png", "p28-04.png", "p28-05.png",
    "p28-06.png", "p28-07.png", "p28-08.png", "p28-09.png",
    // Slab Gas (2 fail)
    "p29-05.png", "p29-06.png",
    // Jambatan (6 fail)
    "p30-01.png", "p30-02.png", "p30-03.png", "p30-04.png", "p30-05.png", "p30-06.png",
    // Pam / Blower / STP (16 fail)
    "p32-01.png", "p32-02.png", "p32-03.png", "p32-04.png", "p32-05.png",
    "p33-01.png", "p33-02.png", "p33-03.png", "p33-04.png", "p33-05.png",
    "p34-01.png", "p34-02.png", "p34-03.png", "p34-04.png", "p34-05.png", "p34-06.png",
    // Fail Dokumen Rujukan
    "IMAGE-MAP.csv (dijana berasaskan spesifikasi projek)",
    "reference/ (35 fail imej muka surat profil syarikat)"
  ]
};
