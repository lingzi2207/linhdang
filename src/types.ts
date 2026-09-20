export type ProjectRole = 
  | 'Biên tập bản thảo'
  | 'Dịch giả'
  | 'Phát triển xuất bản'
  | 'Giám tuyển nội dung';

export type ProjectCategory = 
  | 'Tất cả'
  | 'Văn học dịch'
  | 'Phi hư cấu & Triết học'
  | 'Nghệ thuật & Thiết kế'
  | 'Khảo cứu & Tản văn';

export interface ProjectExcerpt {
  chapter: string;
  viText: string;
  originalText?: string;
  originalLanguage?: string;
}

export interface Project {
  id: string;
  title: string;
  originalTitle?: string;
  author: string;
  originalAuthor?: string;
  role: ProjectRole;
  category: Exclude<ProjectCategory, 'Tất cả'>;
  publisher: string;
  year: number | string;
  pages?: number;
  isbn?: string;
  format?: string;
  coverAccent: string; // Tailwind color or hex
  summary: string;
  editorialNote: string;
  awardsOrRecognition?: string;
  excerpt?: ProjectExcerpt;
  featured?: boolean;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  organizationType: string;
  location: string;
  description: string;
  keyProjects: string[];
}

export interface PublishingService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  scope: string[];
  deliverable: string;
}

export interface EditorialArticle {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  fullContent: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  affiliation: string;
}
