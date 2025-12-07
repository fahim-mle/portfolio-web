import { Container } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';

export default function About() {
  return (
    <Container className="py-24">
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center">About Me</h1>

        <div className="space-y-4">
          <p className="text-xl text-muted-foreground">
            Hello! I'm Ghost, a software engineer based in the cloud. I enjoy creating things that live on the internet.
            My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
          </p>

          <p className="text-xl text-muted-foreground">
            Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio.
          </p>
        </div>

        <Separator className="my-4" />

        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Radix UI', 'Tailwind CSS'].map((skill) => (
            <div key={skill} className="px-3 py-1 border rounded-md bg-muted/50 text-sm font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
