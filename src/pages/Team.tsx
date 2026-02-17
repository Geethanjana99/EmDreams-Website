import React, { useState, useEffect } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useTeamMembers } from '../utils/dataHooks';
import { TEAM_DEPARTMENTS } from '../constants';
import type { TeamMember } from '../types';

export function Team() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const loadTeamMembers = async () => {
      const teamData = await useTeamMembers();
      setTeamMembers(teamData);
    };
    loadTeamMembers();
  }, []);

  const filteredMembers =
    activeFilter === 'all'
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeFilter);

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