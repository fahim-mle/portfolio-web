import { Container } from '@/components/ui/container';
import { buttonVariants } from '@/components/ui/button';
import { DownloadIcon } from '@radix-ui/react-icons';

export default function About() {
  return (
    <Container className="py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-accent">About Me</h1>
          <div className="space-y-4 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              I started my career building ERP systems in Dhaka, where accuracy and traceability mattered more than shiny UI. That
              early work taught me to treat software like a living system: know the data, respect the edges, and make the experience
              dependable for the people who use it.
            </p>
            <p>
              Later, I led a frontend team at Gain Solutions on a large property platform serving 100K+ users. We reduced heavy UI
              rendering from seconds to just over a second and cut dashboard load time by about half — practical wins that made the
              product feel lighter and more trustworthy.
            </p>
            <p>
              Most recently, I completed a Master&apos;s in Data Science at James Cook University, with placements at QCIF and Sarina
              Russo Group. I built secure federated learning infrastructure and end-to-end predictive analytics, which sharpened my
              focus on privacy, performance, and impact.
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <a
              className={`${buttonVariants({})} gap-2`}
              href="/docs/Fahim-Forhad-Resume.pdf"
              download
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="text-xl font-medium mb-4">Core Skills</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium mb-2 text-muted-foreground uppercase tracking-wider text-[10px]">Programming Languages</div>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript (ES6+)', 'TypeScript', 'Python', 'Bash', 'C#'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-muted rounded text-[10px] font-medium border border-border">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2 text-muted-foreground uppercase tracking-wider text-[10px]">Frontend Development</div>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'TypeScript', 'HTML5', 'CSS3', 'SCSS', 'Tailwind', 'Responsive Design', 'Performance Optimization', 'Jest', 'React Testing Library'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-muted rounded text-[10px] font-medium border border-border">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2 text-muted-foreground uppercase tracking-wider text-[10px]">Backend & Databases</div>
                <div className="flex flex-wrap gap-2">
                  {['Express', 'REST APIs', 'GraphQL', 'Authentication & RBAC', 'PostgreSQL', 'MongoDB', 'Redis'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-muted rounded text-[10px] font-medium border border-border">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2 text-muted-foreground uppercase tracking-wider text-[10px]">DevOps & Practices</div>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Docker Compose', 'Git/GitHub', 'CI/CD (GitHub Actions)', 'Linux (Ubuntu/Debian)', 'Bash Scripting', 'Code Reviews', 'Agile/Scrum', 'Technical Documentation'].map(skill => (
                    <span key={skill} className="px-2 py-1 bg-muted rounded text-[10px] font-medium border border-border">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2 text-muted-foreground uppercase tracking-wider text-[10px]">Data Science & ML</div>
                <div className="flex flex-wrap gap-2">
                  {['NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'Azure Machine Learning', 'Power BI', 'Predictive Modeling', 'Model Deployment'].map(skill => (
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
                  <div className="font-medium text-foreground">Master of Data Science (Professional)</div>
                  <div className="text-sm text-muted-foreground">James Cook University, Brisbane</div>
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Mar 2024 – Dec 2025</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium text-foreground">B.Sc. Computer Science and Engineering</div>
                  <div className="text-sm text-muted-foreground">American International University Bangladesh (AIUB)</div>
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Mar 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
