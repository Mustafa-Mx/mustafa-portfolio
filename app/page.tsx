import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Experience, FooterCta, Metrics, StackMarquee, Thinking, Work } from "@/components/sections"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <StackMarquee />
        <Work />
        <Thinking />
        <Experience />
        <FooterCta />
      </main>
    </>
  )
}
