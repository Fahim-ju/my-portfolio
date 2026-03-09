import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: 'Full-Stack Developer',
    company: 'Tech Startup (Remote)',
    period: 'Jan 2024 – Present',
    location: 'Remote',
    description: [
      'Architected and shipped REST APIs using ASP.NET Core and SQL Server, reducing response latency by 40%.',
      'Built cross-platform mobile UI in React Native + Expo with offline sync via AsyncStorage.',
      'Automated deployment pipelines with GitHub Actions and AWS CDK, cutting release time by 60%.',
    ],
  },
  {
    id: 2,
    role: 'Software Developer Intern',
    company: 'Digital Solutions Ltd.',
    period: 'Jul 2023 – Dec 2023',
    location: 'Dhaka, Bangladesh',
    description: [
      'Developed React frontend for an internal HR dashboard with role-based access control.',
      'Integrated third-party payment gateway (SSLCommerz) and wrote unit tests with Jest.',
      'Collaborated daily in Agile sprints using Jira and delivered 3 production features.',
    ],
  },
  {
    id: 3,
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: 'Jan 2022 – Jun 2023',
    location: 'Remote',
    description: [
      'Delivered 5+ full-stack web apps for clients across e-commerce, education, and hospitality sectors.',
      'Used React, Node.js/Express, and PostgreSQL as primary stack.',
      'Maintained 5-star client satisfaction with on-time delivery and clear communication.',
    ],
  },
];
