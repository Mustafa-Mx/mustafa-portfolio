import { NextResponse } from "next/server"
import { site } from "@/lib/site"

// The contact form's landing point.
//
// With RESEND_API_KEY set (free tier at resend.com), the message is delivered
// to site.email through Resend's REST API — no SDK, one fetch. Without it, the
// route answers `fallback: true` and the client opens a prefilled mailto:
// the form works on day one either way, it just gets better with a key.

interface ContactPayload {
  name?: string
  email?: string
  topic?: string
  message?: string
  // Honeypot — humans never see the field, bots helpfully fill it.
  company?: string
}

export async function POST(request: Request) {
  let payload: ContactPayload
  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 })
  }

  if (payload.company) return NextResponse.json({ ok: true }) // bot fed, nothing sent

  const name = payload.name?.trim() ?? ""
  const email = payload.email?.trim() ?? ""
  const message = payload.message?.trim() ?? ""
  if (!name || !email.includes("@") || message.length < 10) {
    return NextResponse.json(
      { error: "Please fill in your name, a real email, and a message." },
      { status: 422 },
    )
  }

  const key = process.env.RESEND_API_KEY
  if (!key) return NextResponse.json({ ok: true, fallback: true })

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: [site.email],
      reply_to: email,
      subject: `Portfolio: ${payload.topic || "New message"} — ${name}`,
      text: `From: ${name} <${email}>\nTopic: ${payload.topic || "—"}\n\n${message}`,
    }),
  })

  if (!response.ok) {
    return NextResponse.json(
      { error: "Could not send just now — email me directly instead." },
      { status: 502 },
    )
  }
  return NextResponse.json({ ok: true })
}
