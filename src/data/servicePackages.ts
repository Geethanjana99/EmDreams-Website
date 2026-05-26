import type { ServiceCategory } from '../types';

// Note: Icons are imported and merged in the Services page component
// This structure allows the data to be pure and serializable

export const serviceCategories: Omit<ServiceCategory, 'icon'>[] = [
  {
    id: 'software-development',
    name: 'Software Development',
    summary: 'End-to-end software development services across web, mobile and backend systems. We deliver robust, scalable solutions tailored to your needs.',
    benefits: [
      'Custom web and mobile applications',
      'Scalable backend architecture',
      'Modern tech stack and best practices',
      'Security and performance optimization',
      'Post-launch support and maintenance',
    ],
    packages: [
      {
        name: 'Starter',
        price: 'LKR 30,000',
        description: 'Baseline projects and MVPs',
        features: [
          'MVP scope delivery',
          'Responsive frontend',
          'Backend API and database',
          'Basic security and testing',
          '30 days support',
        ],
      },
      {
        name: 'Growth',
        price: 'LKR 50,000',
        description: 'Feature-rich products for growth',
        features: [
          'Advanced functionality',
          'CMS or admin panel',
          'Integrations and APIs',
          'Performance and SEO optimizations',
          '90 days support',
        ],
        highlighted: true,
      },
      {
        name: 'Pro',
        price: 'LKR 80,000+',
        description: 'Enterprise-grade systems and integrations',
        features: [
          'Custom enterprise integrations',
          'Multi-region deployments',
          'Advanced security and compliance',
          'Dedicated support',
        ],
      },
    ],
  },
  {
    id: 'it-project-support',
    name: 'IT Project Support',
    summary: 'On-demand IT project support to keep your projects running smoothly — from maintenance to technical leadership and troubleshooting.',
    benefits: [
      'Technical project oversight',
      'Issue triage and resolution',
      'Maintenance and patching',
      'Temporary engineering resources',
      'Knowledge transfer and documentation',
    ],
    packages: [
      {
        name: 'Starter',
        price: 'LKR 5,000',
        description: 'Short-term project support and stabilization',
        features: [
          'Technical audit',
          'Issue triage',
          'Short-term engineering support',
        ],
      },
      {
        name: 'Growth',
        price: 'LKR 10,000',
        description: 'Ongoing support and engineering resources',
        features: [
          'Weekly status and reporting',
          'Dedicated part-time engineers',
          'Maintenance windows',
        ],
        highlighted: true,
      },
      {
        name: 'Pro',
        price: 'LKR 15,000+',
        description: 'Full project support retainer and escalation',
        features: [
          'Dedicated engineering team',
          '24/7 on-call support',
          'SLA-backed maintenance',
        ],
      },
    ],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    summary: 'Growth-focused digital marketing services to increase visibility, leads, and conversions.',
    benefits: [
      'SEO and content strategy',
      'Paid ads and performance marketing',
      'Social media management',
      'Analytics and conversion optimization',
      'Monthly reporting and insights',
    ],
    packages: [
      {
        name: 'Starter',
        price: 'LKR 7,000/month',
        description: 'Monthly engagement for foundational marketing',
        features: [
          'Basic SEO',
          'Social media posting',
          'Monthly reports',
        ],
      },
      {
        name: 'Growth',
        price: 'LKR 12,000/month',
        description: 'Full-service monthly marketing',
        features: [
          'SEO + content',
          'Paid ads management',
          'Conversion optimization',
          'Bi-weekly reporting',
        ],
        highlighted: true,
      },
      {
        name: 'Pro',
        price: 'LKR 20,000/month',
        description: 'High-touch enterprise marketing retainer',
        features: [
          'Dedicated marketing team',
          'Advanced analytics and testing',
          'Creative production',
        ],
      },
    ],
  },
  
];
