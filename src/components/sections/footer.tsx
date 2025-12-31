import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 md:py-12 bg-black/20 backdrop-blur-sm relative z-10">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-xs tracking-widest text-[#D4AF37]/60 uppercase">
          © {new Date().getFullYear()} Ghost. Built with curiosity.
        </p>
      </Container>
    </footer>
  );
}
