import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  href: string;
  icon?: React.ReactNode;
}

export function ProjectCard({ title, description, tags, href, icon }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative block h-full overflow-hidden rounded-lg bg-card p-6 transition-all hover:bg-card/80"
    >
      {/* Circuit Border Effect */}
      <span className="absolute inset-0 pointer-events-none rounded-lg border border-border transition-colors group-hover:border-accent/50" />

      {/* Moving Light / Glow Effect (Simulated 'circuit') */}
      <span className="absolute inset-[1px] -z-10 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 flex items-center justify-between">
            {icon ? (
                <div className="text-accent">{icon}</div>
            ) : (
                <div className="h-8 w-8 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    {/* Placeholder Icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/></svg>
                </div>
            )}
        </div>

        <h3 className="mb-2 text-xl font-semibold font-serif tracking-tight text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="mb-4 text-sm text-muted-foreground leading-relaxed flex-grow">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-sm bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
