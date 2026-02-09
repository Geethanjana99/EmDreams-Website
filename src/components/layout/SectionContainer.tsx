import React from 'react';
type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};
export function SectionContainer({
  children,
  className = ''
}: SectionContainerProps) {
  return (
    <section className={`w-full py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>);

}