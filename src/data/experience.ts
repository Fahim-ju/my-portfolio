import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Kaz Software',
    period: 'Oct 2025 – Present',
    location: 'Dhaka, Bangladesh',
    description: [
      'Assist integration of third-party ERP solutions into internal systems, ensuring seamless data synchronization and workflow automation.',
      'Design and implement serverless workflows on AWS to automate business processes and improve system scalability.',
      'Optimize backend performance of enterprise applications built with .NET and DynamoDB.',
      'Maintain and enhance Electron-based Windows applications to ensure reliability and user experience.',
      'Collaborate with cross-functional teams to deliver robust, production-grade software solutions.'
    ]
  },
  {
    id: 2,
    role: 'Associate Software Engineer',
    company: 'Kaz Software',
    period: 'Nov 2023 – Oct 2025',
    location: 'Dhaka, Bangladesh',
    description: [
      'Contributed to frontend development using React, Redux, and TypeScript.',
      'Assisted in building backend services with .NET and DynamoDB.',
      'Participated in automation and workflow projects using AWS services.',
      'Supported enterprise applications, debugging, and deployment tasks.'
    ]
  }
];