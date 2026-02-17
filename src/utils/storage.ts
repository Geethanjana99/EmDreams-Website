// LocalStorage utilities for data persistence

import type { Project, TeamMember, FAQ } from '../types';
import type { ServiceCategoryData, ServiceData, ContactInfoData } from '../types/admin';

const STORAGE_KEYS = {
  PROJECTS: 'emdreams_projects',
  TEAM: 'emdreams_team',
  SERVICES: 'emdreams_services',
  SERVICE_PACKAGES: 'emdreams_service_packages',
  FAQS: 'emdreams_faqs',
  CONTACT_INFO: 'emdreams_contact_info',
} as const;

// Projects
export const getProjects = (): Project[] | null => {
  const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
  return data ? JSON.parse(data) : null;
};

export const saveProjects = (projects: Project[]): void => {
  localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
};

// Team Members
export const getTeamMembers = (): TeamMember[] | null => {
  const data = localStorage.getItem(STORAGE_KEYS.TEAM);
  return data ? JSON.parse(data) : null;
};

export const saveTeamMembers = (members: TeamMember[]): void => {
  localStorage.setItem(STORAGE_KEYS.TEAM, JSON.stringify(members));
};

// Services
export const getServices = (): ServiceData[] | null => {
  const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
  return data ? JSON.parse(data) : null;
};

export const saveServices = (services: ServiceData[]): void => {
  localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
};

// Service Packages
export const getServicePackages = (): ServiceCategoryData[] | null => {
  const data = localStorage.getItem(STORAGE_KEYS.SERVICE_PACKAGES);
  return data ? JSON.parse(data) : null;
};

export const saveServicePackages = (packages: ServiceCategoryData[]): void => {
  localStorage.setItem(STORAGE_KEYS.SERVICE_PACKAGES, JSON.stringify(packages));
};

// FAQs
export const getFAQs = (): FAQ[] | null => {
  const data = localStorage.getItem(STORAGE_KEYS.FAQS);
  return data ? JSON.parse(data) : null;
};

export const saveFAQs = (faqs: FAQ[]): void => {
  localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(faqs));
};

// Contact Info
export const getContactInfo = (): ContactInfoData[] | null => {
  const data = localStorage.getItem(STORAGE_KEYS.CONTACT_INFO);
  return data ? JSON.parse(data) : null;
};

export const saveContactInfo = (info: ContactInfoData[]): void => {
  localStorage.setItem(STORAGE_KEYS.CONTACT_INFO, JSON.stringify(info));
};

// Clear all data (reset to defaults)
export const clearAllData = (): void => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};
