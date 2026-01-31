"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown, Code2, Database, Github, Linkedin, Terminal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@/lib/use-window-size';

export const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { width, height } = useWindowSize();

  const parallaxStyle = width && height
    ? {
        transform: `translate(${-(mousePos.x - width / 2) * 0.015}px, ${-(mousePos.y - height / 2) * 0.015}px)`
      }
    : undefined;

  const parallaxStyleDeep = width && height
    ? {
        transform: `translate(${-(mousePos.x - width / 2) * 0.03}px, ${-(mousePos.y - height / 2) * 0.03}px)`
      }
    : undefined;

    // Scroll indicator opacity logic
    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOpacity(Math.max(0, 1 - window.scrollY / 300));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Reset initial states
    gsap.set('.reveal-text', { y: 100, opacity: 0 });
    gsap.set('.line-separator', { scaleX: 0 });
    gsap.set('.hero-tag', { opacity: 0, x: -20 });

    // Animation Sequence
    tl.to('.line-separator', { scaleX: 1, duration: 1.5, ease: 'expo.out' })
      .to('.reveal-text', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
      }, '-=1')
      .to('.hero-tag', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.8');
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">

      <div className="w-full max-w-6xl relative" style={parallaxStyle}>

        {/* Role Tags */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 font-sans text-xs md:text-sm tracking-[0.2em] text-gray-400">
          <span className="hero-tag group flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:text-foreground hover:bg-accent/5 hover:drop-shadow-[0_0_14px_rgba(0,229,255,0.45)]">
            <Database size={14} className="text-accent transition group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.75)]" /> SYSTEMS & SECURITY
          </span>
          <span className="hero-tag group flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:text-foreground hover:bg-accent/5 hover:drop-shadow-[0_0_14px_rgba(0,229,255,0.45)]">
            <Code2 size={14} className="text-accent transition group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.75)]" /> DATA & ECONOMICS
          </span>
          <span className="hero-tag group flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:text-foreground hover:bg-accent/5 hover:drop-shadow-[0_0_14px_rgba(0,229,255,0.45)]">
            <Terminal size={14} className="text-accent transition group-hover:drop-shadow-[0_0_10px_rgba(0,229,255,0.75)]" /> FULL STACK ENG
          </span>
        </div>

        {/* Main Title - Masked Reveal */}
        <div className="overflow-hidden">
          <h1 className="reveal-text text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[1.1] text-center md:text-left mix-blend-overlay opacity-90 transition duration-300 hover:drop-shadow-[0_0_28px_rgba(0,229,255,0.35)]">
            MIND IN
          </h1>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-accent to-transparent my-4 line-separator origin-left" />

        <div className="overflow-hidden">
          <h1 className="reveal-text text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[1.1] text-center md:text-right text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 transition duration-300 hover:from-accent hover:to-accent-secondary hover:drop-shadow-[0_0_30px_rgba(0,229,255,0.45)]">
            ROOT
          </h1>
        </div>

        {/* Subtitle / Description */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-8" style={parallaxStyleDeep}>
          <div className="max-w-md text-gray-400 font-sans leading-relaxed text-sm md:text-base text-center md:text-left reveal-text">
            <p>
              Full‑stack Engineer & Systems Thinker. I build secure, high‑performance systems and the analytics that help us understand the real world.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 reveal-text">
            <a
              href="https://github.com/fahim-mle"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-white/20 rounded-full hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/fahim-forhad-z496/"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-white/20 rounded-full hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce transition-opacity duration-300 pointer-events-none z-50"
        style={{ opacity: scrollOpacity }}
      >
        <span className="text-[10px] uppercase tracking-widest font-sans text-white/50">Scroll</span>
        <ChevronDown size={16} className="text-white/50" />
      </div>

    </main>
  );
};
