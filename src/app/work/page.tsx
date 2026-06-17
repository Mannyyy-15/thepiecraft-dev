'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
// Navbar + Ticker are rendered globally in layout.tsx — do NOT add them here

const portfolioProjects = [
  {
    id: 1,
    name: 'Omaha Performing Arts',
    tag: 'Web',
    desc: 'Website for an arts and entertainment nonprofit.',
    bg: '#f0f0ee',
    accent: '#1a1a1a',
  },
  {
    id: 2,
    name: 'My Cyber Path',
    tag: 'Web',
    desc: 'Website for an online cyber security career platform.',
    bg: '#1e1535',
    accent: '#a78bfa',
  },
  {
    id: 3,
    name: 'Walthill Public Schools',
    tag: 'Brand',
    desc: 'Brand and collateral for an indigenous preK-12 school.',
    bg: '#1a6eb5',
    accent: '#ffffff',
  },
  {
    id: 4,
    name: 'Foster CRM',
    tag: 'Software',
    desc: 'Custom CRM platform for an experiential marketing firm.',
    bg: '#0f172a',
    accent: '#7dd3fc',
  },
  {
    id: 5,
    name: 'HudlTV',
    tag: 'Software',
    desc: 'SaaS platform for a live streaming service.',
    bg: '#000000',
    accent: '#f97316',
  },
  {
    id: 6,
    name: 'Building Brand',
    tag: 'Brand',
    desc: 'Identity system for a commercial construction firm.',
    bg: '#e8dcc8',
    accent: '#2d1f0f',
  },
]

// Minimal card thumbnail — placeholder art per project
function CardArt({ project }: { project: typeof portfolioProjects[0] }) {
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
  const [isHoveringGrid, setIsHoveringGrid] = useState(false)

  const filtered = portfolioProjects.filter(p =>
    filter === 'All' ? true : p.tag === filter
  )

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <CustomCursor isVisible={isHoveringGrid} />

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
        <div
          className="w-full cursor-none"
          onMouseEnter={() => setIsHoveringGrid(true)}
          onMouseLeave={() => setIsHoveringGrid(false)}
        >
          {Array.from({ length: Math.ceil(filtered.length / 3) }).map((_, groupIdx) => {
            const big   = filtered[groupIdx * 3]
            const small1 = filtered[groupIdx * 3 + 1]
            const small2 = filtered[groupIdx * 3 + 2]

            return (
              <div key={groupIdx} className="mb-6 sm:mb-10 flex flex-col gap-4 sm:gap-6">

                {/* Full-width card */}
                {big && (
                  <div className="group w-full">
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
                  </div>
                )}

                {/* Two-col small cards */}
                {(small1 || small2) && (
                  <div className="grid grid-cols-2 gap-3 sm:gap-6">
                    {[small1, small2].map((p, i) =>
                      p ? (
                        <div key={p.id} className="group">
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
                        </div>
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
