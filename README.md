This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Updating the CV

The Download CV button on the About page links to `public/docs/Fahim-Forhad-Resume.pdf`. To publish an updated resume, replace that file:

```bash
cp /path/to/new-resume.pdf portfolio-web/public/docs/Fahim_Forhad_Resume.pdf
```

The filename must stay the same — the button href is hardcoded to `/docs/Fahim_Forhad_Resume.pdf`.

## Contact Form Setup

The contact form sends email via [Resend](https://resend.com). To enable it:

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Sign up at [resend.com](https://resend.com), create an API key, and set:
   - `RESEND_API_KEY` — your Resend API key (starts with `re_`)
   - `CONTACT_TO_EMAIL` — the email address that should receive contact submissions (e.g. `you@example.com`)

3. Without these variables, the `/api/contact` endpoint returns HTTP 501 and the form will show an error. No email is sent.

## Docker

Host the application locally using Docker.

### Prerequisites
- Docker Engine
- Docker Compose

### Running the App

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Start the services:
   ```bash
   docker compose up -d --build
   ```

3. Initialize the database (first time only):
   ```bash
   # Run from host machine (targeting port 5433)
   DATABASE_URL="postgresql://user:pass@localhost:5433/db" npx prisma migrate deploy
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).
