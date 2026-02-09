import type { WorkStep } from '../types';

// Note: Service icons are imported in the Home page component
// This keeps data files clean and serializable

export const servicesData: Array<{
  title: string;
  description: string;
}> = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions that engage users and drive business growth.',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to power your digital transformation.',
  },
];

export const workSteps: WorkStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'We dive deep into your business goals, target audience, and technical requirements to create a solid foundation.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'Our team develops your solution using agile methodology, with regular check-ins and iterative improvements.',
  },
  {
    number: '03',
    title: 'Launch',
    description: 'We deploy your product, provide training, and offer ongoing support to ensure long-term success.',
  },
];
