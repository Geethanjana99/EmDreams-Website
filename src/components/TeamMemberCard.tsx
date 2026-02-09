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
        className="group cursor-pointer bg-white/5 border-white/10 overflow-hidden hover:border-primary/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all duration-500"
        onClick={() => setOpen(true)}>

        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" />

          </div>
          <div className="p-6 relative bg-gradient-to-b from-transparent to-white/5 group-hover:to-primary/5 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300 min-h-[3.5rem] flex items-center">
              <span className="line-clamp-2 leading-tight">{member.name}</span>
            </h3>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{member.role}</p>
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