'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

const links = ['Work', 'Software', 'Web', 'About', 'Contact']

export default function Navbar() {
  const pathname = usePathname()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const getHref = (link: string) =>
    link === 'Work' ? '/work' :
    link === 'Software' ? '/software' :
    link === 'Web' ? '/websites' :
    link === 'About' ? '/about' :
    link === 'Contact' ? '/contact' : '/'

  return (
    <>
      <nav className="bg-background/80 backdrop-blur-md border-b border-foreground/5 transition-colors duration-700 ease-out flex items-center justify-between px-5 sm:px-8 lg:px-20 py-5 lg:py-8">
        <Link
          href="/"
          className="font-sans text-[18px] sm:text-[22px] font-medium tracking-tight text-foreground transition-colors duration-700 ease-out relative z-20"
        >
          ThePieCraft
        </Link>

        {/* Desktop Nav */}
        <ul 
          className="hidden md:flex items-center gap-2 relative z-10"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {links.map((link) => {
            const href = getHref(link)
            const isActive = pathname === href
            const isHighlighted = hoveredLink === href || (hoveredLink === null && isActive)

            return (
              <li key={link} className="relative flex items-center justify-center">
                <Link
                  href={href}
                  onMouseEnter={() => setHoveredLink(href)}
                  className={cn(
                    "relative z-10 text-[17px] font-medium transition-colors duration-300 ease-out px-5 py-2 rounded-full",
                    isHighlighted 
                      ? "text-background" 
                      : "text-foreground hover:opacity-70"
                  )}
                >
                  {link}
                </Link>
                
                {isHighlighted && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 z-0 bg-foreground rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-foreground/10 transition-colors z-50 relative"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} className="text-foreground" /> : <Menu size={22} className="text-foreground" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link, i) => {
              const href = getHref(link)
              const isActive = pathname === href
              return (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "font-serif text-[clamp(36px,10vw,56px)] tracking-tight transition-colors",
                      isActive ? "text-foreground" : "text-foreground/50 hover:text-foreground"
                    )}
                  >
                    {link}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
