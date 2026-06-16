'use client'

import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor({ isVisible }: { isVisible: boolean }) {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Spring config for smooth trailing physics
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 48) // Offset by half the width/height (96px / 2 = 48px)
      cursorY.set(e.clientY - 48)
    }
    
    // Always track mouse so it's in the right place before making it visible
    window.addEventListener('mousemove', moveCursor)
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center w-24 h-24 bg-[#c4e5e3] text-black font-medium rounded-full shadow-lg"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      View
    </motion.div>
  )
}
