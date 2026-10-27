// All page copy lives here so components stay identity-free (see README).
// Facts only: everything below is on the resume or verified in production.

export const availability = {
  label: "Available now",
  detail: "short-term contracts and full-time remote roles",
  response: "Replies within a day",
}

export interface CaseStudy {
  slug: string
  name: string
  role: string
  year: string
  tagline: string
  live?: string
  image?: { src: string; alt: string }
  problem: string[]
  did: string[]
  result: string[]
  tech: string[]
  links?: { label: string; href: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ukvisaportal",
    name: "UKVisaPortal",
    role: "Took over mid-incident · Led the team",
    year: "2026",
    tagline: "UK visa application platform: client portal, admin operations suite, three payment providers.",
    live: "https://ukvisaportal.com",
    image: { src: "/work/ukvisaportal.png", alt: "UKVisaPortal public landing page" },
    problem: [
      "Inherited the platform in the middle of an attack; a breach had already happened.",
      "Revenue-critical, personal data in scope, no time for a rewrite.",
      "A Layer 7 DDoS was still coming in while the team looked for the entry route.",
    ],
    did: [
      "Contained the incident, found how the attackers got in, and closed that whole class of weakness.",
      "Rebuilt the AWS architecture: private VPC, CloudFront VPC Origins, private ALB, ECS Fargate, RDS, WAF, AES-256-GCM-encrypted documents behind signed URLs.",
      "Then led a three-engineer team on the product: admin queues and auto-assignment, Adyen, MamoPay and PayPal, JWT with four-role RBAC and authenticator-app MFA, GDPR and DSAR flows.",
    ],
    result: [
      "Stayed up through the DDoS: roughly 600M of 700M requests blocked at peak, no data lost.",
      "Platform passed $1M in revenue after recovery.",
      "Operable by a small team: CI/CD, audit logging, redacted logs, runbooks.",
    ],
    tech: ["TypeScript", "Node", "PostgreSQL", "Prisma", "Redis", "AWS", "Cloudflare", "Terraform"],
  },
  {
    slug: "worldvisahub",
    name: "WorldVisaHub",
    role: "Co-lead",
    year: "2026",
    tagline: "Multi-country visa platform where supervisors design each country's application form themselves.",
    live: "https://worldvisahub.com",
    image: { src: "/work/worldvisahub.png", alt: "WorldVisaHub public landing page" },
    problem: [
      "Every country needs a different form, and forms change while applications are in flight.",
      "Applicants upload identity documents from phones with bad lighting and worse framing.",
      "Document storage had to work with no long-lived cloud credentials anywhere.",
    ],
    did: [
      "Built a versioned drag-and-drop form engine: 24 field types, conditional logic, live preview, immutable published versions pinned to in-flight orders, in-form payment gating.",
      "Guided camera capture with on-device pose, lighting and blur checks (MediaPipe) before upload.",
      "Document pipeline on presigned S3 uploads over STS assumed roles, magic-byte validation, KMS encryption, PII-redacted logs; staging provisioned in Terraform with an OIDC deploy role and documented in an ADR.",
    ],
    result: [
      "Supervisors ship a new country without an engineer in the loop.",
      "Granular RBAC with per-user overrides and a full admin audit trail.",
      "Zero static cloud keys in the system.",
    ],
    tech: ["Rails 8", "Inertia", "React 19", "PostgreSQL", "Sidekiq", "AWS S3 + KMS", "Adyen", "Terraform"],
  },
  {
    slug: "scada",
    name: "Grain-aeration SCADA",
    role: "Backend and integration · In progress",
    year: "2026",
    tagline: "Industrial monitoring and control: a NestJS OPC UA service feeding a React HMI in real time.",
    problem: [
      "Hundreds of PLC tags per site, with subscriptions that silently die on reconnect.",
      "Operators need live values and safe writes, with permissions per control.",
      "Nothing in the stack had been proven against real PLC behaviour yet.",
    ],
    did: [
      "OPC UA monitor service with chunked subscriptions, reseeding after reconnect, batched publishing and a readability audit per tag family.",
      "Per-node write retry, Redis pub/sub fan-out, TimescaleDB history, React 19 HMI over SSE with permission-based RBAC.",
      "Verified against an 800-tag PLC simulator; the monitor service is public as a code sample.",
    ],
    result: [
      "Simulator-verified end to end; field PLC integration is the next step.",
      "The service and its design notes are readable on GitHub.",
    ],
    tech: ["NestJS", "OPC UA", "Redis", "TimescaleDB", "React 19", "SSE"],
    links: [{ label: "Read the code sample", href: "https://github.com/Mustafa-Mx/code-samples" }],
  },
  {
    slug: "userbird",
    name: "Userbird",
    role: "Lead engineer",
    year: "2025",
    tagline: "Product analytics and session replay, in the spirit of GA and PostHog.",
    problem: [
      "Needed an SDK light enough to drop on any site without slowing it down.",
      "Pageviews, events and full session recordings had to land in a warehouse, not a database that would fall over.",
      "The dashboard felt eventual instead of instant.",
    ],
    did: [
      "Injectable JavaScript SDK streaming pageviews, events and recordings into BigQuery.",
      "React and Vite dashboard on Cloudflare Pages with a rebuilt retrieval path, caching and lazy loading.",
    ],
    result: ["Dashboard 40% faster after the retrieval rewrite.", "Session replay running in production for customer sites."],
    tech: ["React", "Vite", "BigQuery", "Node", "TypeScript", "Cloudflare Pages"],
  },
  {
    slug: "mdrive",
    name: "mDrive Asia",
    role: "Lead engineer",
    year: "2023 to 2025",
    tagline: "E-commerce storefront and admin, from checkout to fulfilment.",
    live: "https://mdriveasia.com",
    image: { src: "/work/mdriveasia.png", alt: "mDrive Asia storefront" },
    problem: [
      "A full storefront and back office, built end to end by a small team.",
      "Apple GSX integration and custom payment APIs on top of standard checkout.",
    ],
    did: [
      "Next.js storefront with NextAuth, Django and PostgreSQL backend, admin for catalogue, orders and fulfilment.",
      "Custom payment API integrations and Apple GSX wiring.",
    ],
    result: ["Live and taking orders.", "Owned from first schema to production."],
    tech: ["Next.js", "NextAuth", "Django", "PostgreSQL"],
  },
  {
    slug: "mirai",
    name: "Mirai",
    role: "Builder",
    year: "2025",
    tagline: "ClickUp-style work management: boards, docs, real-time chat, voice notes, AI assistance.",
    problem: [
      "Workspace, team and organisation hierarchy with board-level permissions.",
      "Authorisation checks could not be allowed to show up in the latency budget of a live-sync app.",
    ],
    did: [
      "Express and Prisma backend, Socket.io live sync, board-level RBAC answered from Redis.",
      "AI assistance wired into docs and tasks.",
    ],
    result: ["Real-time collaboration with authorisation that stays out of the way."],
    tech: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Socket.io", "Redis"],
  },
]

export const alsoShipped = [
  "LinkedIn Sales Navigator to CRM Chrome extension",
  "WordPress publishing automation (PERN, cron)",
  "OpenAI-powered CRM tooling",
  "Chat bot on Cloudflare Workers",
  "NestJS commerce backend",
  "Django quality-management system",
  "YouTube live-stream recorder",
  "NextAuth with OAuth and Microsoft (Outlook) SSO, TOTP MFA",
]

export const engagements = [
  {
    title: "A defined task or feature",
    body: "The thing that has been sitting in the backlog: a feature, a migration, a refactor with tests. Fixed scope, fixed price, delivered with a pull request you can read.",
    examples: ["Backlog feature end to end", "Schema migration with zero downtime", "Test coverage for a risky module"],
  },
  {
    title: "An integration or AWS setup",
    body: "Payments, OAuth and SSO, webhooks, third-party APIs, or an AWS estate that needs doing properly: private networking, containers, CDN, CI/CD, infrastructure as code.",
    examples: ["Adyen, MamoPay, PayPal with idempotent webhooks", "NextAuth, Microsoft SSO, MFA", "ECS Fargate, RDS, CloudFront, WAF; Terraform with OIDC deploys"],
  },
  {
    title: "Part-time production ownership",
    body: "A few hours a week owning what is already live: incidents, performance, security hardening, the unglamorous essentials. Hourly, with a written log of what changed and why.",
    examples: ["Incident response and hardening", "Observability and runbooks", "Cost and performance passes"],
  },
]

export const howItRuns = [
  { step: "01", title: "Scoping call", body: "Thirty minutes. You describe the system and the problem; I ask the questions that decide whether I am the right person." },
  { step: "02", title: "Written scope", body: "What will be delivered, what will not, how it will be verified, and the price or the hours. Nothing starts before you have read it." },
  { step: "03", title: "Weekly increments", body: "Working software every week, in your repository, behind your CI. You see progress, not status reports." },
  { step: "04", title: "Handover", body: "Documentation, runbook, and a walkthrough so your team can own it after I am gone." },
]

export const firstWeek = [
  "Read the codebase and the infrastructure before touching either.",
  "Fix or document the first real problem I find, so you can judge the work early.",
  "Agree the plan in writing, then ship the first increment.",
]

export const publications = [
  {
    role: "First author",
    title: "AI-Assisted Automated Software Testing and Vulnerability Detection Using Large Language Models",
    venue: "Spectrum of Engineering Sciences 4(3), 2026",
  },
  {
    role: "Co-author",
    title: "Transfer Learning Optimization for Low-Resource Natural Language Processing Using Transformer Architectures",
    venue: "Research Consortium Archive 4(2), 2026",
  },
]

export const codeSample = {
  href: "https://github.com/Mustafa-Mx/code-samples",
  title: "OPC UA monitor service",
  body: "NestJS service with chunked subscriptions, reseed after reconnect and batched publishing, with a README on the design.",
}
