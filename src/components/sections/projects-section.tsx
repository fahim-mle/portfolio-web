"use client";

import { Container } from '@/components/ui/container';
import { ProjectCard } from '@/components/ui/project-card';
import { useGSAP } from '@gsap/react';
import { CodeIcon, MixerHorizontalIcon, RocketIcon } from '@radix-ui/react-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: 'Federated Learning — Secure Implementation',
    description:
      'Designed a containerised federated learning environment with privacy-preserving communication (mTLS, OpenVPN, Keycloak/OIDC), validated with multiple concurrent nodes.',
    tags: ['Python', 'Docker', 'Federated Learning', 'Security'],
    href: 'https://github.com/fahim-mle/federated_learning_secure_implementation',
    icon: <RocketIcon className="h-5 w-5" />
  },
  {
    title: 'Wellbeing E‑commerce (Showcase)',
    description:
      'A practical full‑stack build to demonstrate product thinking, UI quality, and reliable engineering practices. (Screenshots + write-up coming.)',
    tags: ['TypeScript', 'Next.js', 'CI/CD', 'Docker'],
    href: 'https://github.com/fahim-mle/welbeing_ecommerce',
    icon: <CodeIcon className="h-5 w-5" />
  },
  {
    title: 'Portfolio Website (This Site)',
    description:
      'A clean Next.js portfolio with a blog — designed to evolve into deeper write-ups and case studies over time.',
    tags: ['Next.js', 'TypeScript', 'UI', 'Vercel'],
    href: 'https://github.com/fahim-mle/portfolio-web',
    icon: <MixerHorizontalIcon className="h-5 w-5" />
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll('.animate-card'),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="projects" className="flex items-center min-h-[50vh] relative z-10 py-12 md:py-24" ref={containerRef}>
      <Container className="py-12 md:py-24">
        <div className="flex flex-col gap-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-4 text-[#D4AF37]">Projects</h1>
            <p className="text-xl text-muted-foreground font-light">
              Questions asked, hypotheses tested, and systems built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.title} className="animate-card h-full">
                  <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
