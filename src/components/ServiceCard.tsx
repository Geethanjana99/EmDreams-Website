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
    <Card className="group h-full flex flex-col bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] hover:-translate-y-1 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

      <CardHeader>
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300 border border-white/10 group-hover:border-primary/30">
          <Icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-4">
        <Button
          variant="ghost"
          onClick={onLearnMore}
          className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary">

          Learn more
          <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
            →
          </span>
        </Button>
      </CardFooter>
    </Card>);

}