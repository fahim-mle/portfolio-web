'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { signOut, useSession } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple section detection
      const sections = ['about', 'projects', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 100)) {
          current = '#' + section;
        }
      }
      if (window.scrollY < 100) current = '#';
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return; // Allow normal navigation for external links

    e.preventDefault();
    const targetId = href.replace('#', '');
    if (targetId === '') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50" : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="mr-8 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif font-bold text-lg tracking-tight text-[#D4AF37]">Ghost.</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={cn(
                  "relative py-1 transition-colors hover:text-[#D4AF37] group uppercase tracking-widest text-xs",
                  activeSection === item.href ? "text-[#D4AF37]" : "text-muted-foreground"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute left-0 bottom-0 h-[1px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full",
                    activeSection === item.href ? "w-full" : "w-0"
                  )}
                />
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-2">
            <AuthButtons />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden ml-2">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <Cross1Icon className="h-5 w-5" /> : <HamburgerMenuIcon className="h-5 w-5" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
      </Container>


      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-2 fade-in">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-accent",
                  pathname === item.href ? "text-accent" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-xs text-muted-foreground hidden lg:inline-block font-mono">
          {session.user?.email}
        </span>
        <Button variant="ghost" size="sm" onClick={() => signOut()} className="text-xs h-8">
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link href="/login">
        <Button variant="ghost" size="sm" className="text-xs h-8">
          Login
        </Button>
      </Link>
      <Link href="/signup">
        <Button size="sm" variant="outline" className="text-xs h-8 border-accent/20 hover:border-accent hover:bg-accent/10">
          Sign Up
        </Button>
      </Link>
    </div>
  );
}
