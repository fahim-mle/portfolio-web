'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useContactForm } from '@/lib/use-contact-form';

export default function Contact() {
  const { status, error, submit } = useContactForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Container className="py-24 max-w-md mx-auto">
      <div className="flex flex-col gap-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-accent">Get in Touch</h1>
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
            setName('');
            setEmail('');
            setMessage('');
          }}
        >
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="min-h-[150px]"
          />

          {status === 'sent' && (
            <p className="text-sm text-emerald-600">Message sent. I&apos;ll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <Button
            className="w-full"
            size="lg"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </Button>
        </form>
      </div>
    </Container>
  );
}
