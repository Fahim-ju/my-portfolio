import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 7,
    title: 'Decentralized Health Record System',
    description:
      'A blockchain-based distributed medical record keeping system built on the Ethereum Platform using Solidity smart contracts, Truffle, ReactJS, and MetaMask for secure patient data management.',
    stack: ['Solidity', 'Truffle', 'ReactJS', 'MetaMask', 'Ethereum'],
    githubUrl: 'https://github.com/Fahim-ju/Decentralized-Health-Record-System',
    featured: true,
  },
  {
    id: 8,
    title: 'Write-In — Blogging Site',
    description:
      'A team blogging platform built with HTML, CSS, Bootstrap, JavaScript, and Node.js following the MVC software design pattern, with collaborative git wiki for documentation.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'MVC'],
    githubUrl: 'https://github.com/alifalhasan/CSE-357-SWE-Project-Write-In',
  },
  {
    id: 2,
    title: 'Wildlife ML Classifier',
    description:
      'A machine-learning pipeline that classifies wildlife species from camera-trap images using a fine-tuned ResNet-50 model, deployed as a REST API on AWS Lambda.',
    stack: ['Python', 'PyTorch', 'FastAPI', 'AWS Lambda', 'S3', 'Docker'],
    githubUrl: 'https://github.com/Fahim-ju/WILDLIFE-DIVERSITY',
    featured: true,
  },
  {
    id: 3,
    title: 'AWS Email Notification Pipeline',
    description:
      'Serverless event-driven pipeline that triggers transactional emails via SES on user actions (sign-up, password reset, order confirmation) using SNS + Lambda + SQS.',
    stack: ['AWS Lambda', 'SES', 'SNS', 'SQS', 'TypeScript', 'CDK'],
    githubUrl: 'https://github.com/Fahim-ju',
    featured: true,
  },
  {
    id: 5,
    title: 'GameHub',
    description:
      'A React-based browser gaming platform with multiple games (Chess, Tic-Tac-Toe, Drag & Drop Puzzle) featuring smooth animations via Framer Motion.',
    stack: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Fahim-ju/GameHub',
    liveUrl: 'https://game-hub-ten-silk.vercel.app/game/mario',
  },
  {
    id: 6,
    title: 'PointGuni — Community Points App',
    description:
      'A React Native + Expo mobile application for community-based point awarding, with real-time leaderboards, push notifications, and offline support.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'NativeWind'],
    githubUrl: 'https://github.com/Fahim-ju/PointGuni',
  },
];
