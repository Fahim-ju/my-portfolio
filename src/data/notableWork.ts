import type { NotableWork } from "../types";

export const notableWork: NotableWork[] = [
  {
    id: 2,
    title: "Serverless Email Processing Pipeline",
    tech: ["AWS Lambda", "AWS SES", "Amazon S3", "DynamoDB", "Python"],
    description:
      "Built a serverless pipeline to process incoming emails via AWS SES. The system automatically stores email content in S3, extracts structured information from the email body, processes attachments, and saves metadata into DynamoDB.",
    category: "AWS",
  },
  {
    id: 1,
    title: "Secure Multi-User SFTP Server on AWS",
    tech: ["AWS EC2", "Linux", "OpenSSH", "S3", "CloudWatch", "IAM"],
    description:
      "Designed and deployed a secure multi-user SFTP server on AWS EC2 with user isolation using chroot jail. Implemented automated file synchronization to Amazon S3, real-time file monitoring with inotify, and centralized logging using CloudWatch.",
    category: "AWS",
  },
  {
    id: 3,
    title: "Attachment Classification Workflow",
    tech: ["AWS Step Functions", "AWS Lambda", "Python", "Serverless"],
    description:
      "Designed an automated workflow using AWS Step Functions to classify and process email attachments. The workflow triggers classification Lambda functions and routes attachments to specialized processors for extracting structured data.",
    category: "AWS",
  },
  {
    id: 9,
    title: "Purchase Order PDF Generator",
    tech: ["React", "TypeScript", "HTML", "CSS", "PDF Generation"],
    description:
      "Developed a dynamic Purchase Order PDF generation system in React that converts structured order data into professionally formatted PDF documents. The solution supports line items, supplier details, pricing calculations, and export-ready documents for business workflows.",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Supplier Open Order Update Workflow",
    tech: [".NET", "C#", "SQL Server", "REST API"],
    description:
      "Implemented an enterprise workflow to notify suppliers about open purchase order updates. The system groups line items per supplier, tracks update requests, integrates with ERP systems, and sends real-time or digest email notifications.",
    category: "Backend",
  },
  {
    id: 5,
    title: "Automated Wildlife Monitoring System",
    tech: ["Machine Learning", "Python", "Computer Vision"],
    description:
      "Conducted research on automated wildlife identification using camera trap images. The system uses machine learning models to identify animal species and monitor biodiversity in forest environments.",
    category: "Research",
    url: "https://github.com/Fahim-ju/WILDLIFE-DIVERSITY.git",
  },
];
