import React, { useState, useEffect } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useProjects } from '../utils/dataHooks';
import { PROJECT_CATEGORIES } from '../constants';
import type { Project } from '../types';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(useProjects());
  }, []);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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