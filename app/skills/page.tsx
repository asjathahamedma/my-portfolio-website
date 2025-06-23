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
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { TextGenerateEffect } from "../components/text-generate-effect";

const words = `Explore my technical expertise through interactive skill cards. Each represents a domain I've mastered - click to discover the specific tools and technologies I wield within each discipline.`

interface Skill {
  title: string;
  iconUrl: string;
  quote: string;
  logos: { name: string; url: string }[];
  content?: React.ReactNode;
}


const Skills = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-12 overflow-hidden">
      <div className="w-full flex flex-col">
        <div className="flex flex-col lg:flex-row w-full px-6 gap-5 mt-10 items-center">
          <AnimatedImage />

          <div className="flex-2/3 relative w-full max-w-3xl">
            <TypewriterEffectSmooth
              sentences={sentences}
              className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-4xl font-normal"
              cursorClassName="bg-[#00D9FF]"
            />
            <div className="mt-4 text-start text-sm sm:text-base text-white max-w-2xl">
              <TextGenerateEffect words={words} />
            </div>

            {/* Skills Grid Section */}
            <div className="w-full mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                {skills.map((skill, index) => (
                  <SkillCard key={skill.title + index} skill={skill} />
                ))}
              </div>
            </div>
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
          className="group relative h-16 rounded-xl hover:shadow-[0_0_15px_rgba(0,217,255,0.5)] cursor-pointer overflow-hidden
                     bg-gradient-to-r from-[#024a5cbd] to-[#ffffff85]
                     border border-[rgb(0,217,255)]
                     transition-all duration-500 hover:-translate-y-2"
        >
          {/* Main Content */}
          <div className="absolute inset-0 flex items-center px-4 gap-3 transition-transform duration-500 group-hover:translate-x-full">
            <div
              className="p-1.5 rounded-lg flex-shrink-0
                         bg-[rgba(0,217,255,0.1)] 
                         border border-[rgba(0,217,255,0.3)]"
            >
              <img
                src={skill.iconUrl}
                alt={skill.title}
                className="w-5 h-5 object-contain"
              />
            </div>
            <h3 className="text-sm font-bold text-[#00D9FF] truncate">
              {skill.title}
            </h3>
          </div>

          {/* Eye Icon */}
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 -translate-x-full group-hover:translate-x-0 bg-[rgb(226,221,231)]">
            <Eye className="w-5 h-5 text-[#03363f]" />
          </div>
        </div>
      </ModalTrigger>

      <ModalBody>
        <ModalContent
          className="max-w-2xl
                     bg-gradient-to-b from-[#b96ef7] to-[#1d0136]
                     border border-[rgba(0,217,255,0.3)]
                     shadow-[0_10px_30px_rgba(0,217,255,0.2)]"
        >
          <div className="flex flex-col items-center p-6 sm:p-8">
            <div
              className="p-3 rounded-xl mb-4
                         bg-[rgba(0,217,255,0.1)] 
                         border border-[rgba(0,217,255,0.3)]"
            >
              <img
                src={skill.iconUrl}
                alt={skill.title}
                className="w-14 h-14 object-contain"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-center mb-3 text-[#00D9FF]">
              {skill.title}
            </h3>

            <p className="text-[#a0d7e0] text-center mb-6 text-sm sm:text-base">
              {skill.quote}
            </p>

            <div className="w-full">
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-center text-[#00D9FF]">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {skill.logos.map((logo: any, idx: number) => (
                  <motion.div
                    key={logo.name + idx}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="p-2 rounded-lg
                                 bg-[rgba(0,217,255,0.1)] 
                                 border border-[rgba(0,217,255,0.3)]"
                    >
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs sm:text-sm font-medium text-[#a0d7e0]">
                      {logo.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default Skills;