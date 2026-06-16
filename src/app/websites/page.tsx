'use client'

import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutTemplate, AlignLeft, Code2, ShoppingCart, Settings, ArrowUpRight, ArrowLeft, ArrowRight, Plus, X } from 'lucide-react'
import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectsSection from '@/components/ProjectsSection'

const WHY_ITEMS = [
  {
    title: "Custom made for your brand.",
    intro: "Your website is the largest and most visible expression of your brand. No pressure.",
    body: "Every site we build is tailor made for our clients for their unique brand. Working through site-mapping and content hierarchy, designing layouts that convert, and creating delightful interactions to add movement and engagement brings your brand to life on the web."
  },
  {
    title: "Expertly organized.",
    intro: "We organize our sock drawers for fun, so trust us, no one likes an organization job more than we do. Designing and developing a website is like one, big, messy sock drawer, and we can't wait to get our hands in there.",
    body: "Content – text, imagery, etc. – needs to be sifted through. Pages need to be added / removed / rewritten / moved around. Navigation needs reworked. We've created an organizational process that removes friction and allows us all to be successful."
  },
  {
    title: "Built for scale.",
    intro: "From day one, we're thinking about your growth. We ensure the site platform is right for you, allowing flexibility for your growth journey. If the goal is expansion, your site needs to be able to expand.",
    body: "Because we wrote the code, we can fix the code. Bug fixing and maintenance comes with the territory, but it's just a quick email to our team. We handle site security and run backups so you never have to worry about protecting your site."
  },
  {
    title: "Done right the first time.",
    intro: "We have over 20 years of experience designing and building websites from scratch. Blazing forward without a strategic plan never ends well, so we think first, then do.",
    body: "Our process is a step-by-step approach with plenty of checkpoints. This allows for proper collaboration between you and our team so no one is lost along the way. When roadblocks come, we don't cut corners. We get creative. Whether that means taking a phased approach or finding a different technology solution, we maintain a high standard of design no matter what."
  }
]

const PROCESS_STEPS = [
  {
    title: "Discovery & Strategy",
    description: "First, we need to get to know you a bit more. We'll send you discovery questions and gather any information we need. We'll go over goals and host the kickoff meeting."
  },
  {
    title: "Content Audit",
    description: "Your old site content needs to be audited to ensure it aligns with your goals for the new site. Determining what content will stay, what will go, and what will be revised is an essential step."
  },
  {
    title: "Flowchart",
    description: "The flowchart is a high-level blueprint of the website. We lay out the pages that will be included on the site and how they connect to each other. We identify the page goal, key topics, and a call to action for each page."
  },
  {
    title: "Copy Strategy",
    description: "Our team provides an overarching copy strategy and begins writing suggested headlines and high-level copy for the wireframes. This will give your team direction and context as you write."
  },
  {
    title: "Wireframes",
    description: "The wireframes are the structure of each page, including user flow and content placement. There are created in grayscale, omitting any branding elements or assets to remove distractions."
  },
  {
    title: "Copywriting",
    description: "As the wireframes are being formed, we'll ask you for draft copy. The wireframes provide a visual aid as you and your team write the copy in Google Docs for each page of the site. The goal is to have a strong draft of real copy before heading into design."
  },
  {
    title: "Design",
    description: "The design builds upon the initial strategy and wireframes by applying the brand elements and the content, creating the overall user experience."
  },
  {
    title: "Development",
    description: "In development we take the approved designs and write them in code, resulting in working, functional website pages."
  },
  {
    title: "QA",
    description: "During QA, our team will comb through the site, testing and proofing everything before we send it to your team for a final look. During this final look — what we call soft launch —, we'll make any final edits before going live."
  },
  {
    title: "Training",
    description: "We'll provide you with a comprehensive in-dashboard training library on all your dashboard administration features. This allows you and your team to quickly and easily make updates to your site. And if you ever need to transfer site-editing duties to someone else, they'll have everything they need to get up to speed."
  },
  {
    title: "Launch",
    description: "After soft launch, we'll ask for your approval to launch the final site. Our team will launch the site on your server, and you'll be off to the races. Then, ideally, we party."
  }
]

export default function WebsitesPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [openWhyIndex, setOpenWhyIndex] = useState<number | null>(null);

  const toggleWhy = (index: number) => {
    setOpenWhyIndex(openWhyIndex === index ? null : index);
  };

  const scrollLeft = () => {
    if (carouselRef.current && carouselRef.current.firstElementChild) {
      const flexContainer = carouselRef.current.firstElementChild;
      if (flexContainer.children.length > 1) {
        const itemWidth = (flexContainer.children[1] as HTMLElement).offsetWidth || 400;
        const gap = window.innerWidth >= 1024 ? 96 : 64;
        carouselRef.current.scrollBy({ left: -(itemWidth + gap), behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && carouselRef.current.firstElementChild) {
      const flexContainer = carouselRef.current.firstElementChild;
      if (flexContainer.children.length > 1) {
        const itemWidth = (flexContainer.children[1] as HTMLElement).offsetWidth || 400;
        const gap = window.innerWidth >= 1024 ? 96 : 64;
        carouselRef.current.scrollBy({ left: (itemWidth + gap), behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="dark bg-background text-foreground min-h-screen font-sans selection:bg-white/20">
      <header className="sticky top-0 z-50 w-full flex flex-col">
        <Ticker />
        <Navbar />
      </header>
      
      <main className="flex flex-col w-full">
        
        {/* 1. Hero */}
        <section className="relative w-full h-[60vh] lg:h-[75vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 pointer-events-none max-w-[1400px] mx-auto">
            <div className="absolute top-[20%] left-[5%] lg:top-[25%] lg:left-[15%] bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 animate-float-slow">
              <LayoutTemplate className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Wireframes</span>
            </div>
            
            <div className="absolute top-[10%] left-[35%] lg:left-[40%] bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 animate-float-medium">
              <AlignLeft className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Content Strategy</span>
            </div>

            <div className="absolute top-[15%] right-[5%] lg:top-[20%] lg:right-[15%] bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 animate-float-fast">
              <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">UI/UX Design</span>
            </div>

            <div className="absolute top-[50%] right-[-5%] lg:top-[45%] lg:right-[10%] bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 animate-float-slow" style={{ animationDelay: '1s' }}>
              <Code2 className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Front-end Dev</span>
            </div>

            <div className="absolute bottom-[20%] left-[-5%] lg:bottom-[25%] lg:left-[10%] bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 animate-float-medium" style={{ animationDelay: '0.5s' }}>
              <Settings className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">CMS Integration</span>
            </div>

            <div className="absolute bottom-[10%] right-[10%] lg:bottom-[15%] lg:right-[20%] bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 animate-float-fast" style={{ animationDelay: '1.5s' }}>
              <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Ecommerce</span>
            </div>
          </div>

          <h1 className="font-serif text-[clamp(80px,12vw,180px)] leading-none tracking-tight relative z-10 text-white">Websites</h1>
        </section>

        {/* 2. Interactive Projects Carousel */}
        <ProjectsSection disableThemeToggle={true} />

        {/* 3. Capabilities Grid Redesign (Dark Mode) */}
        <section className="relative w-full px-4 lg:px-8 py-32 border-y border-white/10">
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] mb-16 text-center text-white">Capabilities</h2>
          
          <div className="w-full overflow-x-auto pb-12 hide-scrollbar" data-lenis-prevent>
            <div 
              className="relative border border-white/20 rounded-2xl overflow-hidden bg-[#0a0a0a] shrink-0 mx-auto"
              style={{ width: 1710, height: 1330 }}
            >
              <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                  backgroundSize: '95px 95px',
                }}
              />
              
              <div 
                className="absolute inset-0 grid"
                style={{
                  gridTemplateColumns: 'repeat(18, 95px)',
                  gridTemplateRows: 'repeat(14, 95px)',
                }}
              >
                {/* Card 1: Website design */}
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '1 / span 5', gridRow: '2 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Website design</h3>
                  
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <path d="M100 40L140 60L100 80L60 60L100 40Z" fill="#22c55e"/>
                      <path d="M140 60V80L100 100V80L140 60Z" fill="#16a34a"/>
                      <path d="M60 60V80L100 100V80L60 60Z" fill="#fef08a"/>
                    </svg>
                  </div>

                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">
                      Your website is where your brand speaks loudest, so we treat design decisions as opportunities for differentiation.
                    </p>
                  </div>
                </div>

                {/* Card 2: Content strategy */}
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '7 / span 6', gridRow: '1 / span 7' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Content strategy</h3>
                  
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <rect x="50" y="50" width="100" height="100" rx="20" className="stroke-white/20" strokeWidth="4"/>
                      <rect x="40" y="60" width="100" height="100" rx="20" className="fill-white/10"/>
                      <path d="M60 80H120" className="stroke-white/40" strokeWidth="6" strokeLinecap="round"/>
                      <path d="M60 100H140" className="stroke-white/40" strokeWidth="6" strokeLinecap="round"/>
                      <path d="M60 120H100" className="stroke-[#fef08a]" strokeWidth="6" strokeLinecap="round"/>
                    </svg>
                  </div>

                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">
                      We'll create a content strategy that works best for your brand and provide a framework for organizing it all.
                    </p>
                  </div>
                </div>

                {/* Card 3: Front-end dev */}
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '14 / span 5', gridRow: '2 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Front-end dev</h3>
                  
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <circle cx="100" cy="100" r="50" className="stroke-white/20" strokeWidth="4"/>
                      <circle cx="100" cy="100" r="30" className="stroke-white/40" strokeWidth="4"/>
                      <circle cx="100" cy="100" r="10" className="fill-[#fef08a]"/>
                    </svg>
                  </div>

                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">
                      Our proficiency allows us to replicate intricate design layouts into a working website that functions as well as it looks.
                    </p>
                  </div>
                </div>

                {/* Card 4: Ecommerce */}
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '1 / span 6', gridRow: '9 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Ecommerce</h3>
                  
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <rect x="50" y="60" width="80" height="60" rx="16" className="fill-white/10"/>
                      <path d="M50 80H130" className="stroke-white/40" strokeWidth="6" strokeLinecap="round"/>
                      <circle cx="90" cy="150" r="10" className="fill-[#22c55e]"/>
                      <circle cx="120" cy="150" r="10" className="fill-[#fef08a]"/>
                    </svg>
                  </div>

                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">
                      You don't have to sacrifice beauty for conversions. We build on-brand, robust ecommerce websites.
                    </p>
                  </div>
                </div>

                {/* Card 5: CMS */}
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '7 / span 6', gridRow: '8 / span 7' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Content Management System</h3>
                  
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <rect x="40" y="50" width="120" height="100" rx="20" className="fill-[#111] border-white/10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="4"/>
                      <path d="M70 80H130" className="stroke-[#fef08a]" strokeWidth="6" strokeLinecap="round"/>
                      <path d="M70 100H150" className="stroke-[#22c55e]" strokeWidth="6" strokeLinecap="round"/>
                    </svg>
                  </div>

                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug w-3/4">
                      A CMS allows you to edit your site without touching code. We'll suggest a CMS that equips your team well.
                    </p>
                  </div>
                </div>

                {/* Card 6: Maintenance */}
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '14 / span 5', gridRow: '9 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Ongoing maintenance</h3>
                  
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <path d="M100 40L140 60L100 80L60 60L100 40Z" fill="#16a34a"/>
                      <path d="M140 60V80L100 100V80L140 60Z" fill="#22c55e"/>
                      <path d="M60 60V80L100 100V80L60 60Z" fill="#fef08a"/>
                      
                      <path d="M140 90L180 110L140 130L100 110L140 90Z" fill="#16a34a"/>
                      <path d="M180 110V130L140 150V130L180 110Z" fill="#22c55e"/>
                      <path d="M100 110V130L140 150V130L100 110Z" fill="#fef08a"/>
                    </svg>
                  </div>

                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">
                      We offer ongoing maintenance plans for better security, faster load times, and higher search rankings.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 3.5 Why Accordion */}
        <section className="px-8 lg:px-20 py-32 border-b border-white/10 w-full">
          <h2 className="font-sans text-xl lg:text-2xl tracking-tight text-white mb-8">Why</h2>
          <div className="flex flex-col border-t border-white/10">
            {WHY_ITEMS.map((item, index) => {
              const isOpen = openWhyIndex === index;
              return (
                <div key={index} className="border-b border-white/10">
                  <button 
                    onClick={() => toggleWhy(index)}
                    className="w-full py-8 lg:py-10 flex items-center justify-between text-left group outline-none"
                  >
                    <h3 className="font-serif text-[clamp(28px,4vw,40px)] text-white/90 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-white/70 transition-all duration-300 group-hover:border-white/40 group-hover:text-white group-hover:scale-105">
                      {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-16 pt-2 lg:pt-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative pl-2 lg:pl-0">
                          <div className="text-white/80 font-sans text-xl lg:text-[22px] leading-snug">
                            {item.intro}
                          </div>
                          
                          <div className="relative pt-8 lg:pt-20">
                            {/* The curved hand-drawn arrow */}
                            <svg className="absolute -top-6 -left-8 lg:-top-16 lg:-left-24 w-24 h-24 lg:w-40 lg:h-40 text-white/50 stroke-current drop-shadow-md" viewBox="0 0 200 200" fill="none">
                              <motion.path 
                                d="M 20 20 C 120 10, 180 50, 160 160" 
                                strokeWidth="3" 
                                strokeLinecap="round" 
                                strokeDasharray="6 8"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                              />
                              <motion.path 
                                d="M 140 145 L 160 160 L 175 135" 
                                strokeWidth="3" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2, delay: 0.4 }}
                              />
                            </svg>

                            <p className="text-white/60 font-sans text-[16px] lg:text-[17px] leading-relaxed relative z-10">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Process Carousel (11 Steps) */}
        <section className="py-32 pb-48 relative overflow-hidden border-b border-white/10">
          <div className="px-8 lg:px-20 mb-20 flex items-center justify-between">
            <h2 className="font-sans text-4xl lg:text-[40px] tracking-tight text-white">Process</h2>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div 
              ref={carouselRef}
              className="overflow-x-auto hide-scrollbar scroll-smooth"
            >
              <div className="flex gap-16 lg:gap-24 relative z-10 px-8 lg:px-20 pb-12 pt-16 w-max">
                {/* The animated dotted timeline track connecting all nodes */}
                <div className="absolute top-[28px] left-8 lg:left-20 right-8 lg:right-20 h-[2px] hidden md:block pointer-events-none z-0">
                  <motion.div 
                    className="w-full h-full border-t-2 border-dotted border-white/30 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, ease: "easeOut" }}
                  />
                </div>

                {PROCESS_STEPS.map((step, index) => (
                  <div key={step.title} className="flex flex-col relative w-[80vw] md:w-[40vw] lg:w-[26vw] shrink-0">
                    
                    {/* The Node Dot */}
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
                      transition={{ delay: 0.1 * (index % 4), duration: 0.6 }}
                    >
                      <h3 className="font-sans text-2xl lg:text-[32px] tracking-tight mb-4 lg:mb-6 text-white">
                        {step.title}
                      </h3>
                      <p className="text-white/70 text-[16px] lg:text-[18px] leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </motion.div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
