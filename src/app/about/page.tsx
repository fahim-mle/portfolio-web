import { Container } from '@/components/ui/container';

export default function About() {
  return (
    <Container className="py-24 md:py-32">
      <div className="flex flex-col gap-12 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight">About</h1>

        <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-sans font-light">
          <p>
            I exist at the intersection of <span className="text-foreground font-medium">curiosity and code</span>.
          </p>
          <p>
            My work is driven by a desire to understand systems—whether they are digital architectures, biological patterns, or social structures.
            I build software not just to solve problems, but to ask better questions.
          </p>
          <p>
            Current focus: Data visualization, distributed systems, and the quiet beauty of functional programming.
          </p>
        </div>

        <div className="pt-8">
          <h2 className="text-xl font-medium text-foreground mb-4">Core Principles</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Simplicity over ease
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent text-accent" />
              Data as truth
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Systems thinking
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Continuous iteration
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
