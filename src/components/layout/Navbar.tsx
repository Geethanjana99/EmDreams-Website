import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import logo from '../../assets/Emdreams Logo.png';

type NavbarProps = {
  currentPage: string;
  onNavigate: (page: string) => void;
};

const navLinks = [
  { name: 'HOME',      id: 'home' },
  { name: 'SERVICES',  id: 'services' },
  { name: 'PORTFOLIO', id: 'portfolio' },
  { name: 'TEAM',      id: 'team' },
  { name: 'CONTACT',   id: 'contact' },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme,      setTheme]      = useState<'dark' | 'light'>('dark');

  const leftIslandRef  = useRef<HTMLDivElement>(null);
  const rightIslandRef = useRef<HTMLDivElement>(null);
  const drawerRef      = useRef<HTMLDivElement>(null);
  const drawerBgRef    = useRef<HTMLDivElement>(null);
  const drawerItemsRef = useRef<HTMLDivElement>(null);

  /* ── theme ───────────────────────────────────────── */
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    if (next === 'light') document.documentElement.classList.add('light');
    else document.documentElement.classList.remove('light');
  };
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
      if (saved === 'light') document.documentElement.classList.add('light');
    }
  }, []);

  /* ── entry ───────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftIslandRef.current,
        { y: -72, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'expo.out' }
      );
      gsap.fromTo(rightIslandRef.current,
        { y: -72, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.1, ease: 'expo.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  /* ── mobile drawer ───────────────────────────────── */
  useEffect(() => {
    const drawer = drawerRef.current;
    const bg     = drawerBgRef.current;
    const items  = drawerItemsRef.current?.querySelectorAll('[data-item]');
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      gsap.set(drawer, { display: 'flex' });
      gsap.set(bg, { display: 'block' });
      gsap.from(bg, { opacity: 0, duration: 0.3, ease: 'power2.out' });
      gsap.from(drawer, { xPercent: 100, duration: 0.45, ease: 'expo.out' });
      if (items) gsap.from(Array.from(items), { x: 28, opacity: 0, stagger: 0.06, duration: 0.35, delay: 0.18, ease: 'power3.out' });
    } else {
      document.body.style.overflow = '';
      if (!drawer) return;
      gsap.to(drawer, { xPercent: 100, duration: 0.38, ease: 'expo.in', onComplete: () => gsap.set(drawer, { display: 'none' }) });
      if (bg) gsap.to(bg, { opacity: 0, duration: 0.28, ease: 'power2.in', onComplete: () => gsap.set(bg, { display: 'none' }) });
    }
  }, [mobileOpen]);

  /* ── link hover ──────────────────────────────────── */
  const onLinkEnter = (e: React.MouseEvent<HTMLButtonElement>) =>
    gsap.to(e.currentTarget, { y: -2, duration: 0.2, ease: 'power2.out' });
  const onLinkLeave = (e: React.MouseEvent<HTMLButtonElement>) =>
    gsap.to(e.currentTarget, { y: 0, duration: 0.35, ease: 'elastic.out(1, 0.6)' });

  /* ── CTA magnetic ────────────────────────────────── */
  const onCtaMove  = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    gsap.to(e.currentTarget, { x: (e.clientX - r.left - r.width/2) * 0.2, y: (e.clientY - r.top - r.height/2) * 0.2, duration: 0.22, ease: 'power2.out' });
  };
  const onCtaLeave = (e: React.MouseEvent<HTMLButtonElement>) =>
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });

  const navigate = (id: string) => { onNavigate(id); setMobileOpen(false); };

  // Styling helpers matching:
  // Dark mode active -> White Background Islands
  // Light mode active -> Dark Background Islands
  const islandBg = theme === 'dark' 
    ? 'bg-white border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)]' 
    : 'bg-[#0f0f0f] border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.6)]';

  const logoBorder = theme === 'dark'
    ? 'border-black/[0.06] hover:bg-black/[0.03]'
    : 'border-white/[0.08] hover:bg-white/[0.05]';

  const logoText = theme === 'dark' ? 'text-black' : 'text-white';

  const linkTextColor = (isActive: boolean) => {
    if (theme === 'dark') {
      return isActive ? 'text-black' : 'text-black/50 hover:text-black/85';
    } else {
      return isActive ? 'text-white' : 'text-white/40 hover:text-white/80';
    }
  };

  const activeUnderline = theme === 'dark'
    ? 'bg-gradient-to-r from-orange-500 to-amber-500'
    : 'bg-gradient-to-r from-orange-400 to-amber-400';

  const hoverUnderline = theme === 'dark'
    ? 'bg-black/10'
    : 'bg-white/20';

  const dividerStyle = theme === 'dark' ? 'bg-black/[0.08]' : 'bg-white/[0.08]';

  const toggleBtnStyle = theme === 'dark'
    ? 'border-black/[0.06] text-black/60 hover:text-black hover:bg-black/[0.03]'
    : 'border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.05]';

  return (
    <>
      {/* ═══════════════════════════════════════
          HEADER WRAPPER — transparent, two islands
      ═══════════════════════════════════════ */}
      <header
        aria-label="Site header"
        className="fixed top-0 left-0 right-0 z-[100] pt-5 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-2 items-center">

        {/* ════ LEFT ISLAND ════ */}
        <div
          ref={leftIslandRef}
          className={[
            'pointer-events-auto flex items-center h-[52px] rounded-2xl border transition-all duration-300 will-change-transform overflow-hidden justify-self-start',
            islandBg
          ].join(' ')}
        >
          {/* Logo section */}
          <button
            onClick={() => navigate('home')}
            aria-label="EmDreams home"
            className={[
              'group flex items-center gap-2.5 px-4 h-full border-r transition-colors duration-300',
              logoBorder
            ].join(' ')}
          >
            <span className="relative flex items-center justify-center w-6 h-6">
              <span className="absolute inset-0 rounded-full bg-orange-500/20 scale-0 group-hover:scale-[2.2] transition-transform duration-500 ease-out" />
              <img src={logo} alt="EmDreams" className="relative h-6 w-6 object-contain drop-shadow-[0_0_8px_rgba(249,115,22,0.65)]" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className={[
                'text-[13px] font-black tracking-tight leading-none',
                logoText
              ].join(' ')}>
                <span className="text-orange-500">Em</span>Dreams
              </span>
            </span>
          </button>

          {/* Nav links */}
          <nav aria-label="Primary" className="hidden md:flex items-center h-full px-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => navigate(link.id)}
                  onMouseEnter={onLinkEnter}
                  onMouseLeave={onLinkLeave}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'relative flex items-center h-full px-4 text-[10.5px] font-bold tracking-[0.14em] transition-colors duration-200 group',
                    linkTextColor(isActive),
                  ].join(' ')}
                >
                  {/* active orange underline bar */}
                  {isActive && (
                    <span className={[
                      'absolute bottom-0 left-3 right-3 h-[2px] rounded-full',
                      activeUnderline
                    ].join(' ')} />
                  )}
                  {/* hover underline bar */}
                  {!isActive && (
                    <span className={[
                      'absolute bottom-0 left-3 right-3 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left',
                      hoverUnderline
                    ].join(' ')} />
                  )}
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            className={[
              'md:hidden flex items-center justify-center w-11 h-full border-l transition-colors duration-200',
              theme === 'dark' ? 'border-black/[0.06] text-black/60 hover:text-black hover:bg-black/[0.03]' : 'border-white/[0.08] text-white/60 hover:text-white hover:bg-white/[0.05]'
            ].join(' ')}
          >
            {mobileOpen ? <X className="h-4 w-4 text-orange-500" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* ════ RIGHT ISLAND ════ */}
        <div
          ref={rightIslandRef}
          className={[
            'pointer-events-auto hidden md:flex items-center h-[52px] rounded-2xl border transition-all duration-300 will-change-transform overflow-hidden justify-self-end',
            islandBg
          ].join(' ')}
        >
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className={[
              'flex items-center justify-center w-12 h-full border-r transition-colors duration-200',
              toggleBtnStyle
            ].join(' ')}
          >
            {theme === 'dark'
              ? <Sun  className="h-[15px] w-[15px]" />
              : <Moon className="h-[15px] w-[15px]" />
            }
          </button>

          {/* Get a Quote CTA */}
          <div className="px-2">
            <button
              onClick={() => navigate('contact')}
              onMouseMove={onCtaMove}
              onMouseLeave={onCtaLeave}
              className="group relative overflow-hidden flex items-center gap-2 px-5 h-9 rounded-xl text-[10.5px] font-bold tracking-[0.1em] text-black bg-gradient-to-r from-orange-500 to-amber-400 shadow-[0_0_16px_rgba(249,115,22,0.3)] hover:shadow-[0_0_24px_rgba(249,115,22,0.55)] transition-shadow duration-300"
            >
              <span className="absolute inset-0 bg-white/25 translate-x-[-110%] skew-x-[-20deg] group-hover:translate-x-[110%] transition-transform duration-500 ease-out pointer-events-none" />
              <Zap className="h-3 w-3 fill-black/40 shrink-0" />
              GET A QUOTE
            </button>
          </div>
        </div>

        </div>
      </header>

      {/* ════ MOBILE BACKDROP ════ */}
      <div
        ref={drawerBgRef}
        onClick={() => setMobileOpen(false)}
        className="fixed inset-0 z-[98] bg-black/65 backdrop-blur-sm md:hidden"
        style={{ display: 'none' }}
        aria-hidden="true"
      />

      {/* ════ MOBILE DRAWER ════ */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-label="Navigation"
        className="fixed top-0 right-0 bottom-0 z-[99] w-[68vw] max-w-[260px] flex-col bg-[#0d0d0d] border-l border-white/[0.08] md:hidden"
        style={{ display: 'none' }}
      >
        {/* header */}
        <div className="flex items-center justify-between px-5 h-[60px] border-b border-white/[0.07]">
          <span className="flex items-center gap-2">
            <img src={logo} alt="" className="h-5 w-5 object-contain drop-shadow-[0_0_6px_rgba(249,115,22,0.5)]" />
            <span className="text-[12px] font-black tracking-tight text-white"><span className="text-orange-400">Em</span>Dreams</span>
          </span>
          <button onClick={() => setMobileOpen(false)} className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/[0.06] hover:bg-white/[0.1] transition-colors" aria-label="Close">
            <X className="h-3.5 w-3.5 text-white/50" />
          </button>
        </div>

        {/* links */}
        <div ref={drawerItemsRef} className="flex flex-col py-3 px-3 gap-0.5">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                data-item
                onClick={() => navigate(link.id)}
                className={[
                  'relative flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-[10px] font-bold tracking-[0.15em] transition-all duration-200',
                  isActive ? 'text-white bg-white/[0.08]' : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]',
                ].join(' ')}
              >
                {isActive && <span className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-orange-500 to-amber-400 rounded-full" />}
                {link.name}
              </button>
            );
          })}
        </div>

        {/* actions */}
        <div data-item className="mt-auto p-4 border-t border-white/[0.06] flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white/50 hover:text-white transition-all duration-200 shrink-0"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => navigate('contact')}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-[10px] font-bold tracking-[0.1em] text-black bg-gradient-to-r from-orange-500 to-amber-400"
          >
            <Zap className="h-3.5 w-3.5 fill-black/40" />
            GET A QUOTE
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[76px]" aria-hidden="true" />
    </>
  );
}
