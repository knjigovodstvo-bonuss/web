# Bonuss Website (Next.js)

A small, fast corporate site for an accounting office.

## Tech
- Next.js 15 (App Router)
- Tailwind CSS
- React Hook Form + Zod (contact form)

## Getting started
```bash
pnpm i    # or npm i / yarn
pnpm dev  # http://localhost:3000
```

## Deployment
- Vercel is recommended. Set the project root to this folder.

## Contact form
The API route logs submissions on the server. Connect an email provider (Resend/SMTP) in `app/api/contact/route.ts`.
