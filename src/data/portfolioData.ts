import { PortfolioItem, RecordedProject } from '../types';

/**
 * Senarai Foto Dokumentasi Projek Fizikal Unik (18 Foto Pengesahan Tapak):
 * - Saliran (4 foto unik: p27-01 hingga p27-04)
 * - Rumah (4 foto unik: p28-01 hingga p28-04)
 * - Slab Gas (3 foto unik: p29-01 hingga p29-03)
 * - Jambatan (4 foto unik: p30-01 hingga p30-04)
 * - Pam/Blower/STP (3 foto unik: p31-01 hingga p31-03)
 */
const RAW_PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. Saliran & Pembetungan (4 items)
  { id: 'p27-01', category: 'Saliran', subcategory: 'Pemasangan Kotak Pembetung (Box Culvert)', filename: 'p27-01.jpg', relPath: '/assets/portfolio/drainage/p27-01.jpg', altText: 'Pemasangan kotak pembetung konkrit pratuang bersama sokongan jentolak (p27-01)', uploadedAttachment: true },
  { id: 'p27-02', category: 'Saliran', subcategory: 'Penjajaran Saliran U-Drain Pratuang', filename: 'p27-02.jpg', relPath: '/assets/portfolio/drainage/p27-02.jpg', altText: 'Penurunan dan penjajaran unit parit U-drain konkrit pratuang (p27-02)', uploadedAttachment: true },
  { id: 'p27-03', category: 'Saliran', subcategory: 'Pengorekan Parit Saliran Lebuh Raya', filename: 'p27-03.jpg', relPath: '/assets/portfolio/drainage/p27-03.jpg', altText: 'Kerja pengorekan parit saliran jalan raya menggunakan jengkaut (p27-03)', uploadedAttachment: true },
  { id: 'p27-04', category: 'Saliran', subcategory: 'Pemasangan Papak & Sambungan Paip', filename: 'p27-04.jpg', relPath: '/assets/portfolio/drainage/p27-04.jpg', altText: 'Struktur sambungan paip bawah tanah dan papak pembetung (p27-04)', uploadedAttachment: true },

  // 2. Pembinaan & Ubah Suai Rumah (4 items)
  { id: 'p28-01', category: 'Rumah', subcategory: 'Kerangka Struktur Tiang & Rasuk Konkrit', filename: 'p28-01.jpg', relPath: '/assets/portfolio/housing/p28-01.jpg', altText: 'Kerangka konkrit bertetulang bertingkat bangunan kediaman (p28-01)', uploadedAttachment: false },
  { id: 'p28-02', category: 'Rumah', subcategory: 'Pengubahsuaian Bumbung & Kekuda Logam', filename: 'p28-02.jpg', relPath: '/assets/portfolio/housing/p28-02.jpg', altText: 'Pemasangan struktur kekuda bumbung logam ubah suai rumah (p28-02)', uploadedAttachment: false },
  { id: 'p28-03', category: 'Rumah', subcategory: 'Kerja Mengikat Bata & Pemasangan Lintel', filename: 'p28-03.jpg', relPath: '/assets/portfolio/housing/p28-03.jpg', altText: 'Pemasangan dinding bata merah dan rasuk lintel pintu tingkap (p28-03)', uploadedAttachment: false },
  { id: 'p28-04', category: 'Rumah', subcategory: 'Pembinaan & Struktur Bangunan Kediaman', filename: 'p28-04.jpg', relPath: '/assets/portfolio/housing/p28-04.jpg', altText: 'Kerja-kerja pembinaan dan struktur kediaman tapak projek (p28-04)', uploadedAttachment: false },

  // 3. Perlindungan Slab Saluran Gas (3 items)
  { id: 'p29-01', category: 'Slab Gas', subcategory: 'Penuangan Papak Konkrit Perlindungan', filename: 'p29-01.jpg', relPath: '/assets/portfolio/gas-slab-protection/p29-01.jpg', altText: 'Penuangan papak konkrit perlindungan saluran paip gas utama (p29-01)', uploadedAttachment: true },
  { id: 'p29-02', category: 'Slab Gas', subcategory: 'Pemasangan Anyaman Besi Tetulang Gas', filename: 'p29-02.jpg', relPath: '/assets/portfolio/gas-slab-protection/p29-02.jpg', altText: 'Pekerja mengikat jaring besi tetulang di atas zon laluan paip gas (p29-02)', uploadedAttachment: true },
  { id: 'p29-03', category: 'Slab Gas', subcategory: 'Pemasangan Pita Amaran & Penanda Gas', filename: 'p29-03.jpg', relPath: '/assets/portfolio/gas-slab-protection/p29-03.jpg', altText: 'Pemasangan pita amaran utiliti bawah tanah dan papak penanda gas (p29-03)', uploadedAttachment: true },

  // 4. Jambatan & Kerja Awam (4 items)
  { id: 'p30-01', category: 'Jambatan', subcategory: 'Pelancaran Rasuk Girder Jambatan', filename: 'p30-01.jpg', relPath: '/assets/portfolio/bridges/p30-01.jpg', altText: 'Gantry pelancar rasuk konkrit pratuang merentasi lebuh raya (p30-01)', uploadedAttachment: false },
  { id: 'p30-02', category: 'Jambatan', subcategory: 'Penuangan Papak Dek Konkrit Jambatan', filename: 'p30-02.jpg', relPath: '/assets/portfolio/bridges/p30-02.jpg', altText: 'Penuangan konkrit dek jambatan dengan bantuan jentera tapak (p30-02)', uploadedAttachment: false },
  { id: 'p30-03', category: 'Jambatan', subcategory: 'Pembinaan Tiang Pier Konkrit Bulat', filename: 'p30-03.jpg', relPath: '/assets/portfolio/bridges/p30-03.jpg', altText: 'Pemasangan sangkar besi tiang pier utama jambatan jejambat (p30-03)', uploadedAttachment: false },
  { id: 'p30-04', category: 'Jambatan', subcategory: 'Pembinaan Tembok Abutment & Pier Cap', filename: 'p30-04.jpg', relPath: '/assets/portfolio/bridges/p30-04.jpg', altText: 'Pembinaan struktur penahan dan pier cap jambatan (p30-04)', uploadedAttachment: true },

  // 5. Servis Pam, Air Blower & STP (3 items)
  { id: 'p31-01', category: 'Pam/Blower/STP', subcategory: 'Pemasangan Pam Sentrifugal & Motor', filename: 'p31-01.jpg', relPath: '/assets/portfolio/pumps-blowers-stp/p31-01.jpg', altText: 'Pemasangan skid pam sentrifugal bersama motor elektrik industri (p31-01)', uploadedAttachment: true },
  { id: 'p31-02', category: 'Pam/Blower/STP', subcategory: 'Penyelenggaraan Loji Kumbahan (STP)', filename: 'p31-02.jpg', relPath: '/assets/portfolio/pumps-blowers-stp/p31-02.jpg', altText: 'Penyelenggaraan komponen mekanikal loji rawatan kumbahan STP (p31-02)', uploadedAttachment: true },
  { id: 'p31-03', category: 'Pam/Blower/STP', subcategory: 'Pemasangan Unit Blower Udara Industri', filename: 'p31-03.jpg', relPath: '/assets/portfolio/pumps-blowers-stp/p31-03.jpg', altText: 'Penyelenggaraan unit peniup udara aerasi loji industri (p31-03)', uploadedAttachment: true },
];

export const CATEGORY_FALLBACK_MAP: Record<string, string> = {
  'Saliran': '/assets/portfolio/drainage/p27-01.jpg',
  'Rumah': '/assets/portfolio/housing/p28-01.jpg',
  'Slab Gas': '/assets/portfolio/gas-slab-protection/p29-01.jpg',
  'Jambatan': '/assets/portfolio/bridges/p30-01.jpg',
  'Pam/Blower/STP': '/assets/portfolio/pumps-blowers-stp/p31-01.jpg',
};

export const getFallbackPhoto = (category?: string): string => {
  if (category && CATEGORY_FALLBACK_MAP[category]) {
    return CATEGORY_FALLBACK_MAP[category];
  }
  return '/assets/portfolio/bridges/p30-01.jpg';
};

export const getCategoryShowcasePhoto = (category: string, id?: string): string => {
  if (id) {
    const itemById = RAW_PORTFOLIO_ITEMS.find((item) => item.id === id);
    if (itemById) return itemById.relPath;
  }
  const itemByCategory = RAW_PORTFOLIO_ITEMS.find((item) => item.category === category);
  return itemByCategory ? itemByCategory.relPath : getFallbackPhoto(category);
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = RAW_PORTFOLIO_ITEMS.map((item) => ({
  ...item,
  photoUrl: item.relPath,
}));

/**
 * Senarai Rekod Projek Bersejarah Yang Tercatat Dalam Profil Rasmi Syarikat.
 * NOTA INTEGRITI:
 * - Tidak mereka-reka tarikh atau nilai kontrak projek.
 * - Tidak memadankan foto tertentu kepada nama-nama projek ini secara spekulatif.
 */
export const RECORDED_PROJECTS: RecordedProject[] = [
  {
    title: 'Marina Bay, Pengubahsuaian Rumah & Pembinaan Lurang (Manholes)',
    location: 'Bandar Melaka / Ayer Keroh',
    state: 'Melaka',
    scopeSummary: 'Kerja-kerja pengubahsuaian kediaman, penambahbaikan ruang dan pembinaan kebuk lurang saliran perparitan.'
  },
  {
    title: 'Projek Infrastruktur Kampus Universiti Islam Antarabangsa (UIA)',
    location: 'Gambang',
    state: 'Pahang',
    scopeSummary: 'Kerja kejuruteraan awam dan sokongan infrastruktur persekitaran kampus.'
  },
  {
    title: 'Penaiktarafan Fasiliti Sekolah Kebangsaan Tamil',
    location: 'Ipoh',
    state: 'Perak',
    scopeSummary: 'Kerja-kerja pembaikan bangunan, pemulihan struktur dan penambahbaikan fasiliti sekolah.'
  },
  {
    title: 'Pemasangan Talian Paip Pembetungan (Sewerage Pipeline)',
    location: 'Rawang',
    state: 'Selangor',
    scopeSummary: 'Pemasangan jajaran paip kumbahan bawah tanah dan pembinaan struktur sambungan saliran.'
  },
  {
    title: 'Pengecatan Jambatan Angkat (Drawbridge) & Pembinaan Jambatan Laluan Pintas (Bypass)',
    location: 'Kuala Terengganu',
    state: 'Terengganu',
    scopeSummary: 'Kerja pengecatan perlindungan struktur ikonik jambatan angkat serta kerja pembinaan fizikal jambatan pintasan.'
  },
  {
    title: 'Projek Pembinaan Lebuhraya SUKE (Sungai Besi–Ulu Kelang Elevated Expressway)',
    location: 'Ampang / Hulu Klang',
    state: 'Kuala Lumpur / Selangor',
    scopeSummary: 'Kerja-kerja pembinaan struktur bertingkat, sokongan kejuruteraan jejambat dan perparitan lebuh raya.'
  }
];
