import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 md:py-12 bg-black/20 backdrop-blur-sm relative z-10">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-xs tracking-widest text-[#D4AF37]/60 uppercase">
          © {new Date().getFullYear()} Fahim Forhad · mindinroot.com
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a className="hover:text-[#D4AF37] transition-colors" href="https://github.com/fahim-mle" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-[#D4AF37] transition-colors" href="https://www.linkedin.com/in/fahim-forhad-z496/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-[#D4AF37] transition-colors" href="mailto:fahimforhad.brisbane@gmail.com">Email</a>
        </div>
      </Container>
    </footer>
  );
}
