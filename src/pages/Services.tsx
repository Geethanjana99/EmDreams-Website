import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { PackageCard } from '../components/PackageCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { CheckIcon, CodeIcon, SmartphoneIcon, CloudIcon } from 'lucide-react';
export function Services() {
  const serviceCategories = [
  {
    id: 'web',
    name: 'Web Development',
    icon: CodeIcon,
    summary:
    'Build powerful, scalable web applications that deliver exceptional user experiences and drive business growth.',
    benefits: [
    'Custom web applications tailored to your needs',
    'Responsive design for all devices',
    'Modern tech stack (React, Node.js, etc.)',
    'SEO optimization and performance tuning',
    'Ongoing maintenance and support'],

    packages: [
    {
      name: 'Starter',
      price: '$5,000',
      description: 'Perfect for small businesses and startups',
      features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form integration',
      'Basic SEO setup',
      '30 days support']

    },
    {
      name: 'Growth',
      price: '$12,000',
      description: 'Ideal for growing businesses',
      features: [
      'Up to 15 pages',
      'Custom functionality',
      'CMS integration',
      'Advanced SEO',
      'Analytics setup',
      '90 days support'],

      highlighted: true
    },
    {
      name: 'Pro',
      price: '$25,000+',
      description: 'Enterprise-grade solutions',
      features: [
      'Unlimited pages',
      'Complex integrations',
      'Custom admin panel',
      'Performance optimization',
      'Security audit',
      '6 months support']

    }]

  },
  {
    id: 'mobile',
    name: 'Mobile Apps',
    icon: SmartphoneIcon,
    summary:
    'Create engaging mobile experiences that connect with your users on iOS and Android platforms.',
    benefits: [
    'Native or cross-platform development',
    'Intuitive user interface design',
    'Push notifications and real-time features',
    'App store optimization',
    'Backend API development'],

    packages: [
    {
      name: 'Starter',
      price: '$15,000',
      description: 'Simple mobile app for one platform',
      features: [
      'iOS or Android',
      'Up to 5 screens',
      'Basic features',
      'App store submission',
      '60 days support']

    },
    {
      name: 'Growth',
      price: '$30,000',
      description: 'Full-featured cross-platform app',
      features: [
      'iOS and Android',
      'Up to 15 screens',
      'Advanced features',
      'Backend integration',
      'Push notifications',
      '90 days support'],

      highlighted: true
    },
    {
      name: 'Pro',
      price: '$50,000+',
      description: 'Complex enterprise mobile solution',
      features: [
      'Native development',
      'Unlimited screens',
      'Custom integrations',
      'Offline functionality',
      'Advanced security',
      '6 months support']

    }]

  },
  {
    id: 'cloud',
    name: 'Cloud Solutions',
    icon: CloudIcon,
    summary:
    'Leverage cloud infrastructure to scale your business with reliable, secure, and cost-effective solutions.',
    benefits: [
    'AWS, Azure, or Google Cloud setup',
    'Scalable architecture design',
    'DevOps and CI/CD pipelines',
    'Security and compliance',
    'Cost optimization strategies'],

    packages: [
    {
      name: 'Starter',
      price: '$3,000',
      description: 'Basic cloud infrastructure setup',
      features: [
      'Cloud platform setup',
      'Basic deployment',
      'Monitoring setup',
      'Documentation',
      '30 days support']

    },
    {
      name: 'Growth',
      price: '$8,000',
      description: 'Production-ready cloud architecture',
      features: [
      'Multi-environment setup',
      'CI/CD pipeline',
      'Auto-scaling',
      'Backup strategy',
      'Security hardening',
      '90 days support'],

      highlighted: true
    },
    {
      name: 'Pro',
      price: 'Custom',
      description: 'Enterprise cloud infrastructure',
      features: [
      'Multi-region deployment',
      'Advanced monitoring',
      'Disaster recovery',
      'Compliance setup',
      'Dedicated support',
      'Ongoing optimization']

    }]

  }];

  return (
    <div className="w-full">
      <SectionContainer className="pt-24 pb-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            SERVICES & PRICING
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Expertise</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to help your business
            thrive in the modern world
          </p>
        </div>

        <Tabs defaultValue="web" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-2xl grid-cols-3 bg-white/5 border border-white/10 p-1 rounded-xl">
              {serviceCategories.map((category) =>
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black font-medium transition-all duration-300">

                  {category.name}
                </TabsTrigger>
              )}
            </TabsList>
          </div>

          {serviceCategories.map((category) =>
          <TabsContent
            key={category.id}
            value={category.id}
            className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">

              {/* Service Summary */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-primary">
                      <category.icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">
                        {category.name} Overview
                      </h3>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {category.summary}
                      </p>

                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />{' '}
                        What you get:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {category.benefits.map((benefit, index) =>
                      <div key={index} className="flex items-start gap-3">
                            <div className="mt-1 rounded-full bg-primary/10 p-0.5 text-primary">
                              <CheckIcon className="h-3 w-3" />
                            </div>
                            <span className="text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                      )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Packages */}
              <div>
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold">Choose Your Package</h3>
                  <p className="text-muted-foreground mt-2">
                    Transparent pricing for every stage of growth
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {category.packages.map((pkg) =>
                <PackageCard key={pkg.name} package={pkg} />
                )}
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </SectionContainer>
    </div>);

}