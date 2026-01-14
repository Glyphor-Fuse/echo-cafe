import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
}

export const Reveal = ({ children, width = 'fit-content', delay = 0, className = '' }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const mainControls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: delay,
      },
    },
  };

  // If reduced motion is enabled, we skip the animation or do a simple fade
  const reducedVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay } }
  };

  return (
    <motion.div
      ref={ref}
      variants={shouldReduceMotion ? reducedVariants : variants}
      initial="hidden"
      animate={mainControls}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
