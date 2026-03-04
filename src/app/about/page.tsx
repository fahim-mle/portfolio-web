import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { DownloadIcon } from '@radix-ui/react-icons';

export default function About() {
  return (
    <Container className="py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-accent">About Me</h1>
          <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              I am a Full-stack Software Engineer and Data Science professional with a passion for building secure,
              high-performance systems. My work lives at the intersection of development, data literacy, and privacy.
            </p>
            <p>
              With a Master&apos;s in Data Science, I focus on creating data-driven applications that provide measurable impact. I bridge the gap between complex analytical models and robust software engineering.
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <Button className="gap-2">
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="text-xl font-medium mb-4">Core Skills</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium mb-2 text-muted-foreground uppercase tracking-wider text-[10px]">Languages & Frameworks</div>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'Next.js', 'React', 'Python', 'Go'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-muted rounded text-[10px] font-medium border border-border">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2 text-muted-foreground uppercase tracking-wider text-[10px]">Data & ML</div>
                <div className="flex flex-wrap gap-2">
                  {['PyTorch', 'TensorFlow', 'Scikit-learn', 'SQL', 'Pandas'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-muted rounded text-[10px] font-medium border border-border">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="text-xl font-medium mb-4">Education</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-foreground">M.Sc. Data Science</div>
                  <div className="text-sm text-muted-foreground">University of Sydney</div>
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Graduated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
