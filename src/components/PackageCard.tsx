import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter } from
'./ui/card';
import { Button } from './ui/button';
import { CheckIcon } from 'lucide-react';
type Package = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};
type PackageCardProps = {
  package: Package;
};
export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Card
      className={`h-full flex flex-col transition-all duration-300 ${pkg.highlighted ? 'bg-white/10 border-primary shadow-[0_0_30px_rgba(249,115,22,0.15)] scale-105 z-10' : 'bg-white/5 border-white/10 hover:border-primary/50'}`}>

      <CardHeader>
        {pkg.highlighted &&
        <Badge className="w-fit mb-4 bg-primary text-black hover:bg-primary/90 font-bold">
            Most Popular
          </Badge>
        }
        <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
        <div className="mt-4 mb-2">
          <span
            className={`text-4xl font-bold ${pkg.highlighted ? 'text-primary' : 'text-foreground'}`}>

            {pkg.price}
          </span>
          {pkg.price !== 'Custom' &&
          <span className="text-muted-foreground ml-2">/month</span>
          }
        </div>
        <CardDescription className="text-base">
          {pkg.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="w-full h-px bg-white/10 mb-6" />
        <ul className="space-y-4">
          {pkg.features.map((feature, index) =>
          <li key={index} className="flex items-start gap-3">
              <div
              className={`mt-0.5 rounded-full p-0.5 ${pkg.highlighted ? 'bg-primary text-black' : 'bg-white/10 text-primary'}`}>

                <CheckIcon className="h-3 w-3" />
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          )}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          variant={pkg.highlighted ? 'default' : 'outline'}
          className={`w-full py-6 font-semibold ${pkg.highlighted ? 'bg-primary text-black hover:bg-primary/90 shadow-lg shadow-primary/20' : 'border-white/10 hover:border-primary hover:text-primary'}`}>

          Request Quote
        </Button>
      </CardFooter>
    </Card>);

}
function Badge({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${className}`}>

      {children}
    </span>);

}