import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Sun, Moon } from 'lucide-react';
import logo from '../../assets/Emdreams Logo.png';
type NavbarProps = {
  currentPage: string;
  onNavigate: (page: string) => void;
};
export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    // Check localStorage or system preference on mount
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };
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
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-foreground tracking-tight hover:text-primary transition-colors flex items-center gap-2"
            aria-label="EmDreams home">
            <img src={logo} alt="EmDreams Logo" className="h-8 w-[2.375rem] object-contain" />
            <span><span className="text-primary">Em</span>Dreams</span>
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

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5"
              aria-label="Toggle theme">

              {theme === 'dark' ?
              <Sun className="h-5 w-5" /> :

              <Moon className="h-5 w-5" />
              }
            </Button>
            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-black font-semibold shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all duration-300">

              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5"
            aria-label="Toggle menu">

            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">

              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Simple version */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1">
            {navLinks.map((link) =>
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors ${currentPage === link.id ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'}`}>

                {link.name}
              </button>
            )}
            <div className="pt-4 px-4 flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5"
                aria-label="Toggle theme">

                {theme === 'dark' ?
                <Sun className="h-5 w-5" /> :

                <Moon className="h-5 w-5" />
                }
              </Button>
              <Button
                size="default"
                className="flex-1 bg-primary text-black font-semibold">

                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>);

}