import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription } from
'./ui/dialog';
import { Badge } from './ui/badge';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};
type TeamMemberCardProps = {
  member: TeamMember;
};
export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card
        className="group cursor-pointer bg-white/5 border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300"
        onClick={() => setOpen(true)}>

        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />

          </div>
          <div className="p-6 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl bg-card border-white/10">
          <DialogHeader>
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-4">
              <div className="w-24 h-24 rounded-2xl bg-muted overflow-hidden flex-shrink-0 border-2 border-primary/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover" />

              </div>
              <div className="flex-1">
                <DialogTitle className="text-3xl font-bold mb-1 text-primary">
                  {member.name}
                </DialogTitle>
                <DialogDescription className="text-lg font-medium text-foreground mb-3">
                  {member.role}
                </DialogDescription>
                <div className="flex gap-3">
                  {member.social.github &&
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors"
                    aria-label="GitHub profile">

                      <GithubIcon className="h-5 w-5" />
                    </a>
                  }
                  {member.social.linkedin &&
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors"
                    aria-label="LinkedIn profile">

                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  }
                  {member.social.twitter &&
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors"
                    aria-label="Twitter profile">

                      <TwitterIcon className="h-5 w-5" />
                    </a>
                  }
                </div>
              </div>
            </div>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                About
              </h4>
              <p className="text-base leading-relaxed">{member.bio}</p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) =>
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors border-white/10">

                    {skill}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>);

}