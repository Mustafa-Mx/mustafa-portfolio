import { ArrowUpRight, BookOpen, Briefcase, Code2, FileDown, GitBranch } from "lucide-react"
import { codeSample, publications } from "@/lib/content"
import { site } from "@/lib/site"
import { Reveal, RevealLine } from "./motion"

export function Proof() {
  return (
    <section id="proof" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-5">
      <Reveal>
        <p className="annotation annotation-tick">section 05 — on the record</p>
        <h2 className="mt-3 font-extrabold tracking-[-0.02em]" style={{ fontSize: "var(--text-h2)" }}>
          Things you can verify
        </h2>
      </Reveal>
      <div className="mt-6">
        <RevealLine />
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="plate h-full p-6 md:p-7">
            <p className="annotation flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5 text-[var(--color-signal)]" /> publications
            </p>
            <ul className="mt-4 space-y-5">
              {publications.map((paper) => (
                <li key={paper.title}>
                  <p className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-[var(--color-signal)]">{paper.role}</p>
                  <p className="mt-1 text-[15px] font-semibold leading-snug">{paper.title}</p>
                  <p className="mt-1 text-[13px] text-[var(--color-ink-faint)]">{paper.venue}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.08}>
            <a href={codeSample.href} target="_blank" rel="noreferrer" className="plate plate-hover block p-6 md:p-7">
              <p className="annotation flex items-center gap-2">
                <Code2 className="h-3.5 w-3.5 text-[var(--color-signal)]" /> code you can read
              </p>
              <p className="mt-3 flex items-center gap-2 text-[16px] font-bold">
                {codeSample.title} <ArrowUpRight className="h-4 w-4 text-[var(--color-ink-faint)]" />
              </p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--color-ink-soft)]">{codeSample.body}</p>
            </a>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="grid gap-3 sm:grid-cols-3">
              <a href={site.resumeUrl} download className="plate plate-hover flex items-center gap-3 p-4">
                <FileDown className="h-5 w-5 shrink-0 text-[var(--color-signal)]" />
                <span>
                  <span className="block text-[14px] font-bold">Resume</span>
                  <span className="block text-[12px] text-[var(--color-ink-faint)]">PDF, one page</span>
                </span>
              </a>
              <a href={site.github} target="_blank" rel="noreferrer" className="plate plate-hover flex items-center gap-3 p-4">
                <GitBranch className="h-5 w-5 shrink-0 text-[var(--color-signal)]" />
                <span>
                  <span className="block text-[14px] font-bold">GitHub</span>
                  <span className="block text-[12px] text-[var(--color-ink-faint)]">mustafa-mx</span>
                </span>
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="plate plate-hover flex items-center gap-3 p-4">
                <Briefcase className="h-5 w-5 shrink-0 text-[var(--color-signal)]" />
                <span>
                  <span className="block text-[14px] font-bold">LinkedIn</span>
                  <span className="block text-[12px] text-[var(--color-ink-faint)]">profile</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
