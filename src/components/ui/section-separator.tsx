"use client";

import { cn } from "@/lib/utils";

export const SectionSeparator = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full overflow-hidden leading-[0] sticky z-20 pointer-events-none mix-blend-screen", className)}>
      <svg
        className="relative block w-[200%] h-[50px] animate-scroll-left"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          className="fill-none stroke-[#D4AF37] stroke-[2] opacity-50"
        />
        <path
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60"
            className="fill-none stroke-[#D4AF37] stroke-[1]"
            fill="none"
        />
      </svg>
    </div>
  );
};
