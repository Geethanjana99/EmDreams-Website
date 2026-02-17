import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';
import logo from '../../assets/Emdreams Logo.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    company: [
      { name: 'About', href: '' },
      { name: 'Careers', href: '' },
      { name: 'Blog', href: '' },
    ],
    services: [
      { name: 'Web Development', href: '' },
      { name: 'Mobile Apps', href: '' },
      { name: 'Cloud Solutions', href: '' },
    ],
    legal: [
      { name: 'Privacy', href: '' },
      { name: 'Terms', href: '' },
      { name: 'Security', href: '' },
    ],
  };
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: COMPANY_INFO.social.github,
    },
    {
      name: 'Twitter',
      icon: TwitterIcon,
      href: COMPANY_INFO.social.twitter,
    },
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: COMPANY_INFO.social.linkedin,
    },
    {
      name: 'Email',
      icon: MailIcon,
      href: COMPANY_INFO.email ? `mailto:${COMPANY_INFO.email}` : '',
    },
  ].filter(link => link.href); // Only show links that have URLs

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#c8c1c1] flex items-center gap-2">
              <img src={logo} alt="EmDreams Logo" className="h-8 w-[2.375rem] object-contain" />
              <span><span className="text-primary">Em</span>Dreams</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building digital solutions that drive business growth through
              innovation and creative technology.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider text-primary">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) =>
              <li key={link.name}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground/50 cursor-not-allowed">
                      {link.name}
                    </span>
                  )}
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider text-primary">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) =>
              <li key={link.name}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground/50 cursor-not-allowed">
                      {link.name}
                    </span>
                  )}
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider text-primary">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) =>
              <li key={link.name}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground/50 cursor-not-allowed">
                      {link.name}
                    </span>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
            {onNavigate && (
              <button
                onClick={() => onNavigate('admin')}
                className="text-xs text-muted-foreground/30 hover:text-primary/50 transition-colors"
                aria-label="Admin"
              >
                •
              </button>
            )}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-200"
                  aria-label={social.name}>

                  <Icon className="h-5 w-5" />
                </a>);

            })}
          </div>
        </div>
      </div>
    </footer>);

}