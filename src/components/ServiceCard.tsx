import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter } from
'./ui/card';
import { Button } from './ui/button';
import { BoxIcon } from 'lucide-react';
type ServiceCardProps = {
  icon: BoxIcon;
  title: string;
  description: string;
  onLearnMore?: () => void;
};
export function ServiceCard({
  icon: Icon,
  title,
  description,
  onLearnMore
}: ServiceCardProps) {
  return (
    <Card className="group h-full flex flex-col bg-white/[0.02] border-white/10 hover:border-orange-500/35 transition-all duration-300 hover:shadow-[0_0_24px_rgba(249,115,22,0.08)] hover:-translate-y-0.5 overflow-hidden relative rounded-xl px-2">
      {/* Sci-Fi HUD Decorative Corners */}
      <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/0 group-hover:border-primary/50 transition-colors duration-500" />
      <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/0 group-hover:border-primary/50 transition-colors duration-500" />
      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/0 group-hover:border-primary/50 transition-colors duration-500" />
      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/0 group-hover:border-primary/50 transition-colors duration-500" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[length:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-1/2 transition-all duration-500 ease-out" />

      <CardHeader className="pt-8 pb-4">
        <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center mb-6 group-hover:bg-primary/[0.08] transition-all duration-300 border border-white/5 group-hover:border-primary/20">
          <Icon className="h-5 w-5 text-white/70 group-hover:text-primary group-hover:scale-105 transition-all duration-300" />
        </div>
        <CardTitle className="text-lg font-bold tracking-wide mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-xs font-light text-muted-foreground leading-relaxed mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-4 pb-8">
        <Button
          variant="ghost"
          onClick={onLearnMore}
          className="w-full justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 hover:text-primary hover:bg-transparent px-0 transition-colors duration-300">
          LEARN MORE
          <span className="group-hover:translate-x-1.5 transition-transform duration-300 text-xs">
            &rarr;
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}