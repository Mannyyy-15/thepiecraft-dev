import HeroSection from '@/components/HeroSection'
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
