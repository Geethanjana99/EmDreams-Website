import React, { useState, useEffect } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { PackageCard } from '../components/PackageCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { CheckIcon, CodeIcon, SmartphoneIcon, CloudIcon } from 'lucide-react';
import { useServiceCategories } from '../utils/dataHooks';
import type { ServiceCategory } from '../types';

export function Services() {
  const [serviceCategories, setServiceCategories] = useState<ServiceCategory[]>([]);

  useEffect(() => {
    const loadServices = async () => {
      // Merge icons with data
      const iconMap = {
        web: CodeIcon,
        mobile: SmartphoneIcon,
        cloud: CloudIcon,
      };
      
      const serviceCategoriesData = await useServiceCategories();
      const categoriesWithIcons: ServiceCategory[] = serviceCategoriesData.map(category => ({
        ...category,
        icon: iconMap[category.id as keyof typeof iconMap],
      }));
      
      setServiceCategories(categoriesWithIcons);
    };
    loadServices();
  }, []);

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