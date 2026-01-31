"use client";

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import { useContactForm } from '@/lib/use-contact-form';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { status, error, submit } = useContactForm();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useGSAP(() => {
      const el = containerRef.current;
      if (!el) return;

      gsap.fromTo(el,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, { scope: containerRef });

  return (
    <section id="contact" className="flex items-center min-h-[50vh] relative z-10 py-12 md:py-24" ref={containerRef}>
      <Container className="py-12 md:py-24 max-w-md mx-auto">
        <div className="flex flex-col gap-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-[#D4AF37]">Get in Touch</h1>
            <p className="text-muted-foreground">
              I&apos;m currently looking for new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          <form
            className="w-full space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              await submit({ name, email, message });
            }}
          >
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-[#111] border-[#333]"
            />
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#111] border-[#333]"
            />
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[150px] bg-[#111] border-[#333]"
            />

            {status === 'sent' && (
              <p className="text-sm text-emerald-400">Message sent. I’ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">{error}</p>
            )}

            <Button
              className="w-full bg-[#D4AF37] text-black hover:bg-[#b5952f]"
              size="lg"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
