'use client'

import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, Code2, LayoutDashboard, Layers, Plug, X, Plus, ArrowUpRight } from 'lucide-react'
import Ticker from '@/components/Ticker'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectsSection from '@/components/ProjectsSection'

const WHY_ITEMS = [
  {
    title: "Software built for your specific problem.",
    intro: "Off-the-shelf tools can only take you so far. When your business has a unique workflow, a custom-built solution is often the most efficient path forward.",
    body: "We take time to deeply understand your operations, pain points, and goals before writing a single line of code. This discovery-first approach means the software we build solves real problems — not hypothetical ones. We deliver clean, maintainable codebases that your team can understand and that we can scale as your business grows."
  },
  {
    title: "Architected to scale from day one.",
    intro: "A great software product today that can't handle tomorrow's load is a liability. We engineer with scale in mind from the very first sprint.",
    body: "Whether it's a CRM handling 100 contacts or a SaaS platform serving 100,000 concurrent users, our architecture decisions are deliberate and forward-thinking. We choose the right technology stack for the job — not the flashiest one — and implement patterns like microservices, caching, and efficient database indexing that grow with your business."
  },
  {
    title: "Integrated seamlessly into your ecosystem.",
    intro: "Modern businesses run on a web of tools. Your custom software shouldn't be an island — it should connect everything together.",
    body: "We have deep expertise building APIs and integrating third-party services like Stripe, HubSpot, Twilio, Salesforce, and dozens of others. We design clean RESTful and GraphQL APIs that your team can use internally and expose to partners. The result is a connected, efficient tech stack that eliminates manual data entry and reduces operational overhead."
  },
  {
    title: "Delivered on time, maintained for the long haul.",
    intro: "Software development has a reputation for going over time and budget. We've built a process specifically designed to prevent that.",
    body: "Our sprint-based delivery model means you see working software every two weeks — no surprises, no guesswork. We use milestone checkpoints, written specs, and transparent project management so you always know the exact state of your project. And when it's live, we offer ongoing maintenance, monitoring, and feature development to keep your software sharp and secure."
  }
]

const PROCESS_STEPS = [
  {
    title: "Discovery & Architecture",
    description: "We start by deeply understanding your business logic, user flows, and technical requirements. We then design a system architecture that is robust, scalable, and maintainable before any code is written."
  },
  {
    title: "Data Modeling",
    description: "We carefully design your database schema and data relationships. A clean, well-thought-out data model is the foundation of great software — it determines performance, flexibility, and how easily the product can evolve."
  },
  {
    title: "Sprint-Based Development",
    description: "We build in two-week sprints, delivering working, tested features in each cycle. You review and provide feedback continuously, ensuring the final product perfectly matches your vision."
  },
  {
    title: "API & Integrations",
    description: "We connect your software to the tools and services you already use. Whether it's a payment processor, a CRM, or an internal system, we build clean, documented APIs that make integration seamless."
  },
  {
    title: "QA & Performance Testing",
    description: "Before launch, we run rigorous quality assurance across all supported environments. We test edge cases, stress-test for performance, and ensure the software is rock-solid before any user touches it."
  },
  {
    title: "Launch & Monitoring",
    description: "We manage the deployment process end-to-end, including CI/CD pipelines, server provisioning, and monitoring setup. Post-launch, we track performance and error metrics so issues are caught before users notice."
  },
]

export default function SoftwarePage() {
  const [openWhyIndex, setOpenWhyIndex] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const toggleWhy = (index: number) => {
    setOpenWhyIndex(openWhyIndex === index ? null : index)
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -500, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 500, behavior: 'smooth' })
    }
  }

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
              <Database className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">CRM Development</span>
            </div>
            
            <div className="absolute top-[10%] left-[35%] lg:left-[40%] bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 animate-float-medium">
              <Layers className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">SaaS Platforms</span>
            </div>

            <div className="absolute top-[15%] right-[5%] lg:top-[20%] lg:right-[15%] bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 animate-float-fast">
              <Code2 className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Custom Applications</span>
            </div>

            <div className="absolute top-[50%] right-[-5%] lg:top-[45%] lg:right-[10%] bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 animate-float-slow" style={{ animationDelay: '1s' }}>
              <LayoutDashboard className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">Dashboards & Portals</span>
            </div>

            <div className="absolute bottom-[20%] left-[-5%] lg:bottom-[25%] lg:left-[10%] bg-white/10 backdrop-blur-sm text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 lg:gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 animate-float-medium" style={{ animationDelay: '0.5s' }}>
              <Plug className="w-4 h-4 lg:w-5 lg:h-5 text-white/60" />
              <span className="font-sans font-medium text-xs lg:text-sm whitespace-nowrap">API & Integrations</span>
            </div>
          </div>

          <h1 className="font-serif text-[clamp(80px,12vw,180px)] leading-none tracking-tight relative z-10 text-white">Software</h1>
        </section>

        {/* 2. Projects Carousel */}
        <ProjectsSection disableThemeToggle={true} />

        {/* 3. Capabilities Grid */}
        <section className="relative w-full px-4 lg:px-8 py-32 border-y border-white/10">
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] mb-16 text-center text-white">Capabilities</h2>
          
          <div className="w-full overflow-x-auto pb-12 hide-scrollbar" data-lenis-prevent>
            <div 
              className="relative border border-white/20 rounded-2xl overflow-hidden bg-[#0a0a0a] shrink-0 mx-auto"
              style={{ width: 1710, height: 1330 }}
            >
              <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-10"
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
                {/* Card 1: SaaS Development */}
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '1 / span 5', gridRow: '2 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">SaaS Development</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <rect x="30" y="50" width="140" height="90" rx="16" fill="none" stroke="#e6f1f3" strokeWidth="3" opacity="0.5"/>
                      <rect x="30" y="50" width="140" height="28" rx="16" fill="#e6f1f3" opacity="0.15"/>
                      <circle cx="52" cy="64" r="6" fill="#e6f1f3" opacity="0.8"/>
                      <circle cx="72" cy="64" r="6" fill="#e6f1f3" opacity="0.5"/>
                      <circle cx="92" cy="64" r="6" fill="#e6f1f3" opacity="0.3"/>
                      <rect x="48" y="95" width="50" height="8" rx="4" fill="#e6f1f3" opacity="0.4"/>
                      <rect x="48" y="112" width="80" height="6" rx="3" fill="#e6f1f3" opacity="0.2"/>
                      <rect x="48" y="124" width="60" height="6" rx="3" fill="#e6f1f3" opacity="0.2"/>
                    </svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">End-to-end SaaS product development — from multi-tenant architecture to subscription billing and user management.</p>
                  </div>
                </div>

                {/* Card 2: CRM Solutions */}
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '7 / span 6', gridRow: '1 / span 7' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Custom CRM</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <circle cx="100" cy="70" r="30" stroke="#e6f1f3" strokeWidth="3" opacity="0.6"/>
                      <circle cx="55" cy="140" r="22" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/>
                      <circle cx="145" cy="140" r="22" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/>
                      <line x1="100" y1="100" x2="65" y2="122" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/>
                      <line x1="100" y1="100" x2="135" y2="122" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/>
                      <circle cx="100" cy="70" r="10" fill="#e6f1f3" opacity="0.3"/>
                    </svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">Bespoke CRM systems built around your exact sales pipeline, customer lifecycle, and team workflows — not a generic template.</p>
                  </div>
                </div>

                {/* Card 3: Web & Mobile Apps */}
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '14 / span 5', gridRow: '2 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Web & Mobile Apps</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <rect x="60" y="30" width="80" height="140" rx="16" stroke="#e6f1f3" strokeWidth="3" opacity="0.5"/>
                      <line x1="60" y1="55" x2="140" y2="55" stroke="#e6f1f3" strokeWidth="2" opacity="0.3"/>
                      <line x1="60" y1="155" x2="140" y2="155" stroke="#e6f1f3" strokeWidth="2" opacity="0.3"/>
                      <circle cx="100" cy="170" r="6" fill="#e6f1f3" opacity="0.5"/>
                      <rect x="75" y="70" width="50" height="6" rx="3" fill="#e6f1f3" opacity="0.4"/>
                      <rect x="75" y="85" width="35" height="6" rx="3" fill="#e6f1f3" opacity="0.25"/>
                      <rect x="75" y="105" width="50" height="24" rx="8" fill="#e6f1f3" opacity="0.15"/>
                    </svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">Responsive web apps and cross-platform mobile applications (React Native / Expo) that deliver a premium experience on any device.</p>
                  </div>
                </div>

                {/* Card 4: System Architecture */}
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '1 / span 6', gridRow: '9 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">System Architecture</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      <rect x="70" y="30" width="60" height="36" rx="8" stroke="#e6f1f3" strokeWidth="2.5" opacity="0.7"/>
                      <rect x="20" y="120" width="56" height="36" rx="8" stroke="#e6f1f3" strokeWidth="2" opacity="0.5"/>
                      <rect x="124" y="120" width="56" height="36" rx="8" stroke="#e6f1f3" strokeWidth="2" opacity="0.5"/>
                      <line x1="100" y1="66" x2="100" y2="100" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/>
                      <line x1="100" y1="100" x2="48" y2="120" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/>
                      <line x1="100" y1="100" x2="152" y2="120" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/>
                      <circle cx="100" cy="100" r="5" fill="#e6f1f3" opacity="0.8"/>
                    </svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">We design modular, resilient system architectures — choosing the right patterns (microservices, event-driven, serverless) for your scale.</p>
                  </div>
                </div>

                {/* Card 5: API & Integrations */}
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '8 / span 10', gridRow: '8 / span 7' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">API & Integrations</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="200" height="140" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
                      {/* Left service */}
                      <rect x="20" y="70" width="72" height="60" rx="12" fill="#e6f1f3" opacity="0.1" stroke="#e6f1f3" strokeWidth="2" strokeOpacity="0.4"/>
                      <text x="56" y="104" textAnchor="middle" fill="#e6f1f3" fontSize="10" fontFamily="monospace" opacity="0.7">Stripe</text>
                      {/* Right service */}
                      <rect x="208" y="70" width="72" height="60" rx="12" fill="#e6f1f3" opacity="0.1" stroke="#e6f1f3" strokeWidth="2" strokeOpacity="0.4"/>
                      <text x="244" y="104" textAnchor="middle" fill="#e6f1f3" fontSize="10" fontFamily="monospace" opacity="0.7">HubSpot</text>
                      {/* Center API block */}
                      <rect x="108" y="60" width="84" height="80" rx="14" fill="#e6f1f3" opacity="0.12" stroke="#e6f1f3" strokeWidth="2.5" strokeOpacity="0.7"/>
                      <text x="150" y="104" textAnchor="middle" fill="#e6f1f3" fontSize="11" fontFamily="monospace" opacity="0.9">API</text>
                      {/* Arrows */}
                      <path d="M92 95 L108 95" stroke="#e6f1f3" strokeWidth="2" opacity="0.5" markerEnd="url(#arr)"/>
                      <path d="M192 105 L208 105" stroke="#e6f1f3" strokeWidth="2" opacity="0.5" markerEnd="url(#arr)"/>
                      <defs>
                        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                          <path d="M0 0 L6 3 L0 6 Z" fill="#e6f1f3" opacity="0.5"/>
                        </marker>
                      </defs>
                    </svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <ul className="grid grid-cols-2 gap-3 text-white/70 font-sans text-[15px] leading-snug w-3/4">
                      <li>Stripe & Payments</li>
                      <li>HubSpot & Salesforce</li>
                      <li>Twilio & Messaging</li>
                      <li>Auth & SSO (OAuth)</li>
                      <li>Webhooks & Events</li>
                      <li>REST & GraphQL APIs</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 4. Why Accordion */}
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
                          <div className="text-white/60 font-sans text-base lg:text-lg leading-relaxed">
                            {item.body}
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

        {/* 5. Process Steps */}
        <section className="px-8 lg:px-20 py-32 border-b border-white/10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left: Sticky title */}
            <div className="lg:col-span-4">
              <h2 className="font-serif text-[clamp(40px,5vw,72px)] leading-[1.0] text-white sticky top-32">
                Our<br/>Process
              </h2>
            </div>

            {/* Right: Step list */}
            <div className="lg:col-span-8 flex flex-col">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`flex gap-8 py-10 border-b border-white/10 cursor-pointer group transition-all duration-300 ${activeStep === index ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                  onClick={() => setActiveStep(index)}
                >
                  <span className="font-sans text-[13px] text-white/40 pt-2 w-8 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-serif text-2xl lg:text-3xl text-white group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <AnimatePresence>
                      {activeStep === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-white/60 font-sans text-base lg:text-lg leading-relaxed overflow-hidden"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="px-8 lg:px-20 py-40 flex flex-col items-center text-center gap-10">
          <motion.h2
            className="font-serif text-[clamp(48px,7vw,100px)] leading-none tracking-tight text-white max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to build something exceptional?
          </motion.h2>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-sans font-medium text-lg hover:bg-brand-blue transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start a project <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </section>

        <Footer />
      </main>
    </div>
  )
}
