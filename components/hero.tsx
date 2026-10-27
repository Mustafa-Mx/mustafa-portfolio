"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react"
import { site } from "@/lib/site"
import { availability } from "@/lib/content"
import { BlueprintCanvas } from "./blueprint-canvas"

const line = {
  hidden: { opacity: 0, y: 44 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="blueprint-grid relative overflow-hidden pt-14">
      <BlueprintCanvas />
      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-4 pb-24 pt-16 sm:px-5">
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="mb-5 inline-flex w-fit items-center gap-2.5 border border-[var(--color-line-strong)] bg-[rgba(10,32,54,0.6)] px-3 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping bg-[var(--color-ok)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 bg-[var(--color-ok)]" />
          </span>
          <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-[var(--color-ink)]">
            {availability.label}
          </span>
          <span className="hidden text-[12.5px] text-[var(--color-ink-soft)] sm:inline">
            · {availability.detail}
          </span>
        </motion.div>
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="annotation annotation-tick mb-6"
        >
          drawing no. 001 — {site.location} — {site.role}
          <span className="cursor-blink text-[var(--color-signal)]">▍</span>
        </motion.p>

        <h1
          className="font-black leading-[0.98] tracking-[-0.02em]"
          style={{ fontSize: "var(--text-hero)" }}
        >
          <motion.span custom={0} variants={line} initial={reduce ? false : "hidden"} animate="show" className="block">
            I design the system,
          </motion.span>
          <motion.span custom={1} variants={line} initial={reduce ? false : "hidden"} animate="show" className="block">
            build the product,
          </motion.span>
          <motion.span custom={2} variants={line} initial={reduce ? false : "hidden"} animate="show" className="block text-[var(--color-tracer)]">
            and keep it standing.
          </motion.span>
        </h1>

        <motion.p
          custom={3}
          variants={line}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="mt-8 max-w-[58ch] text-[17px] leading-relaxed text-[var(--color-ink-soft)]"
        >
          I&apos;m {site.name.split(" ")[0]}, a product engineer: TypeScript and Node, React and
          Next.js, PostgreSQL, and AWS architecture I design and run myself. I take systems from first
          schema to production traffic, and I have taken one over mid-crisis: contained the incident,
          closed the way in, rebuilt the AWS estate, and led the team as that platform passed{" "}
          <strong className="text-[var(--color-ink)]">$1M in revenue</strong>. Open to short-term
          contracts and full-time remote roles.
        </motion.p>

        <motion.div
          custom={4}
          variants={line}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link href="/book" className="btn-signal inline-flex items-center gap-2 px-6 py-3 text-[15px]">
            Book a call <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/#work" className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-[15px]">
            See the work <ArrowDown className="h-4 w-4" />
          </Link>
          <a
            href={site.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-3 py-3 text-[14px] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-tracer)]"
          >
            <FileDown className="h-4 w-4" /> Download resume (PDF)
          </a>
        </motion.div>
      </div>

      <div className="annotation absolute bottom-6 left-1/2 -translate-x-1/2">scroll to survey</div>
    </section>
  )
}
