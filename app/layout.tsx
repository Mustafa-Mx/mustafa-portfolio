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

const description = `${site.role} in ${site.location}. TypeScript, Node, React, Next.js, PostgreSQL and AWS architecture. Took over a visa platform mid-incident, rebuilt its AWS estate and led it past $1M in revenue. Open to short-term contracts and full-time remote roles.`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "full stack engineer",
    "TypeScript",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "PostgreSQL",
    "AWS architecture",
    "contract developer",
    "Lahore",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    "TypeScript",
    "Node.js",
    "NestJS",
    "React",
    "Next.js",
    "PostgreSQL",
    "Amazon Web Services",
    "Terraform",
    "Cloud security",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${plexMono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
