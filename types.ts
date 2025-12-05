export interface CareerItem {
  id: string;
  type: 'work' | 'education';
  role: string;
  company: string; // or institution
  location: string;
  period: string;
  description?: string;
  bullets: string[];
  image?: string;
  links?: { label: string; url: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role?: string;
  period: string;
  description: string;
  tags: string[];
  link?: string; // Main link (kept for backward compatibility)
  links?: { label: string; url: string }[]; // New multi-link support
  bullets: string[];
  image?: string; // Project thumbnail
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  description: string;
  link?: string;
  image?: string; // Paper thumbnail
}

export interface SkillCategory {
  category: string;
  skills: string[];
}