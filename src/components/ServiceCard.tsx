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
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  imageUrl: string;
  onLearnMore?: () => void;
};
export function ServiceCard({
  icon: Icon,
  title,
  description,
  imageUrl,
  onLearnMore
}: ServiceCardProps) {
  return (
    <Card 
      onClick={onLearnMore}
      className="group h-[440px] w-full flex flex-col bg-[#0b0c10]/90 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors duration-300 overflow-hidden relative rounded-2xl cursor-pointer select-none"
    >
      {/* Top Image Section with Angled Cut */}
      <div 
        className="relative h-[200px] w-full shrink-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Floating Category Icon (Overlapping the angle cut) */}
      <div className="absolute top-[165px] right-5 z-20 w-11 h-11 rounded-xl bg-background border border-white/10 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <Icon className="h-4 w-4 text-primary" />
      </div>

      {/* Static Card Details */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6 z-10">
        <h3 className="text-lg font-bold text-white/95 tracking-wide mb-3 min-h-[56px] line-clamp-2">
          {title}
        </h3>
        
        <p className="text-[12px] font-light text-white/60 leading-relaxed flex-1 line-clamp-4 mb-2">
          {description}
        </p>

        {/* Static Action Link */}
        <div className="pt-4 mt-auto border-t border-white/5">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-primary">
            EXPLORE
            <span className="text-xs">&rarr;</span>
          </span>
        </div>
      </div>

      {/* Static Accent Line */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-primary via-primary/20 to-transparent" />
    </Card>
  );
}