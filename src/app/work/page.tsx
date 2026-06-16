'use client'

import React, { useState } from 'react'
import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

const portfolioProjects = [
  { id: 1, name: 'Omaha Performing Arts', tag: 'Web', desc: 'Website for an arts and entertainment nonprofit.', bg: '#f8fafc', textColor: 'text-slate-800' },
  { id: 2, name: 'Foster CRM', tag: 'Software', desc: 'Custom CRM platform for an experiential marketing firm.', bg: '#0f172a', textColor: 'text-blue-200' },
  { id: 3, name: 'HudlTV', tag: 'Software', desc: 'SaaS platform for a live streaming service.', bg: '#000000', textColor: 'text-white' },
  { id: 4, name: 'My Cyber Path', tag: 'Web', desc: 'Website for an online cyber security career platform.', bg: '#dbeafe', textColor: 'text-blue-900' },
  { id: 5, name: 'DataSphere', tag: 'Software', desc: 'SaaS analytics dashboard for a modern data studio.', bg: '#1e1b4b', textColor: 'text-violet-200' },
  { id: 6, name: 'Lattice', tag: 'Web', desc: 'Website for B2B SaaS data company.', bg: '#e6f1f3', textColor: 'text-slate-800' },
]

export default function WorkPage() {
  const [filter, setFilter] = useState('All')
  const [isHoveringGrid, setIsHoveringGrid] = useState(false)

  const filteredProjects = portfolioProjects.filter(p => 
    filter === 'All' ? true : p.tag === filter
  )

  return (
    <>
      {/* Reusing the global ticker and navbar exactly as on the home page */}
      <header className="sticky top-0 z-50 w-full flex flex-col">
        <Ticker />
        <Navbar />
      </header>
      
      {/* Page Content */}
      <main className="min-h-screen bg-background transition-colors duration-700 ease-out flex flex-col">
        <CustomCursor isVisible={isHoveringGrid} />
        
        <div className="flex-1 px-8 lg:px-20 pt-20 pb-32">
          {/* Header */}
          <h1 className="font-serif text-[clamp(60px,8vw,100px)] leading-none mb-16 tracking-tight">Our Work</h1>
          
          {/* Filters */}
          <div className="flex gap-8 mb-16 border-b border-foreground/10 pb-6">
            {['All', 'Software', 'Web'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-sans text-lg font-medium transition-colors ${
                  filter === f ? 'text-foreground' : 'text-foreground/40 hover:text-foreground/70'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid Container matching G&M layout */}
          {/* 1400px width with 40px (gap-10) gap perfectly yields two 680px small cards */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 lg:gap-y-16 cursor-none w-full max-w-[1400px] mx-auto"
            onMouseEnter={() => setIsHoveringGrid(true)}
            onMouseLeave={() => setIsHoveringGrid(false)}
          >
            {filteredProjects.map((p, index) => {
              // Every 3rd item (0, 3, 6) spans full width
              const isBig = index % 3 === 0

              return (
                <div 
                  key={p.id} 
                  className={`group ${isBig ? 'md:col-span-2' : 'md:col-span-1'}`}
                >
                  {/* Image Placeholder */}
                  <div 
                    className={`w-full ${isBig ? 'aspect-video md:aspect-[1400/790]' : 'aspect-[4/3] md:aspect-[680/445]'} rounded-3xl mb-6 flex items-center justify-center overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-2xl`}
                    style={{ backgroundColor: p.bg }}
                  >
                    <div className="w-full h-full flex items-center justify-center transition-transform duration-1000 ease-out group-hover:scale-105">
                      <span className={`font-serif text-[clamp(32px,4vw,56px)] font-medium ${p.textColor} drop-shadow-md`}>
                        {p.name}
                      </span>
                    </div>
                  </div>
                  {/* Typography */}
                  <div className="w-full pl-2">
                    <h3 className="font-serif font-medium text-2xl lg:text-[28px] mb-2">{p.name}</h3>
                    <p className="text-foreground/70 text-lg font-sans">{p.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
