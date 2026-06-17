'use client';

import { use, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/projects';
import Footer from '@/components/Footer';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Determine if this project is the dark variant based on the caseStudyTheme property.
  const isDark = project.caseStudyTheme === 'dark';
  
  // Create an explicit class block to force the page's color scheme globally.
  // This bypasses any lingering .dark classes from the html tag.
  const themeClasses = isDark ? 'bg-[#0a0a0a] text-[#f0ece1]' : 'bg-[#f0ece1] text-[#0a0a0a]';
  const borderClass = isDark ? 'border-[#f0ece1]/10' : 'border-[#0a0a0a]/10';
  const mutedTextClass = isDark ? 'text-[#f0ece1]/50' : 'text-[#0a0a0a]/50';

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Clean up on unmount or route change handled by PageTransition
  }, [isDark]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-700 ease-out ${themeClasses}`}>
      <main className="flex-1">
        
        {/* 1. Enormous Hero Section */}
        <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 px-5 sm:px-8 lg:px-20 overflow-hidden">
          {/* Subtle Geometric Overlay for visual interest instead of an image */}
          <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 1000 1000" className="w-[120vw] h-auto max-w-none" preserveAspectRatio="xMidYMid slice">
              <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="100" y1="500" x2="900" y2="500" stroke="currentColor" strokeWidth="1" />
              <line x1="500" y1="100" x2="500" y2="900" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="z-10 text-center w-full max-w-[1600px]"
          >
            <div className="flex gap-3 justify-center mb-10">
              {project.tag.split('·').map(t => (
                <span key={t} className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-widest uppercase border ${borderClass}`}>
                  {t.trim()}
                </span>
              ))}
            </div>
            <h1 className="font-serif text-[clamp(50px,12vw,180px)] leading-[0.9] tracking-tight mb-8">
              {project.name}
            </h1>
            <p className="font-sans text-[clamp(20px,3vw,36px)] leading-snug max-w-4xl mx-auto opacity-80 mb-12">
              {project.desc}
            </p>
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-block px-8 py-4 rounded-full font-sans font-medium text-sm tracking-wide border transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-[#f0ece1] text-[#0a0a0a] border-transparent hover:bg-transparent hover:text-[#f0ece1] hover:border-[#f0ece1]' 
                    : 'bg-[#0a0a0a] text-[#f0ece1] border-transparent hover:bg-transparent hover:text-[#0a0a0a] hover:border-[#0a0a0a]'
                }`}
              >
                Visit Live Site ↗
              </a>
            )}
          </motion.div>
        </section>

        {/* 2. Metadata Asymmetrical Grid */}
        <section className={`px-5 sm:px-8 lg:px-20 py-20 border-t ${borderClass}`}>
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-8 lg:col-span-6 pr-0 lg:pr-20">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
                We partnered with {project.client} to redefine their digital presence and set a new standard in their industry.
              </h2>
            </div>
            
            <div className="md:col-span-4 lg:col-start-9 flex flex-col gap-10">
              <div className={`border-l pl-6 ${borderClass}`}>
                <p className={`font-sans text-xs uppercase tracking-widest mb-2 ${mutedTextClass}`}>Client</p>
                <p className="font-sans text-xl font-medium">{project.client}</p>
              </div>
              <div className={`border-l pl-6 ${borderClass}`}>
                <p className={`font-sans text-xs uppercase tracking-widest mb-2 ${mutedTextClass}`}>Year</p>
                <p className="font-sans text-xl font-medium">{project.year}</p>
              </div>
              <div className={`border-l pl-6 ${borderClass}`}>
                <p className={`font-sans text-xs uppercase tracking-widest mb-3 ${mutedTextClass}`}>Services</p>
                <ul className="flex flex-col gap-2">
                  {project.services.map(s => (
                    <li key={s} className="font-sans text-xl font-medium">{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Full Bleed Image Placeholder */}
        <section className="w-full px-5 sm:px-8 lg:px-20 py-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`w-full aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden flex items-center justify-center ${project.mockupBg}`}
          >
             <span className={`font-sans text-sm tracking-widest uppercase ${mutedTextClass}`}>Full Bleed Media Placeholder</span>
          </motion.div>
        </section>

        {/* 4. Challenge & Solution (Structural Split Layout) */}
        <section className="px-5 sm:px-8 lg:px-20 py-24 sm:py-32 w-full max-w-[1600px] mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 border-y ${borderClass}`}>
            
            {/* Challenge */}
            <div className={`py-16 lg:py-24 lg:pr-16 flex flex-col gap-10 border-b lg:border-b-0 lg:border-r ${borderClass}`}>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-current opacity-30" />
                <h3 className={`font-sans text-sm uppercase tracking-widest ${mutedTextClass}`}>The Challenge</h3>
              </div>
              <p className="font-sans text-xl sm:text-2xl lg:text-[28px] leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className={`py-16 lg:py-24 lg:pl-16 flex flex-col gap-10`}>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-current opacity-30" />
                <h3 className={`font-sans text-sm uppercase tracking-widest ${mutedTextClass}`}>The Solution</h3>
              </div>
              <p className="font-sans text-xl sm:text-2xl lg:text-[28px] leading-relaxed font-light">
                {project.solution}
              </p>
            </div>

          </div>
        </section>

        {/* 5. The Results (Colossal Typography) */}
        <section className={`px-5 sm:px-8 lg:px-20 py-32 sm:py-48 border-t ${borderClass}`}>
          <div className="max-w-[1600px] mx-auto">
            <h3 className={`font-sans text-sm uppercase tracking-widest mb-20 text-center ${mutedTextClass}`}>The Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
              {project.results.map((r, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <span className="font-serif text-[clamp(80px,12vw,160px)] leading-none tracking-tighter">
                    {r.value}
                  </span>
                  <span className={`font-sans text-sm uppercase tracking-widest ${mutedTextClass}`}>
                    {r.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
