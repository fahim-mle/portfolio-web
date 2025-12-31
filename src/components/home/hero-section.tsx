"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Code2, Database, Github, Linkedin, Terminal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax Effect style for text
  const parallaxStyle = mounted ? {
    transform: `translate(${-(mousePos.x - window.innerWidth/2) * 0.015}px, ${-(mousePos.y - window.innerHeight/2) * 0.015}px)`
  } : {};

  const parallaxStyleDeep = mounted ? {
    transform: `translate(${-(mousePos.x - window.innerWidth/2) * 0.03}px, ${-(mousePos.y - window.innerHeight/2) * 0.03}px)`
  } : {};

  useGSAP(() => {
    const tl = gsap.timeline();

    // Reset initial states
    gsap.set('.reveal-text', { y: 100, opacity: 0 });
    gsap.set('.line-separator', { scaleX: 0 });
    gsap.set('.nav-item', { y: -20, opacity: 0 });
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
      }, '-=0.8')
      .to('.nav-item', {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=1');
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">

      <div className="w-full max-w-6xl relative" style={parallaxStyle}>

        {/* Role Tags */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 font-sans text-xs md:text-sm tracking-[0.2em] text-gray-400">
          <span className="hero-tag flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Database size={14} className="text-[#D4AF37]" /> DATA SCIENTIST
          </span>
          <span className="hero-tag flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Code2 size={14} className="text-[#D4AF37]" /> FULL STACK DEV
          </span>
          <span className="hero-tag flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Terminal size={14} className="text-[#D4AF37]" /> DEVOPS
          </span>
        </div>

        {/* Main Title - Masked Reveal */}
        <div className="overflow-hidden">
          <h1 className="reveal-text text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[1.1] text-center md:text-left mix-blend-overlay opacity-90">
            MIND IN
          </h1>
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent my-4 line-separator origin-left" />

        <div className="overflow-hidden">
          <h1 className="reveal-text text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[1.1] text-center md:text-right text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            ROOT
          </h1>
        </div>

        {/* Subtitle / Description */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-8" style={parallaxStyleDeep}>
          <div className="max-w-md text-gray-400 font-sans leading-relaxed text-sm md:text-base text-center md:text-left reveal-text">
            <p>
              Master of Data Science (Professional) with a passion for bridging the gap between complex data, robust engineering, and seamless automation.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 reveal-text">
            <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300 group">
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="p-3 border border-white/20 rounded-full hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300 group">
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce transition-opacity duration-300 pointer-events-none z-50"
        style={{ opacity: Math.max(0, 1 - (typeof window !== 'undefined' ? window.scrollY : 0) / 300) }}
      >
        <span className="text-[10px] uppercase tracking-widest font-sans text-white/50">Scroll</span>
        <ChevronDown size={16} className="text-white/50" />
      </div>

    </main>
  );
};
