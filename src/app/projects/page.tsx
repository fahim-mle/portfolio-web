import { Container } from '@/components/ui/container';
import { ProjectCard } from '@/components/ui/project-card';
import { CodeIcon, MixerHorizontalIcon, RocketIcon } from '@radix-ui/react-icons';

const PROJECTS = [
  {
    title: "Personal Portfolio",
    description: "A minimal, nature-inspired portfolio designed to reflect curiosity and systems thinking. Built with Next.js and Tailwind.",
    tags: ["Next.js", "React", "Tailwind CSS", "Design"],
    href: "https://github.com/ghost/portfolio",
    icon: <CodeIcon className="h-5 w-5" />
  },
  {
    title: "Neural Network Viz",
    description: "Interactive visualization of a simple neural network learning process. Explores the 'black box' of AI.",
    tags: ["Python", "TensorFlow", "D3.js", "Data"],
    href: "#",
    icon: <MixerHorizontalIcon className="h-5 w-5" />
  },
  {
    title: "Distributed Logs",
    description: "A high-performance distributed logging system meant to test consistency models across distributed nodes.",
    tags: ["Go", "gRPC", "Distributed Systems"],
    href: "#",
    icon: <RocketIcon className="h-5 w-5" />
  }
];

export default function Projects() {
  return (
    <Container className="py-24 md:py-32">
      <div className="flex flex-col gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground font-light">
            Questions asked, hypotheses tested, and systems built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.title} className="h-64">
                <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
