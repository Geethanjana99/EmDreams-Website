import React, { useState, useEffect, useRef } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { ServiceCard } from '../components/ServiceCard';
import { TeamMemberCard } from '../components/TeamMemberCard';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRightIcon, CodeIcon, MegaphoneIcon, GraduationCapIcon, SmartphoneIcon } from 'lucide-react';
import { workSteps } from '../data/services';
import { useServices, useTeamMembers, useProjects } from '../utils/dataHooks';
import type { Service, TeamMember, Project } from '../types';
import webDevImg from '../assets/web_dev_service.png';
import marketingImg from '../assets/digital_marketing_service.png';
import assignmentsImg from '../assets/assignment_projects_service.png';
import mobileAppsImg from '../assets/mobile_apps_service.png';

type HomeProps = {
  onNavigate: (page: string) => void;
};

function HeroSplineRobot() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let isDisposed = false;
    let splineApp: { dispose?: () => void } | undefined;

    const loadRobot = async () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }

      const { Application } = await import('@splinetool/runtime');
      if (isDisposed) {
        return;
      }

      const app = new Application(canvas);
      splineApp = app as { dispose?: () => void };
      await app.load('https://prod.spline.design/if5F77Fxtomf2zQR/scene.splinecode');
    };

    loadRobot().catch((error) => {
      console.error('Unable to load Spline robot scene', error);
    });

    return () => {
      isDisposed = true;
      splineApp?.dispose?.();
    };
  }, []);

  return (
    <div className="pointer-events-auto absolute inset-0 z-20 hidden lg:block">
      <div className="spline-container absolute inset-0 overflow-visible">
        <canvas
          ref={canvasRef}
          className="block h-full w-full"
          aria-label="Interactive 3D robot"
        />
      </div>
    </div>
  );
}

function BuildMarketDeliver({ onNavigate }: { onNavigate: (page: string) => void }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<HTMLSpanElement[]>([]);
  const words = ['Build', 'Market', 'Deliver'];

  useEffect(() => {
    let isCancelled = false;
    let context: { revert: () => void } | undefined;

    const animateWords = async () => {
      const { gsap } = await import('gsap');
      if (isCancelled || !containerRef.current) {
        return;
      }

      context = gsap.context(() => {
        const letters = wordRefs.current.filter(Boolean);

        gsap.set(letters, {
          autoAlpha: 0,
          y: 72,
          rotateX: -70,
          transformOrigin: '50% 100%',
        });

        gsap.timeline({ defaults: { ease: 'power4.out' } })
          .to(letters, {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 1.15,
            stagger: 0.16,
          })
          .fromTo('.hero-welcome-text', {
            autoAlpha: 0,
            x: -30,
          }, {
            autoAlpha: 1,
            x: 0,
            duration: 1.3,
          }, 0)
          .fromTo('.hero-desc-text', {
            autoAlpha: 0,
            x: -30,
          }, {
            autoAlpha: 1,
            x: 0,
            duration: 1.3,
          }, 0.15)
          .fromTo('.hero-cta-buttons', {
            autoAlpha: 0,
            x: -30,
          }, {
            autoAlpha: 1,
            x: 0,
            duration: 1.3,
          }, 0.3)
          .to('.hero-word-line', {
            scaleX: 1,
            duration: 0.9,
            stagger: 0.12,
          }, '-=0.75');

        gsap.to('.hero-word-glow', {
          xPercent: 115,
          duration: 3.8,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }, containerRef);
    };

    animateWords().catch((error) => {
      console.error('Unable to load GSAP hero animation', error);
    });

    return () => {
      isCancelled = true;
      context?.revert();
    };
  }, []);

  return (
    <>
      {/* BACKGROUND WORDS LAYER (z-10) */}
      <div ref={containerRef} className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center px-4 pb-12 sm:pb-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl grid grid-rows-3 items-center h-[280px] sm:h-[380px] lg:h-[480px]">
          {/* Row 1: BUILD */}
          <div className="grid grid-cols-12 items-center gap-8 h-full">
            <div className="col-span-12 lg:col-span-8 lg:col-start-5 text-right overflow-hidden">
              <span
                ref={(element) => {
                  if (element) {
                    wordRefs.current[0] = element;
                  }
                }}
                className="relative inline-block text-[clamp(4rem,12vw,11rem)] font-black uppercase leading-[0.78] tracking-normal text-white/10"
                style={{
                  WebkitTextStroke: '1px rgb(255 255 255 / 0.16)',
                }}
              >
                Build
              </span>
              <span className="hero-word-line ml-auto mt-3 block h-px w-3/5 origin-right scale-x-0 bg-gradient-to-l from-primary/60 via-white/10 to-transparent" />
            </div>
          </div>

          {/* Row 2: MARKET */}
          <div className="grid grid-cols-12 items-center gap-8 h-full">
            <div className="col-span-12 lg:col-span-8 lg:col-start-5 text-right overflow-hidden">
              <span
                ref={(element) => {
                  if (element) {
                    wordRefs.current[1] = element;
                  }
                }}
                className="relative inline-block text-[clamp(4rem,12vw,11rem)] font-black uppercase leading-[0.78] tracking-normal text-primary/30"
                style={{
                  WebkitTextStroke: '1px rgb(249 115 22 / 0.45)',
                }}
              >
                Market
                <span className="hero-word-glow pointer-events-none absolute inset-y-4 left-[-70%] w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </span>
              <span className="hero-word-line ml-auto mt-3 block h-px w-3/5 origin-right scale-x-0 bg-gradient-to-l from-primary/60 via-white/10 to-transparent" />
            </div>
          </div>

          {/* Row 3: DELIVER */}
          <div className="grid grid-cols-12 items-center gap-8 h-full">
            <div className="col-span-12 lg:col-span-8 lg:col-start-5 text-right overflow-hidden">
              <span
                ref={(element) => {
                  if (element) {
                    wordRefs.current[2] = element;
                  }
                }}
                className="relative inline-block text-[clamp(4rem,12vw,11rem)] font-black uppercase leading-[0.78] tracking-normal text-white/10"
                style={{
                  WebkitTextStroke: '1px rgb(255 255 255 / 0.16)',
                }}
              >
                Deliver
              </span>
              <span className="hero-word-line ml-auto mt-3 block h-px w-3/5 origin-right scale-x-0 bg-gradient-to-l from-primary/60 via-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* FOREGROUND LEFT COLUMN LAYER (z-30) */}
      <div className="pointer-events-none absolute inset-0 z-30 flex items-end justify-center px-4 pb-12 sm:pb-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl grid grid-rows-3 items-center h-[280px] sm:h-[380px] lg:h-[480px]">
          {/* Row 1: Welcome text */}
          <div className="grid grid-cols-12 items-center gap-8 h-full">
            <div className="col-span-4 hidden lg:block text-left pointer-events-auto hero-welcome-text select-none">
              <p className="text-[11px] font-bold tracking-[0.35em] text-primary/80 uppercase mb-1">
                DIGITAL INNOVATION
              </p>
              <h1 className="text-4xl font-extralight tracking-wider text-white/50 uppercase leading-none">
                WELCOME TO <br />
                <span className="font-black text-white/95 tracking-normal">EMDREAMS</span>
              </h1>
              <div className="mt-3 h-px w-20 bg-gradient-to-r from-primary to-transparent" />
            </div>
          </div>

          {/* Row 2: Description */}
          <div className="grid grid-cols-12 items-center gap-8 h-full">
            <div className="col-span-4 hidden lg:block text-left pointer-events-auto hero-desc-text select-none">
              <p className="text-[11px] font-bold tracking-[0.35em] text-primary/80 uppercase mb-1.5">
                OUR MISSION
              </p>
              <h2 className="text-sm font-light tracking-wide text-white/70 leading-relaxed max-w-sm">
                We craft immersive 3D digital experiences, interactive web applications, and powerful brand identities that connect companies with their future.
              </h2>
              <div className="mt-3.5 h-px w-20 bg-gradient-to-r from-primary to-transparent" />
            </div>
          </div>

          {/* Row 3: CTAs & Phone */}
          <div className="grid grid-cols-12 items-center gap-8 h-full">
            <div className="col-span-4 hidden lg:flex flex-col justify-end items-start pointer-events-auto hero-cta-buttons">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group px-6 py-3 rounded-xl text-[10.5px] font-bold tracking-[0.2em] uppercase text-orange-400 hover:text-orange-300 border border-orange-500/35 hover:border-orange-500/70 bg-orange-500/[0.04] hover:bg-orange-500/[0.1] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  START PROJECT
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="group px-6 py-3 rounded-xl text-[10.5px] font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white border border-white/12 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  VIEW WORK
                </button>
              </div>
              <div className="mt-5 text-[11px] font-bold tracking-[0.2em] text-white/40">
                <a href="tel:+94773251345" className="hover:text-primary transition-colors duration-200">
                  TEL: +94 77 325 1345
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Home({ onNavigate }: HomeProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [featuredTeam, setFeaturedTeam] = useState<TeamMember[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadHomeData = async () => {
      const iconMap = {
        'Web Development': CodeIcon,
        'Mobile Apps': SmartphoneIcon,
        'Digital Marketing': MegaphoneIcon,
        'Assignment Projects': GraduationCapIcon,
      };
      
      const imageMap = {
        'Web Development': webDevImg,
        'Mobile Apps': mobileAppsImg,
        'Digital Marketing': marketingImg,
        'Assignment Projects': assignmentsImg,
      };
      
      const servicesData = await useServices();
      const servicesWithIcons: Service[] = servicesData.map(service => ({
        ...service,
        icon: iconMap[service.title as keyof typeof iconMap],
        imageUrl: imageMap[service.title as keyof typeof imageMap] || '',
      }));
      setServices(servicesWithIcons);
      
      // Get featured team members (ensure Founder is included and centered)
      const teamMembers = await useTeamMembers();
      let featured = teamMembers.slice(0, 5);
      const founder = teamMembers.find((m) => /founder/i.test(m.role));
      if (founder && !featured.some((m) => m.name === founder.name)) {
        // place founder first and trim to 5
        featured = [founder, ...featured.filter((m) => m.name !== founder.name)].slice(0, 5);
      }
      setFeaturedTeam(featured);
      
      // Get featured projects (first 2)
      const projects = await useProjects();
      setFeaturedProjects(projects.slice(0, 2));
    };
    loadHomeData();
  }, []);

  useEffect(() => {
    let ctx: any;
    const initScrollTriggers = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Animate CLI lines staggered on scroll
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.services-sticky-container',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
          }
        });

        const lines = gsap.utils.toArray('.cli-line');
        lines.forEach((line: any, idx: number) => {
          tl.to(line, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          }, idx * 1.2); // staggered timing
        });
      });
    };
    initScrollTriggers();
    return () => ctx?.revert();
  }, [services]);

  return (
    <div className="w-full overflow-hidden">
      {/* Shared continuous background for Hero and Services */}
      <div className="relative w-full bg-background">
        <div className="absolute inset-0 bg-grid-white/[0.025] bg-[length:44px_44px] pointer-events-none" />
        <div className="absolute inset-0 z-[5] bg-[radial-gradient(circle_at_70%_44%,rgba(249,115,22,0.14),transparent_32%),radial-gradient(circle_at_70%_150vh,rgba(249,115,22,0.08),transparent_25%),linear-gradient(180deg,hsl(var(--background))_0%,transparent_44%,hsl(var(--background))_100%)] pointer-events-none" />

        <section className="relative h-[calc(100vh-76px)] overflow-hidden bg-transparent z-10">
          <BuildMarketDeliver onNavigate={onNavigate} />
          <HeroSplineRobot />
        </section>

        {/* Services Overview */}
        <section className="w-full bg-transparent relative py-16 sm:py-20 lg:py-24 overflow-hidden px-4 sm:px-6 lg:px-8 z-10">
          <div className="w-full max-w-7xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-left select-none">
              <p className="text-[11px] font-bold tracking-[0.35em] text-primary uppercase mb-3.5">
                OUR SERVICES
              </p>
              <h2 className="text-4xl font-extralight tracking-wider text-white/50 uppercase leading-none">
                COMPREHENSIVE <br />
                <span className="font-black text-white/95 tracking-normal">SOLUTIONS</span>
              </h2>
              <p className="text-sm font-light text-muted-foreground mt-4 max-w-lg leading-relaxed">
                Digital expertise tailored to your business needs. We specialize in building cutting-edge web applications, growth marketing campaigns, and academic engineering solutions.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  onLearnMore={() => onNavigate('services')}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* How We Work */}
      <SectionContainer className="relative overflow-hidden bg-background min-h-[700px] pb-32">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              PROCESS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for exceptional results
            </p>
          </div>

          <div className="relative pb-8">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {workSteps.map((step, index) =>
              <div key={step.number} className="relative group flex flex-col items-center">
                  <div className="w-24 h-24 bg-background border-2 border-primary/20 rounded-full flex items-center justify-center mb-6 relative z-20 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <span className="text-3xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <Card className="bg-white/5 border-white/10 hover:border-primary/30 transition-colors text-center h-full min-h-[200px] w-full">
                    <CardContent className="pt-8 pb-8 px-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Team Preview */}
      <SectionContainer className="bg-muted/30 relative z-0 min-h-[800px]">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            THE SQUAD
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to your success
          </p>
        </div>
        {/* Desktop View - All members visible */}
        <div className="hidden md:flex relative justify-center items-center gap-4 mb-16 overflow-hidden px-4">
          {(() => {
            // Determine the center index based on Founder role; fallback to index 2
            const centerIndex = featuredTeam.findIndex((m) => /founder/i.test(m.role));
            const middleIndex = centerIndex !== -1 ? centerIndex : 2;

            return featuredTeam.map((member, index) => {
              const isCenter = index === middleIndex;

              // Calculate distance from center (0, 1, or 2)
              const distance = Math.abs(index - middleIndex);

              // Scale reduces by 10% for each step away from center
              const scaleValue = 100 - distance * 10;
              const scale = scaleValue / 100;

              return (
                <div
                  key={member.name}
                  className={`transition-all duration-700 ease-out hover:scale-105 hover:z-30 ${isCenter ? 'z-20' : 'z-10'}`}
                  style={{
                    transform: `scale(${scale})`,
                    opacity: isCenter ? 1 : 0.85 + distance * -0.1,
                  }}
                >
                  <div className="w-[240px]">
                    <TeamMemberCard member={member} />
                  </div>
                </div>
              );
            });
          })()}
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="md:hidden mb-16 -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
            {(() => {
              // Reorder to show Founder first on mobile if available
              const founderIndex = featuredTeam.findIndex((m) => /founder/i.test(m.role));
              const middleIndex = founderIndex !== -1 ? founderIndex : 2;
              const reorderedTeam = [
                featuredTeam[middleIndex],
                ...featuredTeam.slice(0, middleIndex),
                ...featuredTeam.slice(middleIndex + 1),
              ].filter(Boolean);

              return reorderedTeam.map((member, index) => (
                <div
                  key={member.name}
                  className="flex-shrink-0 snap-center first:ml-4 last:mr-4"
                >
                  <div className="w-[280px]">
                    <TeamMemberCard member={member} />
                  </div>
                </div>
              ));
            })()}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {featuredTeam.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-white/20"
              />
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate('team')}
            className="border-white/10 hover:border-primary hover:text-primary">

            View All Team Members
          </Button>
        </div>
      </SectionContainer>

      {/* Featured Work */}
      <SectionContainer className="min-h-[700px]">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            PORTFOLIO
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects that showcase our expertise
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) =>
          <ProjectCard key={project.title} project={project} />
          )}
        </div>
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate('portfolio')}
            className="group border-white/10 hover:border-primary hover:text-primary">

            See Full Portfolio{' '}
            <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="pb-24 min-h-[400px]">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-primary opacity-90" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
          <div className="relative z-10 p-12 sm:p-20 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-black">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto font-medium">
              Let's discuss how we can help bring your vision to life with our
              expert team and proven process.
            </p>
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="bg-black text-white hover:bg-black/80 border-none h-14 px-8 text-lg shadow-xl">

              Get in Touch
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>);

}
