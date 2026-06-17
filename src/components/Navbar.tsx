'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Work',     href: '/work' },
  { label: 'Software', href: '/software' },
  { label: 'Web',      href: '/websites' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
]

function HamburgerIcon({ open }: { open: boolean }) {
  const t = { duration: 0.28, ease: 'easeInOut' as const }
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-foreground" aria-hidden>
      {/* Top bar: rotate +45° around center when open */}
      <motion.g
        style={{ originX: '11px', originY: '11px' }}
        animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
        transition={t}
      >
        <line x1="2" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </motion.g>
      {/* Middle bar: fade out */}
      <motion.line
        x1="2" y1="11" x2="20" y2="11"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.18, ease: 'easeInOut' }}
      />
      {/* Bottom bar: rotate -45° around center when open */}
      <motion.g
        style={{ originX: '11px', originY: '11px' }}
        animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
        transition={t}
      >
        <line x1="2" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </motion.g>
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [headerBottom, setHeaderBottom] = useState(0)
  const headerRef = useRef<HTMLElement>(null)

  // Measure the sticky header's bottom edge so the overlay can start exactly there
  useEffect(() => {
    const measure = () => {
      // The header is the parent of this nav — walk up to find it
      const header = headerRef.current?.closest('header') as HTMLElement | null
      if (header) {
        setHeaderBottom(header.getBoundingClientRect().bottom)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', measure, { passive: true })
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', measure)
    }
  }, [])

  // Re-measure when menu opens
  useEffect(() => {
    if (mobileOpen) {
      const header = headerRef.current?.closest('header') as HTMLElement | null
      if (header) setHeaderBottom(header.getBoundingClientRect().bottom)
    }
  }, [mobileOpen])

  return (
    <>
      <nav
        ref={headerRef}
        className="bg-background border-b border-foreground/5 transition-colors duration-700 ease-out flex items-center justify-between px-5 sm:px-8 lg:px-20 py-3 lg:py-5 relative z-50"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="ThePieCraft"
            width={40}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul
          className="hidden md:flex items-center gap-2 relative z-10"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {links.map(({ label, href }) => {
            const isActive = pathname === href
            const isHighlighted = hoveredLink === href || (hoveredLink === null && isActive)
            return (
              <li key={label} className="relative flex items-center justify-center">
                <Link
                  href={href}
                  onMouseEnter={() => setHoveredLink(href)}
                  className={cn(
                    'relative z-10 text-[17px] font-medium transition-colors duration-300 ease-out px-5 py-2 rounded-full',
                    isHighlighted ? 'text-background' : 'text-foreground hover:opacity-70'
                  )}
                >
                  {label}
                </Link>
                {isHighlighted && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 z-0 bg-foreground rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        {/* Mobile: Reach out pill + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 bg-foreground text-background text-[13px] font-medium px-4 py-2 rounded-full transition-opacity hover:opacity-80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] inline-block" />
            Reach out
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Toggle menu"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — starts exactly at the bottom of the sticky header
          (below ticker + navbar), does NOT cover them */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed left-0 right-0 bottom-0 z-40 bg-background flex flex-col md:hidden"
            style={{ top: headerBottom }}
          >
            <nav className="flex-1 flex flex-col overflow-y-auto">
              {links.map(({ label, href }, i) => {
                const isActive = pathname === href
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055 + 0.05, duration: 0.22, ease: 'easeOut' }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block w-full px-5 py-5 font-sans text-[clamp(32px,9vw,52px)] font-medium tracking-tight border-b border-foreground/10 transition-colors',
                        isActive ? 'text-foreground' : 'text-foreground hover:text-foreground/60'
                      )}
                    >
                      {label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
