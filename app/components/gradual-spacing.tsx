'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';

interface GradualSpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export function GradualSpacing({ text = 'Gradual Spacing', className = '', ...props }: GradualSpacingProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`flex space-x-1 ${className}`} {...props}>
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 1.5, delay: i * 0.3 }}
            className={className}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}
