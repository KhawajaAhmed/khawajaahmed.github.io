"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Animation variants for page transitions
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { 
    opacity: 1, 
    x: 0, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    x: 0, 
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset scroll position on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
        className="min-h-screen"
      >
        {children}
        
        {/* Page transition overlay effect */}
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          exit={{ scaleY: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          style={{ 
            originY: pathname === "/" ? 0 : 1,
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(8px)'
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
