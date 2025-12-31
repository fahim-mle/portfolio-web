import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Card className="flex flex-col h-full bg-transparent border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-300 group">
      <CardHeader>
        <div className="mb-4 text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
        <CardTitle className="text-xl font-serif tracking-wide text-white group-hover:text-[#D4AF37] transition-colors">{title}</CardTitle>
        <CardDescription className="text-sm font-sans text-gray-400 group-hover:text-gray-300 transition-colors">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-800 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] hover:text-white transition-colors flex items-center gap-2"
        >
            View Project <span className="text-lg leading-none">&rarr;</span>
        </a>
      </CardFooter>
    </Card>
  );
}
