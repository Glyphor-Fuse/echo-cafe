import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type InteractionType = 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress' | 'hover';

interface SignatureInteractionProps {
  children: React.ReactNode;
  type: InteractionType;
  className?: string;
  onClick?: () => void;
}

export const SignatureInteraction = ({ children, type, className = '', onClick }: SignatureInteractionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  if (type === 'hover') {
    return (
      <motion.div
        className={className}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'parallax') {
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    return (
      <motion.div ref={ref} style={{ y }} className={className}>
        {children}
      </motion.div>
    );
  }

  if (type === 'text-reveal') {
    return (
      <motion.div
        initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
