import type { WorkStep } from '../types';

// Note: Service icons are imported in the Home page component
// This keeps data files clean and serializable

export const servicesData: Array<{
  title: string;
  description: string;
}> = [
  {
    title: 'Web Development',
    description: 'High-performance 3D digital experiences, interactive web applications, and tailor-made enterprise systems built for speed and visual excellence.',
  },
  {
    title: 'Mobile Apps',
    description: 'Immersive iOS and Android mobile solutions built with clean design languages that engage users and drive business growth.',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven growth strategies, search engine optimization, content creation, and targeted campaigns that elevate your brand visibility.',
  },
  {
    title: 'Assignment Projects',
    description: 'Academic and custom software engineering assignments designed and executed with clean, well-documented code matching high academic standards.',
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
