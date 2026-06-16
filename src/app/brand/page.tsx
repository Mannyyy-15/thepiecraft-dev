'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Shapes, Sun, Type, Target, PenTool } from 'lucide-react'
import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectsSection from '@/components/ProjectsSection'

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 w-full flex flex-col">
        <Ticker />
        <Navbar />
      </header>
      
      <main className="min-h-screen bg-background transition-colors duration-700 ease-out flex flex-col">
        
        {/* 1. Hero */}
        <section className="relative w-full h-[60vh] lg:h-[75vh] flex flex-col items-center justify-center overflow-hidden border-b border-foreground/10 bg-background transition-colors duration-700">
          {/* Floating Pills Container */}
          <div className="absolute inset-0 pointer-events-none max-w-[1400px] mx-auto">
            {/* Top Left */}
            <div className="absolute top-[20%] left-[5%] lg:top-[25%] lg:left-[15%] bg-white text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 animate-float-slow">
              <Sun className="w-4 h-4 lg:w-5 lg:h-5 text-black/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Visual Identity Guidelines</span>
            </div>
            
            {/* Top Center-ish */}
            <div className="absolute top-[10%] left-[35%] lg:left-[40%] bg-white text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 animate-float-medium">
              <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 text-black/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Brand Messaging</span>
            </div>

            {/* Top Right */}
            <div className="absolute top-[15%] right-[5%] lg:top-[20%] lg:right-[15%] bg-white text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 animate-float-fast">
              <Shapes className="w-4 h-4 lg:w-5 lg:h-5 text-black/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Brand Workshop</span>
            </div>

            {/* Middle Right */}
            <div className="absolute top-[50%] right-[-5%] lg:top-[45%] lg:right-[10%] bg-white text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 animate-float-slow" style={{ animationDelay: '1s' }}>
              <Type className="w-4 h-4 lg:w-5 lg:h-5 text-black/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Typography system</span>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-[20%] left-[-5%] lg:bottom-[25%] lg:left-[10%] bg-white text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 animate-float-medium" style={{ animationDelay: '0.5s' }}>
              <Target className="w-4 h-4 lg:w-5 lg:h-5 text-black/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Purpose Statement</span>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-[10%] right-[10%] lg:bottom-[15%] lg:right-[20%] bg-white text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/5 animate-float-fast" style={{ animationDelay: '1.5s' }}>
              <PenTool className="w-4 h-4 lg:w-5 lg:h-5 text-black/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Illustrations</span>
            </div>
          </div>

          <h1 className="font-serif text-[clamp(80px,12vw,180px)] leading-none tracking-tight relative z-10 text-foreground">Branding</h1>
        </section>

        {/* 2. Interactive Projects Carousel */}
        <ProjectsSection disableThemeToggle={true} />

        {/* 3. Capabilities Grid Redesign */}
        <section className="relative w-full px-4 lg:px-8 py-32 border-b border-foreground/10 bg-background transition-colors duration-700">
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] mb-16 text-center text-foreground">Capabilities</h2>
          
          {/* Scrollable wrapper for smaller screens */}
          <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
            {/* The 18x14 Box Outer Container */}
            <div 
              className="relative border border-black rounded-2xl overflow-hidden bg-background shrink-0 mx-auto"
              style={{ width: 1710, height: 1330 }}
            >
              
              {/* The Repeating CSS Grid Pattern Layer (95px squares) */}
              <div 
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)`,
                  backgroundSize: '95px 95px',
                }}
              />
              
              {/* The Cards Layer mapped exactly to the 18x14 CSS Grid coordinates */}
              <div 
                className="absolute inset-0 grid"
                style={{
                  gridTemplateColumns: 'repeat(18, 95px)',
                  gridTemplateRows: 'repeat(14, 95px)',
                }}
              >
                
                {/* Card 1: Brand Strategy (Starts Row 2, Col 1, Covers 5 wide x 6 tall) */}
                <div className="bg-background border border-black p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '1 / span 5', gridRow: '2 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-foreground">Brand Strategy</h3>
                  
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <path d="M100 40L140 60L100 80L60 60L100 40Z" fill="#14532d"/>
                      <path d="M140 60V80L100 100V80L140 60Z" fill="#166534"/>
                      <path d="M60 60V80L100 100V80L60 60Z" fill="#fef08a"/>
                      
                      <path d="M140 90L180 110L140 130L100 110L140 90Z" fill="#14532d"/>
                      <path d="M180 110V130L140 150V130L180 110Z" fill="#166534"/>
                      <path d="M100 110V130L140 150V130L100 110Z" fill="#fef08a"/>
                      
                      <path d="M60 90L100 110L60 130L20 110L60 90Z" fill="#14532d"/>
                      <path d="M100 110V130L60 150V130L100 110Z" fill="#166534"/>
                      <path d="M20 110V130L60 150V130L20 110Z" fill="#fef08a"/>
                      
                      <path d="M100 130L140 150L100 170L60 150L100 130Z" fill="#14532d"/>
                      <path d="M140 150V170L100 190V170L140 150Z" fill="#166534"/>
                      <path d="M60 150V170L100 190V170L60 150Z" fill="#fef08a"/>
                    </svg>
                  </div>

                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <ul className="flex flex-col gap-3 text-foreground/70 font-sans text-[15px] leading-snug">
                      <li>Competitor brand analysis</li>
                      <li>Brand attributes / personality</li>
                      <li>Positioning</li>
                      <li>Purpose statement</li>
                      <li>Personas</li>
                      <li>Naming</li>
                    </ul>
                  </div>
                </div>

                {/* Card 2: Brand Messaging (Starts Row 1, Col 7, Covers 6 wide x 7 tall) */}
                <div className="bg-background border border-black p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '7 / span 6', gridRow: '1 / span 7' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-foreground">Brand Messaging</h3>
                  
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <rect x="50" y="50" width="100" height="100" rx="20" className="stroke-foreground/20" strokeWidth="4"/>
                      <rect x="40" y="60" width="100" height="100" rx="20" className="fill-foreground/10"/>
                      <path d="M60 80H120" className="stroke-foreground/40" strokeWidth="6" strokeLinecap="round"/>
                      <path d="M60 100H140" className="stroke-foreground/40" strokeWidth="6" strokeLinecap="round"/>
                      <path d="M60 120H100" className="stroke-[#fef08a]" strokeWidth="6" strokeLinecap="round"/>
                      <path d="M60 140C80 140 90 120 110 120C130 120 130 140 140 140" className="stroke-[#166534]" strokeWidth="6" strokeLinecap="round"/>
                    </svg>
                  </div>

                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <ul className="flex flex-col gap-3 text-foreground/70 font-sans text-[15px] leading-snug">
                      <li>Brand voice</li>
                      <li>How we sound</li>
                      <li>Key talking points</li>
                      <li>Words to avoid</li>
                      <li>Slogan taglines</li>
                      <li>Headlines</li>
                      <li>Elevator speech</li>
                    </ul>
                  </div>
                </div>

                {/* Card 3: Logo & Brandmark (Starts Row 2, Col 14, Covers 5 wide x 6 tall) */}
                <div className="bg-background border border-black p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '14 / span 5', gridRow: '2 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-foreground">Logo & Brandmark</h3>
                  
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#14532d" />
                          <stop offset="50%" stopColor="#65a30d" />
                          <stop offset="100%" stopColor="#86efac" />
                        </linearGradient>
                      </defs>
                      <rect x="40" y="40" width="120" height="120" rx="40" fill="url(#grad1)" transform="rotate(45 100 100)"/>
                      <path d="M100 50V150" className="stroke-[#fef08a]" strokeWidth="4" strokeLinecap="round"/>
                      <path d="M50 100H150" className="stroke-[#fef08a]" strokeWidth="4" strokeLinecap="round"/>
                      <path d="M65 65L135 135" className="stroke-[#fef08a]" strokeWidth="4" strokeLinecap="round"/>
                      <path d="M65 135L135 65" className="stroke-[#fef08a]" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                  </div>

                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <ul className="flex flex-col gap-3 text-foreground/70 font-sans text-[15px] leading-snug">
                      <li>Primary logo</li>
                      <li>Secondary logo</li>
                      <li>Submark</li>
                      <li>Wordmark</li>
                      <li>Icon mark</li>
                      <li>Logo usage guidelines</li>
                    </ul>
                  </div>
                </div>

                {/* Card 4: Visual Identity System (Starts Row 9, Col 1, Covers 6 wide x 6 tall) */}
                <div className="bg-background border border-black p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '1 / span 6', gridRow: '9 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-foreground">Visual Identity System</h3>
                  
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      {/* Dark Green Square */}
                      <rect x="50" y="60" width="60" height="60" rx="16" fill="#14532d"/>
                      {/* Cursor Arrow */}
                      <path d="M120 100L140 130H125L115 145V100Z" fill="#14532d"/>
                      <path d="M120 100L140 130H125L115 145V100Z" fill="#047857" transform="translate(-2, -2)"/>
                      {/* Check Mark */}
                      <path d="M65 90L80 105L110 75" className="stroke-[#fef08a]" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                      {/* Toggle Base */}
                      <rect x="50" y="130" width="100" height="40" rx="20" fill="#d9f99d"/>
                      {/* Toggle Knob */}
                      <circle cx="120" cy="150" r="14" fill="#064e3b"/>
                    </svg>
                  </div>

                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <ul className="flex flex-col gap-3 text-foreground/70 font-sans text-[15px] leading-snug">
                      <li>Color palette</li>
                      <li>Typography system</li>
                      <li>Photography direction</li>
                      <li>Graphic elements</li>
                      <li>Iconography</li>
                      <li>Illustrations</li>
                      <li>Visual identity guidelines</li>
                    </ul>
                  </div>
                </div>

                {/* Card 5: Brand Assets (Starts Row 9, Col 8, Covers 10 wide x 5 tall) */}
                <div className="bg-background border border-black p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '8 / span 10', gridRow: '9 / span 5' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-foreground">Brand Assets</h3>
                  
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="200" height="200" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      {/* Bottom Layer */}
                      <path d="M150 200L220 160V180L150 220L80 180V160L150 200Z" fill="#d4d4d8"/>
                      {/* Middle Layer */}
                      <path d="M150 180L220 140V160L150 200L80 160V140L150 180Z" fill="#bef264"/>
                      {/* Top Layer */}
                      <path d="M150 120L220 160L150 200L80 160L150 120Z" fill="#18181b"/>
                      <path d="M150 120L220 160V180L150 220L80 180V160L150 120Z" fill="#27272a"/>
                      <path d="M150 120L220 160L150 200L80 160L150 120Z" fill="url(#grad2)"/>
                      <defs>
                        <linearGradient id="grad2" x1="150" y1="120" x2="150" y2="200" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#52525b"/>
                          <stop offset="1" stopColor="#09090b"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <ul className="grid grid-cols-2 gap-3 text-foreground/70 font-sans text-[15px] leading-snug w-3/4">
                      <li>Pitch decks & Presentations</li>
                      <li>Social media templates</li>
                      <li>Business cards & Letterheads</li>
                      <li>Email templates & Signatures</li>
                      <li>Merchandise & Swag</li>
                      <li>Marketing collateral</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 3. Process */}
        <section className="px-8 lg:px-20 py-32 border-b border-foreground/10 bg-background overflow-hidden relative">
          <h2 className="font-sans text-4xl lg:text-[40px] tracking-tight mb-24 text-foreground">Process</h2>
          
          <div className="relative pt-10">
            {/* The animated dotted timeline track */}
            <motion.div 
              className="absolute top-[5px] left-0 h-[2px] hidden md:block overflow-hidden"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "linear" }}
            >
              {/* Inner div is extremely wide so dots just get revealed, not stretched */}
              <div className="w-[2000px] h-full border-t-2 border-dotted border-foreground/30" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 relative z-10">
              
              {/* Item 1 */}
              <div className="flex flex-col relative">
                {/* The Dot */}
                <motion.div 
                  className="w-5 h-5 rounded-full bg-[#bef264] absolute -top-[45px] left-0 hidden md:block"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.4, type: "spring", bounce: 0.5 }}
                />
                
                {/* The Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h3 className="font-sans text-3xl lg:text-[32px] tracking-tight mb-6 text-foreground">Strategy</h3>
                  <p className="text-foreground/80 text-[15px] leading-relaxed mb-8 font-sans pr-4">
                    Beautiful, functional brands designed with strategy and intuition.
                  </p>
                  <ul className="flex flex-col gap-3 text-foreground/90 font-sans text-[15px] list-disc pl-4 marker:text-foreground/40">
                    <li>Discovery</li>
                    <li>Strategy Workshop</li>
                    <li>Brand Messaging</li>
                  </ul>
                </motion.div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col relative">
                <motion.div 
                  className="w-5 h-5 rounded-full bg-[#bef264] absolute -top-[45px] left-0 hidden md:block"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0, duration: 0.4, type: "spring", bounce: 0.5 }}
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                >
                  <h3 className="font-sans text-3xl lg:text-[32px] tracking-tight mb-6 text-foreground">Design</h3>
                  <p className="text-foreground/80 text-[15px] leading-relaxed mb-8 font-sans pr-4">
                    A great brand is unique, differentiated, and memorable. Its design should be supported with clear rationale.
                  </p>
                  <ul className="flex flex-col gap-3 text-foreground/90 font-sans text-[15px] list-disc pl-4 marker:text-foreground/40">
                    <li>Logo & Brandmark</li>
                    <li>Visual Identity System</li>
                  </ul>
                </motion.div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col relative">
                <motion.div 
                  className="w-5 h-5 rounded-full bg-[#bef264] absolute -top-[45px] left-0 hidden md:block"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.8, duration: 0.4, type: "spring", bounce: 0.5 }}
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.1, duration: 0.6 }}
                >
                  <h3 className="font-sans text-3xl lg:text-[32px] tracking-tight mb-6 text-foreground">Implementation</h3>
                  <p className="text-foreground/80 text-[15px] leading-relaxed mb-8 font-sans pr-4">
                    The brands we create transcend their brand guides. They don't just look great in theory, they actually work in the real world, maintaining their beauty and function when applied to signage, apparel, collateral, and the web.
                  </p>
                  <ul className="flex flex-col gap-3 text-foreground/90 font-sans text-[15px] list-disc pl-4 marker:text-foreground/40">
                    <li>Asset creation</li>
                  </ul>
                </motion.div>
              </div>

            </div>
          </div>
        </section>



        <Footer />
      </main>
    </div>
  )
}
