'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const links = ['Work', 'Software', 'Web', 'About', 'Contact']

export default function Navbar() {
  const pathname = usePathname()
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-foreground/5 transition-colors duration-700 ease-out flex items-center justify-between px-8 lg:px-20 py-8">
      <Link
        href="/"
        className="font-sans text-[22px] font-medium tracking-tight text-foreground transition-colors duration-700 ease-out relative z-20"
      >
        ThePieCraft
      </Link>

      <ul 
        className="hidden md:flex items-center gap-2 relative z-10"
        onMouseLeave={() => setHoveredLink(null)}
      >
        {links.map((link) => {
          const href = 
            link === 'Work' ? '/work' :
            link === 'Software' ? '/software' :
            link === 'Web' ? '/websites' :
            link === 'About' ? '/about' :
            link === 'Contact' ? '/contact' :
            `/#${link.toLowerCase()}`

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
    </nav>
  )
}
