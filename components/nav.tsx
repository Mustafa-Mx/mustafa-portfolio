"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { site } from "@/lib/site"
import { ScrollProgress } from "./motion"

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#experience", label: "Experience", hideOnMobile: true },
  { href: site.resumeUrl, label: "Resume", external: true, hideOnMobile: true },
  { href: "/contact", label: "Contact" },
]

export function Nav() {
  const pathname = usePathname()
  return (
    <>
      <ScrollProgress />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--color-line)] bg-[rgba(10,32,54,0.75)] backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center border border-[var(--color-line-strong)] font-mono text-[11px] font-semibold text-[var(--color-tracer)]">
              MM
            </span>
            <span className="annotation hidden whitespace-nowrap !text-[var(--color-ink-soft)] sm:inline">
              {site.name.split(" ")[0]}
              <span className="hidden sm:inline"> · {site.timezone}</span>
            </span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            {links.map((link) => {
              const className = `px-1.5 py-1.5 text-[13px] transition-colors sm:px-3 sm:text-[13.5px] ${
                link.hideOnMobile ? "hidden md:inline-block" : ""
              } ${
                pathname === link.href
                  ? "text-[var(--color-tracer)]"
                  : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
              }`
              return link.external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={className}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={className}>
                  {link.label}
                </Link>
              )
            })}
            <Link href="/book" className="btn-signal ml-1 whitespace-nowrap px-3 py-1.5 text-[13px] sm:ml-2 sm:px-3.5 sm:text-[13.5px]">
              Book a call
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}
