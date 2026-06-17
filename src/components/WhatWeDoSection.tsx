'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import MagneticButton from './MagneticButton';

const tabs = [
  {
    id: 'software',
    number: '01',
    title: 'Software',
    href: '/software',
    desc: 'Custom web apps, SaaS platforms, APIs and scalable architecture built with React, Next.js, Node.js and PostgreSQL',
    deliverables: ['Custom Web Applications', 'SaaS Platforms', 'API Development', 'System Architecture', 'Database Design']
  },
  {
    id: 'websites',
    number: '02',
    title: 'Websites',
    href: '/websites',
    desc: 'High-performance marketing sites, ecommerce stores and CMS-powered websites built to rank and convert',
    deliverables: ['Marketing Websites', 'Ecommerce Stores', 'CMS Integration', 'SEO Optimization', 'Web Animations']
  },
  {
    id: 'brand',
    number: '03',
    title: 'Brand',
    href: '/brand',
    desc: 'Strategic brand identities — logo design, visual systems and brand messaging that make you impossible to ignore',
    deliverables: ['Brand Strategy', 'Logo & Visual Identity', 'Brand Guidelines', 'Messaging & Copywriting', 'Collateral Design']
  }
];

export default function WhatWeDoSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find(t => t.id === activeTab)!;

  return (
    <section className="py-24 sm:py-32 bg-background text-foreground border-t border-foreground/10 px-6 lg:px-20 w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Tabs */}
        <div className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible hide-scrollbar gap-2 lg:gap-6 border-b lg:border-b-0 border-foreground/10 pb-4 lg:pb-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative text-left px-4 lg:px-6 py-3 lg:py-5 font-serif text-2xl lg:text-4xl transition-colors duration-300 ${
                  isActive ? 'text-foreground' : 'text-foreground/40 hover:text-foreground/70'
                } whitespace-nowrap lg:whitespace-normal`}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="whatwedo-active"
                    className="absolute inset-0 bg-foreground/5 rounded-2xl -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="text-sm font-sans mr-4 opacity-50 align-top">{tab.number}</span>
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-2/3 min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-10"
            >
              <h3 className="font-sans text-2xl lg:text-4xl text-foreground/80 leading-relaxed max-w-2xl">
                {activeContent.desc}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {activeContent.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                    <span className="font-sans text-lg text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <MagneticButton>
                  <Link
                    href={activeContent.href}
                    className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-sans font-medium text-lg hover:opacity-80 transition-opacity"
                    data-cursor="pointer"
                  >
                    Explore {activeContent.title} <span className="text-xl">→</span>
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
