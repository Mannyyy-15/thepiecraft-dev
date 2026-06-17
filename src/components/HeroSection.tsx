'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Globe } from '@/components/ui/globe'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import {
  SiHtml5, SiCss, SiJavascript,
  SiReact, SiNextdotjs, SiTailwindcss, SiFigma,
  SiVercel, SiGithub, SiFramer, SiNodedotjs,
  SiVuedotjs, SiAngular, SiSvelte, SiPython,
  SiPostgresql, SiDocker, SiStripe, SiTypescript
} from 'react-icons/si'

export default function HeroSection() {
  // Respect prefers-reduced-motion — if true, skip entry animations
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

      {/* Globe + orbiting rings — scaled down on mobile, hidden rings on small screens */}
      <div className="absolute bottom-[-40vw] sm:bottom-[-500px] lg:bottom-[-900px] left-1/2 flex h-[120vw] w-[120vw] sm:h-[1200px] sm:w-[1200px] lg:h-[1800px] lg:w-[1800px] -translate-x-1/2 items-center justify-center z-0 pointer-events-none">

        {/* Globe */}
        <div className="absolute inset-0 m-auto flex items-center justify-center size-[80vw] sm:size-[600px] md:size-[900px]">
          <Globe />
        </div>

        {/* Inner ring — hidden on mobile */}
        <div className="hidden sm:contents">
          <OrbitingCircles className="size-[40px] sm:size-[50px] border-none bg-transparent" duration={25} delay={0} radius={300} >
            <div className="bg-background border border-border p-2 sm:p-3 rounded-full shadow-md flex items-center justify-center"><SiHtml5 size={18} className="text-[#E34F26]" /></div>
            <div className="bg-background border border-border p-2 sm:p-3 rounded-full shadow-md flex items-center justify-center"><SiCss size={18} className="text-[#1572B6]" /></div>
            <div className="bg-background border border-border p-2 sm:p-3 rounded-full shadow-md flex items-center justify-center"><SiJavascript size={18} className="text-[#F7DF1E]" /></div>
            <div className="bg-background border border-border p-2 sm:p-3 rounded-full shadow-md flex items-center justify-center"><SiVuedotjs size={18} className="text-[#4FC08D]" /></div>
            <div className="bg-background border border-border p-2 sm:p-3 rounded-full shadow-md flex items-center justify-center"><SiAngular size={18} className="text-[#DD0031]" /></div>
          </OrbitingCircles>
        </div>

        {/* Middle ring — hidden on mobile */}
        <div className="hidden md:contents">
          <OrbitingCircles className="size-[50px] md:size-[60px] border-none bg-transparent" duration={40} delay={0} radius={430} reverse>
            <div className="bg-background border border-border p-3 sm:p-4 rounded-full shadow-md flex items-center justify-center"><SiReact size={22} className="text-[#61DAFB]" /></div>
            <div className="bg-background border border-border p-3 sm:p-4 rounded-full shadow-md flex items-center justify-center"><SiNextdotjs size={22} className="text-foreground" /></div>
            <div className="bg-background border border-border p-3 sm:p-4 rounded-full shadow-md flex items-center justify-center"><SiTypescript size={22} className="text-[#3178C6]" /></div>
            <div className="bg-background border border-border p-3 sm:p-4 rounded-full shadow-md flex items-center justify-center"><SiTailwindcss size={22} className="text-[#06B6D4]" /></div>
            <div className="bg-background border border-border p-3 sm:p-4 rounded-full shadow-md flex items-center justify-center"><SiSvelte size={22} className="text-[#FF3E00]" /></div>
            <div className="bg-background border border-border p-3 sm:p-4 rounded-full shadow-md flex items-center justify-center"><SiPython size={22} className="text-[#3776AB]" /></div>
          </OrbitingCircles>
        </div>

        {/* Outer ring — lg only */}
        <div className="hidden lg:contents">
          <OrbitingCircles className="size-[70px] border-none bg-transparent" duration={60} delay={0} radius={620}>
            <div className="bg-background border border-border p-5 rounded-full shadow-md flex items-center justify-center"><SiFigma size={28} className="text-[#F24E1E]" /></div>
            <div className="bg-background border border-border p-5 rounded-full shadow-md flex items-center justify-center"><SiFramer size={28} className="text-foreground" /></div>
            <div className="bg-background border border-border p-5 rounded-full shadow-md flex items-center justify-center"><SiVercel size={28} className="text-foreground" /></div>
            <div className="bg-background border border-border p-5 rounded-full shadow-md flex items-center justify-center"><SiNodedotjs size={28} className="text-[#339933]" /></div>
            <div className="bg-background border border-border p-5 rounded-full shadow-md flex items-center justify-center"><SiGithub size={28} className="text-foreground" /></div>
            <div className="bg-background border border-border p-5 rounded-full shadow-md flex items-center justify-center"><SiPostgresql size={28} className="text-[#4169E1]" /></div>
            <div className="bg-background border border-border p-5 rounded-full shadow-md flex items-center justify-center"><SiDocker size={28} className="text-[#2496ED]" /></div>
            <div className="bg-background border border-border p-5 rounded-full shadow-md flex items-center justify-center"><SiStripe size={28} className="text-[#008CDD]" /></div>
          </OrbitingCircles>
        </div>
      </div>

      {/* Fade at bottom to seamlessly blend with the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  )
}
