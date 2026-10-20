import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { engagements, firstWeek, howItRuns } from "@/lib/content"
import { Reveal, RevealLine } from "./motion"

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-5">
      <Reveal>
        <p className="annotation annotation-tick">section 02 — ways to work with me</p>
        <h2 className="mt-3 font-extrabold tracking-[-0.02em]" style={{ fontSize: "var(--text-h2)" }}>
          Three shapes of engagement
        </h2>
        <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
          For teams that need a specific thing done, not a hire. Hourly or fixed price, whichever suits the
          work. Full-time remote roles are welcome too.
        </p>
      </Reveal>
      <div className="mt-6">
        <RevealLine />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {engagements.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <article className="plate plate-hover flex h-full flex-col p-6">
              <p className="font-mono text-[12px] text-[var(--color-signal)]">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-[18px] font-bold">{item.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-[var(--color-ink-soft)]">{item.body}</p>
              <ul className="mt-5 space-y-1.5 border-t border-[var(--color-line)] pt-4">
                {item.examples.map((example) => (
                  <li key={example} className="flex items-start gap-2 text-[13px] text-[var(--color-ink)]">
                    <span className="mt-[7px] h-1 w-1 shrink-0 bg-[var(--color-tracer)]" />
                    {example}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_340px]">
        <Reveal>
          <div className="plate p-6 md:p-7">
            <p className="annotation">how it runs</p>
            <ol className="mt-4 grid gap-5 sm:grid-cols-2">
              {howItRuns.map((step) => (
                <li key={step.step} className="flex gap-4">
                  <span className="font-mono text-[13px] text-[var(--color-signal)]">{step.step}</span>
                  <div>
                    <p className="text-[15px] font-bold">{step.title}</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-[var(--color-ink-soft)]">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="plate flex h-full flex-col p-6 md:p-7">
            <p className="annotation">your first week</p>
            <ul className="mt-4 space-y-3">
              {firstWeek.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
                  <span className="mt-[9px] h-px w-4 shrink-0 bg-[var(--color-tracer)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <Link href="/book" className="btn-signal inline-flex items-center gap-2 px-5 py-2.5 text-[14px]">
                Book a scoping call <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost inline-flex items-center px-5 py-2.5 text-[14px]">
                Describe the work
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
