import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import ThirdSection from '@/components/ThirdSection'
import FourthSection from '@/components/FourthSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full flex flex-col">
        <Ticker />
        <Navbar />
      </header>
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
