'use client'

import React from 'react'
import Link from 'next/link'

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

      {/* ── Big TPC monogram ────────────────────────────── */}
      <div className="flex flex-col items-center justify-center pt-16 sm:pt-24 pb-8 sm:pb-12 px-5 text-center border-b border-white/10">
        <div className="font-serif text-[clamp(80px,20vw,160px)] leading-none tracking-tighter text-brand-blue">
          TPC
        </div>
        <span className="text-brand-blue/60 font-sans text-xs sm:text-sm tracking-[0.3em] uppercase mt-2">
          Web Development
        </span>
      </div>

      {/* ── Main footer grid ────────────────────────────── */}
      <div className="px-5 sm:px-8 lg:px-20 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-white/10">

        {/* Column 1 — Contact */}
        <div className="flex flex-col gap-5">
          <p className="font-sans text-[11px] uppercase tracking-widest text-white/40">Get in touch</p>
          <a
            href="mailto:hello@thepiecraft.com"
            className="font-sans text-lg sm:text-xl font-medium tracking-tight hover:text-brand-blue transition-colors break-all"
          >
            hello@thepiecraft.com
          </a>
          <div className="flex items-center gap-5 text-white/50 font-medium text-sm mt-1">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Column 2 — Navigation */}
        <div className="flex flex-col gap-5">
          <p className="font-sans text-[11px] uppercase tracking-widest text-white/40">Navigation</p>
          <nav className="flex flex-col gap-3">
            {[
              { label: 'Work', href: '/work' },
              { label: 'Software', href: '/software' },
              { label: 'Web', href: '/websites' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-sans text-base text-white/60 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3 — Newsletter */}
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <p className="font-sans text-[11px] uppercase tracking-widest text-white/40">Newsletter</p>
          <p className="text-sm text-white/50 leading-relaxed">
            Stay updated with our latest projects and insights.
          </p>
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

      {/* ── Legal bar ───────────────────────────────────── */}
      <div className="px-5 sm:px-8 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/30 font-medium">
        <p>©{new Date().getFullYear()} ThePieCraft. All Rights Reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span className="opacity-40">·</span>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <span className="opacity-40">·</span>
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
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
