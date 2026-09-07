# mustafa-portfolio

Personal portfolio for **Mustafa Mehboob** — Full Stack Software Engineer.

A single committed visual world: an engineer's blueprint. Dark drawing-blue ground, fine grid,
mono annotations, self-drawing tracer lines on canvas, one signal colour. Built with Next.js
(App Router), TypeScript, Tailwind v4 and Framer Motion.

## Pages

| Route | What |
|---|---|
| `/` | Hero, metrics, selected work, operating principles, experience |
| `/contact` | Contact form (API-backed with graceful mailto fallback), direct lines |
| `/book` | Call booking — Cal.com inline embed, or an email/WhatsApp fallback until configured |

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Make it yours

Everything personal lives in **`lib/site.ts`** — name, email, phone, socials, metrics.
Components never hardcode identity.

1. **Booking**: create a free [cal.com](https://cal.com) account, make a 30-min event,
   and set `calLink` in `lib/site.ts` (e.g. `"mustafa-mehboob/intro-call"`). Until then
   the book page shows a polished email/WhatsApp fallback.
2. **Contact form delivery**: create a free [resend.com](https://resend.com) API key and set
   `RESEND_API_KEY` (and optionally `CONTACT_FROM`) in the deployment env. Without it the
   form opens the visitor's mail client prefilled — it works either way.
3. **Resume**: drop your PDF at `public/Mustafa-Mehboob-Resume.pdf`.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero config. Set
`RESEND_API_KEY` in the Vercel project env when you have it.

## Accessibility & motion

Every animation — the canvas tracers, staggered reveals, counters, marquee — collapses to a
fully static page under `prefers-reduced-motion`.
