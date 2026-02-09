import type { FAQ, ContactInfo } from '../types';
import { COMPANY_INFO } from '../constants';

// Note: Icons are imported in the Contact page component
// This keeps data files clean and serializable

export const contactInfoData: Omit<ContactInfo, 'icon'>[] = [
  {
    title: 'Email',
    description: COMPANY_INFO.email || 'Contact us via email',
    action: 'Send us an email',
  },
  {
    title: 'WhatsApp',
    description: COMPANY_INFO.whatsapp || 'Chat available',
    action: 'Chat with us',
  },
  {
    title: 'Location',
    description: COMPANY_INFO.location || 'Remote-friendly',
    action: 'View on map',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. A simple website typically takes 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes! All our packages include post-launch support. We offer various maintenance plans to ensure your product continues to perform optimally and stays up-to-date with the latest technologies.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We specialize in modern web technologies including React, Node.js, TypeScript, and cloud platforms like AWS. We choose the best technology stack based on your specific project requirements.',
  },
  {
    question: 'How do you handle project communication?',
    answer: "We believe in transparent communication. You'll have a dedicated project manager, regular check-ins, and access to our project management tools. We typically have weekly status meetings and provide daily updates.",
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer both fixed-price and time-and-materials pricing models. The choice depends on your project scope and requirements. We provide detailed quotes after understanding your needs during our initial consultation.',
  },
];
