export type RoutePath = '/' | '/servis' | '/portfolio' | '/hubungi' | '/tentang-kami';

export interface CompanyObjective {
  id: string;
  number: string;
  title: string;
  description: string;
  points: string[];
}

export interface CompanyValue {
  id: string;
  text: string;
}

export interface MissionPillar {
  number: string;
  title: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  count: string;
  label: string;
  isPublished: boolean;
  sourceAttribution: string;
  note?: string;
}

export interface OrgChartNode {
  id: string;
  title: string;
  personName?: string;
  department?: string;
  children?: OrgChartNode[];
  status: 'confirmed' | 'pending_owner_approval';
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Rumah' | 'Jambatan' | 'Saliran' | 'Slab Gas' | 'Pam/Blower/STP';
  features: string[];
  sampleImages: string[];
}

export interface PortfolioItem {
  id: string;
  category: 'Saliran' | 'Rumah' | 'Slab Gas' | 'Jambatan' | 'Pam/Blower/STP';
  subcategory: string;
  filename: string;
  relPath: string;
  photoUrl?: string;
  /** Display-only illustration; relPath always preserves the original source image. */
  imageProvenance?: 'ai-generated';
  altText: string;
  uploadedAttachment: boolean;
}

export interface RecordedProject {
  title: string;
  location: string;
  state: string;
  scopeSummary: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface EnquiryStep {
  stepNumber: string;
  title: string;
  desc: string;
  badge: string;
}

export interface ContactFormData {
  nama: string;
  telefon: string;
  lokasi: string;
  jenisServis: string;
  mesej: string;
}
