import { CanvasBackground } from '@/components/home/canvas-background';
import { HeroSection } from '@/components/home/hero-section';
import { SectionSeparator } from '@/components/ui/section-separator';
import { Container } from '@/components/ui/container';
import { ProjectCard } from '@/components/ui/project-card';
import { getSortedPostsData } from '@/lib/blog';
import Link from 'next/link';
import { CodeIcon, MixerHorizontalIcon, RocketIcon } from '@radix-ui/react-icons';

import { PROJECTS } from '@/lib/projects';

const FEATURED_PROJECTS = PROJECTS.slice(0, 2);

export default function Home() {
  const latestPosts = getSortedPostsData().slice(0, 2);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <CanvasBackground />
      <HeroSection />

      <SectionSeparator />

      <Container className="py-24">
        <div className="flex flex-col gap-12">
          <div className="flex justify-between items-end">
            <div className="max-w-xl">
              <h2 className="text-3xl font-serif font-medium tracking-tight mb-4 text-accent">Featured Projects</h2>
              <p className="text-lg text-muted-foreground font-light">
                A selection of my recent work in systems and data science.
              </p>
            </div>
            <Link href="/projects" className="text-accent hover:underline font-medium">
              View all projects &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_PROJECTS.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Container>

      <SectionSeparator />

      <Container className="py-24">
        <div className="flex flex-col gap-12">
          <div className="flex justify-between items-end">
            <div className="max-w-xl">
              <h2 className="text-3xl font-serif font-medium tracking-tight mb-4 text-accent">Latest Articles</h2>
              <p className="text-lg text-muted-foreground font-light">
                Thoughts on engineering, economics, and privacy.
              </p>
            </div>
            <Link href="/blog" className="text-accent hover:underline font-medium">
              Read blog &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group p-6 rounded-lg border border-border bg-card hover:bg-muted/50 transition-all">
                <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 text-sm text-muted-foreground">{post.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
