"use client";

import React from "react";
import { AnimatedImage } from "../components/AnimatedImage";
import { InfiniteMovingCards } from "../components/infinite-moving-cards";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";
import { testimonials } from "../components/data/testimonials";
import { sentences } from "../components/data/skillsSentences";
import dynamic from "next/dynamic";

const BackgroundParticles = dynamic(
  () => import("../components/BackgroundParticles"),
  { ssr: false }
);

const Skills = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
      <div className="fixed inset-0 -z-50 opacity-20">
        <img src="/effect.png" alt="background" className="w-full h-full object-cover" />
      </div>

      <div className="w-full flex flex-col bg-gradient-to-b dark:from-[#01242da4] dark:to-[#020006c5] h-screen">
        <div className="flex flex-col lg:flex-row w-full px-6 gap-5 mt-10 items-center">
          <AnimatedImage />

          <div className="flex-2 relative">
            <TypewriterEffectSmooth
              sentences={sentences}
              className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-4xl font-normal"
              cursorClassName="bg-[#00D9FF]"
            />
          </div>
        </div>

        <div className="w-full lg:px-20 mt-4">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
            pauseOnHover={true}
          />
        </div>
      </div>

      <BackgroundParticles />
    </div>
  );
};

export default Skills;
