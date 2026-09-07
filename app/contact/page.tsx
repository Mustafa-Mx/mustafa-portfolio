"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2, Copy, Mail, MessageCircle, Send } from "lucide-react"
import { Nav } from "@/components/nav"
import { Reveal } from "@/components/motion"
import { site } from "@/lib/site"

type Status = "idle" | "sending" | "sent" | "error"

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", topic: "Project inquiry", message: "", company: "" })

  const set = (key: keyof typeof form) => (event: { target: { value: string } }) =>
    setForm((current) => ({ ...current, [key]: event.target.value }))

  async function submit(event: FormEvent) {
    event.preventDefault()
    setStatus("sending")
    setError(null)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const body = (await response.json()) as { ok?: boolean; fallback?: boolean; error?: string }
      if (!response.ok) throw new Error(body.error ?? "Something went wrong.")
      if (body.fallback) {
        // No mail key configured server-side: hand the message to their own
        // mail client instead of silently dropping it.
        const subject = encodeURIComponent(`${form.topic} — ${form.name}`)
        const bodyText = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
        window.location.href = `mailto:${site.email}?subject=${subject}&body=${bodyText}`
      }
      setStatus("sent")
    } catch (submitError) {
      setStatus("error")
      setError(submitError instanceof Error ? submitError.message : "Something went wrong.")
    }
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(site.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <>
      <Nav />
      <main className="blueprint-grid min-h-screen pt-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_380px]">
          <Reveal>
            <p className="annotation annotation-tick">plate C-01 — correspondence</p>
            <h1 className="mt-3 font-extrabold tracking-[-0.02em]" style={{ fontSize: "var(--text-h2)" }}>
              Tell me what you&apos;re building
            </h1>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              A sentence or two is enough — what it is, where it hurts, and when you need it. I read
              everything myself and reply within a day, usually much faster ({site.timezone}).
            </p>

            {status === "sent" ? (
              <div className="plate mt-8 flex items-start gap-3 p-6">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--color-ok)]" />
                <div>
                  <p className="font-bold">Message on its way.</p>
                  <p className="mt-1 text-[14px] text-[var(--color-ink-soft)]">
                    I&apos;ll come back to you at {form.email || "your email"} within a day. If it&apos;s
                    urgent, WhatsApp reaches me fastest.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="annotation mb-1.5 block">Name</label>
                    <input id="name" required value={form.name} onChange={set("name")} placeholder="Ada Lovelace" className="field w-full px-3.5 py-2.5 text-[15px]" />
                  </div>
                  <div>
                    <label htmlFor="email" className="annotation mb-1.5 block">Email</label>
                    <input id="email" type="email" required value={form.email} onChange={set("email")} placeholder="you@company.com" className="field w-full px-3.5 py-2.5 text-[15px]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="topic" className="annotation mb-1.5 block">Topic</label>
                  <select id="topic" value={form.topic} onChange={set("topic")} className="field w-full px-3.5 py-2.5 text-[15px]">
                    <option>Project inquiry</option>
                    <option>Full-time role</option>
                    <option>Consulting / architecture review</option>
                    <option>Security / incident help</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="annotation mb-1.5 block">Message</label>
                  <textarea id="message" required rows={6} value={form.message} onChange={set("message")} placeholder="We're building… and we need…" className="field w-full resize-y px-3.5 py-2.5 text-[15px]" />
                </div>
                {/* Honeypot: invisible to people, irresistible to bots. */}
                <input type="text" value={form.company} onChange={set("company")} tabIndex={-1} autoComplete="off" aria-hidden className="hidden" placeholder="Company" />

                {error && (
                  <p role="alert" className="border border-[rgba(255,120,100,0.4)] bg-[rgba(255,120,100,0.1)] px-3.5 py-2.5 text-[14px] text-[#ffb0a0]">
                    {error}
                  </p>
                )}

                <button type="submit" disabled={status === "sending"} className="btn-signal inline-flex items-center gap-2 px-7 py-3 text-[15px] disabled:opacity-60">
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4 lg:pt-24">
              <div className="plate p-5">
                <p className="annotation">direct line</p>
                <button onClick={copyEmail} className="mt-2 flex w-full items-center justify-between gap-2 text-left text-[15px] font-semibold transition-colors hover:text-[var(--color-tracer)]">
                  <span className="flex items-center gap-2 break-all"><Mail className="h-4 w-4 shrink-0 text-[var(--color-signal)]" />{site.email}</span>
                  {copied ? <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-ok)]" /> : <Copy className="h-4 w-4 shrink-0 text-[var(--color-ink-faint)]" />}
                </button>
                <p className="mt-1 text-[12.5px] text-[var(--color-ink-faint)]">{copied ? "Copied." : "Click to copy"}</p>
              </div>

              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="plate plate-hover block p-5">
                <p className="annotation">fastest response</p>
                <p className="mt-2 flex items-center gap-2 text-[15px] font-semibold">
                  <MessageCircle className="h-4 w-4 text-[var(--color-ok)]" /> WhatsApp <ArrowUpRight className="h-3.5 w-3.5 text-[var(--color-ink-faint)]" />
                </p>
                <p className="mt-1 text-[12.5px] text-[var(--color-ink-faint)]">{site.phone}</p>
              </a>

              <Link href="/book" className="plate plate-hover block p-5">
                <p className="annotation">prefer talking?</p>
                <p className="mt-2 text-[15px] font-semibold text-[var(--color-signal)]">Book a call directly →</p>
                <p className="mt-1 text-[12.5px] text-[var(--color-ink-faint)]">Pick a slot that suits your timezone.</p>
              </Link>

              <div className="plate p-5">
                <p className="annotation">elsewhere</p>
                <div className="mt-2 space-y-1.5 text-[14px]">
                  <a href={site.linkedin} target="_blank" rel="noreferrer" className="block transition-colors hover:text-[var(--color-tracer)]">LinkedIn ↗</a>
                  <a href={site.github} target="_blank" rel="noreferrer" className="block transition-colors hover:text-[var(--color-tracer)]">GitHub ↗</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  )
}
