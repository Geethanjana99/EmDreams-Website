import React, { useState } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { projects } from '../data/projects';
import { PROJECT_CATEGORIES } from '../constants';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);
    image:
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
    details: {
      challenge:
      'Create an engaging fitness app that motivates users through social features and gamification.',
      solution:
      'Built a native mobile app with real-time activity tracking, social feeds, challenges, and integration with popular fitness wearables.',
      results: [
      '100,000+ downloads in first 6 months',
      '70% monthly active user retention',
      'Featured in App Store',
      'Average session time of 25 minutes'],

      technologies: [
      'Swift',
      'Kotlin',
      'Firebase',
      'HealthKit',
      'Google Fit']

    }
  },
  {
    title: 'Cloud Migration Project',
    category: 'cloud',
    description:
    'Enterprise infrastructure migration from on-premise to AWS cloud.',
    image:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    details: {
      challenge:
      'Large enterprise needed to migrate legacy infrastructure to the cloud without disrupting business operations.',
      solution:
      'Designed and executed a phased migration strategy with zero downtime, implementing modern DevOps practices and cost optimization.',
      results: [
      '60% reduction in infrastructure costs',
      'Zero downtime during migration',
      '10x faster deployment cycles',
      'Improved system reliability to 99.99%'],

      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
    }
  },
  {
    title: 'Real Estate Portal',
    category: 'web',
    description:
    'Property listing platform with virtual tours and AI-powered recommendations.',
    image:
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    details: {
      challenge:
      'Real estate company wanted to differentiate with innovative features like virtual tours and smart property matching.',
      solution:
      'Developed a modern web platform with 3D virtual tours, AI-powered property recommendations, and integrated mortgage calculators.',
      results: [
      '300% increase in user engagement',
      '45% reduction in time-to-sale',
      '50,000+ property listings',
      'Winner of PropTech Innovation Award'],

      technologies: ['React', 'Three.js', 'Python', 'TensorFlow', 'MongoDB']
    }
  }];

  const filteredProjects =
  activeFilter === 'all' ?
  projects :
  projects.filter((p) => p.category === activeFilter);
  return (
    <div className="w-full">
      <SectionContainer className="pt-24 pb-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            OUR WORK
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses
            achieve their digital goals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {PROJECT_CATEGORIES.map((category) =>
          <Button
            key={category.id}
            variant="outline"
            onClick={() => setActiveFilter(category.id)}
            className={`rounded-full px-6 border-white/10 transition-all duration-300 ${activeFilter === category.id ? 'bg-primary text-black border-primary hover:bg-primary/90' : 'bg-transparent hover:border-primary hover:text-primary'}`}>

              {category.name}
            </Button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) =>
          <ProjectCard key={project.title} project={project} />
          )}
        </div>

        {filteredProjects.length === 0 &&
        <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
            <Button
            variant="link"
            onClick={() => setActiveFilter('all')}
            className="text-primary mt-2">

              View all projects
            </Button>
          </div>
        }
      </SectionContainer>
    </div>);

}