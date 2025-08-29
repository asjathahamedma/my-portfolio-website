"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffectSmooth = ({
  sentences,
  className,
  cursorClassName,
  typingSpeed = 2,
  deletingSpeed = 1,
  delayBetweenSentences = 1500,
}: {
  sentences: {
    text: string;
    className?: string;
  }[][];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenSentences?: number;
}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const renderCurrentSentence = () => {
    if (!sentences.length) return null;
    
    return sentences[currentSentenceIndex].map((word, wordIdx) => (
      <span
        key={`word-${wordIdx}`}
        className={cn("dark:text-white text-black", word.className)}
      >
        {word.text}
        &nbsp;
      </span>
    ));
  };

  useEffect(() => {
    if (sentences.length === 0) return;

    const animationSequence = setTimeout(() => {
      setTimeout(() => {
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        setAnimationKey((prev) => prev + 1);
      }, deletingSpeed * 1000);
    }, typingSpeed * 1000 + delayBetweenSentences);

    return () => clearTimeout(animationSequence);
  }, [currentSentenceIndex, sentences.length, typingSpeed, deletingSpeed, delayBetweenSentences]);

  return (
    <div className={cn("flex items-center my-6", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={animationKey}
          initial={{ width: "0%" }}
          animate={{
            width: "fit-content",
            transition: {
              duration: typingSpeed,
              ease: "linear",
            },
          }}
          exit={{
            width: "0%",
            transition: {
              duration: deletingSpeed,
              ease: "linear",
            },
          }}
          className="overflow-hidden pb-2 whitespace-nowrap"
        >
          {renderCurrentSentence()}
        </motion.div>
      </AnimatePresence>
    <motion.span
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.8,
    repeat: Infinity,
    repeatType: "reverse",
  }}
  className={cn(
    "inline-block ml-1 rounded-sm w-[3px] h-6 sm:h-7 md:h-9 lg:h-11 xl:h-12 bg-fuchsia-600 dark:bg-[#00D9FF]",
    cursorClassName
  )}
/>

    </div>
  );
};