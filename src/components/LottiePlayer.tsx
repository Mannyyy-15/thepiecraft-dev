'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface LottiePlayerProps {
  animationPath: string; // e.g. "/lottie/web.json"
  className?: string;
}

export default function LottiePlayer({ animationPath, className = '' }: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && !animationData) {
      fetch(animationPath)
        .then((res) => res.json())
        .then((data) => setAnimationData(data))
        .catch((err) => console.error('Failed to load Lottie JSON:', err));
    }
  }, [isInView, animationPath, animationData]);

  return (
    <div ref={containerRef} className={`flex items-center justify-center ${className}`}>
      {animationData ? (
        <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: '100%', height: '100%' }} />
      ) : (
        <div className="w-full h-full opacity-10 bg-foreground animate-pulse rounded-xl" />
      )}
    </div>
  );
}
