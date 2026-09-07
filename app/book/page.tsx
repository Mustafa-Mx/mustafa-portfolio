"use client"

import Link from "next/link"
import Script from "next/script"
import { CalendarClock, Clock, Globe2, Video } from "lucide-react"
import { Nav } from "@/components/nav"
import { Reveal } from "@/components/motion"
import { site } from "@/lib/site"

// Booking: a Cal.com inline embed when `site.calLink` is configured (free
// account at cal.com → copy your event link into lib/site.ts), and an honest
// fallback that routes people to email/WhatsApp until then. Either way the
// page explains what a call with me looks like, which is half the booking.

const expectations = [
  { icon: Clock, title: "30 minutes, no ceremony", body: "Enough to understand your system, your constraints, and whether I'm the right person for it." },
  { icon: Video, title: "Come as you are", body: "A napkin sketch, a repo, or just a problem statement — all fine. I'll ask the questions." },
  { icon: Globe2, title: "Timezone-friendly", body: `I'm in ${site.timezone} and regularly work with UK, EU, Gulf and US teams — evenings my side cover most of the world.` },
]

export default function BookPage() {
  const hasCal = site.calLink.length > 0
  return (
    <>
      <Nav />
      <main className="blueprint-grid min-h-screen pt-14">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Reveal>
            <p className="annotation annotation-tick">plate B-01 — schedule of works</p>
            <h1 className="mt-3 font-extrabold tracking-[-0.02em]" style={{ fontSize: "var(--text-h2)" }}>
              Book a call
            </h1>
            <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              Pick a slot and it lands straight in both our calendars with a video link — no
              back-and-forth. If nothing fits your timezone, message me and we&apos;ll find one.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {expectations.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="plate h-full p-5">
                  <item.icon className="h-5 w-5 text-[var(--color-signal)]" />
                  <p className="mt-3 text-[15px] font-bold">{item.title}</p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--color-ink-soft)]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-8">
            {hasCal ? (
              <div className="plate overflow-hidden">
                {/* Cal.com inline embed — styled to sit on the blueprint. */}
                <div id="cal-inline" style={{ width: "100%", height: "680px", overflow: "auto" }} />
                <Script id="cal-embed" strategy="afterInteractive">
                  {`
                    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                    Cal("init", { origin: "https://cal.com" });
                    Cal("inline", { elementOrSelector: "#cal-inline", calLink: "${site.calLink}", config: { theme: "dark" } });
                  `}
                </Script>
              </div>
            ) : (
              <div className="plate p-8">
                <div className="flex items-start gap-4">
                  <CalendarClock className="mt-1 h-6 w-6 shrink-0 text-[var(--color-signal)]" />
                  <div>
                    <p className="text-[17px] font-bold">Direct scheduling is warming up</p>
                    <p className="mt-2 max-w-[60ch] text-[14.5px] leading-relaxed text-[var(--color-ink-soft)]">
                      The calendar embed goes live shortly. Until then the old way works perfectly:
                      tell me two or three windows that suit you and I&apos;ll confirm one within a
                      few hours with a meeting link.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={`mailto:${site.email}?subject=${encodeURIComponent("Call request")}&body=${encodeURIComponent("Hi Mustafa — I'd like to book a call.\n\nTimes that work for me (with timezone):\n1.\n2.\n3.\n\nWhat it's about:\n")}`}
                        className="btn-signal px-6 py-3 text-[15px]"
                      >
                        Email time slots
                      </a>
                      <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Mustafa — I'd like to book a call.")}`} target="_blank" rel="noreferrer" className="btn-ghost px-6 py-3 text-[15px]">
                        WhatsApp me
                      </a>
                      <Link href="/contact" className="px-4 py-3 text-[14px] text-[var(--color-ink-faint)] transition-colors hover:text-[var(--color-tracer)]">
                        or use the form →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </main>
    </>
  )
}
