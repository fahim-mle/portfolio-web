import { CanvasBackground } from '@/components/home/canvas-background';
import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SectionSeparator } from '@/components/ui/section-separator';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
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
