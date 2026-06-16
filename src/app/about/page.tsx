'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    title: "We'll manage the project and deliver on time.",
    description: "For most in our industry, creative work comes easy but time management — woof, that's the killer. We have a secret weapon: we excel at organization and operations. We have an ironed out, fully-baked, vetted and revetted process for branding and website design and development that takes all the guesswork and stresswork out of the equation. The result is a partnership that feels smooth from start to finish — because it was planned that way, not patched together along the way."
  },
  {
    title: "We do what we say we're going to do.",
    description: "In a culture of flakiness, our aim is to be reliable. When we partner up with you, we're here for the long haul. We see our projects through. Sometimes a project goes smooth as butter. Other times, you need us to pivot to get things back on track. That's ok. If it was easy, it wouldn't be called work. We don't disappear when things get hard. We show up, communicate, and find a way forward — every single time."
  },
  {
    title: "We're good communicators.",
    description: "Successful partnerships all have one thing in common: good communication. Although we're never afraid to share our expert guidance, we serve our clients by listening first. We send weekly status reports and use Loom videos for design rationale and communicating complex information. No surprises, no guesswork. When questions come up, we respond quickly and clearly. You'll always know where your project stands and what's coming next."
  },
  {
    title: "We invite strategy to the table with creativity.",
    description: "Every decision we make begins with strategy that supports a clear goal or value. We approach every project with strategy first, then design. We draw strategic boundary lines based on your goals, and then we let the creative beast run free inside the fence. That tension is where the best work lives. The result is work that doesn't just look good — it performs. Beautiful and purposeful, every time."
  }
]

export default function AboutPage() {
  const [openValue, setOpenValue] = useState<number | null>(null);
  const teamSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!teamSectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      },
      {
        rootMargin: '-140px 0px 0px 0px',
        threshold: 0,
      }
    )

    observer.observe(teamSectionRef.current)

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-700 ease-out flex flex-col">
      {/* Marquee Banner */}
      <div className="w-full bg-foreground text-background py-3 overflow-hidden whitespace-nowrap transition-colors duration-700">
        <div className="inline-block animate-[marquee_20s_linear_infinite]">
          <span className="font-serif text-lg tracking-wide uppercase px-8">
            15 Years! This year we celebrate 7,888,680 minutes in business! New brand, new website, same us. New brand, new website, same boring people. New brand, new website, new news banner!
          </span>
          <span className="font-serif text-lg tracking-wide uppercase px-8">
            15 Years! This year we celebrate 7,888,680 minutes in business! New brand, new website, same us. New brand, new website, same boring people. New brand, new website, new news banner!
          </span>
        </div>
      </div>

      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1 pb-20">
        
        {/* 1. Hero Section */}
        <section className="px-8 lg:px-20 pt-16 pb-24 lg:pt-32 lg:pb-48 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative lg:min-h-[50vh]">
            
            {/* Main Headline */}
            <motion.h1 
              className="lg:col-span-7 font-serif text-5xl md:text-6xl lg:text-[80px] leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              We&apos;re an experienced, tight-knit team of strategic thinkers helping create order out of chaos. And loving it.
            </motion.h1>

            {/* Sub text 1 (Right aligned) */}
            <motion.div
              className="lg:col-start-8 lg:col-span-3 mt-12 lg:mt-[25%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <p className="font-sans text-lg lg:text-[19px] leading-snug">
                Our strategy remains: work hard, build lasting relationships, and deliver our best.
              </p>
            </motion.div>

            {/* Sub text 2 (Bottom left) */}
            <motion.div
              className="lg:col-start-1 lg:col-span-4 lg:absolute lg:bottom-[-40px] lg:left-0 mt-24 lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <p className="font-sans text-lg lg:text-[19px] leading-snug">
                In business for 15 years with the
              </p>
            </motion.div>

          </div>
        </section>
        
        {/* 2. Team Grid */}
        <section ref={teamSectionRef} className="px-8 lg:px-20 py-32 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div 
                key={member.name}
                className="flex flex-col group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="relative aspect-[4/5] w-full mb-6 overflow-hidden rounded-sm bg-foreground/5 dark:bg-white/5 transition-colors duration-700">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-sans text-2xl font-medium tracking-tight mb-2 group-hover:text-foreground/70 dark:group-hover:text-white transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-sans text-[15px] text-foreground/60 uppercase tracking-widest transition-colors duration-700">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Core Values (Accordion) */}
        <section className="px-8 lg:px-20 pb-32 w-full">
          
          <h2 className="font-serif text-5xl lg:text-[80px] leading-tight mb-16 text-foreground transition-colors duration-700">
            Get yourself a<br/>good partner.
          </h2>

          <div className="flex flex-col border-t border-border transition-colors duration-700">
            {CORE_VALUES.map((value, index) => {
              const isOpen = openValue === index;
              return (
                <div key={value.title} className="border-b border-border transition-colors duration-700">
                  <button 
                    onClick={() => setOpenValue(isOpen ? null : index)}
                    className="w-full py-6 lg:py-10 flex items-center justify-between group text-left"
                  >
                    <h3 className="font-serif text-2xl lg:text-[32px] leading-tight tracking-tight pr-8 text-foreground transition-colors duration-700">
                      {value.title}
                    </h3>
                    <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full border border-border flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-foreground text-background' : 'group-hover:border-foreground text-foreground'}`}>
                      {isOpen ? (
                        <span className="text-2xl lg:text-3xl leading-none -mt-1">-</span>
                      ) : (
                        <span className="text-2xl lg:text-3xl leading-none -mt-1">+</span>
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pt-2">
                          <p className="font-sans text-lg lg:text-xl text-foreground/80 leading-relaxed max-w-3xl transition-colors duration-700">
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
