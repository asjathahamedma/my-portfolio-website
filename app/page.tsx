"use client";
import React from "react";
import Image from "next/image";
import { LettersPullUp } from "./components/letters-pull-up";
import { GradualSpacing } from "./components/gradual-spacing";
import { BackgroundBeamsWithCollision } from "./components/background-beams-with-collision";
import { motion } from "framer-motion";

const Home = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div>
      <BackgroundBeamsWithCollision>
        <div>
          {/* hero section */}
          <div className="relative flex flex-col items-center justify-center mt-40 sm:mt-22 min-h-[300px] sm:flex-row">
            {/* Animated Foreground Image */}
            <motion.div
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 3,
                delay: 1,
              }}
              className="flex justify-center"
            >
              <div className="relative group">
                <Image
                  src="/skill-img2.webp"
                  alt="Hacker"
                  width={400}
                  height={400}
                  priority
                  loading="eager"
                  className="w-32 sm:w-40 md:w-56 lg:w-72 xl:w-120 h-auto mx-auto animate-img
                           transition-all duration-300 hover:scale-120 hover:drop-shadow-[0_0_10px_rgba(153,0,153,0.6)]
                           dark:hover:drop-shadow-[0_0_10px_rgba(0,217,255,0.6)]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
                {/* Hover-triggered Text Elements */}
                {isHovered && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -200 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute -top-12 -left-20 sm:-left-90 ease-in-out"
                    >
                      <div className="flex items-center">
                        <Image src="/lock.png" alt="Lock Icon" width={80} height={80} className="sm:w-[200px] sm:h-[200px]" />
                        <span className="text-sm sm:text-2xl text-gray-600 dark:text-white font-mono drop-shadow-[0_0_15px_rgba(153,0,153,0.6)]">
                          SYSTEM BREACHED
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 200 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute -bottom-5 -right-20 sm:-right-90 ease-in-out"
                    >
                      <div className="flex items-center">
                        <span className="text-sm sm:text-2xl text-gray-600 dark:text-white font-mono drop-shadow-[0_0_15px_rgba(153,0,153,0.6)]">
                          ACCESS GRANTED
                        </span>
                        <Image src="/brain.png" alt="Brain Icon" width={80} height={80} className="sm:w-[200px] sm:h-[200px]" />
                      </div>
                    </motion.div>
                  </>
                )}
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00D9FF_0%,transparent_70%)] 
                            opacity-0 group-hover:opacity-40 transition-opacity duration-300 
                            mix-blend-screen -z-10 rounded-full"
                />
              </div>
            </motion.div>

            {/* Left Content (Intro) */}
            <div className="relative mt-8 text-center sm:absolute sm:left-0 sm:top-3/5 sm:-translate-y-1/2 sm:text-left sm:pl-10 sm:w-1/3">
              <h1 className="flex flex-wrap gap-x-2 text-3xl sm:text-5xl justify-center sm:justify-start">
                <LettersPullUp text="Welcome" className=" text-fuchsia-600 drop-shadow-md drop-shadow-fuchsia-400 dark:drop-shadow-cyan-400 dark:text-[#00D9FF]" />
                <LettersPullUp text="to" className="text-black dark:text-white" />
                <LettersPullUp text="the" className="text-black dark:text-white" />
                <LettersPullUp text="Code" className="text-black dark:text-white" />
                <LettersPullUp text="Anomaly" className=" text-fuchsia-600 dark:text-[#00D9FF] drop-shadow-md drop-shadow-fuchsia-400 dark:drop-shadow-cyan-400 " />
              </h1>
              <div className="max-w-md mx-auto sm:mx-0 flex flex-wrap gap-x-2 justify-center sm:justify-start text-sm sm:text-base text-black dark:text-white mt-2">
                {[
                  "I don’t", "just", "breach", "defenses—", "I rewrite", "the", "rules.",
                  "Firewalls", "melt.", "Secrets", "spill.", "I code", "in", "chaos",
                ].map((word, i) => (
                  <GradualSpacing key={i} text={word} className="hover:scale-105 hover:text-fuchsia-500 dark:hover:text-cyan-400 transition-all duration-200"/>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="relative mt-8 text-center sm:absolute sm:right-0 sm:top-2/5 sm:-translate-y-1/2 sm:text-right sm:pr-10 sm:w-1/3">
              <div className="mb-2 flex flex-wrap gap-x-2 justify-center sm:justify-end text-sm sm:text-base text-black dark:text-white">
                {["They", "fortified", "the", "walls.", "They", "encrypted", "everything."].map((word, i) => (
                  <GradualSpacing key={i} text={word} className="hover:scale-105 hover:text-fuchsia-500 dark:hover:text-cyan-400 transition-all duration-200" />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-2 text-3xl sm:text-5xl justify-center sm:justify-end">
                <LettersPullUp text="But" className="text-black dark:text-white" />
                <LettersPullUp text="GlitchViper" className="text-fuchsia-600 dark:text-[#00D9FF] drop-shadow-md drop-shadow-fuchsia-400 dark:drop-shadow-cyan-400 " />
                <LettersPullUp text="rewrote" className="text-black dark:text-white" />
                <LettersPullUp text="reality." className="text-fuchsia-600 dark:text-[#00D9FF] drop-shadow-md drop-shadow-fuchsia-400 dark:drop-shadow-cyan-400 " />
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </motion.div>
  );
};

export default Home;
