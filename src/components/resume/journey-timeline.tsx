"use client";

import { Badge } from '@/components/ui/badge';
import { JOURNEY } from '@/lib/resume-data';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, User } from 'lucide-react';
import { useRef } from 'react';

export function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={ref} className="relative py-16 md:py-24 max-w-4xl mx-auto">
      {/* The Central Line */}
      <motion.div
        className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border origin-top"
        style={{ scaleY }}
      />
      <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border/20" />

      <div className="space-y-24">
        {JOURNEY.map((item, index) => {
          const isLeft = index % 2 === 0;
          let Icon = Briefcase;
          if (item.type === 'education') Icon = GraduationCap;
          if (item.type === 'life') Icon = User;

          return (
            <div key={item.id} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Node (Center) */}
              <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-background border-2 border-accent p-2 rounded-full shadow-sm"
                >
                  <Icon size={16} className="text-accent" />
                </motion.div>
              </div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? 'md:pl-16' : 'md:pr-16 text-right'}`}
              >
                <div className={`flex flex-col gap-2 ${!isLeft && 'md:items-end'}`}>
                  <span className="font-mono text-accent text-sm font-bold tracking-wider">
                    {item.year}
                  </span>
                  
                  <h3 className="text-2xl font-serif font-medium text-foreground">
                    {item.title}
                  </h3>
                  
                  <div className="text-sm text-muted-foreground font-medium mb-2">
                    {item.subtitle}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {item.tech && (
                    <div className={`flex flex-wrap gap-2 mt-3 ${!isLeft && 'md:justify-end'}`}>
                      {item.tech.map(t => (
                        <Badge key={t} variant="outline" className="border-accent/30 text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
