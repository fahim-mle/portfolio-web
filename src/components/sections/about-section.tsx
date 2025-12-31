"use client";

import { Container } from '@/components/ui/container';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll('.animate-item'),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="about" className="flex items-center bg-[#0a0a0a]/90 relative z-10 py-12 md:py-24" ref={containerRef}>
      <Container className="py-12 md:py-24">
        <div className="flex flex-col gap-12 max-w-2xl mx-auto">
          <h1 className="animate-item text-4xl md:text-5xl font-serif font-medium tracking-tight text-[#D4AF37]">About</h1>

          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-sans font-light">
            <p className="animate-item">
              I exist at the intersection of <span className="text-foreground font-medium">curiosity and code</span>.
            </p>
            <p className="animate-item">
              My work is driven by a desire to understand systems—whether they are digital architectures, biological patterns, or social structures.
              I build software not just to solve problems, but to ask better questions.
            </p>
            <p className="animate-item">
              Current focus: Data visualization, distributed systems, and the quiet beauty of functional programming.
            </p>
          </div>

          <div className="pt-8 animate-item">
            <h2 className="text-xl font-medium text-foreground mb-4">Core Principles</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                Simplicity over ease
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] text-accent" />
                Data as truth
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                Systems thinking
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                Continuous iteration
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
