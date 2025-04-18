"use client";

import { ReactNode, useRef } from 'react';
import { motion, Variant, useInView } from 'framer-motion';

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  staggerIndex?: number;
}

const AnimatedItem = ({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  direction = 'up',
  staggerIndex = 0
}: AnimatedItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  // Define animation variants based on direction
  const getVariants = () => {
    const distance = 30;
    const staggerDelay = 0.1 * staggerIndex;
    
    const variants = {
      hidden: {} as Variant,
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration,
          ease: [0.22, 1, 0.36, 1],
          delay: delay + staggerDelay
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
        variants.hidden = { opacity: 0, scale: 0.95 };
        break;
    }
    
    return variants;
  };

  return (
    <motion.div
      ref={ref}
      className={className}
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
    </motion.div>
  );
};

export default AnimatedItem;
