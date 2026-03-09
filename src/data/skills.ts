import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: 'SiReact' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'React Native', icon: 'SiReact' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Framer Motion', icon: 'SiFramer' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'C# / ASP.NET', icon: 'SiDotnet' },
      { name: 'Python', icon: 'SiPython' },
      { name: 'FastAPI', icon: 'SiFastapi' },
      { name: 'Express', icon: 'SiExpress' },
      { name: 'REST APIs', icon: 'SiOpenapiinitiative' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'SiAmazonwebservices' },
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'AWS Lambda', icon: 'SiAwslambda' },
      { name: 'AWS CDK', icon: 'SiAmazonwebservices' },
      { name: 'GitHub Actions', icon: 'SiGithubactions' },
      { name: 'Firebase', icon: 'SiFirebase' },
    ],
  },
  {
    category: 'Databases & Tools',
    skills: [
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'SQL Server', icon: 'SiMicrosoftsqlserver' },
      { name: 'Git', icon: 'SiGit' },
      { name: 'VS Code', icon: 'SiVisualstudiocode' },
      { name: 'Expo', icon: 'SiExpo' },
      { name: 'PyTorch', icon: 'SiPytorch' },
    ],
  },
];
