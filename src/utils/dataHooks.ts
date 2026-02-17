// Data hooks for retrieving data with localStorage fallback
import { projects as defaultProjects } from '../data/projects';
import { teamMembers as defaultTeamMembers } from '../data/team';
import { servicesData as defaultServices } from '../data/services';
import { serviceCategories as defaultServiceCategories } from '../data/servicePackages';
import { faqs as defaultFAQs, contactInfoData as defaultContactInfo } from '../data/contact';
import { COMPANY_INFO } from '../constants';
import { getProjects, getTeamMembers, getServices, getServicePackages, getFAQs, getContactInfo, getCompanyInfo } from './storage';

export const useProjects = () => {
  return getProjects() || defaultProjects;
};

export const useTeamMembers = () => {
  return getTeamMembers() || defaultTeamMembers;
};

export const useServices = () => {
  return getServices() || defaultServices;
};

export const useServiceCategories = () => {
  return getServicePackages() || defaultServiceCategories;
};

export const useFAQs = () => {
  return getFAQs() || defaultFAQs;
};

export const useContactInfo = () => {
  return getContactInfo() || defaultContactInfo;
};

export const useCompanyInfo = () => {
  const defaultCompanyInfo = {
    tagline: COMPANY_INFO.tagline,
    description: COMPANY_INFO.description,
    stats: COMPANY_INFO.stats,
  };
  return getCompanyInfo() || defaultCompanyInfo;
};
