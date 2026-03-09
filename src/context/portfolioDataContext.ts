import { createContext } from 'react';
import type { Project, SkillCategory, ExperienceItem, Certification, Contest, NotableWork } from '../types';

export interface DataContextValue {
  projects: Project[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  certifications: Certification[];
  contests: Contest[];
  notableWork: NotableWork[];
  loading: boolean;
  error: string | null;
}

export const DataContext = createContext<DataContextValue | null>(null);
