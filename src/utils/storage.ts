// Supabase database utilities for data persistence

import { supabase } from './supabase';
import type { Project, TeamMember, FAQ, CompanyInfo } from '../types';
import type { ServiceCategoryData, ServiceData, ContactInfoData } from '../types/admin';

// ============================================
// IMAGE UPLOAD UTILITIES
// ============================================

/**
 * Upload an image to Supabase Storage
 * @param file - The image file to upload
 * @param folder - The folder path (e.g., 'team' or 'Projects')
 * @returns The public URL of the uploaded image, or null if upload failed
 */
export const uploadImage = async (file: File, folder: 'team' | 'Projects'): Promise<string | null> => {
  try {
    // Generate unique filename with timestamp
    const timestamp = Date.now();
    const fileExt = file.name.split('.').pop();
    const fileName = `${timestamp}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;
    
    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });
    
    if (uploadError) {
      console.error('Error uploading image:', uploadError);
      return null;
    }
    
    // Get public URL
    const { data } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);
    
    return data.publicUrl;
  } catch (error) {
    console.error('Unexpected error uploading image:', error);
    return null;
  }
};

/**
 * Get the public URL for an image stored in Supabase
 * @param path - The path to the image (e.g., 'team/image.jpg')
 * @returns The public URL
 */
export const getImageUrl = (path: string): string => {
  if (!path) return '';
  
  // If it's already a full URL, return it
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Otherwise, construct the Supabase Storage URL
  const { data } = supabase.storage
    .from('images')
    .getPublicUrl(path);
  
  return data.publicUrl;
};

// ============================================
// PROJECTS
// ============================================

export const getProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
  
  // Transform database format to app format
  return (data || []).map(project => ({
    title: project.title,
    category: project.category,
    description: project.description,
    image: project.image,
    details: {
      challenge: project.challenge || '',
      solution: project.solution || '',
      results: project.results || [],
      technologies: project.technologies || [],
    },
    contributors: project.contributors || [],
  }));
};

export const saveProjects = async (projects: Project[]): Promise<boolean> => {
  // Delete all existing projects
  const { error: deleteError } = await supabase
    .from('projects')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
  
  if (deleteError) {
    console.error('Error deleting projects:', deleteError);
    return false;
  }
  
  // Insert new projects
  const projectsToInsert = projects.map(project => ({
    title: project.title,
    category: project.category,
    description: project.description,
    image: project.image,
    challenge: project.details.challenge,
    solution: project.details.solution,
    results: project.details.results,
    technologies: project.details.technologies,
    contributors: project.contributors || [],
  }));
  
  const { error: insertError } = await supabase
    .from('projects')
    .insert(projectsToInsert);
  
  if (insertError) {
    console.error('Error saving projects:', insertError);
    return false;
  }
  
  return true;
};

// ============================================
// TEAM MEMBERS
// ============================================

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
  
  return (data || []).map(member => ({
    name: member.name,
    role: member.role,
    department: member.department,
    image: member.image,
    bio: member.bio,
    skills: member.skills || [],
    social: {
      github: member.social_github,
      linkedin: member.social_linkedin,
      twitter: member.social_twitter,
    },
  }));
};

export const saveTeamMembers = async (members: TeamMember[]): Promise<boolean> => {
  const { error: deleteError } = await supabase
    .from('team_members')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');
  
  if (deleteError) {
    console.error('Error deleting team members:', deleteError);
    return false;
  }
  
  const membersToInsert = members.map(member => ({
    name: member.name,
    role: member.role,
    department: member.department,
    image: member.image,
    bio: member.bio,
    skills: member.skills,
    social_github: member.social?.github || null,
    social_linkedin: member.social?.linkedin || null,
    social_twitter: member.social?.twitter || null,
  }));
  
  const { error: insertError } = await supabase
    .from('team_members')
    .insert(membersToInsert);
  
  if (insertError) {
    console.error('Error saving team members:', insertError);
    return false;
  }
  
  return true;
};

// ============================================
// SERVICES
// ============================================

export const getServices = async (): Promise<ServiceData[]> => {
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching services:', error);
    return [];
  }
  
  return (data || []).map(service => ({
    title: service.title,
    description: service.description,
  }));
};

export const saveServices = async (services: ServiceData[]): Promise<boolean> => {
  const { error: deleteError } = await supabase
    .from('services')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');
  
  if (deleteError) {
    console.error('Error deleting services:', deleteError);
    return false;
  }
  
  const { error: insertError } = await supabase
    .from('services')
    .insert(services);
  
  if (insertError) {
    console.error('Error saving services:', insertError);
    return false;
  }
  
  return true;
};

// ============================================
// SERVICE PACKAGES
// ============================================

export const getServicePackages = async (): Promise<ServiceCategoryData[]> => {
  const { data, error } = await supabase
    .from('service_packages')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching service packages:', error);
    return [];
  }
  
  return (data || []).map(category => ({
    category: category.category,
    packages: category.packages || [],
  }));
};

export const saveServicePackages = async (packages: ServiceCategoryData[]): Promise<boolean> => {
  const { error: deleteError } = await supabase
    .from('service_packages')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');
  
  if (deleteError) {
    console.error('Error deleting service packages:', deleteError);
    return false;
  }
  
  const { error: insertError } = await supabase
    .from('service_packages')
    .insert(packages);
  
  if (insertError) {
    console.error('Error saving service packages:', insertError);
    return false;
  }
  
  return true;
};

// ============================================
// FAQS
// ============================================

export const getFAQs = async (): Promise<FAQ[]> => {
  const { data, error } = await supabase
    .from('faqs')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
  
  return data || [];
};

export const saveFAQs = async (faqs: FAQ[]): Promise<boolean> => {
  const { error: deleteError } = await supabase
    .from('faqs')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');
  
  if (deleteError) {
    console.error('Error deleting FAQs:', deleteError);
    return false;
  }
  
  const { error: insertError } = await supabase
    .from('faqs')
    .insert(faqs);
  
  if (insertError) {
    console.error('Error saving FAQs:', insertError);
    return false;
  }
  
  return true;
};

// ============================================
// CONTACT INFO
// ============================================

export const getContactInfo = async (): Promise<ContactInfoData[]> => {
  const { data, error } = await supabase
    .from('contact_info')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching contact info:', error);
    return [];
  }
  
  return (data || []).map(item => ({
    icon: item.icon,
    title: item.title,
    value: item.value,
    link: item.link,
  }));
};

export const saveContactInfo = async (info: ContactInfoData[]): Promise<boolean> => {
  const { error: deleteError } = await supabase
    .from('contact_info')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000');
  
  if (deleteError) {
    console.error('Error deleting contact info:', deleteError);
    return false;
  }
  
  const { error: insertError } = await supabase
    .from('contact_info')
    .insert(info);
  
  if (insertError) {
    console.error('Error saving contact info:', insertError);
    return false;
  }
  
  return true;
};

// ============================================
// COMPANY INFO
// ============================================

export const getCompanyInfo = async (): Promise<CompanyInfo | null> => {
  const { data, error } = await supabase
    .from('company_info')
    .select('*')
    .limit(1)
    .single();
  
  if (error) {
    console.error('Error fetching company info:', error);
    return null;
  }
  
  if (!data) return null;
  
  return {
    tagline: data.tagline,
    description: data.description,
    stats: {
      projectsCompleted: data.stats_projects_completed || 0,
      clientsServed: data.stats_clients_served || 0,
      yearsOfExperience: data.stats_years_experience || 0,
    },
  };
};

export const saveCompanyInfo = async (info: CompanyInfo): Promise<boolean> => {
  // First, try to get existing company info
  const { data: existing } = await supabase
    .from('company_info')
    .select('id')
    .limit(1)
    .single();
  
  const companyData = {
    tagline: info.tagline,
    description: info.description,
    stats_projects_completed: info.stats.projectsCompleted,
    stats_clients_served: info.stats.clientsServed,
    stats_years_experience: info.stats.yearsOfExperience,
  };
  
  if (existing) {
    // Update existing record
    const { error } = await supabase
      .from('company_info')
      .update(companyData)
      .eq('id', existing.id);
    
    if (error) {
      console.error('Error updating company info:', error);
      return false;
    }
  } else {
    // Insert new record
    const { error } = await supabase
      .from('company_info')
      .insert(companyData);
    
    if (error) {
      console.error('Error inserting company info:', error);
      return false;
    }
  }
  
  return true;
};
