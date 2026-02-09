import React from 'react';
import { Button } from '../ui/button';
type NavbarProps = {
  currentPage: string;
  onNavigate: (page: string) => void;
};
export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const navLinks = [
  {
    name: 'Home',
    id: 'home'
  },
  {
    name: 'Services',
    id: 'services'
  },
  {
    name: 'Portfolio',
    id: 'portfolio'
  },
  {
    name: 'Team',
    id: 'team'
  },
  {
    name: 'Contact',
    id: 'contact'
  }];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-foreground tracking-tight hover:text-primary transition-colors flex items-center gap-2"
            aria-label="EmDreams home">

            <span className="text-primary">Em</span>Dreams
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) =>
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${currentPage === link.id ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'}`}
              aria-current={currentPage === link.id ? 'page' : undefined}>

                {link.name}
              </button>
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-black font-semibold shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all duration-300">

              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5"
            aria-label="Open menu">

            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">

              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Simple version */}
        <div className="md:hidden pb-4 pt-2 space-y-1">
          {navLinks.map((link) =>
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors ${currentPage === link.id ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'}`}>

              {link.name}
            </button>
          )}
          <div className="pt-4 px-4">
            <Button
              size="default"
              className="w-full bg-primary text-black font-semibold">

              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>);

}