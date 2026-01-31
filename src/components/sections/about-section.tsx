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
    <section id="about" className="flex items-center min-h-[50vh] relative z-10 py-12 md:py-24" ref={containerRef}>
      <Container className="py-12 md:py-24">
        <div className="flex flex-col gap-12 max-w-2xl mx-auto">
          <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-sans font-light">
            <p className="animate-item">
              I’m a <span className="text-foreground font-medium">curious systems thinker</span> who prefers deep conversations over small talk.
            </p>
            <p className="animate-item">
              My work sits where <span className="text-foreground font-medium">engineering meets economics</span>. I care about how systems are designed, how data is secured, and the incentives that shape human behavior.
            </p>
            <p className="animate-item">
              Whether it&apos;s building privacy-preserving ML infrastructure or understanding global markets, my goal is the same: use deep technical knowledge to build harmonious, resilient systems that make the world a slightly better place.
            </p>
          </div>

          <div className="pt-8 animate-item">
            <h2 className="text-xl font-medium text-foreground mb-4">What Drives Me</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Data Privacy & Security
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Economic Incentives
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Deep Conversations
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Real-world Harmony
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
