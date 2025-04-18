"use client";

import { ReactNode, useRef } from 'react';
import { motion, Variant, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const AnimatedSection = ({
  children,
  id,
  className = '',
  delay = 0.2,
  direction = 'up'
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  // Define animation variants based on direction
  const getVariants = () => {
    const distance = 50;
    
    const variants = {
      hidden: {} as Variant,
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay
        }
      }
    };
    
    switch (direction) {
      case 'up':
        variants.hidden = { opacity: 0, y: distance };
        break;
      case 'down':
        variants.hidden = { opacity: 0, y: -distance };
        break;
      case 'left':
        variants.hidden = { opacity: 0, x: distance };
        break;
      case 'right':
        variants.hidden = { opacity: 0, x: -distance };
        break;
      case 'none':
        variants.hidden = { opacity: 0 };
        break;
    }
    
    return variants;
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`pt-16 ${className}`} // Added padding-top to ensure navbar doesn't cover headings
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      // Use reduced motion preference to improve accessibility and performance
      whileInView={undefined}
      // Optimize animations with will-change to reduce layout thrashing
      style={{
        willChange: isInView ? 'opacity, transform' : 'auto',
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
