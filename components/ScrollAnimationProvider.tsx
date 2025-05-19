"use client";

import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Mock Lenis implementation since we can't use the actual Lenis library in server components
// The real Lenis implementation would be more complex and handle smooth scrolling

interface ScrollAnimationProviderProps {
  children: ReactNode;
}

export default function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize smooth scrolling behavior
    const smoothScroll = () => {
      const html = document.documentElement;
      const body = document.body;
      
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      
      // Set up any global scroll animations or behaviors here
      
      // Clean up ScrollTrigger to prevent memory leaks
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        ScrollTrigger.clearMatchMedia();
      };
    };
    
    const cleanup = smoothScroll();
    return cleanup;
  }, []);
  
  if (!mounted) {
    return <>{children}</>;
  }
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}