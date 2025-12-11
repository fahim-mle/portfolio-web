import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-8 md:py-12 bg-background/50">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ghost. Built with curiosity.
        </p>
      </Container>
    </footer>
  );
}
