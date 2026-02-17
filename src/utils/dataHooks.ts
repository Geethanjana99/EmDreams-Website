// Data hooks for retrieving data with Supabase fallback to defaults
import { projects as defaultProjects } from '../data/projects';
import { teamMembers as defaultTeamMembers } from '../data/team';
import { servicesData as defaultServices } from '../data/services';
import { serviceCategories as defaultServiceCategories } from '../data/servicePackages';
import { faqs as defaultFAQs, contactInfoData as defaultContactInfo } from '../data/contact';
import { COMPANY_INFO } from '../constants';
import { 
  getProjects, 
  getTeamMembers, 
  getServices, 
  getServicePackages, 
  getFAQs, 
  getContactInfo, 
  getCompanyInfo 
} from './storage';

export const useProjects = async () => {
  try {
    const data = await getProjects();
    return data.length > 0 ? data : defaultProjects;
  } catch (error) {
    console.error('Error loading projects:', error);
    return defaultProjects;
  }
};

export const useTeamMembers = async () => {
  try {
    const data = await getTeamMembers();
    return data.length > 0 ? data : defaultTeamMembers;
  } catch (error) {
    console.error('Error loading team members:', error);
    return defaultTeamMembers;
  }
};

export const useServices = async () => {
  try {
    const data = await getServices();
    return data.length > 0 ? data : defaultServices;
  } catch (error) {
    console.error('Error loading services:', error);
    return defaultServices;
  }
};

export const useServiceCategories = async () => {
  try {
    const data = await getServicePackages();
    return data.length > 0 ? data : defaultServiceCategories;
  } catch (error) {
    console.error('Error loading service categories:', error);
    return defaultServiceCategories;
  }
};

export const useFAQs = async () => {
  try {
    const data = await getFAQs();
    return data.length > 0 ? data : defaultFAQs;
  } catch (error) {
    console.error('Error loading FAQs:', error);
    return defaultFAQs;
  }
};

export const useContactInfo = async () => {
  try {
    const data = await getContactInfo();
    return data.length > 0 ? data : defaultContactInfo;
  } catch (error) {
    console.error('Error loading contact info:', error);
    return defaultContactInfo;
  }
};

export const useCompanyInfo = async () => {
  try {
    const data = await getCompanyInfo();
    return data || {
      tagline: COMPANY_INFO.tagline,
      description: COMPANY_INFO.description,
      stats: COMPANY_INFO.stats,
    };
  } catch (error) {
    console.error('Error loading company info:', error);
    return {
      tagline: COMPANY_INFO.tagline,
      description: COMPANY_INFO.description,
      stats: COMPANY_INFO.stats,
    };
  }
};
