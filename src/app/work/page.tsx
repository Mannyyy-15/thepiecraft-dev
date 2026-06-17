'use client'

import { useState, useEffect } from 'react'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { PROJECTS } from '@/lib/projects'
// Navbar + Ticker are rendered globally in layout.tsx — do NOT add them here

// Minimal card thumbnail — placeholder art per project
function CardArt({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        <circle cx="200" cy="150" r="100" fill="none" stroke={project.accent} strokeWidth="1" />
        <circle cx="200" cy="150" r="60"  fill="none" stroke={project.accent} strokeWidth="0.8" />
        <line x1="0" y1="150" x2="400" y2="150" stroke={project.accent} strokeWidth="0.5" />
        <line x1="200" y1="0" x2="200" y2="300" stroke={project.accent} strokeWidth="0.5" />
      </svg>
      {/* Central dot */}
      <div
        className="w-5 h-5 rounded-full z-10"
        style={{ backgroundColor: project.accent }}
      />
    </div>
  )
}

export default function WorkPage() {
  const [filter, setFilter] = useState('All')

  const filtered = PROJECTS.filter(p =>
    filter === 'All' ? true : p.tag.includes(filter)
  )

  // The Work page is naturally dark, so we force the global dark class.
  // This ensures CustomCursor and Navbar invert their colors correctly.
  useEffect(() => {
    document.documentElement.classList.add('dark')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <div className="flex-1 px-4 sm:px-8 lg:px-20 pt-12 sm:pt-20 pb-20">

        {/* Page heading */}
        <h1 className="font-serif text-[clamp(48px,8vw,100px)] leading-none mb-10 sm:mb-16 tracking-tight">
          Our Work
        </h1>

        {/* Filters */}
        <div className="flex gap-6 sm:gap-8 mb-10 sm:mb-16 border-b border-white/10 pb-5">
          {['All', 'Software', 'Web', 'Brand'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-sans text-base sm:text-lg font-medium transition-colors ${
                filter === f ? 'text-white' : 'text-white/30 hover:text-white/60'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project list — matches screenshot layout:
            full-width card, then 2-col pair, repeating */}
        <div className="w-full cursor-none">
          {Array.from({ length: Math.ceil(filtered.length / 3) }).map((_, groupIdx) => {
            const big   = filtered[groupIdx * 3]
            const small1 = filtered[groupIdx * 3 + 1]
            const small2 = filtered[groupIdx * 3 + 2]

            return (
              <div key={groupIdx} className="mb-6 sm:mb-10 flex flex-col gap-4 sm:gap-6">

                {/* Full-width card */}
                {big && (
                  <Link href={`/work/${big.slug}`} className="group w-full outline-none block" data-cursor="view">
                    <div
                      className="w-full rounded-2xl overflow-hidden mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-[1.01]"
                      style={{ backgroundColor: big.bg, aspectRatio: '16/9' }}
                    >
                      <CardArt project={big} />
                    </div>
                    <h3 className="font-sans font-medium text-white text-base sm:text-xl leading-tight">
                      {big.name}
                    </h3>
                    <p className="font-sans text-white/40 text-sm sm:text-base mt-1 leading-snug">
                      {big.desc}
                    </p>
                  </Link>
                )}

                {/* Two-col small cards */}
                {(small1 || small2) && (
                  <div className="grid grid-cols-2 gap-3 sm:gap-6">
                    {[small1, small2].map((p, i) =>
                      p ? (
                        <Link href={`/work/${p.slug}`} key={p.id} className="group outline-none block" data-cursor="view">
                          <div
                            className="w-full rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-3 transition-transform duration-500 group-hover:scale-[1.01]"
                            style={{ backgroundColor: p.bg, aspectRatio: '4/3' }}
                          >
                            <CardArt project={p} />
                          </div>
                          <h3 className="font-sans font-medium text-white text-sm sm:text-lg leading-tight">
                            {p.name}
                          </h3>
                          <p className="font-sans text-white/40 text-xs sm:text-sm mt-0.5 leading-snug">
                            {p.desc}
                          </p>
                        </Link>
                      ) : (
                        <div key={i} />
                      )
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <Footer />
    </main>
  )
}
