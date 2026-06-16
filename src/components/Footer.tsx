'use client'

import React from 'react'

const ArrowUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
)

const LinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-8 relative w-full border-t border-white/5">
      <div className="px-8 lg:px-20 mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <a href="mailto:hello@thepiecraft.com" className="font-sans text-xl md:text-2xl font-medium tracking-tight hover:text-[#c4e5e3] transition-colors">
              hello@thepiecraft.com
            </a>
            <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <LinkIcon />
            </button>
          </div>
          <div className="flex items-center gap-6 text-white/60 font-medium">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Center Column: Logo */}
        <div className="flex flex-col items-center justify-center md:absolute md:left-1/2 md:top-16 md:-translate-x-1/2">
          {/* Stylized Monogram */}
          <div className="text-[clamp(100px,12vw,160px)] font-serif leading-none tracking-tighter text-[#c4e5e3]">
            TPC
          </div>
          <span className="text-[#c4e5e3]/70 font-sans text-sm md:text-base tracking-[0.3em] uppercase mt-2">
            Web Development
          </span>
        </div>

        {/* Right Column: Newsletter */}
        <div className="flex flex-col gap-4 w-full md:w-auto mt-16 md:mt-0">
          <h3 className="font-sans font-medium text-lg">Newsletter</h3>
          <div className="relative w-full md:w-[300px]">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-[#1a1a1a] text-white rounded px-4 py-4 pr-12 focus:outline-none focus:ring-1 focus:ring-[#c4e5e3] transition-all"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors">
              <ArrowRightIcon />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Legal Section */}
      <div className="mt-40 px-8 lg:px-20 mx-auto w-full flex flex-col items-center gap-4 text-xs font-medium text-white/40">
        <p>©{new Date().getFullYear()} ThePieCraft. All Rights Reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">For Humans</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">For Robots</a>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-black rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110 shadow-xl z-50"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon />
      </button>

    </footer>
  )
}
