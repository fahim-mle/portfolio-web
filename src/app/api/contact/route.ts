import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message, website } = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
      website?: string; // honeypot
    };

    // Basic anti-spam honeypot: real users never fill this.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!resendKey || !to) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Contact is not configured yet. Set RESEND_API_KEY and CONTACT_TO_EMAIL in the environment.',
        },
        { status: 501 }
      );
    }

    const subject = `Portfolio contact — ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'mindinroot <onboarding@resend.dev>',
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!resp.ok) {
      const details = await resp.text().catch(() => '');
      return NextResponse.json(
        { ok: false, error: 'Failed to send', details },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
