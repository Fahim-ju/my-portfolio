export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  verifyUrl: string;
  badgeUrl?: string;
  level?: string;
}

export interface Contest {
  id: number;
  name: string;
  organizer: string;
  year: string;
  result: string;
  category: 'Competitive Programming' | 'Hackathon' | 'CTF' | 'Data Science' | 'Other';
  description?: string;
  url?: string;
}

export interface NotableWork {
  id: number;
  title: string;
  tech: string[];
  description: string;
  category: string;
  url?: string;
}
