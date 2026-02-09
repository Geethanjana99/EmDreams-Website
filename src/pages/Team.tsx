import React, { useState } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { teamMembers } from '../data/team';
import { TEAM_DEPARTMENTS } from '../constants';

export function Team() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredMembers =
    activeFilter === 'all'
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeFilter);
    department: 'design',
    image:
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    bio: 'Product designer who bridges the gap between user needs and business goals. Specializes in design systems and component libraries.',
    skills: [
    'Product Design',
    'Design Tokens',
    'Component Libraries',
    'Sketch',
    'Adobe XD'],

    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'James Wilson',
    role: 'DevOps Engineer',
    department: 'development',
    image:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'DevOps expert passionate about automation and infrastructure as code. Ensures reliable and scalable deployments.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    social: {
      github: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Rachel Green',
    role: 'QA Lead',
    department: 'development',
    image:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    bio: 'Quality assurance specialist dedicated to delivering bug-free software. Expert in test automation and quality processes.',
    skills: [
    'Test Automation',
    'Selenium',
    'Jest',
    'Quality Processes',
    'Performance Testing'],

    social: {
      linkedin: '#'
    }
  },
  {
    name: 'Tom Harris',
    role: 'Technical Lead',
    department: 'management',
    image:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    bio: 'Technical leader with 12+ years of experience architecting complex systems. Guides technical decisions and mentors the team.',
    skills: [
    'System Architecture',
    'Technical Strategy',
    'Code Review',
    'Mentoring',
    'Microservices'],

    social: {
      github: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Nina Patel',
    role: 'Content Strategist',
    department: 'management',
    image:
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop',
    bio: 'Content strategist who ensures our messaging resonates with users. Expert in UX writing and content design.',
    skills: [
    'UX Writing',
    'Content Strategy',
    'SEO',
    'Brand Voice',
    'Information Architecture'],

    social: {
      linkedin: '#',
      twitter: '#'
    }
  }];

  const filteredMembers =
  activeFilter === 'all' ?
  teamMembers :
  teamMembers.filter((m) => m.department === activeFilter);
  return (
    <div className="w-full">
      <SectionContainer className="pt-24 pb-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            THE TEAM
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Meet Our Experts
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Talented professionals dedicated to delivering exceptional results
            for our clients
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {TEAM_DEPARTMENTS.map((filter) =>
          <Button
            key={filter.id}
            variant="outline"
            onClick={() => setActiveFilter(filter.id)}
            className={`rounded-full px-6 border-white/10 transition-all duration-300 ${activeFilter === filter.id ? 'bg-primary text-black border-primary hover:bg-primary/90' : 'bg-transparent hover:border-primary hover:text-primary'}`}>

              {filter.name}
            </Button>
          )}
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) =>
          <TeamMemberCard key={member.name} member={member} />
          )}
        </div>

        {filteredMembers.length === 0 &&
        <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-muted-foreground text-lg">
              No team members found in this category.
            </p>
            <Button
            variant="link"
            onClick={() => setActiveFilter('all')}
            className="text-primary mt-2">

              View all team members
            </Button>
          </div>
        }
      </SectionContainer>
    </div>);

}