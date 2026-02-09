import type { Project } from '../types';

// Note: Replace these placeholder images with your actual project screenshots
// Update the details to reflect your real projects

export const projects: Project[] = [
  {
    title: 'FinTech Dashboard',
    category: 'web',
    description: 'Real-time financial analytics platform for investment firms with advanced data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    details: {
      challenge: 'Client needed a real-time data visualization platform that could handle millions of data points while maintaining performance.',
      solution: 'Built a responsive dashboard with WebSocket integration for live data updates, optimized rendering with virtual scrolling, and implemented efficient data caching strategies.',
      results: [
        '40% faster data processing compared to legacy system',
        'Improved user engagement by 65%',
        'Reduced server costs by 30% through optimization',
        'Successfully handling 10M+ daily transactions',
      ],
      technologies: ['React', 'D3.js', 'WebSocket', 'Redis', 'PostgreSQL'],
    },
  },
  {
    title: 'Healthcare Mobile App',
    category: 'mobile',
    description: 'Patient management system for healthcare providers with secure data handling.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    details: {
      challenge: 'Healthcare provider needed secure mobile access to patient data while maintaining compliance and ensuring excellent user experience.',
      solution: 'Developed a cross-platform mobile app with biometric authentication, end-to-end encryption, and offline capabilities for areas with poor connectivity.',
      results: [
        '99.9% uptime since launch',
        '50,000+ active healthcare professionals',
        'Zero security incidents',
        'Average 4.8-star rating on app stores',
      ],
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Biometric Auth'],
    },
  },
  {
    title: 'E-commerce Platform',
    category: 'web',
    description: 'Scalable online marketplace connecting buyers and sellers globally.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    details: {
      challenge: 'Client wanted to build a marketplace that could scale to millions of users while providing a seamless shopping experience.',
      solution: 'Architected a microservices-based platform with advanced search, real-time inventory management, and integrated payment processing.',
      results: [
        '$5M+ in monthly transactions',
        '200,000+ registered users',
        'Sub-second search response times',
        '35% increase in conversion rate',
      ],
      technologies: ['Next.js', 'GraphQL', 'Elasticsearch', 'Stripe', 'AWS'],
    },
  },
  {
    title: 'Fitness Tracking App',
    category: 'mobile',
    description: 'Social fitness platform with workout tracking and community features.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    details: {
      challenge: 'Create an engaging fitness app that motivates users through social features while accurately tracking diverse workouts.',
      solution: 'Built a mobile-first platform with gamification elements, social challenges, and integration with popular fitness devices and wearables.',
      results: [
        '100,000+ downloads in first 6 months',
        '70% user retention rate',
        'Featured in app store health category',
        'Average 30-minute daily engagement',
      ],
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'Node.js'],
    },
  },
  {
    title: 'Cloud Infrastructure Platform',
    category: 'cloud',
    description: 'Enterprise cloud management solution for multi-cloud environments.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    details: {
      challenge: 'Enterprise clients needed unified management and monitoring across AWS, Azure, and Google Cloud infrastructures.',
      solution: 'Developed a comprehensive platform with infrastructure-as-code templates, cost optimization tools, and real-time monitoring dashboards.',
      results: [
        '45% reduction in cloud infrastructure costs',
        'Managing 1000+ cloud resources',
        '99.99% platform availability',
        'Deployment time reduced by 60%',
      ],
      technologies: ['React', 'Python', 'Terraform', 'Kubernetes', 'Multi-Cloud APIs'],
    },
  },
  {
    title: 'Learning Management System',
    category: 'web',
    description: 'Comprehensive educational platform for online courses and certifications.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    details: {
      challenge: 'Educational institution needed a scalable platform to deliver courses, track progress, and manage certifications for thousands of students.',
      solution: 'Created a feature-rich LMS with video streaming, interactive quizzes, progress tracking, and automated certification generation.',
      results: [
        '50,000+ active students',
        '1,000+ courses published',
        '95% course completion rate',
        'Successfully processed 10,000+ certifications',
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS S3', 'Video Streaming'],
    },
  },
  {
    title: 'Real Estate Portal',
    category: 'web',
    description: 'Property listing and management platform with advanced search capabilities.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    details: {
      challenge: 'Real estate agency needed a modern platform with map-based search, virtual tours, and CRM integration.',
      solution: 'Built an intuitive portal with geospatial search, 3D virtual tours, lead management, and appointment scheduling.',
      results: [
        '5,000+ active property listings',
        '300% increase in qualified leads',
        '25% faster sales cycle',
        'Mobile app with 50,000+ downloads',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Mapbox', '3D Tour Integration'],
    },
  },
  {
    title: 'Food Delivery Platform',
    category: 'mobile',
    description: 'Complete food ordering and delivery ecosystem for restaurants and customers.',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop',
    details: {
      challenge: 'Create a three-sided platform connecting customers, restaurants, and delivery partners with real-time tracking.',
      solution: 'Developed separate apps for customers, restaurants, and drivers with live GPS tracking, payment processing, and order management.',
      results: [
        '200+ restaurant partners',
        '10,000+ monthly orders',
        'Average 30-minute delivery time',
        '4.5+ star rating across all apps',
      ],
      technologies: ['React Native', 'Node.js', 'Socket.io', 'Stripe', 'Google Maps API'],
    },
  },
];
