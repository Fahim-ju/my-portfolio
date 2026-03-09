import type { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 1,
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: 'July 27, 2025',
    expiryDate: 'July 27, 2028',
    credentialId: 'd39cadf1503f4ab8aee61bf6e02ba77a',
    verifyUrl: 'https://aws.amazon.com/verification',
    badgeUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    level: 'Practitioner',
  },
  {
    id: 2,
    name: 'SQL (Basic) Certificate',
    issuer: 'Hacckerrank',
    issueDate: 'Aug 28, 2023',
    expiryDate: 'N/A',
    credentialId: 'b3dfdefdab67',
    verifyUrl: 'https://www.hackerrank.com/certificates/b3dfdefdab67',
    badgeUrl: '/sqlCertificate.png',
    level: 'Basic',
  },
];
