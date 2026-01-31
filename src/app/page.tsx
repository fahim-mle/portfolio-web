import { CanvasBackground } from '@/components/home/canvas-background';
import { CustomCursor } from '@/components/home/custom-cursor';
import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SectionSeparator } from '@/components/ui/section-separator';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <CustomCursor />
      <CanvasBackground />
      <HeroSection />

      <SectionSeparator />
      <AboutSection />

      <SectionSeparator />
      <ProjectsSection />

      <SectionSeparator />
      <ContactSection />
    </div>
  );
}
