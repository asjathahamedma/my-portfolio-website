"use client";
import React, { useRef, useState } from "react";
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

  return (
    <div className="relative w-full" ref={ref}>
      {/* Left Content - Scrollable */}
      <div className={cn("w-full lg:w-1/2", contentClassName)}>
        {content.map((item, index) => (
          <section
            key={item.title + index}
            className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold 
                         text-fuchsia-600 dark:text-[#00D9FF] mb-4"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl leading-relaxed
                         text-gray-700 dark:text-gray-300 max-w-xl"
            >
              {item.description}
            </motion.p>

            {/* Mobile: Show the corresponding content below each section */}
            <div className="lg:hidden mt-6">
              <motion.div
                className="w-full py-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                {item.content ?? null}
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* Desktop: Keep the active content alongside the scrolling sections */}
      <div className="hidden lg:block w-full lg:w-1/2 fixed top-0 right-0 h-screen pointer-events-none">
        <div className="h-full flex items-center justify-center px-10 xl:px-16">
          <motion.div
            key={activeCard}
            className="w-full max-w-xl pointer-events-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
