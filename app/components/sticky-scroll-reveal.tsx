"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, rgba(6, 182, 212, 0.9), rgba(16, 185, 129, 0.9))", 
    "linear-gradient(to bottom right, rgba(236, 72, 153, 0.9), rgba(99, 102, 241, 0.9))", 
    "linear-gradient(to bottom right, rgba(249, 115, 22, 0.9), rgba(234, 179, 8, 0.9))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div className="relative w-full" ref={ref}>
      {/* Left Content - Scrollable */}
      <div className="w-full lg:w-1/2">
        {content.map((item, index) => (
          <section 
            key={item.title + index}
            className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16"
          >
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeCard === index ? 1 : 0.2,
                  y: activeCard === index ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-[#00D9FF] mb-4"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeCard === index ? 1 : 0.2,
                  y: activeCard === index ? 0 : 20
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base md:text-lg text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          </section>
        ))}
      </div>

      {/* Right Sticky Card - Fixed Position */}
      <div className="hidden lg:block w-full lg:w-1/2 fixed top-0 right-0 h-screen pointer-events-none">
        <div className="h-full flex items-center justify-center p-4 md:p-8">
          <motion.div
            style={{ 
              background: backgroundGradient,
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)"
            }}
            className={cn(
              "w-full h-3/4 max-w-xl rounded-2xl overflow-hidden shadow-2xl",
              "border-2 border-white/30 backdrop-blur-sm",
              "relative transform transition-all duration-700 pointer-events-auto"
            )}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 50px rgba(59, 130, 246, 0.8)"
            }}
            transition={{ duration: 0.1 }}
          >
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]"></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[url('/kali-linux.png')] bg-[size:40px] opacity-20 mix-blend-overlay"></div>
            
            {/* Content container */}
            <div key={activeCard} className="relative h-full w-full flex items-center justify-center p-6">
              {content[activeCard].content ?? null}
            </div>
          
          </motion.div>
        </div>
      </div>
    </div>
  );
};