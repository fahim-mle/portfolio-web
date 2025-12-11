import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] justify-center">
      <Container>
        <div className="flex flex-col gap-8 max-w-2xl py-24 md:py-32">
          {/* Abstract / Intro */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-[1.1]">
              <span className="text-muted-foreground mr-2">Creating with</span>
              <span className="text-foreground">data, systems, and meaning.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              I’m a software engineer and thinker exploring the intersection of technology and human experience.
              My work is a continuous experiment in curiosity.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/projects">
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-accent/5 hover:shadow-accent/20 transition-all duration-500">
                View Projects
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                More About Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorational element (Abstract Visual) */}
        <div className="absolute right-0 top-1/4 -z-10 opacity-20 hidden lg:block overflow-hidden pointer-events-none">
           <div className="w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] animate-pulse" />
        </div>
      </Container>
    </div>
  );
}
