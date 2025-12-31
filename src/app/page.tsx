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
