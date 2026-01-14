import React from 'react';
import { motion } from 'framer-motion';

// This component handles specific visual effects based on data-signature-effect attributes
// Currently implemented: 'pulse' (used in hero background)

type EffectType = 'pulse' | 'glow' | 'shake';

interface SignatureEffectProps {
  children: React.ReactNode;
  effect?: EffectType;
  className?: string;
}

export const SignatureEffect = ({ children, effect, className = '' }: SignatureEffectProps) => {
  if (effect === 'pulse') {
    return (
      <motion.div
        className={className}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
