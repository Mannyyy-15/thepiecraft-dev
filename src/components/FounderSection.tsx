'use client'

import Image from 'next/image'

export default function FounderSection() {
  return (
    <section className="bg-background text-foreground transition-colors duration-700 ease-out py-20 sm:py-32 overflow-hidden border-t border-black/5 dark:border-white/5">
      <div className="px-5 sm:px-8 lg:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Photo */}
        <div className="w-full lg:w-5/12 relative">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden group">
            {/* The image */}
            <Image 
              src="/founder.png" 
              alt="Founder" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Dark overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Aesthetic corner label */}
          <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center justify-center w-32 h-32 rounded-full border border-foreground/20 bg-background rotate-[-15deg] hover:rotate-0 transition-transform duration-500">
            <span className="font-serif italic text-2xl text-foreground text-center leading-none">
              Est.<br/>2010
            </span>
          </div>
        </div>

        {/* Right Side: Philosophy */}
        <div className="w-full lg:w-7/12 flex flex-col items-start">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] font-medium opacity-50 mb-8">
            The Philosophy
          </p>
          
          <h2 className="font-serif text-[clamp(32px,4vw,56px)] leading-[1.1] mb-10 text-foreground">
            "We don't just build websites. We build digital ecosystems that turn ambitious ideas into lasting, profitable businesses."
          </h2>
          
          <div className="flex flex-col gap-2">
            <span className="font-sans font-medium text-lg tracking-tight">Emanuel</span>
            <span className="font-sans text-sm opacity-60">Founder & Creative Director</span>
          </div>

          <div className="mt-12 w-16 h-[1px] bg-foreground/20" />
        </div>

      </div>
    </section>
  )
}
