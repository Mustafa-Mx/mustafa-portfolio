"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { site } from "@/lib/site"
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
      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pb-24 pt-16">
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
          I&apos;m {site.name.split(" ")[0]} — a full stack engineer, four years across analytics
          platforms, e-commerce, real-time tools and high-stakes SaaS. I take systems from first
          schema to production traffic — and I&apos;ve taken one over mid-crisis: stepped in after a
          security incident, steered the team through a live DDoS, and then led that platform to
          its record — <strong className="text-[var(--color-ink)]">past $1M in revenue</strong>.
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
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-3 text-[14px] text-[var(--color-ink-faint)] transition-colors hover:text-[var(--color-tracer)]"
          >
            GitHub ↗
          </a>
        </motion.div>
      </div>

      <div className="annotation absolute bottom-6 left-1/2 -translate-x-1/2">scroll to survey</div>
    </section>
  )
}
