// Additional types for admin panel

export interface ServiceData {
  title: string;
  description: string;
}

export interface ServiceCategoryData {
  id: string;
  name: string;
  summary: string;
  benefits: string[];
  packages: {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
  }[];
}

export interface ContactInfoData {
  title: string;
  description: string;
  action: string;
}
