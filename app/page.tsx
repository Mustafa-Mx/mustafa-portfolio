import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { Services } from "@/components/services"
import { Proof } from "@/components/proof"
import { Experience, FooterCta, Metrics, Range, StackMarquee, Thinking } from "@/components/sections"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <StackMarquee />
        <Work />
        <Services />
        <Range />
        <Thinking />
        <Proof />
        <Experience />
        <FooterCta />
      </main>
    </>
  )
}
