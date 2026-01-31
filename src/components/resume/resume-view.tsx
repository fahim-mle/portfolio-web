"use client";

import { JourneyTimeline } from '@/components/resume/journey-timeline';
import { PlainResume } from '@/components/resume/plain-resume';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';
import { FileText, Map } from 'lucide-react';
import { useState } from 'react';

export function ResumeView() {
  const [view, setView] = useState<'journey' | 'plain'>('journey');

  return (
    <Container className="py-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-4 text-accent">
            {view === 'journey' ? 'The Journey' : 'Resume'}
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            {view === 'journey' 
              ? 'A timeline of problems solved and systems built.' 
              : 'Clean, printable, and to the point.'}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-lg border border-border/50">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setView('journey')}
            className={cn(
              "gap-2",
              view === 'journey' ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Map size={16} /> Journey
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setView('plain')}
            className={cn(
              "gap-2",
              view === 'plain' ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <FileText size={16} /> Plain
          </Button>
        </div>
      </div>

      {view === 'journey' ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <JourneyTimeline />
        </div>
      ) : (
        <div className="animate-in fade-in zoom-in-95 duration-300">
          <PlainResume />
        </div>
      )}
    </Container>
  );
}
