import type { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'

export const metadata: Metadata = {
  title: "ThePieCraft — Web Design & Development Agency",
  description: "ThePieCraft is a full-service web design and development agency. We build premium websites, custom software, and brand identities that help ambitious businesses grow.",
  alternates: { canonical: "https://dev.thepiecraftmarketing.com" },
  openGraph: {
    title: "ThePieCraft — Web Design & Development Agency",
    description: "We build premium websites, custom software, and brand identities for ambitious businesses. React, Next.js, Tailwind specialists.",
    url: "https://dev.thepiecraftmarketing.com",
  },
}
import ProjectsSection from '@/components/ProjectsSection'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import ThirdSection from '@/components/ThirdSection'
import FourthSection from '@/components/FourthSection'
import FounderSection from '@/components/FounderSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <WhatWeDoSection />
        <ProjectsSection />
        <ThirdSection />
        <FourthSection />
        <FounderSection />
      </main>
      <Footer />
    </>
  )
}
