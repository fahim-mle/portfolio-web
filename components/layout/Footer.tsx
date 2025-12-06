import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:px-8 md:py-0">
      <Container className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Ghost. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
