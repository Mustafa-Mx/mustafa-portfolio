import Link from "next/link"
import { ArrowUpRight, FileDown } from "lucide-react"
import { metrics, site } from "@/lib/site"
import { Counter, Reveal, RevealLine } from "./motion"

/* ---------------------------------------------------------------- metrics */

export function Metrics() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-5">
      <div className="grid grid-cols-2 gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-4">
        {metrics.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 0.08} className="bg-[var(--color-panel)] px-6 py-7">
            <p className="text-[38px] font-extrabold leading-none text-[var(--color-signal)]">
              <Counter value={metric.value} prefix={"prefix" in metric ? metric.prefix : ""} suffix={metric.suffix} />
            </p>
            <p className="mt-2.5 text-[13.5px] leading-snug text-[var(--color-ink-soft)]">{metric.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- stack */

const stack = [
  "TypeScript", "React", "Next.js", "Node.js", "NestJS", "Rails", "Django", "PostgreSQL",
  "Prisma", "Redis", "BigQuery", "AWS VPC", "ECS Fargate", "S3 + KMS", "CloudFront", "WAF",
  "Cloudflare", "Docker", "CI/CD", "Socket.io", "Tailwind",
]

export function StackMarquee() {
  const row = [...stack, ...stack]
  return (
    <div className="marquee overflow-hidden border-y border-[var(--color-line)] py-4">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="font-mono text-[13px] text-[var(--color-ink-faint)]">{item}</span>
            <span className="text-[var(--color-line-strong)]">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------- range */

const range = [
  {
    title: "Product engineering",
    body: "Interfaces people actually finish: React/Next frontends, real-time collaboration, dashboards, browser extensions and SDKs light enough to drop on anyone's site.",
  },
  {
    title: "Platforms & APIs",
    body: "Node, NestJS, Rails and Django services over PostgreSQL — payments, multi-tenancy, webhooks, background jobs, and schemas designed for the audit that follows.",
  },
  {
    title: "Cloud & infrastructure",
    body: "AWS estates built from nothing: private networking, containers, CDNs, CI/CD — infrastructure a small team can actually operate.",
  },
  {
    title: "Security & incident response",
    body: "Hardening, encryption at rest, least-privilege access, DDoS mitigation — and calm command of the room when it's happening for real.",
  },
  {
    title: "Data & analytics",
    body: "Event pipelines into warehouses, session replay, and the retrieval work that makes a dashboard feel instant instead of eventual.",
  },
  {
    title: "AI in production",
    body: "LLM features that survive contact with users: OpenAI-powered tooling, on-device vision guidance, and automation that publishes real work.",
  },
]

export function Range() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-5">
      <Reveal>
        <p className="annotation annotation-tick">section 03 — scope of works</p>
        <h2 className="mt-3 font-extrabold tracking-[-0.02em]" style={{ fontSize: "var(--text-h2)" }}>
          What the work covers
        </h2>
        <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
          Visa platforms are the recent headline, but the range behind them is wider: analytics,
          e-commerce, real-time tools, industrial control, and the infrastructure under all of it.
        </p>
      </Reveal>
      <div className="mt-6">
        <RevealLine />
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {range.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.1}>
            <article className="plate plate-hover h-full p-6">
              <p className="font-mono text-[12px] text-[var(--color-signal)]">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-[17px] font-bold">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- thinking */

const principles = [
  {
    title: "The server is the boundary",
    body: "Hiding a button is a courtesy, never a protection. Validation, authorization and money logic live server-side, and every client is treated as hostile until proven otherwise — a habit that has paid for itself more than once.",
  },
  {
    title: "Boring where it counts",
    body: "Payments, credentials and personal data get the most proven, least clever tools available. I save the novelty budget for the product experience, where taking a risk actually buys something.",
  },
  {
    title: "Design for the incident",
    body: "Audit trails, idempotent jobs and honest logging go in before launch, not after the first 3am page. When a real Layer-7 DDoS arrived, the difference between panic and procedure was the preparation.",
  },
  {
    title: "Own it end to end",
    body: "Schema to API to interface to infrastructure to the CI pipeline that ships it. Splitting those across heads is where systems quietly rot; holding the whole thread is where they get fast and coherent.",
  },
  {
    title: "Least privilege, always",
    body: "Short-lived credentials, scoped roles, encrypted-at-rest by default, and logs that redact before they record. Security is a set of defaults, not a sprint at the end.",
  },
  {
    title: "Ship, then measure",
    body: "A feature isn't done when it merges — it's done when the numbers say people use it and the error budget says it holds. I'd rather ship a sharp slice weekly than a blur quarterly.",
  },
]

export function Thinking() {
  return (
    <section id="thinking" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-5">
      <Reveal>
        <p className="annotation annotation-tick">section 04 — operating principles</p>
        <h2 className="mt-3 font-extrabold tracking-[-0.02em]" style={{ fontSize: "var(--text-h2)" }}>
          How I think about software
        </h2>
      </Reveal>
      <div className="mt-6">
        <RevealLine />
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, i) => (
          <Reveal key={principle.title} delay={(i % 3) * 0.1}>
            <article className="plate plate-hover h-full p-6">
              <p className="font-mono text-[12px] text-[var(--color-tracer)]">0{i + 1}</p>
              <h3 className="mt-3 text-[18px] font-bold">{principle.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-[var(--color-ink-soft)]">
                {principle.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- experience */

const experience = [
  {
    company: "Softaims",
    role: "Software Engineer",
    period: "Jan 2026 — Present",
    points: [
      "Took over UKVisaPortal during a live attack after a data breach, closed the whole class of weakness, and kept it up through a Layer-7 DDoS.",
      "Rebuilt its AWS architecture so traffic reaches the application only through CloudFront and the WAF, then led the three-engineer team as revenue passed $1M.",
      "Co-led WorldVisaHub: versioned form engine, a document pipeline with no long-lived cloud keys, and Terraform staging with keyless OIDC deploys.",
      "Building an industrial grain-aeration SCADA backend in NestJS over OPC UA.",
    ],
  },
  {
    company: "OptimaGeeks",
    role: "Associate Software Engineer",
    period: "Jun 2025 — Dec 2025",
    points: [
      "Led Userbird, an analytics and session-replay platform; caching and lazy loading made its dashboard 40% faster.",
      "Shipped a LinkedIn Sales Navigator to CRM extension, OpenAI-powered CRM tooling, WordPress automation, a Cloudflare Workers bot and a NestJS backend.",
    ],
  },
  {
    company: "Webmended (UAE, remote)",
    role: "Associate Software Developer",
    period: "Mar 2023 — Feb 2025",
    points: [
      "Led mDrive Asia end to end: storefront, checkout, admin and fulfilment on Next.js, Django and PostgreSQL.",
      "Built a Django quality-management system and delivered client projects in PHP.",
    ],
  },
  {
    company: "easybew (Canada, remote)",
    role: "LAMP Stack Developer",
    period: "Feb 2022 — Mar 2023",
    points: ["PHP and MySQL web development for a Canadian company, working remotely."],
  },
]

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-5">
      <Reveal>
        <p className="annotation annotation-tick">section 06 — service record</p>
        <h2 className="mt-3 font-extrabold tracking-[-0.02em]" style={{ fontSize: "var(--text-h2)" }}>
          Experience
        </h2>
      </Reveal>
      <div className="mt-6">
        <RevealLine />
      </div>
      <div className="mt-10 space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.1}>
            <article className="plate grid gap-5 p-7 md:grid-cols-[220px_1fr]">
              <div>
                <h3 className="text-[19px] font-bold">{job.company}</h3>
                <p className="mt-1 text-[13.5px] text-[var(--color-signal)]">{job.role}</p>
                <p className="mt-1 font-mono text-[12px] text-[var(--color-ink-faint)]">{job.period}</p>
              </div>
              <ul className="space-y-2.5">
                {job.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-[var(--color-ink-soft)]">
                    <span className="mt-[9px] h-px w-4 shrink-0 bg-[var(--color-tracer)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- footer CTA */

export function FooterCta() {
  return (
    <section className="blueprint-grid border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-5">
        <Reveal>
          <p className="annotation annotation-tick justify-center">final plate — let&apos;s build</p>
          <h2 className="mx-auto mt-4 max-w-[22ch] font-extrabold tracking-[-0.02em]" style={{ fontSize: "var(--text-h2)" }}>
            Have a system that needs building — or saving?
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[15.5px] leading-relaxed text-[var(--color-ink-soft)]">
            Short-term contracts or a full-time remote role: full-stack platform work, cloud
            architecture, and the security hardening most teams postpone. The first call is free.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/book" className="btn-signal inline-flex items-center gap-2 px-7 py-3.5 text-[15px]">
              Book a call <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 text-[15px]">
              Send a message
            </Link>
          </div>
        </Reveal>
      </div>
      <footer className="border-t border-[var(--color-line)] py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 sm:px-5">
          <p className="annotation">
            © {new Date().getFullYear()} {site.name} — drawn in {site.location}
          </p>
          <div className="flex flex-wrap gap-5 font-mono text-[12px]">
            <a href={site.resumeUrl} download className="inline-flex items-center gap-1 text-[var(--color-ink-faint)] transition-colors hover:text-[var(--color-tracer)]"><FileDown className="h-3 w-3" /> Resume</a>
            <a href={site.github} target="_blank" rel="noreferrer" className="text-[var(--color-ink-faint)] transition-colors hover:text-[var(--color-tracer)]">GitHub</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-[var(--color-ink-faint)] transition-colors hover:text-[var(--color-tracer)]">LinkedIn</a>
            <a href={`mailto:${site.email}`} className="text-[var(--color-ink-faint)] transition-colors hover:text-[var(--color-tracer)]">{site.email}</a>
          </div>
        </div>
      </footer>
    </section>
  )
}
