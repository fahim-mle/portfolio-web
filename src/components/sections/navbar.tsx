'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { signOut, useSession } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import { Cross1Icon, GitHubLogoIcon, HamburgerMenuIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' }, // Added Projects link
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50" : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="mr-8 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif font-bold text-lg tracking-tight">Ghost.</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 transition-colors hover:text-accent group",
                  pathname === item.href ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute left-0 bottom-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full",
                    pathname === item.href ? "w-full" : "w-0"
                  )}
                />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center gap-2">
            <AuthButtons />
            <div className="h-4 w-[1px] bg-border mx-2 hidden md:block" />

            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8 px-0 text-muted-foreground hover:text-foreground">
                <GitHubLogoIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8 px-0 text-muted-foreground hover:text-foreground">
                <LinkedInLogoIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
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
