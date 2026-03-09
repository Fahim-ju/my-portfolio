import type { NotableWork } from '../types';

export const notableWork: NotableWork[] = [
  {
    id: 1,
    title: 'SFTP Server on AWS EC2',
    tech: ['AWS EC2', 'Linux', 'OpenSSH', 'Security Groups', 'IAM'],
    description:
      'Provisioned and secured a production-grade SFTP server on an EC2 instance — configured OpenSSH, locked down Security Groups to allowlisted IPs, set up IAM-scoped S3 bucket access for file storage, and automated server hardening via a user-data bootstrap script.',
    category: 'AWS',
  },
  // Add more notable work entries here
];
