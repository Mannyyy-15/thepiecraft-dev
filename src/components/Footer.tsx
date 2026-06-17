'use client'

import React from 'react'

const ArrowUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7"/>
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
    <footer className="bg-[#050505] text-white w-full overflow-hidden">

      {/* ── Desktop layout ───────────────────────────────── */}
      <div className="hidden lg:grid grid-cols-3 items-start px-20 pt-16 pb-10 border-b border-white/10">

        {/* Left — email + socials */}
        <div className="flex flex-col gap-5">
          <a
            href="mailto:info@thepiecraftmarketing.com"
            className="font-sans text-xl font-medium tracking-tight text-white hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            info@thepiecraftmarketing.com
            <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/50">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
            </span>
          </a>
          <div className="flex items-center gap-6 text-white/50 font-sans text-sm font-medium">
            <a href="https://instagram.com/thepiecraftmarketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://linkedin.com/in/the-piecraft-marketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://youtube.com/@thepiecraftmarketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>

        {/* Center — monogram */}
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="font-serif text-[clamp(80px,9vw,140px)] leading-none tracking-tighter text-brand-blue">
            TPC
          </div>
          <span className="text-brand-blue/50 font-sans text-xs tracking-[0.3em] uppercase">
            Web Development
          </span>
        </div>

        {/* Right — newsletter */}
        <div className="flex flex-col items-end gap-4">
          <p className="font-sans text-sm font-medium tracking-wide text-white">Newsletter</p>
          <div className="relative w-72">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/8 border border-white/10 text-white rounded-lg px-5 py-3.5 pr-14 text-sm focus:outline-none focus:border-brand-blue/40 transition-all placeholder:text-white/35"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/15 hover:bg-white/25 rounded-md flex items-center justify-center text-white transition-colors">
              <ArrowRightIcon />
            </button>
          </div>
        </div>

      </div>

      {/* ── Desktop legal bar ───────────────────────────── */}
      <div className="hidden lg:flex flex-col items-center gap-2 py-6 text-[11px] text-white/30 font-medium border-b border-white/10">
        <p>©{new Date().getFullYear()} ThePieCraft. All Rights Reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span className="opacity-40">|</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <span className="opacity-40">|</span>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
        </div>
      </div>

      {/* ── Mobile layout (unchanged) ────────────────────── */}
      <div className="lg:hidden">

        <div className="flex flex-col items-center justify-center pt-16 pb-8 px-5 text-center border-b border-white/10">
          <div className="font-serif text-[clamp(80px,20vw,160px)] leading-none tracking-tighter text-brand-blue">
            TPC
          </div>
          <span className="text-brand-blue/60 font-sans text-xs tracking-[0.3em] uppercase mt-2">
            Web Development
          </span>
        </div>

        <div className="px-5 py-12 grid grid-cols-1 sm:grid-cols-2 gap-10 border-b border-white/10">

          <div className="flex flex-col items-center sm:items-start gap-5 text-center sm:text-left">
            <p className="font-sans text-[11px] uppercase tracking-widest text-white/40">Get in touch</p>
            <a href="mailto:info@thepiecraftmarketing.com" className="font-sans text-lg font-medium tracking-tight hover:text-white/70 transition-colors break-all">
              info@thepiecraftmarketing.com
            </a>
            <div className="flex items-center gap-5 text-white/50 font-medium text-sm">
              <a href="https://instagram.com/thepiecraftmarketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://linkedin.com/in/the-piecraft-marketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://youtube.com/@thepiecraftmarketing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-5 text-center sm:text-left">
            <p className="font-sans text-[11px] uppercase tracking-widest text-white/40">Newsletter</p>
            <div className="relative w-full max-w-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 text-white rounded-full px-5 py-3.5 pr-14 text-sm focus:outline-none focus:border-brand-blue/50 transition-all placeholder:text-white/30"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white text-black rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                <ArrowRightIcon />
              </button>
            </div>
          </div>

        </div>

        <div className="px-5 py-6 flex flex-col items-center gap-3 text-[11px] text-white/30 font-medium text-center">
          <p>©{new Date().getFullYear()} ThePieCraft. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="opacity-40">·</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span className="opacity-40">·</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>

      </div>

      {/* ── Back to top ─────────────────────────────────── */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110 shadow-xl z-50"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon />
      </button>

    </footer>
  )
}
