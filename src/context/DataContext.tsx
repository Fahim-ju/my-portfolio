import { useEffect, useState, type ReactNode } from 'react';
import type { Project, SkillCategory, ExperienceItem, Certification, Contest, NotableWork } from '../types';
import { DATA_URLS } from '../config/dataUrls';
import { DataContext } from './portfolioDataContext';

// Local fallbacks
import { projects as localProjects } from '../data/projects';
import { skillCategories as localSkills } from '../data/skills';
import { experience as localExperience } from '../data/experience';
import { certifications as localCertifications } from '../data/certifications';
import { contests as localContests } from '../data/contests';
import { notableWork as localNotableWork } from '../data/notableWork';

interface PortfolioData {
  projects: Project[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  certifications: Certification[];
  contests: Contest[];
  notableWork: NotableWork[];
}

async function fetchOrFallback<T>(url: string, fallback: T): Promise<T> {
  if (!url) return fallback;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } catch {
    console.warn(`[DataContext] Failed to fetch ${url}, using local fallback.`);
    return fallback;
  }
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>({
    projects: localProjects,
    skillCategories: localSkills,
    experience: localExperience,
    certifications: localCertifications,
    contests: localContests,
    notableWork: localNotableWork,
  });
  const [loading, setLoading] = useState(
    Object.values(DATA_URLS).some((url) => url !== '')
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const hasRemoteUrls = Object.values(DATA_URLS).some((url) => url !== '');
    if (!hasRemoteUrls) return;

    (async () => {
      try {
        const [projects, skillCategories, experience, certifications, contests, notableWork] =
          await Promise.all([
            fetchOrFallback<Project[]>(DATA_URLS.projects, localProjects),
            fetchOrFallback<SkillCategory[]>(DATA_URLS.skills, localSkills),
            fetchOrFallback<ExperienceItem[]>(DATA_URLS.experience, localExperience),
            fetchOrFallback<Certification[]>(DATA_URLS.certifications, localCertifications),
            fetchOrFallback<Contest[]>(DATA_URLS.contests, localContests),
            fetchOrFallback<NotableWork[]>(DATA_URLS.notableWork, localNotableWork),
          ]);
        setData({ projects, skillCategories, experience, certifications, contests, notableWork });
      } catch {
        setError('Failed to load portfolio data');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ ...data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
}
