"use client";

import React from "react";
import { AnimatedImage } from "../components/AnimatedImage";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";
import { skills } from "../components/data/skills";
import { sentences } from "../components/data/skillsSentences";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/app/components/animated-modal";
import { motion, Variants, Transition } from "framer-motion";
import { Eye } from "lucide-react";
import { TextGenerateEffect } from "../components/text-generate-effect";
import Image from "next/image";

const words = `Explore my technical expertise through interactive skill cards. Each represents a domain I've mastered - click to discover the specific tools and technologies I wield within each discipline.`;

interface Skill {
  title: string;
  iconUrl: string;
  quote: string;
  logos: { name: string; url: string }[];
  content?: React.ReactNode;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 5,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 350 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * index,
      duration: 1,
      ease: [0.34, 1.56, 0.64, 1],
    } as Transition,
  }),
};

const Skills = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-12 px-2 sm:px-4 md:px-8 overflow-hidden">
      <div className="w-full flex flex-col">
        {/* Main content row */}
        <div className="flex flex-col lg:flex-row w-full px-2 sm:px-4 md:px-6 gap-5 mt-10">
          {/* Left Column: Animated Image */}
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:w-1/3 flex justify-center lg:justify-start"
          >
            <AnimatedImage />
          </motion.div>

          {/* Right Column: Text content and skills grid */}
          <div className="lg:w-2/3">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 350 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <TypewriterEffectSmooth
                sentences={sentences}
                className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-4xl font-normal"
                cursorClassName="bg-fuchsia-600 dark:bg-[#00D9FF]"
              />
              <div className="mt-4 text-start text-sm sm:text-base md:text-lg text-black dark:text-white max-w-2xl">
                <TextGenerateEffect words={words} />
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="w-full mt-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title + index}
                    variants={cardVariants}
                    custom={index}
                  >
                    <SkillCard skill={skill} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <Modal>
      <ModalTrigger className="block w-full">
        <div
          className="group relative h-16 sm:h-20 md:h-24 rounded-xl 
                     hover:shadow-[0_0_15px_rgba(153,0,153,0.5)] 
                     dark:hover:shadow-[0_0_15px_rgba(0,217,255,0.5)] 
                     cursor-pointer overflow-hidden
                     bg-gradient-to-r from-gray-800 to-gray-600 
                     dark:from-[#024a5cbd] dark:to-[#ffffff85]
                     border-2 border-fuchsia-600 dark:border-[rgb(0,217,255)]
                     transition-all duration-500 hover:-translate-y-2"
        >
          {/* Main Content */}
          <div className="absolute inset-0 flex items-center px-4 gap-3 transition-transform duration-500 group-hover:translate-x-full">
            <div
              className="p-1.5 rounded-lg flex-shrink-0
                         bg-white
                         border dark:border-[rgba(0,217,255,0.3)]"
            >
              <Image
                src={skill.iconUrl}
                alt={skill.title}
                width={20}
                height={20}
                className="object-contain w-5 h-5"
                loading="lazy"
              />
            </div>
            <h3 className="text-sm font-bold text-fuchsia-200 dark:text-[#00D9FF] truncate">
              {skill.title}
            </h3>
          </div>

          {/* Eye Icon */}
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 -translate-x-full group-hover:translate-x-0 bg-[rgb(226,221,231)]">
            <Eye className="w-5 h-5 text-fuchsia-600 dark:text-[#03363f]" />
          </div>
        </div>
      </ModalTrigger>

      <ModalBody>
        <ModalContent
          className="w-auto"
        >
          <div className="flex flex-col items-center p-4 sm:p-6 md:p-8">
            <div
              className="p-3 rounded-xl mb-4
                         bg-[rgba(153,0,153,0.1)] dark:bg-[rgba(97,144,153,0.1)] 
                         border border-[rgba(153,0,153,0.3)] dark:border-[rgba(0,217,255,0.3)]"
            >
              <Image
                src={skill.iconUrl}
                alt={skill.title}
                width={56}
                height={56}
                className="object-contain w-14 h-14"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-center mb-3 text-fuchsia-600 dark:text-[#00D9FF]">
              {skill.title}
            </h3>

            <p className="text-black dark:text-[#a0d7e0] text-center mb-6 text-sm sm:text-base">
              {skill.quote}
            </p>

            <div className="w-full">
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-center text-fuchsia-600 dark:text-[#00D9FF]">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                {skill.logos.map(
                  (logo: { name: string; url: string }, idx: number) => (
                    <motion.div
                      key={logo.name + idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * idx, duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center"
                    >
                      <div
                        className="p-2 rounded-lg
                                   bg-[rgba(153,0,153,0.1)] dark:bg-[rgba(0,217,255,0.1)] 
                                   border border-[rgba(153,0,153,0.3)] dark:border-[rgba(0,217,255,0.3)]"
                      >
                        <Image
                          src={logo.url}
                          alt={logo.name}
                          width={40}
                          height={40}
                          className="object-contain w-10 h-10"
                        />
                      </div>
                      <span className="mt-2 text-xs sm:text-sm font-medium text-fuchsia-600 dark:text-[#a0d7e0]">
                        {logo.name}
                      </span>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default Skills;
