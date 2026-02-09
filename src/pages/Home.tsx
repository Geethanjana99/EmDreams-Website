import React from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { ServiceCard } from '../components/ServiceCard';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRightIcon, Layers, Cpu, CodeIcon, SmartphoneIcon, CloudIcon } from 'lucide-react';
import { servicesData, workSteps } from '../data/services';
import { teamMembers } from '../data/team';
import { projects } from '../data/projects';
import { COMPANY_INFO, AVAILABILITY } from '../constants';
import type { Service } from '../types';

type HomeProps = {
  onNavigate: (page: string) => void;
};

export function Home({ onNavigate }: HomeProps) {
  // Merge icons with service data
  const iconMap = {
    'Web Development': CodeIcon,
    'Mobile Apps': SmartphoneIcon,
    'Cloud Solutions': CloudIcon,
  };
  
  const services: Service[] = servicesData.map(service => ({
    ...service,
    icon: iconMap[service.title as keyof typeof iconMap],
  }));
  
  // Get featured team members (5 with CEO in middle)
  const featuredTeam = teamMembers.slice(0, 5);
  
  // Get featured projects (first 2)
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="w-full overflow-hidden">
      {/* MODERN CREATIVE HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-8 overflow-hidden bg-background">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary tracking-wider uppercase">
                  {AVAILABILITY.message}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                <span className="block text-foreground">{COMPANY_INFO.tagline.split('.')[0]}.</span>
                <span className="block text-gradient">{COMPANY_INFO.tagline.split('.')[1]}.</span>
                <span className="block text-foreground">{COMPANY_INFO.tagline.split('.')[2]}.</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/50 pl-6">
                {COMPANY_INFO.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  size="lg"
                  onClick={() => onNavigate('contact')}
                  className="bg-primary hover:bg-primary/90 text-black font-bold text-base px-6 h-12 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300">

                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('portfolio')}
                  className="border-white/20 hover:border-primary hover:text-primary h-12 px-6 text-base bg-transparent backdrop-blur-sm">

                  View Our Work
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{COMPANY_INFO.stats.projectsCompleted}+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Projects
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{COMPANY_INFO.stats.clientsServed}+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Clients
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{COMPANY_INFO.stats.yearsOfExperience}+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Years
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Visual - Bento Grid Mockup */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl transform rotate-6" />

                <div className="grid grid-cols-2 gap-3 h-full transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out">
                  {/* Card 1: Code Editor */}
                  <div className="col-span-2 bg-[#1e1e1e] rounded-2xl border border-white/10 p-3 shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      <div className="ml-auto text-xs text-white/30">
                        App.tsx
                      </div>
                    </div>
                    <div className="space-y-1.5 font-mono text-[10px]">
                      <div className="text-purple-400">
                        import <span className="text-white">React</span> from{' '}
                        <span className="text-green-400">'react'</span>
                      </div>
                      <div className="text-blue-400">
                        function <span className="text-yellow-400">App</span>(){' '}
                        {'{'}
                      </div>
                      <div className="pl-3 text-white">return (</div>
                      <div className="pl-6 text-white">
                        {'<'}div className=
                        <span className="text-green-400">"hero"</span>
                        {'>'}
                      </div>
                      <div className="pl-9 text-white">
                        {'<'}h1{'>'}Hello World{'<'}/h1{'>'}
                      </div>
                      <div className="pl-6 text-white">
                        {'<'}/div{'>'}
                      </div>
                      <div className="pl-4 text-white">)</div>
                      <div className="text-white">{'}'}</div>
                    </div>
                  </div>

                  {/* Card 2: Analytics */}
                  <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-4 shadow-2xl flex flex-col justify-between group hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-primary/20 rounded-lg text-primary">
                        <Layers size={20} />
                      </div>
                      <span className="text-xs text-green-400 font-mono">
                        +24%
                      </span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">84.5k</div>
                      <div className="text-xs text-white/50">Total Views</div>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-primary w-[70%]" />
                    </div>
                  </div>

                  {/* Card 3: Server Status */}
                  <div className="bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-4 shadow-2xl flex flex-col justify-between group hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                        <Cpu size={20} />
                      </div>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">99.9%</div>
                      <div className="text-xs text-white/50">Uptime</div>
                    </div>
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((i) =>
                      <div
                        key={i}
                        className="h-6 flex-1 bg-green-500/20 rounded-sm" />

                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <SectionContainer className="bg-muted/30 relative min-h-[600px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            OUR SERVICES
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Digital expertise tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) =>
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            onLearnMore={() => onNavigate('services')} />

          )}
        </div>
      </SectionContainer>

      {/* How We Work */}
      <SectionContainer className="relative overflow-hidden bg-background min-h-[700px] pb-32">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              PROCESS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for exceptional results
            </p>
          </div>

          <div className="relative pb-8">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {workSteps.map((step, index) =>
              <div key={step.number} className="relative group flex flex-col items-center">
                  <div className="w-24 h-24 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center mb-6 relative z-20 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <span className="text-3xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <Card className="bg-white/5 border-white/10 hover:border-primary/30 transition-colors text-center h-full min-h-[200px] w-full">
                    <CardContent className="pt-8 pb-8 px-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Team Preview */}
      <SectionContainer className="bg-muted/30 relative z-0 min-h-[800px]">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            THE SQUAD
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to your success
          </p>
        </div>
        {/* Desktop View - All members visible */}
        <div className="hidden md:flex relative justify-center items-center gap-4 mb-16 overflow-hidden px-4">
          {featuredTeam.map((member, index) => {
            const middleIndex = 2; // CEO in the middle of 5 members
            const isCEO = index === middleIndex;
            
            // Calculate distance from center (0, 1, or 2)
            const distance = Math.abs(index - middleIndex);
            
            // Scale reduces by 10% for each step away from center
            const scaleValue = 100 - (distance * 10);
            
            // Inline style for dynamic scale
            const scale = scaleValue / 100;
            
            return (
              <div
                key={member.name}
                className={`transition-all duration-700 ease-out hover:scale-105 hover:z-30 ${
                  isCEO ? 'z-20' : 'z-10'
                }`}
                style={{
                  transform: `scale(${scale})`,
                  opacity: isCEO ? 1 : 0.85 + (distance * -0.1),
                }}
              >
                <div className="w-[240px]">
                  <TeamMemberCard member={member} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="md:hidden mb-16 -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
            {(() => {
              // Reorder to show CEO (index 2) first
              const middleIndex = 2;
              const reorderedTeam = [
                featuredTeam[middleIndex], // CEO first
                ...featuredTeam.slice(0, middleIndex), // Members before CEO
                ...featuredTeam.slice(middleIndex + 1), // Members after CEO
              ];
              
              return reorderedTeam.map((member, index) => (
                <div
                  key={member.name}
                  className="flex-shrink-0 snap-center first:ml-4 last:mr-4"
                >
                  <div className="w-[280px]">
                    <TeamMemberCard member={member} />
                  </div>
                </div>
              ));
            })()}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {featuredTeam.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/20"
              />
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate('team')}
            className="border-white/10 hover:border-primary hover:text-primary">

            View All Team Members
          </Button>
        </div>
      </SectionContainer>

      {/* Featured Work */}
      <SectionContainer className="min-h-[700px]">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            PORTFOLIO
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects that showcase our expertise
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) =>
          <ProjectCard key={project.title} project={project} />
          )}
        </div>
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate('portfolio')}
            className="group border-white/10 hover:border-primary hover:text-primary">

            See Full Portfolio{' '}
            <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="pb-24 min-h-[400px]">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary opacity-90" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
          <div className="relative z-10 p-12 sm:p-20 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-black">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto font-medium">
              Let's discuss how we can help bring your vision to life with our
              expert team and proven process.
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-black text-white hover:bg-black/80 border-none h-14 px-8 text-lg shadow-xl">

              Get in Touch
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>);

}