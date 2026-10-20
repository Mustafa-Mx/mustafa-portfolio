import Image from "next/image"
import { ArrowUpRight, Code2 } from "lucide-react"
import { alsoShipped, caseStudies, type CaseStudy } from "@/lib/content"
import { Reveal, RevealLine } from "./motion"

function Column({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="annotation">{label}</p>
      <ul className="mt-2 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-[var(--color-ink-soft)]">
            <span className="mt-[8px] h-1 w-1 shrink-0 bg-[var(--color-tracer)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const featured = index === 0
  return (
    <Reveal delay={0.05}>
      <article className="plate plate-hover overflow-hidden">
        {study.image && (
          <a
            href={study.live}
            target="_blank"
            rel="noreferrer"
            className="group relative block border-b border-[var(--color-line)]"
            aria-label={`Open ${study.name} (live site)`}
          >
            <div className="relative aspect-[2/1] w-full overflow-hidden bg-[var(--color-ground)]">
              <Image
                src={study.image.src}
                alt={study.image.alt}
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                priority={featured}
                className="object-cover object-top opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,32,54,0.55)] to-transparent" />
            </div>
            <span className="annotation absolute bottom-3 left-4 !text-[var(--color-ink)]">
              live · {study.live?.replace("https://", "")}
            </span>
          </a>
        )}

        <div className="p-6 md:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-[24px] font-extrabold tracking-[-0.01em]">{study.name}</h3>
            <span className="font-mono text-[12px] text-[var(--color-ink-faint)]">{study.year}</span>
          </div>
          <p className="annotation mt-1 !normal-case !tracking-normal !text-[var(--color-signal)]">{study.role}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]">{study.tagline}</p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Column label="problem" items={study.problem} />
            <Column label="what I did" items={study.did} />
            <Column label="result" items={study.result} />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-line)] pt-5">
            <div className="flex flex-wrap gap-1.5">
              {study.tech.map((tech) => (
                <span key={tech} className="border border-[var(--color-line)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-ink-faint)]">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-[13.5px]">
              {study.live && (
                <a href={study.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-[var(--color-tracer)] hover:underline">
                  Visit live site <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {study.links?.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-[var(--color-tracer)] hover:underline">
                  <Code2 className="h-3.5 w-3.5" /> {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-5">
      <Reveal>
        <p className="annotation annotation-tick">section 01 — selected work</p>
        <h2 className="mt-3 font-extrabold tracking-[-0.02em]" style={{ fontSize: "var(--text-h2)" }}>
          Work you can go and look at
        </h2>
        <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
          Each one as problem, what I did, and what came out of it. Three are live products you can open;
          one is readable code.
        </p>
      </Reveal>
      <div className="mt-6">
        <RevealLine />
      </div>

      <div className="mt-10 space-y-8">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.slug} study={study} index={i} />
        ))}
      </div>

      <Reveal className="mt-10">
        <p className="annotation mb-3">also shipped to production</p>
        <div className="flex flex-wrap gap-2">
          {alsoShipped.map((item) => (
            <span key={item} className="border border-[var(--color-line)] px-3 py-1.5 text-[12.5px] text-[var(--color-ink-soft)]">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
