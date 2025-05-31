'use client';

import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

type StaggeredFadeProps = {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  staggerDelay?: number;
};

export const StaggeredFade: React.FC<StaggeredFadeProps> = ({
  text,
  className = '',
  children,
  staggerDelay = 0.1,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * staggerDelay },
    }),
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  // If using text prop
  if (text) {
    const letters = text.split('');
    return (
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={isInView ? 'show' : ''}
        viewport={{ once: true }}
        className={cn('text-right font-bold tracking-normal', className)}
      >
        {letters.map((letter, i) => (
          <motion.span 
            key={`${letter}-${i}`} 
            variants={variants}
            custom={i}
          >
          </motion.span>
        ))}
      </motion.h2>
    );
  }

  // If using children
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      viewport={{ once: true }}
      className={cn('flex flex-col', className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={variants}
          custom={index}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};