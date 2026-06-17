import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: "ThePieCraft — Web Design & Development Agency",
  description: "ThePieCraft is a full-service web design and development agency. We build premium websites, custom software, and brand identities that help ambitious businesses grow.",
  alternates: { canonical: "https://thepiecraft.com" },
  openGraph: {
    title: "ThePieCraft — Web Design & Development Agency",
    description: "We build premium websites, custom software, and brand identities for ambitious businesses. React, Next.js, Tailwind specialists.",
    url: "https://thepiecraft.com",
  },
}
import ProjectsSection from '@/components/ProjectsSection'
import ThirdSection from '@/components/ThirdSection'
import FourthSection from '@/components/FourthSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <ThirdSection />
        <FourthSection />
      </main>
      <Footer />
    </>
  )
}
