import {
  CompanyObjective,
  CompanyValue,
  MissionPillar,
  AchievementItem,
  OrgChartNode
} from '../types';

/**
 * Maklumat Rasmi Syarikat (Berasaskan Profil Syarikat PERTAMA JAYA comp.pdf)
 */
export const ABOUT_COMPANY_INFO = {
  nama: 'Pertama Jaya Construction & Engineering Sdn Bhd',
  noPendaftaran: '1411274-D',
  bidang: 'Pembinaan dan Kejuruteraan',
  skopPembinaan: 'Jambatan, rumah, kilang dan bangunan',
  skopKejuruteraan: 'Servis pam air/minyak, air blower dan loji rawatan kumbahan (STP)',
  telefonProfil: '+6062700490',
  telefonPaparan: '+60 6-270 0490',
  emelProfil: 'pertamajayasdnbhd@gmail.com',
  lokasiProfil: ['Melaka', 'Johor Bahru', 'Permatang Pauh'],
  modalBerbayarProfil: 'RM 750,000.00 (seperti dinyatakan dalam dokumen profil syarikat, tertakluk kepada pengesahan rekod rasmi terkini)',
  pengasasPeneraju: 'James',
  jawatanPeneraju: 'Peneraju Syarikat',
  pemerbadananTimeline: [
    {
      tahun: '2010',
      status: 'Penubuhan Enterprise',
      keterangan: 'Bermula sebagai perniagaan enterprise berfokuskan kerja pembinaan dan kejuruteraan awam.'
    },
    {
      tahun: '2021',
      status: 'Pertukaran kepada Sdn Bhd',
      keterangan: 'Dinaik taraf dan diperbadankan secara rasmi sebagai Sendirian Berhad (No. Pendaftaran 1411274-D) di Suruhanjaya Syarikat Malaysia (SSM).'
    }
  ]
};

/**
 * 4 Objektif Syarikat (PDF Halaman 3)
 */
export const OBJECTIVES_DATA: CompanyObjective[] = [
  {
    id: 'obj-1',
    number: '01',
    title: 'Memenuhi Kehendak Pelanggan',
    description: 'Melaksanakan kerja yang berkualiti serta membina hubungan yang baik dan berterusan bersama pelanggan dan pembekal.',
    points: [
      'Melaksanakan kerja yang berkualiti tinggi dan berdaya tahan.',
      'Mengekalkan dan membina hubungan baik dengan pelanggan serta pembekal berpotensi untuk meningkatkan kualiti kerja.'
    ]
  },
  {
    id: 'obj-2',
    number: '02',
    title: 'Pengurusan Kualiti Kerja dan Projek',
    description: 'Perancangan rapi sebelum pelaksanaan di tapak dengan pemantauan berterusan.',
    points: [
      'Memastikan perancangan teliti sebelum kerja-kerja fizikal tapak dimulakan.',
      'Memastikan komunikasi dan penyeliaan tapak yang berkesan bagi memperkukuh sokongan logistik dan penghantaran.'
    ]
  },
  {
    id: 'obj-3',
    number: '03',
    title: 'Keselamatan dan Kesihatan',
    description: 'Mengutamakan keselamatan tenaga kerja dan persekitaran pembinaan pada setiap fasa.',
    points: [
      'Penyelenggaraan pencegahan terhadap jentera dan alatan tapak.',
      'Penyediaan kelengkapan perlindungan diri (PPE) yang mencukupi.',
      'Taklimat keselamatan (tool-box briefing) sebelum memulakan tugasan.',
      'Pemeriksaan kesihatan rutin bagi memastikan keupayaan optimum pekerja.'
    ]
  },
  {
    id: 'obj-4',
    number: '04',
    title: 'Profesionalisme',
    description: 'Membangunkan kompetensi modal insan dan mengekalkan saluran komunikasi yang berintegriti.',
    points: [
      'Latihan berterusan dan pembangunan kemahiran kakitangan.',
      'Komunikasi telus dan beretika bersama pelanggan, kontraktor utama dan pembekal.'
    ]
  }
];

/**
 * 10 Falsafah Syarikat / Pegangan Korporat (PDF Halaman 4)
 */
export const COMPANY_VALUES: CompanyValue[] = [
  { id: 'v1', text: 'Keikhlasan, kejujuran dan menepati janji.' },
  { id: 'v2', text: 'Kerja berpasukan, keharmonian dan kesetiaan.' },
  { id: 'v3', text: 'Pengambilan, latihan dan pengekalan kakitangan di semua peringkat.' },
  { id: 'v4', text: 'Menjaga reputasi syarikat.' },
  { id: 'v5', text: 'Meneroka peluang dan teknologi baharu.' },
  { id: 'v6', text: 'Profesionalisme, kredibiliti dan dedikasi kakitangan.' },
  { id: 'v7', text: 'Kerja yang cekap, berkualiti dan bertanggungjawab.' },
  { id: 'v8', text: 'Kebajikan, penghargaan dan ganjaran kakitangan secara adil.' },
  { id: 'v9', text: 'Pekerja sebagai aset syarikat yang paling bernilai.' },
  { id: 'v10', text: 'Komited sepenuhnya terhadap kepuasan pelanggan.' }
];

/**
 * 5 Tiang Misi Syarikat (PDF Halaman 5) - Dipersembahkan sebagai aspirasi korporat
 */
export const MISSION_PILLARS: MissionPillar[] = [
  {
    number: '01',
    title: 'Syarikat yang Kompetitif',
    description: 'Berdaya saing dan berwawasan di Malaysia serta berusaha mencapai kejayaan di peringkat antarabangsa.'
  },
  {
    number: '02',
    title: 'Semangat Berpasukan',
    description: 'Mengamalkan semangat kerjasama erat dan kesepaduan dalam setiap pelaksanaan pekerjaan.'
  },
  {
    number: '03',
    title: 'Kualiti Kerja Diutamakan',
    description: 'Menghasilkan kerja berkualiti dengan tahap kemahiran, ketelitian dan kepakaran yang tinggi.'
  },
  {
    number: '04',
    title: 'Fleksibel',
    description: 'Mengurus masa dan pelaksanaan kerja secara fleksibel dengan sentiasa mengekalkan standard kualiti.'
  },
  {
    number: '05',
    title: 'Inovasi',
    description: 'Sentiasa berinovasi dalam reka bentuk pembinaan, perancangan strategi dan proses pembuatan keputusan.'
  }
];

/**
 * Pernyataan Visi Syarikat (PDF Halaman 5)
 */
export const VISION_STATEMENT =
  'Memberikan perkhidmatan terbaik bagi memenuhi aspirasi pelanggan, menjadi kontraktor yang dikenali dan disegani, serta memajukan bidang pembinaan dan teknologi melalui perkhidmatan yang cekap, profesional, amanah dan berintegriti tinggi.';

/**
 * Data Kepimpinan & Struktur Carta Organisasi
 * Sumber: PDF mengenal pasti James sebagai peneraju syarikat.
 * Carta organisasi penuh ditangguhkan sehingga senarai hierarki rasmi disahkan oleh pemilik.
 */
export const LEADERSHIP_DATA = {
  peneraju: {
    nama: 'James',
    jawatan: 'Peneraju Syarikat',
    statusSumber: 'Tercatat dalam profil syarikat sebagai pengurus / peneraju pengurusan'
  },
  // Struktur carta organisasi sedia diedit (disembunyikan daripada paparan awam mengikut arahan)
  orgStructureTemplate: {
    id: 'root-leader',
    title: 'Peneraju Syarikat / Pengarah Urusan',
    personName: 'James',
    department: 'Pengurusan Tertinggi',
    status: 'confirmed',
    children: [
      {
        id: 'dept-operations',
        title: 'Bahagian Operasi & Tapak Pembinaan',
        status: 'pending_owner_approval',
        department: 'Operasi Pembinaan'
      },
      {
        id: 'dept-engineering',
        title: 'Bahagian Kejuruteraan Mekanikal & STP',
        status: 'pending_owner_approval',
        department: 'Kejuruteraan Khusus'
      },
      {
        id: 'dept-safety-admin',
        title: 'Bahagian Keselamatan (HSE) & Pentadbiran',
        status: 'pending_owner_approval',
        department: 'Pentadbiran & Keselamatan'
      }
    ]
  } as OrgChartNode,
  chartDisplayStatus: 'pending_owner_approval' as const,
  chartNotice:
    'Carta organisasi terperinci syarikat disimpan dalam struktur data boleh sunting dan ditangguhkan daripada paparan awam sehingga pengesahan rasmi hierarki jawatan dan nama kakitangan dibekalkan oleh pemilik syarikat.'
};

/**
 * Data Pencapaian Syarikat (PDF Halaman 6)
 * Mengandungi keempat-empat entri asal.
 * Angka Modern Villa (350+) dan Hotels Building (75+) dipaparkan dengan atribusi sumber.
 * Dua angka bertindih "Modern House" (500+ dan 150+) disimpan dalam data namun tidak diterbitkan
 * sementara menunggu pengesahan pembetulan daripada pemilik.
 */
export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'modern-villa',
    count: '350+',
    label: 'Modern Villa',
    isPublished: true,
    sourceAttribution: 'Projek siap & dalam rekod syarikat',
    note: 'Rekod kategori projek vila moden.'
  },
  {
    id: 'hotels-building',
    count: '75+',
    label: 'Hotels Building',
    isPublished: true,
    sourceAttribution: 'Projek siap & dalam rekod syarikat',
    note: 'Rekod kategori bangunan hotel.'
  },
  {
    id: 'modern-house-500',
    count: '500+',
    label: 'Modern House (Rekod A)',
    isPublished: false,
    sourceAttribution: 'Rekod syarikat',
    note: 'Rekod dalam pangkalan data.'
  },
  {
    id: 'modern-house-150',
    count: '150+',
    label: 'Modern House (Rekod B)',
    isPublished: false,
    sourceAttribution: 'Rekod syarikat',
    note: 'Rekod dalam pangkalan data.'
  }
];

/**
 * Senarai Pelanggan dalam Profil Syarikat (PDF Halaman 7)
 * Tepat seperti tercatat dalam teks dokumen profil.
 */
export const PROFILE_CLIENTS: string[] = [
  'YTL Berhad',
  'Zeelan Berhad',
  'Zeelam AM Services Sdn Bhd',
  'Huashi Malaysia Sdn Bhd',
  'Iswarabena Sdn Bhd',
  'Mewmax Construction Sdn Bhd',
  'Park Royal Hotel',
  'Knusford Construction Sdn Bhd',
  'Teladan Setia Sdn Bhd',
  'Faith View Sdn Bhd'
];
