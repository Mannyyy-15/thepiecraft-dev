'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'text' | 'view'>('default');

  // Exact follower for the small dot
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Trailing follower for the ring
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const ringXSpring = useSpring(ringX, { stiffness: 150, damping: 20 });
  const ringYSpring = useSpring(ringY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // 8px dot (radius 4)
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);

      // We'll let the ring spring to the mouse center
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (!target) return;

      // Check closest element matching our data attributes or common interactive tags
      const interactiveEl = target.closest('a, button, [data-cursor]');
      
      if (interactiveEl) {
        const cursorType = interactiveEl.getAttribute('data-cursor');
        if (cursorType === 'text') {
          setCursorState('text');
        } else if (cursorType === 'view') {
          setCursorState('view');
        } else {
          setCursorState('pointer');
        }
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [dotX, dotY, ringX, ringY]);

  let ringSize = 36;
  let ringBg = 'transparent';
  let ringRadius = '50%';
  let label = '';
  let dotOpacity = 1;
  let ringOpacity = 1;
  let ringBorderWidth = '1px';

  if (cursorState === 'pointer') {
    ringSize = 64;
    ringBg = 'transparent';
    ringOpacity = 0.4;
    ringBorderWidth = '2px';
    dotOpacity = 0; // hide dot on hover
  } else if (cursorState === 'text') {
    ringSize = 80; // wide pill
    ringBg = 'white';
    label = 'Read';
    dotOpacity = 0;
    ringBorderWidth = '0px';
  } else if (cursorState === 'view') {
    ringSize = 80;
    ringBg = 'white';
    label = 'View';
    dotOpacity = 0;
    ringBorderWidth = '0px';
  }

  // Adjust for pill shape vs circle
  const width = cursorState === 'text' || cursorState === 'view' ? 100 : ringSize;
  const height = cursorState === 'text' || cursorState === 'view' ? 48 : ringSize;

  return (
    <>
      {/* Small exact dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] w-2 h-2 bg-white mix-blend-difference rounded-full hidden sm:block"
        style={{
          x: dotX,
          y: dotY,
          opacity: dotOpacity,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Trailing ring / morphing shape */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center text-black font-medium text-sm border-white mix-blend-difference hidden sm:flex overflow-hidden"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width,
          height,
          backgroundColor: ringBg,
          borderRadius: ringRadius,
        }}
        animate={{
          width,
          height,
          backgroundColor: ringBg,
          borderRadius: cursorState === 'text' || cursorState === 'view' ? '24px' : '50%',
          borderWidth: ringBorderWidth,
          opacity: ringOpacity,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: label ? 1 : 0, y: label ? 0 : 10 }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>
      </motion.div>
    </>
  );
}
