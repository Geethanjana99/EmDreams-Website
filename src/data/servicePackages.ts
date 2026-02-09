import type { ServiceCategory } from '../types';

// Note: Icons are imported and merged in the Services page component
// This structure allows the data to be pure and serializable

export const serviceCategories: Omit<ServiceCategory, 'icon'>[] = [
  {
    id: 'web',
    name: 'Web Development',
    summary: 'Build powerful, scalable web applications that deliver exceptional user experiences and drive business growth.',
    benefits: [
      'Custom web applications tailored to your needs',
      'Responsive design for all devices',
      'Modern tech stack (React, Node.js, etc.)',
      'SEO optimization and performance tuning',
      'Ongoing maintenance and support',
    ],
    packages: [
      {
        name: 'Starter',
        price: '$5,000',
        description: 'Perfect for small businesses and startups',
        features: [
          'Up to 5 pages',
          'Responsive design',
          'Contact form integration',
          'Basic SEO setup',
          '30 days support',
        ],
      },
      {
        name: 'Growth',
        price: '$12,000',
        description: 'Ideal for growing businesses',
        features: [
          'Up to 15 pages',
          'Custom functionality',
          'CMS integration',
          'Advanced SEO',
          'Analytics setup',
          '90 days support',
        ],
        highlighted: true,
      },
      {
        name: 'Pro',
        price: '$25,000+',
        description: 'Enterprise-grade solutions',
        features: [
          'Unlimited pages',
          'Complex integrations',
          'Custom admin panel',
          'Performance optimization',
          'Security audit',
          '6 months support',
        ],
      },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Apps',
    summary: 'Create engaging mobile experiences that connect with your users on iOS and Android platforms.',
    benefits: [
      'Native or cross-platform development',
      'Intuitive user interface design',
      'Push notifications and real-time features',
      'App store optimization',
      'Backend API development',
    ],
    packages: [
      {
        name: 'Starter',
        price: '$15,000',
        description: 'Simple mobile app for one platform',
        features: [
          'iOS or Android',
          'Up to 5 screens',
          'Basic features',
          'App store submission',
          '60 days support',
        ],
      },
      {
        name: 'Growth',
        price: '$30,000',
        description: 'Full-featured cross-platform app',
        features: [
          'iOS and Android',
          'Up to 15 screens',
          'Advanced features',
          'Backend integration',
          'Push notifications',
          '90 days support',
        ],
        highlighted: true,
      },
      {
        name: 'Pro',
        price: '$50,000+',
        description: 'Complex enterprise mobile solution',
        features: [
          'Native development',
          'Unlimited screens',
          'Custom integrations',
          'Offline functionality',
          'Advanced security',
          '6 months support',
        ],
      },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud Solutions',
    summary: 'Leverage cloud infrastructure to scale your business with reliable, secure, and cost-effective solutions.',
    benefits: [
      'AWS, Azure, or Google Cloud setup',
      'Scalable architecture design',
      'DevOps and CI/CD pipelines',
      'Security and compliance',
      'Cost optimization strategies',
    ],
    packages: [
      {
        name: 'Starter',
        price: '$3,000',
        description: 'Basic cloud infrastructure setup',
        features: [
          'Cloud platform setup',
          'Basic deployment',
          'Monitoring setup',
          'Documentation',
          '30 days support',
        ],
      },
      {
        name: 'Growth',
        price: '$8,000',
        description: 'Production-ready cloud architecture',
        features: [
          'Multi-environment setup',
          'CI/CD pipeline',
          'Auto-scaling',
          'Backup strategy',
          'Security hardening',
          '90 days support',
        ],
        highlighted: true,
      },
      {
        name: 'Pro',
        price: 'Custom',
        description: 'Enterprise cloud infrastructure',
        features: [
          'Multi-region deployment',
          'Advanced monitoring',
          'Disaster recovery',
          'Compliance setup',
          'Dedicated support',
          'Ongoing optimization',
        ],
      },
    ],
  },
];
