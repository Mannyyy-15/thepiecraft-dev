'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/lib/projects'

interface ProjectsSectionProps {
  disableThemeToggle?: boolean
}

export default function ProjectsSection({ disableThemeToggle = false }: ProjectsSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // Track scroll position for infinite carousel
  const xPos = useRef(0)
  const speed = useRef(1) // Base speed
  const targetSpeed = useRef(1)
  const requestRef = useRef<number>(0)

  const headingRef = useRef<HTMLHeadingElement>(null)

  // Replace scroll listener with IntersectionObserver (no jank, passive by default)
  useEffect(() => {
    if (disableThemeToggle) {
      document.documentElement.classList.remove('dark')
      return
    }
    if (!headingRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // Only go dark if element exited from the TOP (user scrolled past it)
          // If top > 0 it's still below the viewport on initial load — stay light
          if (entry.boundingClientRect.top < 0) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        } else {
          // Heading is visible — light mode
          document.documentElement.classList.remove('dark')
        }
      },
      {
        rootMargin: '-140px 0px 0px 0px',
        threshold: 0,
      }
    )

    observer.observe(headingRef.current)
    return () => observer.disconnect()
  }, [disableThemeToggle])

  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Respect prefers-reduced-motion — pause carousel if user opted out
    if (prefersReducedMotion) return

    const animate = () => {
      speed.current += (targetSpeed.current - speed.current) * 0.1
      xPos.current -= speed.current
      
      if (trackRef.current) {
        const firstChild = trackRef.current.children[0] as HTMLElement
        if (firstChild) {
          const gap = 32
          const cardWidth = firstChild.offsetWidth + gap
          const totalWidth = cardWidth * PROJECTS.length
          if (xPos.current <= -totalWidth) xPos.current += totalWidth
        }
        trackRef.current.style.transform = `translateX(${xPos.current}px)`
      }
      
      requestRef.current = requestAnimationFrame(animate)
    }
    
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current!)
  }, [prefersReducedMotion])

  const handleMouseEnter = () => {
    targetSpeed.current = 0.15 // Slow down immensely
  }

  const handleMouseLeave = () => {
    targetSpeed.current = 1 // Resume normal speed
  }

  // Duplicate for infinite effect
  const repeatedProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS]

  return (
    <section 
      ref={sectionRef}
      className="py-32 overflow-hidden bg-background relative transition-colors duration-700 ease-out"
    >
      <div className="px-5 sm:px-8 lg:px-20 mb-12 sm:mb-20">
        <h2 
          ref={headingRef}
          className="font-serif text-[clamp(40px,5vw,64px)] leading-tight text-black dark:text-white max-w-4xl transition-colors duration-700"
        >
          Empowering you with smart creative work so you can grow your business.
        </h2>
      </div>

      {/* Carousel Wrapper */}
      <div
        className="w-full relative pb-12 cursor-none overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor="view"
      >
        <div 
          className="group relative flex w-max gap-8 px-8"
          ref={trackRef}
        >
          {repeatedProjects.map((p, i) => (
            <div 
              key={`${p.id}-${i}`}
              className="flex flex-col gap-4 sm:gap-6 w-[80vw] sm:w-[480px] md:w-[580px] lg:w-[640px] flex-shrink-0 transition-all duration-500 ease-out
                         group-hover:opacity-40 group-hover:saturate-50 hover:!opacity-100 hover:!saturate-100"
            >
              {/* Card Graphic */}
              <Link href={`/work/${p.slug}`} className="block">
                <div 
                  className="w-full h-[56vw] sm:h-[340px] md:h-[380px] lg:h-[415px] rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform duration-500 hover:scale-[1.02] relative overflow-hidden"
                  style={{ backgroundColor: p.bg }}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Link>
              
              {/* Card Metadata */}
              <div className="flex items-center gap-3 text-foreground transition-colors duration-700">
                <span className="font-medium text-lg">{p.name}</span>
                <div className="flex gap-2">
                  {p.tag.split('·').map(t => (
                    <span key={t} className="bg-foreground/10 text-foreground text-xs px-2 py-1 rounded">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
