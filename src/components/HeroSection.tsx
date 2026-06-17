'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Globe } from '@/components/ui/globe'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiFigma,
  SiVercel, SiGithub, SiFramer, SiNodedotjs,
  SiVuedotjs, SiAngular, SiSvelte, SiPython,
  SiPostgresql, SiDocker, SiStripe,
} from 'react-icons/si'
import { useEffect, useState } from 'react'

// Responsive orbit hero — radii and icon sizes scale with viewport width
function MobileOrbitHero() {
  const [vw, setVw] = useState(0)

  useEffect(() => {
    const update = () => setVw(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Don't render until we know the viewport (avoids SSR mismatch)
  if (vw === 0) return null

  const isMobile = vw < 640
  const isTablet = vw < 1024

  // Globe diameter: 115vw on mobile, 700px tablet, 1000px desktop
  const globeSize = isMobile ? vw * 1.15 : isTablet ? 700 : 1000

  // Ring radii: tightly wrap the globe edge
  const innerR  = isMobile ? vw * 0.63 : isTablet ? 380 : 520
  const middleR = isMobile ? vw * 0.82 : isTablet ? 500 : 680
  const outerR  = isMobile ? vw * 1.01 : isTablet ? 620 : 860

  // Icon sizes
  const iconSm  = isMobile ? 14 : 18
  const iconMd  = isMobile ? 16 : 22
  const iconLg  = isMobile ? 18 : 28
  const padSm   = isMobile ? 'p-1.5' : 'p-2 sm:p-3'
  const padMd   = isMobile ? 'p-2'   : 'p-3 sm:p-4'
  const padLg   = isMobile ? 'p-2.5' : 'p-4 sm:p-5'

  // Container: wide enough to hold outermost ring + icon overflow
  const containerSize = (outerR + 60) * 2
  const bottomOffset  = isMobile ? -(containerSize * 0.38) : isTablet ? -500 : -900

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-0 pointer-events-none"
      style={{
        width:  containerSize,
        height: containerSize,
        bottom: bottomOffset,
      }}
    >
      {/* Globe */}
      <div
        className="absolute inset-0 m-auto flex items-center justify-center"
        style={{ width: globeSize, height: globeSize }}
      >
        <Globe />
      </div>

      {/* Inner ring — always visible */}
      <OrbitingCircles className="border-none bg-transparent" duration={25} radius={innerR} iconSize={iconSm + 16}>
        <div className={`bg-background border border-border ${padSm} rounded-full shadow-md flex items-center justify-center`}><SiHtml5 size={iconSm} className="text-[#E34F26]" /></div>
        <div className={`bg-background border border-border ${padSm} rounded-full shadow-md flex items-center justify-center`}><SiCss size={iconSm} className="text-[#1572B6]" /></div>
        <div className={`bg-background border border-border ${padSm} rounded-full shadow-md flex items-center justify-center`}><SiJavascript size={iconSm} className="text-[#F7DF1E]" /></div>
        <div className={`bg-background border border-border ${padSm} rounded-full shadow-md flex items-center justify-center`}><SiVuedotjs size={iconSm} className="text-[#4FC08D]" /></div>
        <div className={`bg-background border border-border ${padSm} rounded-full shadow-md flex items-center justify-center`}><SiAngular size={iconSm} className="text-[#DD0031]" /></div>
      </OrbitingCircles>

      {/* Middle ring — always visible */}
      <OrbitingCircles className="border-none bg-transparent" duration={40} radius={middleR} reverse iconSize={iconMd + 16}>
        <div className={`bg-background border border-border ${padMd} rounded-full shadow-md flex items-center justify-center`}><SiReact size={iconMd} className="text-[#61DAFB]" /></div>
        <div className={`bg-background border border-border ${padMd} rounded-full shadow-md flex items-center justify-center`}><SiNextdotjs size={iconMd} className="text-foreground" /></div>
        <div className={`bg-background border border-border ${padMd} rounded-full shadow-md flex items-center justify-center`}><SiTypescript size={iconMd} className="text-[#3178C6]" /></div>
        <div className={`bg-background border border-border ${padMd} rounded-full shadow-md flex items-center justify-center`}><SiTailwindcss size={iconMd} className="text-[#06B6D4]" /></div>
        <div className={`bg-background border border-border ${padMd} rounded-full shadow-md flex items-center justify-center`}><SiSvelte size={iconMd} className="text-[#FF3E00]" /></div>
        <div className={`bg-background border border-border ${padMd} rounded-full shadow-md flex items-center justify-center`}><SiPython size={iconMd} className="text-[#3776AB]" /></div>
      </OrbitingCircles>

      {/* Outer ring — always visible */}
      <OrbitingCircles className="border-none bg-transparent" duration={60} radius={outerR} iconSize={iconLg + 20}>
        <div className={`bg-background border border-border ${padLg} rounded-full shadow-md flex items-center justify-center`}><SiFigma size={iconLg} className="text-[#F24E1E]" /></div>
        <div className={`bg-background border border-border ${padLg} rounded-full shadow-md flex items-center justify-center`}><SiFramer size={iconLg} className="text-foreground" /></div>
        <div className={`bg-background border border-border ${padLg} rounded-full shadow-md flex items-center justify-center`}><SiVercel size={iconLg} className="text-foreground" /></div>
        <div className={`bg-background border border-border ${padLg} rounded-full shadow-md flex items-center justify-center`}><SiNodedotjs size={iconLg} className="text-[#339933]" /></div>
        <div className={`bg-background border border-border ${padLg} rounded-full shadow-md flex items-center justify-center`}><SiGithub size={iconLg} className="text-foreground" /></div>
        <div className={`bg-background border border-border ${padLg} rounded-full shadow-md flex items-center justify-center`}><SiPostgresql size={iconLg} className="text-[#4169E1]" /></div>
        <div className={`bg-background border border-border ${padLg} rounded-full shadow-md flex items-center justify-center`}><SiDocker size={iconLg} className="text-[#2496ED]" /></div>
        <div className={`bg-background border border-border ${padLg} rounded-full shadow-md flex items-center justify-center`}><SiStripe size={iconLg} className="text-[#008CDD]" /></div>
      </OrbitingCircles>
    </div>
  )
}

export default function HeroSection() {
  const reduce = useReducedMotion()

  const motionProps = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay },
        }

  return (
    <section
      className="relative flex w-full flex-col items-center justify-start overflow-hidden bg-background"
      style={{ minHeight: '100dvh' }}
    >
      {/* Title */}
      <div className="z-10 flex flex-col items-center text-center pt-[6vh] px-4 sm:px-8 w-full">
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[100px] leading-[1.05] tracking-tight text-foreground"
          {...motionProps(0)}
        >
          We build for the web.
        </motion.h1>
        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-foreground/70 max-w-xl sm:max-w-2xl"
          {...motionProps(0.2)}
        >
          Order out of chaos. We design and engineer premium web experiences and custom software for businesses that want to scale globally.
        </motion.p>
      </div>

      {/* Globe + orbiting rings — fully responsive */}
      <MobileOrbitHero />

      {/* Fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  )
}
