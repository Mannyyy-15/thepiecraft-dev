'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiPostgresql,
  SiMongodb, SiRedis, SiStripe, SiGraphql, SiDocker, SiGit,
  SiPrisma, SiSupabase, SiFirebase, SiGithub, SiPython, SiDjango,
  SiKubernetes, SiTerraform, SiGooglecloud, SiCloudflare, SiNginx,
  SiJest, SiTrpc, SiAxios, SiZod, SiTurborepo, SiLinux,
} from 'react-icons/si'
import Footer from '@/components/Footer'
import ProjectsSection from '@/components/ProjectsSection'
import FallingPills from '@/components/FallingPills'
// Navbar + Ticker rendered globally by layout.tsx

const WHY_ITEMS = [
  {
    title: "Custom software built around your business — not the other way around.",
    intro: "Off-the-shelf tools force your workflows to conform to their limitations. Custom software development means the product fits your business exactly as it is — and adapts as you grow.",
    body: "We begin every custom software project with a deep discovery phase: understanding your operations, user journeys, and technical requirements before a single line of code is written. The result is a clean, maintainable codebase your team can own, that we can extend, and that solves the problems your business actually has — not the ones a product manager imagined."
  },
  {
    title: "Scalable architecture from day one.",
    intro: "Good software that can't handle growth is a ticking clock. We engineer every application — from MVP to enterprise platform — with scale in mind from the first sprint.",
    body: "Whether you're building a SaaS platform for 100 users or a multi-tenant CRM serving 100,000, our architecture decisions are deliberate: the right database, the right caching strategy, the right deployment model. We implement patterns like microservices, serverless edge functions, and event-driven architecture so your software grows with your business — not against it."
  },
  {
    title: "Seamlessly integrated with your existing stack.",
    intro: "Modern businesses run on a web of interconnected tools. Your custom software should tie everything together — not add another silo.",
    body: "We have deep experience designing RESTful and GraphQL APIs and integrating with services your business already relies on: Stripe, HubSpot, Salesforce, Twilio, and dozens more. Every integration is built cleanly and documented thoroughly, so your team can use it confidently and your partners can extend it. The payoff is a connected tech stack that cuts manual work and operational overhead."
  },
  {
    title: "On-time delivery and long-term support.",
    intro: "Software projects have a reputation for going over scope and over budget. We've built a sprint-based process specifically designed to prevent both.",
    body: "You see working software every two weeks — no black-box development, no surprises at the finish line. Milestone checkpoints, written specs, and transparent project management mean you always know exactly where your project stands. Once it's live, we provide ongoing maintenance, performance monitoring, security patching, and feature development to keep your product sharp, secure, and ahead of the competition."
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

  const toggleWhy = (index: number) => {
    setOpenWhyIndex(openWhyIndex === index ? null : index)
  }

  const scrollCarousel = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
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
              Software
            </h1>
            <p className="font-sans text-white/45 text-sm lg:text-lg">
              Custom web applications, APIs & scalable software architecture.
            </p>
          </div>
          <FallingPills
            className="flex-1"
            pills={[
              { label: 'CRM Development',      icon: <SiSupabase    size={18} color="#3ECF8E" /> },
              { label: 'SaaS Platforms',        icon: <SiStripe      size={18} color="#635BFF" /> },
              { label: 'API & Integrations',    icon: <SiGraphql     size={18} color="#E10098" /> },
              { label: 'Dashboards & Portals',  icon: <SiTrpc        size={18} color="#398CCB" /> },
              { label: 'Data Pipelines',        icon: <SiTurborepo   size={18} color="#EF4444" /> },
              { label: 'Mobile Apps',           icon: <SiReact       size={18} color="#61DAFB" /> },
              { label: 'React',                 icon: <SiReact       size={18} color="#61DAFB" /> },
              { label: 'Next.js',               icon: <SiNextdotjs   size={18} color="#ffffff" /> },
              { label: 'Node.js',               icon: <SiNodedotjs   size={18} color="#339933" /> },
              { label: 'Python',                icon: <SiPython      size={18} color="#3776AB" /> },
              { label: 'Django',                icon: <SiDjango      size={18} color="#092E20" /> },
              { label: 'TypeScript',            icon: <SiTypescript  size={18} color="#3178C6" /> },
              { label: 'PostgreSQL',            icon: <SiPostgresql  size={18} color="#4169E1" /> },
              { label: 'MongoDB',               icon: <SiMongodb     size={18} color="#47A248" /> },
              { label: 'Redis',                 icon: <SiRedis       size={18} color="#DC382D" /> },
              { label: 'GraphQL',               icon: <SiGraphql     size={18} color="#E10098" /> },
              { label: 'tRPC',                  icon: <SiTrpc        size={18} color="#398CCB" /> },
              { label: 'Zod',                   icon: <SiZod         size={18} color="#3068B7" /> },
              { label: 'Prisma',                icon: <SiPrisma      size={18} color="#ffffff" /> },
              { label: 'Stripe',                icon: <SiStripe      size={18} color="#635BFF" /> },
              { label: 'Supabase',              icon: <SiSupabase    size={18} color="#3ECF8E" /> },
              { label: 'Firebase',              icon: <SiFirebase    size={18} color="#FFCA28" /> },
              { label: 'Docker',                icon: <SiDocker      size={18} color="#2496ED" /> },
              { label: 'Kubernetes',            icon: <SiKubernetes  size={18} color="#326CE5" /> },
              { label: 'Terraform',             icon: <SiTerraform   size={18} color="#7B42BC" /> },
              { label: 'Google Cloud',          icon: <SiGooglecloud size={18} color="#4285F4" /> },
              { label: 'Cloudflare',            icon: <SiCloudflare  size={18} color="#F48120" /> },
              { label: 'Nginx',                 icon: <SiNginx       size={18} color="#009639" /> },
              { label: 'Linux',                 icon: <SiLinux       size={18} color="#FCC624" /> },
              { label: 'Jest',                  icon: <SiJest        size={18} color="#C21325" /> },
              { label: 'GitHub',                icon: <SiGithub      size={18} color="#ffffff" /> },
              { label: 'Git',                   icon: <SiGit         size={18} color="#F05032" /> },
              { label: 'Axios',                 icon: <SiAxios       size={18} color="#5A29E4" /> },
            ]}
          />
        </section>

        {/* 2. Projects Carousel */}
        <ProjectsSection disableThemeToggle={true} />

        {/* 3. Capabilities */}
        <section className="relative w-full px-4 lg:px-8 py-16 sm:py-32 border-y border-white/10 overflow-hidden">
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] mb-10 sm:mb-16 text-center text-white">Capabilities</h2>

          {/* Mobile: stacked bordered cards — light bg matching reference screenshot */}
          <div className="flex flex-col gap-0 lg:hidden border border-white rounded-2xl overflow-hidden">
            {[
              {
                title: 'SaaS Development',
                items: ['Multi-tenant architecture', 'Subscription & billing (Stripe)', 'User management & roles', 'Onboarding flows', 'Usage analytics', 'Feature flagging'],
                icon: <svg width="70" height="70" viewBox="0 0 200 200" fill="none"><rect x="30" y="50" width="140" height="90" rx="16" stroke="#334155" strokeWidth="3" opacity="0.4"/><rect x="30" y="50" width="140" height="28" rx="16" fill="#334155" opacity="0.1"/><circle cx="52" cy="64" r="6" fill="#334155" opacity="0.6"/><circle cx="72" cy="64" r="6" fill="#334155" opacity="0.35"/><circle cx="92" cy="64" r="6" fill="#334155" opacity="0.2"/><rect x="48" y="95" width="50" height="7" rx="3" fill="#334155" opacity="0.25"/><rect x="48" y="112" width="80" height="5" rx="2" fill="#334155" opacity="0.15"/><rect x="48" y="124" width="60" height="5" rx="2" fill="#334155" opacity="0.15"/></svg>,
              },
              {
                title: 'Custom CRM',
                items: ['Sales pipeline builder', 'Contact & deal management', 'Activity timelines', 'Email & task automation', 'Custom reporting', 'Team permissions'],
                icon: <svg width="70" height="70" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="70" r="30" stroke="#334155" strokeWidth="3" opacity="0.4"/><circle cx="55" cy="145" r="22" stroke="#334155" strokeWidth="2" opacity="0.3"/><circle cx="145" cy="145" r="22" stroke="#334155" strokeWidth="2" opacity="0.3"/><line x1="100" y1="100" x2="65" y2="127" stroke="#334155" strokeWidth="2" opacity="0.3"/><line x1="100" y1="100" x2="135" y2="127" stroke="#334155" strokeWidth="2" opacity="0.3"/><circle cx="100" cy="70" r="10" fill="#334155" opacity="0.2"/></svg>,
              },
              {
                title: 'Web & Mobile Apps',
                items: ['React & Next.js web apps', 'React Native / Expo mobile', 'Offline-first PWAs', 'Real-time features (WebSocket)', 'Push notifications', 'App Store deployment'],
                icon: <svg width="70" height="70" viewBox="0 0 200 200" fill="none"><rect x="60" y="30" width="80" height="140" rx="16" stroke="#334155" strokeWidth="3" opacity="0.35"/><line x1="60" y1="55" x2="140" y2="55" stroke="#334155" strokeWidth="2" opacity="0.2"/><line x1="60" y1="155" x2="140" y2="155" stroke="#334155" strokeWidth="2" opacity="0.2"/><circle cx="100" cy="168" r="6" fill="#334155" opacity="0.35"/><rect x="75" y="70" width="50" height="6" rx="3" fill="#334155" opacity="0.25"/><rect x="75" y="85" width="35" height="6" rx="3" fill="#334155" opacity="0.15"/><rect x="75" y="105" width="50" height="22" rx="8" fill="#334155" opacity="0.1"/></svg>,
              },
              {
                title: 'System Architecture',
                items: ['Microservices design', 'Event-driven systems', 'Serverless & edge functions', 'Database schema design', 'Caching strategies', 'CI/CD pipelines'],
                icon: <svg width="70" height="70" viewBox="0 0 200 200" fill="none"><rect x="70" y="30" width="60" height="36" rx="8" stroke="#334155" strokeWidth="2.5" opacity="0.5"/><rect x="20" y="120" width="56" height="36" rx="8" stroke="#334155" strokeWidth="2" opacity="0.3"/><rect x="124" y="120" width="56" height="36" rx="8" stroke="#334155" strokeWidth="2" opacity="0.3"/><line x1="100" y1="66" x2="100" y2="100" stroke="#334155" strokeWidth="2" opacity="0.3"/><line x1="100" y1="100" x2="48" y2="120" stroke="#334155" strokeWidth="2" opacity="0.3"/><line x1="100" y1="100" x2="152" y2="120" stroke="#334155" strokeWidth="2" opacity="0.3"/><circle cx="100" cy="100" r="5" fill="#334155" opacity="0.5"/></svg>,
              },
              {
                title: 'API & Integrations',
                items: ['REST & GraphQL APIs', 'Stripe & payments', 'HubSpot & Salesforce', 'Twilio & messaging', 'OAuth & SSO', 'Webhooks & event streams'],
                icon: <svg width="70" height="70" viewBox="0 0 200 200" fill="none"><rect x="20" y="80" width="52" height="40" rx="10" stroke="#334155" strokeWidth="2" opacity="0.3"/><rect x="128" y="80" width="52" height="40" rx="10" stroke="#334155" strokeWidth="2" opacity="0.3"/><rect x="74" y="70" width="52" height="60" rx="12" stroke="#334155" strokeWidth="2.5" opacity="0.45"/><line x1="72" y1="95" x2="52" y2="100" stroke="#334155" strokeWidth="2" opacity="0.35"/><line x1="128" y1="100" x2="148" y2="105" stroke="#334155" strokeWidth="2" opacity="0.35"/><text x="100" y="105" textAnchor="middle" fill="#334155" fontSize="14" fontFamily="monospace" opacity="0.5">API</text></svg>,
              },
            ].map((cap, i, arr) => (
              <div key={i} className={`bg-background p-5 flex flex-col gap-4 ${i < arr.length - 1 ? 'border-b border-white' : ''}`}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-sans font-bold text-xl text-foreground leading-tight">{cap.title}</h3>
                  <div className="shrink-0 opacity-80 mt-1">{cap.icon}</div>
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
              className="relative border border-white rounded-2xl overflow-hidden bg-[#0a0a0a] shrink-0 mx-auto"
              style={{ width: 1710, height: 1330 }}
            >
              <div
                className="absolute inset-0 z-0 pointer-events-none opacity-100"
                style={{
                  backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                  backgroundSize: '95px 95px',
                }}
              />
              <div
                className="absolute inset-0 grid"
                style={{ gridTemplateColumns: 'repeat(18, 95px)', gridTemplateRows: 'repeat(14, 95px)' }}
              >
                <div className="bg-[#111] border border-white p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '1 / span 5', gridRow: '2 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">SaaS Development</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none"><rect x="30" y="50" width="140" height="90" rx="16" fill="none" stroke="#e6f1f3" strokeWidth="3" opacity="0.5"/><rect x="30" y="50" width="140" height="28" rx="16" fill="#e6f1f3" opacity="0.15"/><circle cx="52" cy="64" r="6" fill="#e6f1f3" opacity="0.8"/><circle cx="72" cy="64" r="6" fill="#e6f1f3" opacity="0.5"/><circle cx="92" cy="64" r="6" fill="#e6f1f3" opacity="0.3"/><rect x="48" y="95" width="50" height="8" rx="4" fill="#e6f1f3" opacity="0.4"/><rect x="48" y="112" width="80" height="6" rx="3" fill="#e6f1f3" opacity="0.2"/><rect x="48" y="124" width="60" height="6" rx="3" fill="#e6f1f3" opacity="0.2"/></svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">End-to-end SaaS product development — from multi-tenant architecture to subscription billing and user management.</p>
                  </div>
                </div>
                <div className="bg-[#111] border border-white p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '7 / span 6', gridRow: '1 / span 7' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Custom CRM</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="70" r="30" stroke="#e6f1f3" strokeWidth="3" opacity="0.6"/><circle cx="55" cy="140" r="22" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/><circle cx="145" cy="140" r="22" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/><line x1="100" y1="100" x2="65" y2="122" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/><line x1="100" y1="100" x2="135" y2="122" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/><circle cx="100" cy="70" r="10" fill="#e6f1f3" opacity="0.3"/></svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">Bespoke CRM systems built around your exact sales pipeline, customer lifecycle, and team workflows — not a generic template.</p>
                  </div>
                </div>
                <div className="bg-[#111] border border-white p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '14 / span 5', gridRow: '2 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">Web & Mobile Apps</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none"><rect x="60" y="30" width="80" height="140" rx="16" stroke="#e6f1f3" strokeWidth="3" opacity="0.5"/><line x1="60" y1="55" x2="140" y2="55" stroke="#e6f1f3" strokeWidth="2" opacity="0.3"/><line x1="60" y1="155" x2="140" y2="155" stroke="#e6f1f3" strokeWidth="2" opacity="0.3"/><circle cx="100" cy="170" r="6" fill="#e6f1f3" opacity="0.5"/><rect x="75" y="70" width="50" height="6" rx="3" fill="#e6f1f3" opacity="0.4"/><rect x="75" y="85" width="35" height="6" rx="3" fill="#e6f1f3" opacity="0.25"/><rect x="75" y="105" width="50" height="24" rx="8" fill="#e6f1f3" opacity="0.15"/></svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">Responsive web apps and cross-platform mobile applications (React Native / Expo) that deliver a premium experience on any device.</p>
                  </div>
                </div>
                <div className="bg-[#111] border border-white p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '1 / span 6', gridRow: '9 / span 6' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">System Architecture</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="140" height="140" viewBox="0 0 200 200" fill="none"><rect x="70" y="30" width="60" height="36" rx="8" stroke="#e6f1f3" strokeWidth="2.5" opacity="0.7"/><rect x="20" y="120" width="56" height="36" rx="8" stroke="#e6f1f3" strokeWidth="2" opacity="0.5"/><rect x="124" y="120" width="56" height="36" rx="8" stroke="#e6f1f3" strokeWidth="2" opacity="0.5"/><line x1="100" y1="66" x2="100" y2="100" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/><line x1="100" y1="100" x2="48" y2="120" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/><line x1="100" y1="100" x2="152" y2="120" stroke="#e6f1f3" strokeWidth="2" opacity="0.4"/><circle cx="100" cy="100" r="5" fill="#e6f1f3" opacity="0.8"/></svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-white/70 font-sans text-[15px] leading-snug">We design modular, resilient system architectures — choosing the right patterns (microservices, event-driven, serverless) for your scale.</p>
                  </div>
                </div>
                <div className="bg-[#111] border border-white p-8 flex flex-col group overflow-hidden relative shadow-sm" style={{ gridColumn: '8 / span 10', gridRow: '8 / span 7' }}>
                  <h3 className="font-sans font-medium text-xl absolute top-8 left-8 z-20 text-white">API & Integrations</h3>
                  <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none">
                    <svg width="200" height="140" viewBox="0 0 300 200" fill="none"><rect x="20" y="70" width="72" height="60" rx="12" fill="#e6f1f3" opacity="0.1" stroke="#e6f1f3" strokeWidth="2" strokeOpacity="0.4"/><text x="56" y="104" textAnchor="middle" fill="#e6f1f3" fontSize="10" fontFamily="monospace" opacity="0.7">Stripe</text><rect x="208" y="70" width="72" height="60" rx="12" fill="#e6f1f3" opacity="0.1" stroke="#e6f1f3" strokeWidth="2" strokeOpacity="0.4"/><text x="244" y="104" textAnchor="middle" fill="#e6f1f3" fontSize="10" fontFamily="monospace" opacity="0.7">HubSpot</text><rect x="108" y="60" width="84" height="80" rx="14" fill="#e6f1f3" opacity="0.12" stroke="#e6f1f3" strokeWidth="2.5" strokeOpacity="0.7"/><text x="150" y="104" textAnchor="middle" fill="#e6f1f3" fontSize="11" fontFamily="monospace" opacity="0.9">API</text><path d="M92 95 L108 95" stroke="#e6f1f3" strokeWidth="2" opacity="0.5" markerEnd="url(#arr)"/><path d="M192 105 L208 105" stroke="#e6f1f3" strokeWidth="2" opacity="0.5" markerEnd="url(#arr)"/><defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="#e6f1f3" opacity="0.5"/></marker></defs></svg>
                  </div>
                  <div className="absolute inset-8 top-auto flex flex-col justify-end opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 z-10 pointer-events-none group-hover:pointer-events-auto">
                    <ul className="grid grid-cols-2 gap-3 text-white/70 font-sans text-[15px] leading-snug w-3/4"><li>Stripe & Payments</li><li>HubSpot & Salesforce</li><li>Twilio & Messaging</li><li>Auth & SSO (OAuth)</li><li>Webhooks & Events</li><li>REST & GraphQL APIs</li></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Why Accordion */}
        <section className="px-5 sm:px-8 lg:px-20 py-16 sm:py-32 border-b border-white/10 w-full">
          <h2 className="font-sans text-xl lg:text-2xl tracking-tight text-white mb-8">Why ThePieCraft for software development</h2>
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
                          <div className="text-white/60 font-sans text-sm lg:text-lg leading-relaxed">
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

        {/* 5. Process Steps — carousel matching websites page */}
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
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white absolute -top-[42px] left-0 z-10"
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

        {/* 6. CTA */}
        <section className="px-8 lg:px-20 py-40 flex flex-col items-center text-center gap-10">
          <motion.h2
            className="font-serif text-[clamp(48px,7vw,100px)] leading-none tracking-tight text-white max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to build your custom software?
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
