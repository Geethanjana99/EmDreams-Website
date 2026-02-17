import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter } from
'./ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription } from
'./ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  details: {
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
  };
};
type ProjectCardProps = {
  project: Project;
};
export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card className="group h-full flex flex-col bg-white/5 border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300">
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-10" />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

          <div className="absolute top-4 left-4 z-20">
            <Badge className="bg-black/50 backdrop-blur-md border-white/10 text-white hover:bg-primary hover:text-black transition-colors uppercase">
              {project.category}
            </Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto">
          <Button
            variant="outline"
            onClick={() => setOpen(true)}
            className="w-full border-white/10 hover:border-primary hover:bg-primary hover:text-black transition-all duration-300">

            View Details
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-white/10">
          <DialogHeader>
            <div className="aspect-video rounded-lg bg-muted overflow-hidden mb-6 border border-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover" />

            </div>
            <div className="flex items-center justify-between mb-2">
              <DialogTitle className="text-3xl font-bold text-primary">
                {project.title}
              </DialogTitle>
              <Badge
                variant="outline"
                className="border-primary/50 text-primary uppercase">

                {project.category}
              </Badge>
            </div>
            <DialogDescription className="text-lg">
              {project.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-8 mt-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" /> Challenge
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details.challenge}
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" /> Solution
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.details.solution}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Key Results</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.details.results.map((result, index) =>
                <div
                  key={index}
                  className="flex items-start p-3 rounded-lg bg-primary/5 border border-primary/10">

                    <span className="text-primary mr-3 font-bold text-lg">
                      •
                    </span>
                    <span className="text-sm text-foreground/90">{result}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.details.technologies.map((tech) =>
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-white/20 hover:border-primary hover:text-primary transition-colors py-1 px-3">

                    {tech}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>);

}