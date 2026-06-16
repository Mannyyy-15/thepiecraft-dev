'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe } from '@/components/ui/globe'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiFigma,
  SiVercel, SiGithub, SiFramer, SiNodedotjs,
  SiVuedotjs, SiAngular, SiSvelte, SiPython,
  SiWebpack, SiPostgresql, SiPrisma, SiDocker,
  SiStripe, SiMongodb
} from 'react-icons/si'

export default function HeroSection() {
  return (
    <section 
      className="relative flex w-full flex-col items-center justify-start overflow-hidden bg-background"
      style={{ minHeight: 'calc(100vh - 88px)' }}
    >
      {/* Title */}
      <div className="z-10 flex flex-col items-center text-center pt-[8vh] px-8">
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-[100px] leading-[1.05] tracking-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We build for the web.
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg lg:text-xl text-foreground/70 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Order out of chaos. We design and engineer premium web experiences and custom software for businesses that want to scale globally.
        </motion.p>
      </div>

      {/* Orbiting Circles & Globe Container */}
      {/* Massive horizon effect anchored near the bottom of the screen */}
      <div className="absolute bottom-[-800px] lg:bottom-[-900px] left-1/2 flex h-[1800px] w-[1800px] -translate-x-1/2 items-center justify-center z-0 pointer-events-none">
        
        {/* Globe (Sized to 900px diameter, sitting just inside the 470px radius inner orbit) */}
        <div className="absolute inset-0 m-auto flex items-center justify-center size-[700px] sm:size-[800px] md:size-[900px]">
          <Globe />
        </div>
        
        {/* Inner Circle (Fast) */}
        <OrbitingCircles className="size-[50px] border-none bg-transparent" duration={25} delay={0} radius={470}>
          <div className="bg-background border border-border p-3 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiHtml5 size={24} className="text-[#E34F26]" /></div>
          <div className="bg-background border border-border p-3 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiCss size={24} className="text-[#1572B6]" /></div>
          <div className="bg-background border border-border p-3 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiJavascript size={24} className="text-[#F7DF1E]" /></div>
          <div className="bg-background border border-border p-3 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiVuedotjs size={24} className="text-[#4FC08D]" /></div>
          <div className="bg-background border border-border p-3 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiAngular size={24} className="text-[#DD0031]" /></div>
        </OrbitingCircles>

        {/* Middle Circle (Reverse, Medium speed) */}
        <OrbitingCircles className="size-[60px] border-none bg-transparent" duration={40} delay={0} radius={620} reverse>
          <div className="bg-background border border-border p-4 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiReact size={28} className="text-[#61DAFB]" /></div>
          <div className="bg-background border border-border p-4 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiNextdotjs size={28} className="text-foreground" /></div>
          <div className="bg-background border border-border p-4 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiTypescript size={28} className="text-[#3178C6]" /></div>
          <div className="bg-background border border-border p-4 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiTailwindcss size={28} className="text-[#06B6D4]" /></div>
          <div className="bg-background border border-border p-4 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiSvelte size={28} className="text-[#FF3E00]" /></div>
          <div className="bg-background border border-border p-4 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiPython size={28} className="text-[#3776AB]" /></div>
          <div className="bg-background border border-border p-4 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiWebpack size={28} className="text-[#8DD6F9]" /></div>
        </OrbitingCircles>
        
        {/* Outer Circle (Slow) */}
        <OrbitingCircles className="size-[70px] border-none bg-transparent" duration={60} delay={0} radius={780}>
          <div className="bg-background border border-border p-5 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiFigma size={32} className="text-[#F24E1E]" /></div>
          <div className="bg-background border border-border p-5 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiFramer size={32} className="text-foreground" /></div>
          <div className="bg-background border border-border p-5 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiVercel size={32} className="text-foreground" /></div>
          <div className="bg-background border border-border p-5 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiNodedotjs size={32} className="text-[#339933]" /></div>
          <div className="bg-background border border-border p-5 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiGithub size={32} className="text-foreground" /></div>
          <div className="bg-background border border-border p-5 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiPostgresql size={32} className="text-[#4169E1]" /></div>
          <div className="bg-background border border-border p-5 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiPrisma size={32} className="text-foreground" /></div>
          <div className="bg-background border border-border p-5 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiDocker size={32} className="text-[#2496ED]" /></div>
          <div className="bg-background border border-border p-5 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiStripe size={32} className="text-[#008CDD]" /></div>
          <div className="bg-background border border-border p-5 rounded-full text-foreground/80 shadow-md flex items-center justify-center"><SiMongodb size={32} className="text-[#47A248]" /></div>
        </OrbitingCircles>
      </div>

      {/* Fade at bottom to seamlessly blend with the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  )
}
