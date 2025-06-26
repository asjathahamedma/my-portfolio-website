"use client";
import React from 'react';
import Image from 'next/image';
import { LettersPullUp } from './components/letters-pull-up';
import { GradualSpacing } from './components/gradual-spacing';
import { BackgroundBeamsWithCollision } from "./components/background-beams-with-collision";
import { motion } from "framer-motion";

const paragraphText = "I don’t just breach defenses— I rewrite the rules. Firewalls melt. Secrets spill. I code in chaos.";
const words = paragraphText.split(' ');


const Home = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div>
      <BackgroundBeamsWithCollision>
        <div>
          {/* hero section */}
          <div className="relative flex justify-center items-center mt-22 min-h-[300px]">
            {/* Animated Foreground Image */}
            <motion.div
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.3, duration: 3, delay: 1 }}
            >
              <div className="relative group">
                <Image
                  src="/skill-img2.png"
                  alt="Hacker"
                  width={400}
                  height={400}
                  priority // Add priority to LCP element
                  loading="eager"
                  className="w-32 sm:w-40 md:w-56 lg:w-72 xl:w-120 h-auto animate-img 
                           transition-all duration-300 hover:scale-130 
                           hover:drop-shadow-[0_0_10px_rgba(0,217,255,0.6)]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
                {/* Hover-triggered Text Elements */}
                {isHovered && (
                  <>
                    {/* Left Top Text */}
                    <motion.div
                      initial={{ opacity: 0, x: -200 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute -top-12 -left-90 ease-in-out"
                    >
                      <div className='flex items-center'>
                        <Image src="/lock.png" alt="Lock Icon" width={200} height={200} />
                        <span className="text-2xl text-[#ffffff] font-mono drop-shadow-[0_0_15px_rgba(0,217,255,0.6)]">
                          SYSTEM BREACHED
                        </span>
                      </div>
                    </motion.div>

                    {/* Right Bottom Text */}
                    <motion.div
                      initial={{ opacity: 0, x: 200 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute -bottom-5 -right-90 ease-in-out"
                    >
                      <div className='flex items-center'>
                        <span className="text-2xl text-[#ffffff] font-mono drop-shadow-[0_0_15px_rgba(0,217,255,0.6)] ">
                          ACCESS GRANTED
                        </span>
                        <Image src="/brain.png" alt="Brain Icon" width={200} height={200} />
                      </div>
                    </motion.div>
                  </>
                )}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00D9FF_0%,transparent_70%)] 
                            opacity-0 group-hover:opacity-40 transition-opacity duration-300 
                            mix-blend-screen -z-10 rounded-full" />
              </div>
            </motion.div>

            {/* Left Content (Intro) */}
            <div className="absolute left-0 top-3/5 -translate-y-1/2 text-left pl-10 w-1/3 hidden sm:block">
              <h1 className="flex flex-wrap gap-x-2 text-5xl">
                <LettersPullUp
                  text="Welcome"
                  className="text-[#00D9FF] drop-shadow-[0_0_15px_rgba(0,217,255,0.7)] transition-transform hover:scale-130 duration-200 ease-linear"
                />
                <LettersPullUp text="to" className="transition-transform hover:scale-130 duration-200 ease-linear" />
                <LettersPullUp text="the" className="transition-transform hover:scale-130 duration-200 ease-linear" />
                <LettersPullUp
                  text="Code"
                  className="transition-transform hover:scale-130 duration-200 ease-linear"
                />
                <LettersPullUp
                  text="Anomaly"
                  className="text-[#00D9FF] drop-shadow-[0_0_15px_rgba(0,217,255,0.7)] transition-transform hover:scale-130 duration-200 ease-linear"
                />
              </h1>
              <div className="max-w-xl flex flex-wrap gap-x-2">
                {words.map((word, i) => (
                  <GradualSpacing
                    key={i}
                    text={word + (i !== words.length - 1 ? ' ' : '')}
                    className="hover:text-[#00D9FF] hover:drop-shadow-[0_0_20px_rgba(0,217,255,0.7)] transition-all duration-300 hover:scale-120"
                  />
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="absolute right-0 top-2/5 -translate-y-1/2 text-right pr-10 text-white w-1/3 hidden sm:block ">
              <div className="mb-2 flex flex-wrap gap-x-2 justify-end">
                {["They", "fortified", "the", "walls.", "They", "encrypted", "everything."].map((word, i) => (
                  <GradualSpacing
                    key={i}
                    text={word}
                    className="hover:text-[#00D9FF] hover:drop-shadow-[0_0_20px_rgba(0,217,255,0.7)] transition-all duration-300 hover:scale-120"
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-x-2 text-5xl justify-end">
                <LettersPullUp text="But" className="transition-transform hover:scale-130 duration-200 ease-linear" />
                <LettersPullUp
                  text="GlitchViper"
                  className="text-[#00D9FF] drop-shadow-[0_0_15px_rgba(0,217,255,0.7)] transition-transform hover:scale-130 duration-200 ease-linear"
                />
                <LettersPullUp text="rewrote" className="transition-transform hover:scale-130 duration-200 ease-linear" />
                <LettersPullUp
                  text="reality."
                  className="text-[#00D9FF] drop-shadow-[0_0_15px_rgba(0,217,255,0.7)] transition-transform hover:scale-130 duration-200 ease-linear"
                />
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </motion.div>
  );
};

export default Home;
