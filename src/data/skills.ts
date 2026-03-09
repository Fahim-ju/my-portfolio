import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: 'SiReact' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Bootstrap', icon: 'SiBootstrap' },
      { name: 'Framer Motion', icon: 'SiFramer' },
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      { name: 'C# / ASP.NET Core', icon: 'SiDotnet' },
      { name: 'Python', icon: 'SiPython' },
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'FastAPI', icon: 'SiFastapi' },
      { name: 'REST APIs', icon: 'SiOpenapiinitiative' },
      { name: 'Electron', icon: 'SiElectron' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'SiAmazonwebservices' },
      { name: 'AWS Lambda', icon: 'SiAwslambda' },
      { name: 'Step Functions', icon: 'SiAmazonaws' }, // optional, can add a custom icon
      { name: 'S3 / DynamoDB / RDS', icon: 'SiAmazonwebservices' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'GitHub Actions', icon: 'SiGithubactions' },
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      { name: 'SQL Server', icon: 'SiMicrosoftsqlserver' },
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'DynamoDB', icon: 'SiAmazondynamodb' },
      { name: 'Copilot', icon: 'SiGithub' },
      { name: 'Git', icon: 'SiGit' },
      { name: 'VS Code', icon: 'SiVisualstudiocode' },
    ],
  },
];