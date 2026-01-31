"use client";

import { Badge } from '@/components/ui/badge';
import { JOURNEY } from '@/lib/resume-data';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export function JourneyTimeline() {
  return (
    <div className="relative border-l border-border/50 ml-4 md:ml-12 space-y-12 py-8">
      {JOURNEY.map((item, index) => {
        const Icon = item.type === 'work' ? Briefcase : GraduationCap;
        
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
            
            {/* Icon (Floating left) */}
            <div className="absolute -left-10 md:-left-14 top-0 p-2 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hidden md:flex items-center justify-center">
              <Icon size={16} />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                  {item.period}
                </span>
                <span className="text-xs text-muted-foreground/60">{item.location}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground">
                {item.title}
              </h3>
              
              <div className="text-sm font-medium text-accent">
                {item.company}
              </div>

              <p className="text-muted-foreground leading-relaxed mt-2 max-w-2xl">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="text-xs font-normal border-border/40 text-muted-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
