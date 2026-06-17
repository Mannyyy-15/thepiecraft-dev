'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react'
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiFramer, SiShopify, SiSanity, SiFigma, SiVercel,
  SiGoogleanalytics, SiContentful, SiWordpress, SiWebflow, SiGatsby,
  SiAstro, SiSvelte, SiVite, SiSass, SiStorybook, SiGithub, SiPrisma,
  SiCloudflare, SiPwa,
} from 'react-icons/si'
import Footer from '@/components/Footer'
import ProjectsSection from '@/components/ProjectsSection'
import FallingPills from '@/components/FallingPills'
// Navbar + Ticker rendered globally by layout.tsx

const WHY_ITEMS = [
  {
    title: "Custom web design built for your brand — not a template.",
    intro: "Your website is the most visible expression of your brand online. Every pixel should reflect who you are, what you offer, and why clients should choose you.",
    body: "Every website we design is built from scratch, specific to our client's brand, audience, and goals. We work through information architecture, conversion-focused layouts, and brand-led visual design that makes your site stand out — not blend in. The result is a custom website that looks exceptional and performs even better."
  },
  {
    title: "SEO-led structure and content from the start.",
    intro: "A beautiful website that no one finds is a missed opportunity. We build SEO best practices into every project from the very first page — not as an afterthought.",
    body: "We approach every web design project with content hierarchy, keyword strategy, and technical SEO in mind from day one. Clean semantic HTML, fast page loads, structured metadata, and well-planned site architecture mean your website is built to rank on Google from launch. We're not just web designers — we understand what search engines need to see."
  },
  {
    title: "High-performance development with Next.js and React.",
    intro: "A fast website isn't a luxury — Google uses Core Web Vitals as a ranking signal, and users abandon slow pages. We build for speed.",
    body: "Our websites are built with Next.js and React: the modern standard for high-performance web development. Server-side rendering, static generation, image optimisation, lazy loading, and edge deployment combine to deliver the fastest possible experience. Your site scores well in Lighthouse, loads in under a second, and keeps users engaged from the first interaction."
  },
  {
    title: "Launched right, supported long-term.",
    intro: "Going live is not the finish line — it's the starting line. We make sure your site launches correctly and stays in top shape.",
    body: "Our process includes full QA, cross-browser and cross-device testing, and a structured launch checklist before your site goes public. After launch, we offer ongoing web maintenance, performance monitoring, security patching, and content updates so your website never goes stale. Because we built it, we can maintain it quickly and confidently."
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

  const scrollCarousel = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
    // Find the first process card (the first child of the inner flex that is a div.flex.flex-col)
    const inner = el.querySelector<HTMLElement>('.flex.flex-col.relative');
    const cardWidth = inner ? inner.offsetWidth : Math.round(window.innerWidth * 0.75);
    const gap = window.innerWidth >= 1024 ? 96 : window.innerWidth >= 640 ? 64 : 40;
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: 'smooth' });
  };

  return (
    <div className="dark bg-background text-foreground min-h-screen font-sans selection:bg-white/20">
      <main className="flex flex-col w-full">
        
        {/* 1. Hero */}
        <section className="relative w-full flex flex-col items-center border-b border-white/10 pt-16 overflow-hidden" style={{ height: 'calc(100dvh - 96px)' }}>
          <div className="shrink-0 flex flex-col items-center justify-center py-8 lg:py-10 px-5 text-center">
            <h1 className="font-serif text-[clamp(60px,10vw,160px)] leading-none tracking-tight text-white mb-3">
              Websites
            </h1>
            <p className="font-sans text-white/45 text-sm lg:text-lg">
              Custom web design & development — fast, SEO-ready, built to convert.
            </p>
          </div>
          <FallingPills
            className="flex-1"
            pills={[
              { label: 'Wireframes',         icon: <SiFigma           size={18} color="#F24E1E" /> },
              { label: 'Content Strategy',   icon: <SiContentful      size={18} color="#2478CC" /> },
              { label: 'UI/UX Design',       icon: <SiFigma           size={18} color="#F24E1E" /> },
              { label: 'Copywriting',        icon: <SiStorybook       size={18} color="#FF4785" /> },
              { label: 'Brand-led Design',   icon: <SiFigma           size={18} color="#F24E1E" /> },
              { label: 'Design Systems',     icon: <SiStorybook       size={18} color="#FF4785" /> },
              { label: 'HTML5',              icon: <SiHtml5           size={18} color="#E34F26" /> },
              { label: 'CSS',                icon: <SiCss             size={18} color="#1572B6" /> },
              { label: 'Sass',               icon: <SiSass            size={18} color="#CC6699" /> },
              { label: 'JavaScript',         icon: <SiJavascript      size={18} color="#F7DF1E" /> },
              { label: 'TypeScript',         icon: <SiTypescript      size={18} color="#3178C6" /> },
              { label: 'React',              icon: <SiReact           size={18} color="#61DAFB" /> },
              { label: 'Next.js',            icon: <SiNextdotjs       size={18} color="#ffffff" /> },
              { label: 'Gatsby',             icon: <SiGatsby          size={18} color="#663399" /> },
              { label: 'Astro',              icon: <SiAstro           size={18} color="#FF5D01" /> },
              { label: 'Svelte',             icon: <SiSvelte          size={18} color="#FF3E00" /> },
              { label: 'Tailwind CSS',       icon: <SiTailwindcss     size={18} color="#06B6D4" /> },
              { label: 'Framer Motion',      icon: <SiFramer          size={18} color="#ffffff" /> },
              { label: 'Vite',               icon: <SiVite            size={18} color="#646CFF" /> },
              { label: 'Shopify',            icon: <SiShopify         size={18} color="#96BF48" /> },
              { label: 'Webflow',            icon: <SiWebflow         size={18} color="#4353FF" /> },
              { label: 'WordPress',          icon: <SiWordpress       size={18} color="#21759B" /> },
              { label: 'Sanity CMS',         icon: <SiSanity          size={18} color="#F03E2F" /> },
              { label: 'Contentful',         icon: <SiContentful      size={18} color="#2478CC" /> },
              { label: 'Vercel',             icon: <SiVercel          size={18} color="#ffffff" /> },
              { label: 'Cloudflare',         icon: <SiCloudflare      size={18} color="#F48120" /> },
              { label: 'GitHub',             icon: <SiGithub          size={18} color="#ffffff" /> },
              { label: 'SEO & Analytics',    icon: <SiGoogleanalytics size={18} color="#E37400" /> },
              { label: 'PWA',                icon: <SiPwa             size={18} color="#5A0FC8" /> },
              { label: 'Accessibility',      icon: <SiPrisma          size={18} color="#ffffff" /> },
            ]}
          />
        </section>

        {/* 2. Interactive Projects Carousel */}
        <ProjectsSection disableThemeToggle={true} />

        {/* 3. Capabilities Grid Redesign (Dark Mode) */}
        <section className="relative w-full px-4 lg:px-8 py-16 sm:py-32 border-y border-white/10 overflow-hidden">
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] mb-10 sm:mb-16 text-center text-white">Capabilities</h2>

          {/* Mobile: stacked cards matching reference screenshot */}
          <div className="flex flex-col gap-0 lg:hidden border border-foreground/15 rounded-2xl overflow-hidden">
            {[
              { title: 'Website Design', items: ['UX & information architecture', 'Mobile-first responsive layouts', 'Custom animations & interactions', 'Brand-led visual design', 'Wireframes & prototyping', 'Design systems'], icon: <svg width="70" height="70" viewBox="0 0 200 200" fill="none"><path d="M100 40L140 60L100 80L60 60L100 40Z" fill="#22c55e"/><path d="M140 60V80L100 100V80L140 60Z" fill="#16a34a"/><path d="M60 60V80L100 100V80L60 60Z" fill="#fef08a"/></svg> },
              { title: 'Content Strategy', items: ['Site-mapping & page hierarchy', 'Copy frameworks & tone', 'SEO-led content planning', 'Copywriting & editing', 'Content audits', 'Blog & resource strategy'], icon: <svg width="70" height="70" viewBox="0 0 200 200" fill="none"><rect x="45" y="40" width="110" height="130" rx="16" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3"/><rect x="45" y="40" width="110" height="28" rx="16" fill="#94a3b8" fillOpacity="0.3"/><line x1="62" y1="88" x2="122" y2="88" stroke="#64748b" strokeWidth="5" strokeLinecap="round"/><line x1="62" y1="106" x2="138" y2="106" stroke="#64748b" strokeWidth="5" strokeLinecap="round"/><line x1="62" y1="124" x2="108" y2="124" stroke="#22c55e" strokeWidth="5" strokeLinecap="round"/></svg> },
              { title: 'Front-end Development', items: ['React & Next.js', 'Tailwind CSS & animations', 'Framer Motion interactions', 'Performance optimisation', 'Accessibility (WCAG 2.1)', 'Cross-browser QA'], icon: <svg width="70" height="70" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="55" stroke="#94a3b8" strokeWidth="4" opacity="0.5"/><circle cx="100" cy="100" r="35" stroke="#64748b" strokeWidth="3" opacity="0.6"/><circle cx="100" cy="100" r="12" fill="#22c55e"/></svg> },
              { title: 'Ecommerce', items: ['Shopify & custom storefronts', 'Product catalogue & filtering', 'Checkout optimisation', 'Payment gateway integration', 'Inventory management', 'Conversion rate optimisation'], icon: <svg width="70" height="70" viewBox="0 0 200 200" fill="none"><path d="M30 55 L50 55 L72 140 L160 140" stroke="#64748b" strokeWidth="4" strokeLinecap="round" opacity="0.6"/><circle cx="90" cy="162" r="12" fill="#22c55e"/><circle cx="140" cy="162" r="12" fill="#fef08a"/><rect x="68" y="75" width="95" height="58" rx="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" opacity="0.8"/></svg> },
              { title: 'CMS Integration', items: ['Sanity, Contentful, Payload', 'Custom content schemas', 'Editor-friendly dashboards', 'Media & asset management', 'Scheduled publishing', 'Multi-language support'], icon: <svg width="70" height="70" viewBox="0 0 200 200" fill="none"><rect x="30" y="45" width="140" height="110" rx="16" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="3"/><line x1="30" y1="78" x2="170" y2="78" stroke="#94a3b8" strokeWidth="2" opacity="0.5"/><rect x="46" y="92" width="32" height="32" rx="6" fill="#94a3b8" fillOpacity="0.3" stroke="#64748b" strokeWidth="1.5"/><rect x="88" y="92" width="32" height="32" rx="6" fill="#94a3b8" fillOpacity="0.3" stroke="#64748b" strokeWidth="1.5"/><rect x="130" y="92" width="22" height="32" rx="6" fill="#94a3b8" fillOpacity="0.15" stroke="#64748b" strokeWidth="1.5"/></svg> },
              { title: 'Ongoing Maintenance', items: ['Security patches & updates', 'Performance monitoring', 'Uptime & error alerts', 'Monthly content updates', 'SEO health checks', 'Hosting & backup management'], icon: <svg width="70" height="70" viewBox="0 0 200 200" fill="none"><path d="M100 40L140 60L100 80L60 60L100 40Z" fill="#16a34a"/><path d="M140 60V80L100 100V80L140 60Z" fill="#22c55e"/><path d="M60 60V80L100 100V80L60 60Z" fill="#fef08a"/><path d="M140 90L180 110L140 130L100 110L140 90Z" fill="#16a34a"/><path d="M180 110V130L140 150V130L180 110Z" fill="#22c55e"/><path d="M100 110V130L140 150V130L100 110Z" fill="#fef08a"/></svg> },
            ].map((cap, i, arr) => (
              <div key={i} className={`bg-background p-5 flex flex-col gap-4 ${i < arr.length - 1 ? 'border-b border-foreground/10' : ''}`}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-sans font-bold text-xl text-foreground leading-tight">{cap.title}</h3>
                  <div className="shrink-0 mt-1">{cap.icon}</div>
                </div>
                <ul className="flex flex-col gap-2">
                  {cap.items.map((item, j) => (
                    <li key={j} className="font-sans text-[15px] text-foreground/55">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Desktop: original bento grid — unchanged */}
          <div className="hidden lg:block w-full overflow-x-auto pb-12 hide-scrollbar">
            <div
              className="relative border border-white/20 rounded-2xl overflow-hidden bg-[#0a0a0a] shrink-0 mx-auto"
              style={{ width: 1710, height: 1330 }}
            >
              <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`, backgroundSize: '95px 95px' }} />
              <div className="absolute inset-0 grid" style={{ gridTemplateColumns: 'repeat(18, 95px)', gridTemplateRows: 'repeat(14, 95px)' }}>
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '1 / span 5', gridRow: '2 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Website design</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none"><path d="M100 40L140 60L100 80L60 60L100 40Z" fill="#22c55e"/><path d="M140 60V80L100 100V80L140 60Z" fill="#16a34a"/><path d="M60 60V80L100 100V80L60 60Z" fill="#fef08a"/></svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto"><p className="text-white/70 font-sans text-[15px] leading-snug">Your website is where your brand speaks loudest, so we treat design decisions as opportunities for differentiation.</p></div>
                </div>
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '7 / span 6', gridRow: '1 / span 7' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Content strategy</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none"><rect x="50" y="50" width="100" height="100" rx="20" className="stroke-white/20" strokeWidth="4"/><rect x="40" y="60" width="100" height="100" rx="20" className="fill-white/10"/><path d="M60 80H120" className="stroke-white/40" strokeWidth="6" strokeLinecap="round"/><path d="M60 100H140" className="stroke-white/40" strokeWidth="6" strokeLinecap="round"/><path d="M60 120H100" className="stroke-[#fef08a]" strokeWidth="6" strokeLinecap="round"/></svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto"><p className="text-white/70 font-sans text-[15px] leading-snug">We'll create a content strategy that works best for your brand and provide a framework for organizing it all.</p></div>
                </div>
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '14 / span 5', gridRow: '2 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Front-end dev</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="50" className="stroke-white/20" strokeWidth="4"/><circle cx="100" cy="100" r="30" className="stroke-white/40" strokeWidth="4"/><circle cx="100" cy="100" r="10" className="fill-[#fef08a]"/></svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto"><p className="text-white/70 font-sans text-[15px] leading-snug">Our proficiency allows us to replicate intricate design layouts into a working website that functions as well as it looks.</p></div>
                </div>
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '1 / span 6', gridRow: '9 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Ecommerce</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none"><rect x="50" y="60" width="80" height="60" rx="16" className="fill-white/10"/><path d="M50 80H130" className="stroke-white/40" strokeWidth="6" strokeLinecap="round"/><circle cx="90" cy="150" r="10" className="fill-[#22c55e]"/><circle cx="120" cy="150" r="10" className="fill-[#fef08a]"/></svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto"><p className="text-white/70 font-sans text-[15px] leading-snug">You don't have to sacrifice beauty for conversions. We build on-brand, robust ecommerce websites.</p></div>
                </div>
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '7 / span 6', gridRow: '8 / span 7' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Content Management System</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none"><rect x="40" y="50" width="120" height="100" rx="20" className="fill-[#111]" stroke="currentColor" strokeOpacity="0.2" strokeWidth="4"/><path d="M70 80H130" className="stroke-[#fef08a]" strokeWidth="6" strokeLinecap="round"/><path d="M70 100H150" className="stroke-[#22c55e]" strokeWidth="6" strokeLinecap="round"/></svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto"><p className="text-white/70 font-sans text-[15px] leading-snug w-3/4">A CMS allows you to edit your site without touching code. We'll suggest a CMS that equips your team well.</p></div>
                </div>
                <div className="bg-[#111] border border-white/20 p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '14 / span 5', gridRow: '9 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Ongoing maintenance</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none"><path d="M100 40L140 60L100 80L60 60L100 40Z" fill="#16a34a"/><path d="M140 60V80L100 100V80L140 60Z" fill="#22c55e"/><path d="M60 60V80L100 100V80L60 60Z" fill="#fef08a"/><path d="M140 90L180 110L140 130L100 110L140 90Z" fill="#16a34a"/><path d="M180 110V130L140 150V130L180 110Z" fill="#22c55e"/><path d="M100 110V130L140 150V130L100 110Z" fill="#fef08a"/></svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto"><p className="text-white/70 font-sans text-[15px] leading-snug">We offer ongoing maintenance plans for better security, faster load times, and higher search rankings.</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.5 Why Accordion */}
        <section className="px-5 sm:px-8 lg:px-20 py-16 sm:py-32 border-b border-white/10 w-full">
          <h2 className="font-sans text-xl lg:text-2xl tracking-tight text-white mb-8">Why ThePieCraft for web design & development</h2>
          <div className="flex flex-col border-t border-white/10">
            {WHY_ITEMS.map((item, index) => {
              const isOpen = openWhyIndex === index;
              return (
                <div key={index} className="border-b border-white/10">
                  <button
                    onClick={() => toggleWhy(index)}
                    className="w-full py-6 lg:py-10 flex items-center justify-between text-left group outline-none gap-4"
                  >
                    <h3 className="font-serif text-[clamp(20px,4vw,40px)] text-white/90 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-white/70 transition-all duration-300 group-hover:border-white/40 group-hover:text-white">
                      {isOpen ? <X className="w-4 h-4 lg:w-5 lg:h-5" /> : <Plus className="w-4 h-4 lg:w-5 lg:h-5" />}
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
                        <div className="pb-10 lg:pb-16 pt-2 lg:pt-4 flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-24">
                          <div className="text-white/80 font-sans text-base lg:text-[22px] leading-snug">
                            {item.intro}
                          </div>
                          <div className="text-white/60 font-sans text-sm lg:text-[17px] leading-relaxed">
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

        {/* 4. Process Carousel (11 Steps) */}
        <section className="py-16 sm:py-32 pb-20 sm:pb-48 relative overflow-hidden border-b border-white/10">
          <div className="px-5 sm:px-8 lg:px-20 mb-10 sm:mb-20 flex items-center justify-between">
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[40px] tracking-tight text-white">Process</h2>
            <div className="flex items-center gap-3">
              <button onClick={() => scrollCarousel(-1)} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button onClick={() => scrollCarousel(1)} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div ref={carouselRef} className="overflow-x-auto hide-scrollbar scroll-smooth">
              <div className="flex gap-10 sm:gap-16 lg:gap-24 relative z-10 px-5 sm:px-8 lg:px-20 pb-10 sm:pb-12 pt-14 w-max">

                {/* Dotted timeline — visible on all sizes */}
                <div className="absolute top-[26px] left-5 sm:left-8 lg:left-20 right-0 h-[2px] pointer-events-none z-0">
                  <motion.div
                    className="w-full h-full border-t-2 border-dashed border-white/25 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: 'easeOut' }}
                  />
                </div>

                {PROCESS_STEPS.map((step, index) => (
                  <div key={step.title} className="flex flex-col relative w-[75vw] sm:w-[40vw] lg:w-[26vw] shrink-0">
                    {/* Node dot — always visible */}
                    <motion.div
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#bef264] absolute -top-[42px] left-0 z-10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * (index % 6), duration: 0.4, type: 'spring', bounce: 0.5 }}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * (index % 4), duration: 0.5 }}
                    >
                      <h3 className="font-sans text-lg sm:text-2xl lg:text-[32px] tracking-tight mb-3 sm:mb-6 text-white">
                        {step.title}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-[16px] lg:text-[18px] leading-relaxed font-sans">
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
