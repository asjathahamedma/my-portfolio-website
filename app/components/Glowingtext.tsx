// components/glowing-text.tsx
'use client';

import { motion } from 'framer-motion';

export const GlowingText = ({ 
  children,
  className = '',
  glowColor = '#00D9FF'
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) => {
  return (
    <motion.span
      className={`${className} glowing-text`}
      style={{
        textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`,
      }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.span>
  );
};