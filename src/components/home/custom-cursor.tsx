"use client";

import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      // Check target element type for cursor behavior
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select');
      const isText = target.closest('input, textarea, [contenteditable="true"]');

      setIsHovering(!!isInteractive && !isText);
      setIsHidden(!!isText);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
        ref={cursorRef}
        className={cn(
            "custom-cursor hidden md:block transition-all duration-300 ease-out",
            isHovering && "scale-[2.5] bg-white mix-blend-difference border-transparent",
            isHidden && "opacity-0"
        )}
    />
  );
};
