import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Salary Manager',
    description:
      'A full-stack payroll management system with role-based access control, employee records, automated monthly salary calculation, and downloadable pay-slip generation.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/fahim',
    featured: true,
  },
  {
    id: 2,
    title: 'Wildlife ML Classifier',
    description:
      'A machine-learning pipeline that classifies wildlife species from camera-trap images using a fine-tuned ResNet-50 model, deployed as a REST API on AWS Lambda.',
    stack: ['Python', 'PyTorch', 'FastAPI', 'AWS Lambda', 'S3', 'Docker'],
    githubUrl: 'https://github.com/fahim',
    featured: true,
  },
  {
    id: 3,
    title: 'AWS Email Notification Pipeline',
    description:
      'Serverless event-driven pipeline that triggers transactional emails via SES on user actions (sign-up, password reset, order confirmation) using SNS + Lambda + SQS.',
    stack: ['AWS Lambda', 'SES', 'SNS', 'SQS', 'TypeScript', 'CDK'],
    githubUrl: 'https://github.com/fahim',
    featured: true,
  },
  {
    id: 4,
    title: 'Expense Manager API',
    description:
      'RESTful API built with ASP.NET Core for tracking personal and team expenses with category-based reporting, JWT authentication, and Swagger documentation.',
    stack: ['C#', 'ASP.NET Core', 'SQL Server', 'JWT', 'Swagger'],
    githubUrl: 'https://github.com/fahim',
  },
  {
    id: 5,
    title: 'GameHub',
    description:
      'A React-based browser gaming platform with multiple games (Chess, Tic-Tac-Toe, Drag & Drop Puzzle) featuring smooth animations via Framer Motion.',
    stack: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/fahim',
    liveUrl: 'https://fahim.github.io/GameHub',
  },
  {
    id: 6,
    title: 'PointGuni — Community Points App',
    description:
      'A React Native + Expo mobile application for community-based point awarding, with real-time leaderboards, push notifications, and offline support.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'NativeWind'],
    githubUrl: 'https://github.com/fahim',
  },
];
