'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Footer from '@/components/Footer'
// Navbar + Ticker rendered globally by layout.tsx

const TEAM_MEMBERS = [
  {
    name: 'Kristin DeKay',
    role: 'Partner & Operations Director',
    image: '/team/kristin.png'
  },
  {
    name: 'Brooke Ratliff',
    role: 'Producer',
    image: '/team/brooke.png'
  },
  {
    name: 'Eric Downs',
    role: 'Partner & Technical Director',
    image: '/team/eric.png'
  },
  {
    name: 'Mike DeKay',
    role: 'Partner & Creative Director',
    image: '/team/mike.png'
  }
]

const CORE_VALUES = [
  {
    title: "We deliver on time — every time.",
    description: "Most creative agencies are great at the work and terrible at the clock. We're the exception. Our web design and development process is a fully structured, milestone-driven system with clear timelines, written specs, and no surprises. You'll always know the status of your project, what's coming next, and when it lands. The result is a client partnership that feels smooth from kickoff to launch — because it was built that way."
  },
  {
    title: "We do exactly what we say we'll do.",
    description: "Reliable agencies are rare. We built our reputation on being one. When we commit to a scope, a deadline, or a standard of quality — we hold to it. Websites get built. Software gets shipped. Brands get launched. When challenges arise (and they always do), we don't disappear. We show up, communicate clearly, and find the right path forward. Every single time."
  },
  {
    title: "Clear communication throughout every project.",
    description: "The biggest source of frustration in agency relationships is poor communication — and we've made eliminating it a core part of how we work. Weekly status updates, transparent project management, and fast responses to questions keep you informed and in control at every stage. Whether it's a website redesign, a custom software build, or a brand identity project — you'll always know exactly where things stand and what's coming next."
  },
  {
    title: "Strategy-led design and development.",
    description: "Every website we design, every application we build, and every brand we create starts with a clear strategic foundation. We define goals, understand audiences, and establish the right success metrics before any design or code begins. Strategy sets the boundaries — creativity fills the space inside them. The result is digital work that doesn't just look good: it ranks, converts, and grows your business."
  }
]

export default function AboutPage() {
  const [openValue, setOpenValue] = useState<number | null>(null)
  const membersSectionRef = useRef<HTMLElement>(null)

  // Go dark when members section enters the viewport, light when above it
  useEffect(() => {
    const el = membersSectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.documentElement.classList.add('dark')
        } else {
          // Only remove dark if we scrolled back UP above the section
          if (entry.boundingClientRect.top > 0) {
            document.documentElement.classList.remove('dark')
          }
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-700 ease-out flex flex-col">
      <main className="flex-1">

        {/* 1. Hero */}
        <section className="px-5 sm:px-8 lg:px-20 pt-12 pb-20 lg:pt-20 lg:pb-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-8 lg:min-h-[55vh] items-start">

            {/* Headline */}
            <motion.h1
              className="lg:col-span-8 font-serif text-[clamp(38px,6vw,80px)] leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              A full-service web design, development &amp; branding agency built on craft, strategy, and a relentless standard for quality.
            </motion.h1>

            {/* Sub copy — right column, vertically offset */}
            <motion.div
              className="lg:col-start-9 lg:col-span-4 lg:mt-[30%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <p className="font-sans text-base lg:text-[18px] leading-snug text-foreground/70">
                We design and build websites, custom software, and brand identities for businesses that refuse to settle for average.
              </p>
            </motion.div>

            {/* Bottom-left tagline */}
            <motion.div
              className="lg:col-span-5 lg:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            >
              <p className="font-sans text-base lg:text-[18px] leading-snug text-foreground/70">
                A tight-knit team of designers, developers, and strategists — obsessively focused on work that performs as well as it looks.
              </p>
            </motion.div>

          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-foreground/10 transition-colors duration-700" />

        {/* 2. Members — triggers dark mode on html element via IntersectionObserver */}
        <section ref={membersSectionRef} className="bg-background transition-colors duration-700 px-5 sm:px-8 lg:px-20 py-20 lg:py-32">
          <h2 className="font-sans text-sm uppercase tracking-widest text-foreground/40 mb-12 lg:mb-20">The team</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                className="flex flex-col group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                <div className="relative aspect-[4/5] w-full mb-4 lg:mb-6 overflow-hidden rounded-sm bg-white/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-sans text-lg lg:text-2xl font-medium tracking-tight mb-1 text-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-sans text-[13px] lg:text-[15px] text-foreground/50 uppercase tracking-widest">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Core Values */}
        <section className="bg-background transition-colors duration-700 px-5 sm:px-8 lg:px-20 pb-24 lg:pb-40 w-full">
          <h2 className="font-serif text-[clamp(36px,5.5vw,80px)] leading-tight mb-12 lg:mb-20 text-foreground">
            Why businesses choose<br />ThePieCraft.
          </h2>

          <div className="flex flex-col border-t border-foreground/10">
            {CORE_VALUES.map((value, index) => {
              const isOpen = openValue === index
              return (
                <div key={value.title} className="border-b border-foreground/10">
                  <button
                    onClick={() => setOpenValue(isOpen ? null : index)}
                    className="w-full py-6 lg:py-10 flex items-center justify-between group text-left gap-6"
                  >
                    <h3 className="font-serif text-xl lg:text-[32px] leading-tight tracking-tight text-foreground group-hover:text-foreground/70 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-foreground/20 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-foreground text-background' : 'group-hover:border-foreground/50 text-foreground'}`}>
                      <span className="text-xl lg:text-2xl leading-none">{isOpen ? '−' : '+'}</span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pt-2">
                          <p className="font-sans text-base lg:text-xl text-foreground/70 leading-relaxed max-w-3xl">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
