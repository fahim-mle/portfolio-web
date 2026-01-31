'use client';

import { useState } from 'react';

type ContactOk = { ok: true };
type ContactErr = { ok: false; error?: string };

type ContactResponse = ContactOk | ContactErr;

export function useContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function submit(payload: { name: string; email: string; message: string }) {
    setStatus('sending');
    setError(null);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, website: '' }),
    });

    const data = (await res.json().catch(() => null)) as ContactResponse | null;

    if (!res.ok || !data || data.ok !== true) {
      setStatus('error');
      setError((data && 'error' in data && data.error) ? data.error : 'Failed to send');
      return;
    }

    setStatus('sent');
  }

  return { status, error, submit, setStatus };
}
