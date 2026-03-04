import { Container } from '@/components/ui/container';
import { ProjectCard } from '@/components/ui/project-card';
import { PROJECTS } from '@/lib/projects';

export default function Projects() {
  return (
    <Container className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-4 text-accent">Projects</h1>
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
  );
}
