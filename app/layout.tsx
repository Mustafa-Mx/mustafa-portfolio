import type { Metadata } from "next"
import { Archivo, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { site } from "@/lib/site"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: `${site.tagline} 4+ years building production SaaS: TypeScript, React, Node, Rails, PostgreSQL, and AWS cloud architecture. ${site.location}.`,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${plexMono.variable}`}>{children}</body>
    </html>
  )
}
