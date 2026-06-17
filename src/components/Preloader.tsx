'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [displayText, setDisplayText] = useState('');

  const TARGET_TEXT = 'THEPIECRAFT';
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+<>?/';

  useEffect(() => {
    // Check if the preloader has already played in this session (disabled for testing)
    // if (sessionStorage.getItem('preloader_played')) {
    //   setIsVisible(false);
    //   return;
    // }

    let iteration = 0;
    let timerId: NodeJS.Timeout;

    const scramble = () => {
      setDisplayText(() => {
        return TARGET_TEXT.split('')
          .map((char, index) => {
            if (index < Math.floor(iteration)) {
              return TARGET_TEXT[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
      });

      if (iteration < TARGET_TEXT.length) {
        iteration += 1 / 4; // Adjust this fraction to control decode speed (lower is slower)
        timerId = setTimeout(scramble, 30); // 30ms per frame
      } else {
        // Finish decode, wait a moment, then slide up
        setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem('preloader_played', 'true');
        }, 600);
      }
    };

    // Initial small delay before starting scramble
    timerId = setTimeout(scramble, 100);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] text-[#f0ece1] overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center">
            <motion.div
               className="font-mono text-[clamp(40px,8vw,120px)] leading-none tracking-widest uppercase font-bold"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.3 }}
            >
              {displayText}
            </motion.div>
            
            <motion.p
              className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] mt-6 opacity-40 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Developments
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
