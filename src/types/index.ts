// Type definitions for EmDreams Website

// Using a generic component type to avoid React dependency in types file
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconComponent = any;

export interface Service {
  icon: IconComponent;
  title: string;
  description: string;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department?: string;
  image: string;
  bio: string;
  skills: string[];
  social?: SocialLinks;
}

export interface ProjectDetails {
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  details: ProjectDetails;
}

export interface PackageFeature {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: IconComponent;
  summary: string;
  benefits: string[];
  packages: PackageFeature[];
}

export interface ContactInfo {
  icon: IconComponent;
  title: string;
  description: string;
  action: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Filter {
  id: string;
  name: string;
}
