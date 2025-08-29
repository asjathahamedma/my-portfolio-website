"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
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

  // Background gradients
  const linearGradients = [
    "linear-gradient(to bottom right, rgba(0, 217, 255, 0.9), rgba(14, 165, 233, 0.9))",
    "linear-gradient(to bottom right, rgba(236, 72, 153, 0.9), rgba(168, 85, 247, 0.9))",
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
      <div className={cn("w-full lg:w-1/2", contentClassName)}>
        {content.map((item, index) => (
          <section
            key={item.title + index}
            className="min-h-screen flex flex-col justify-center px-6 md:px-10 py-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
                y: activeCard === index ? 0 : 10,
              }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl font-bold 
                         text-fuchsia-600 dark:text-[#00D9FF] mb-4"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
                y: activeCard === index ? 0 : 10,
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base md:text-lg leading-relaxed 
                         text-gray-700 dark:text-gray-300 max-w-xl"
            >
              {item.description}
            </motion.p>

            {/* ✅ Mobile: Show card below each section */}
            <div className="lg:hidden mt-6">
              <motion.div
                style={{ background: backgroundGradient }}
                className="w-full rounded-2xl overflow-hidden shadow-lg border border-fuchsia-400 dark:border-cyan-400 relative"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>

                {/* Kali Linux particle pattern */}
                <div className="absolute inset-0 bg-[url('/kali-linux.png')] bg-[size:40px] opacity-50 mix-blend-overlay"></div>

                {/* Content */}
                <div className="relative h-full w-full flex items-center justify-center p-4">
                  {item.content ?? null}
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* ✅ Desktop: Right Sticky Card */}
      {/* Right Sticky Card - Fixed Position */}
      <div className="hidden lg:block w-full lg:w-1/2 fixed top-0 right-0 h-screen pointer-events-none">
        <div className="h-full flex items-center justify-center p-6 md:p-10">
          <motion.div
            style={{
              background: backgroundGradient,
              boxShadow: "0 0 40px rgba(153, 0, 153, 0.4)",
            }}
            className={cn(
              "w-full h-3/4 max-w-xl rounded-2xl overflow-hidden shadow-2xl",
              "border-2 border-fuchsia-400 dark:border-cyan-400 backdrop-blur-sm",
              "relative transform transition-all duration-700 pointer-events-auto"
            )}
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>

            {/* ✅ Kali Linux particle pattern */}
            <div className="absolute inset-0 bg-[url('/kali-linux.png')] bg-[size:40px] opacity-50 mix-blend-overlay"></div>

            {/* Content */}
            <div
              key={activeCard}
              className="relative h-full w-full flex items-center justify-center p-6"
            >
              {content[activeCard].content ?? null}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
