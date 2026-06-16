'use client'

import React, { useEffect, useRef, useState } from 'react'
import CustomCursor from './CustomCursor'
import { useReducedMotion } from 'framer-motion'

const projects = [
  { id: 1, name: 'Omaha Performing Arts', tag: 'Web', bg: '#f8fafc', textColor: 'text-slate-800' },
  { id: 2, name: 'Foster CRM', tag: 'Software · Web', bg: '#0f172a', textColor: 'text-blue-200' },
  { id: 3, name: 'HudlTV', tag: 'Software', bg: '#000000', textColor: 'text-white' },
  { id: 4, name: 'Pioneer', tag: 'Web', bg: '#dbeafe', textColor: 'text-blue-900' },
  { id: 5, name: 'DataSphere', tag: 'Software', bg: '#1e1b4b', textColor: 'text-violet-200' },
]

interface ProjectsSectionProps {
  disableThemeToggle?: boolean
}

export default function ProjectsSection({ disableThemeToggle = false }: ProjectsSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  
  const [isHoveringCard, setIsHoveringCard] = useState(false)
  
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
          const totalWidth = cardWidth * projects.length
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
    setIsHoveringCard(true)
  }

  const handleMouseLeave = () => {
    targetSpeed.current = 1 // Resume normal speed
    setIsHoveringCard(false)
  }

  // Duplicate for infinite effect
  const repeatedProjects = [...projects, ...projects, ...projects]

  return (
    <section 
      ref={sectionRef}
      className="py-32 overflow-hidden bg-background relative transition-colors duration-700 ease-out"
    >
      <CustomCursor isVisible={isHoveringCard} />
      
      <div className="px-8 lg:px-20 mb-20">
        <h2 
          ref={headingRef}
          className="font-serif text-[clamp(40px,5vw,64px)] leading-tight text-black dark:text-teal-100/90 max-w-4xl transition-colors duration-700"
        >
          Empowering you with smart creative work so you can grow your business.
        </h2>
      </div>

      {/* Carousel Wrapper */}
      <div 
        className="w-full relative pb-12 cursor-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="group relative flex w-max gap-8 px-8"
          ref={trackRef}
        >
          {repeatedProjects.map((p, i) => (
            <div 
              key={`${p.id}-${i}`}
              className="flex flex-col gap-6 w-[85vw] md:w-[640px] flex-shrink-0 transition-all duration-500 ease-out 
                         group-hover:opacity-40 group-hover:saturate-50 hover:!opacity-100 hover:!saturate-100"
            >
              {/* Card Graphic */}
              <div 
                className="w-full h-[60vw] md:h-[415px] rounded-2xl flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]"
                style={{ backgroundColor: p.bg }}
              >
                <span className={`font-serif text-[clamp(28px,3vw,40px)] font-medium ${p.textColor}`}>
                  {p.name}
                </span>
              </div>
              
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
