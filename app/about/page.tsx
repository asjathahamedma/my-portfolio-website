"use client";

import React from "react";
import Image from "next/image";
import { StickyScroll } from "../components/sticky-scroll-reveal";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { TextGenerateEffect } from "../components/text-generate-effect";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const aboutSections = [
  {
    title: "About Me",
    description:
      "I'm Asjath Ahamed Mohamed Aazath, a cybersecurity enthusiast from Sri Lanka with a Higher Diploma in Networking and Cybersecurity. I’m passionate about ethical hacking, malware analysis, and red teaming.",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
        <Image
          src="/asjath.jpg"
          width={120}
          height={120}
          alt="Asjath Ahamed"
          className="rounded-lg border-4 border-cyan-950 hover:scale-150 transition-all duration-300 hover:shadow-md shadow-2xl mb-5 hover:border-white"
        />
        <TextGenerateEffect
          words="Building tools like ViperScan, sharing technical writeups, and leveling up on Hack The Box."
          className="max-w-md font-light"
        />
      </div>
    ),
  },
  {
    title: "Current Learning",
    description:
      "Focused on Linux internals, advanced web exploits, malware reverse engineering with YARA & Ghidra, and machine learning for threat classification.",
    content: (
      <div className="flex flex-col items-start justify-center h-full text-white px-4 space-y-2 text-left">
        <TextGenerateEffect
          words="What I’m learning now:"
          className="text-white font-semibold"
        />
        <ul className="list-disc list-inside">
          <li>Linux privilege escalation</li>
          <li>Bug bounty methodologies</li>
          <li>Reverse engineering with Ghidra</li>
          <li>YARA rules and malware classification</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Tech Stack",
    description:
      "Here are the technologies and tools I frequently work with in cybersecurity and frontend development.",
    content: (
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-white text-sm p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {[
          { name: "Python", url: "/python.png" },
          { name: "Burp Suite", url: "/burp-suite.png" },
          { name: "Nmap", url: "/nmap.png" },
          { name: "Metasploit", url: "/metasploit.png" },
          { name: "Ghidra", url: "/ghidra.png" },
          { name: "React", url: "/react.png" },
          { name: "Linux", url: "/bash.png" },
          { name: "Next.js", url: "/nextjs.png" },
          { name: "Tailwind CSS", url: "/tailwaindcss2.png" },
        ].map((tech, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center hover:scale-120 hover:drop-shadow-lg transition-all duration-300 gap-2"
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={tech.url}
              alt={tech.name}
              width={48}
              height={48}
              className="rounded-lg  shadow-md"
            />
            <span className="text-center">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    ),
  },
  {
    title: "Fun Facts",
    description:
      "A few random things about me that define my hacker spirit and creative interests.",
    content: (
      <div className="text-white px-4 space-y-2">
        <TextGenerateEffect
          words="Here are some fun facts:"
          className="text-white font-semibold"
        />
        <ul className="list-disc list-inside">
          <li>Favorite CTF Platform: Hack The Box</li>
          <li>I love glitch effects, hacker themes, and building animations</li>
          <li>I break things to understand how they work — and fix them better 🔧</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Let’s Connect",
    description:
      "I’m open to collaborations, freelance projects, or just geeking out. Find me on GitHub and LinkedIn.",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-white text-center gap-3">
        <TextGenerateEffect
          words="Reach out via:"
          className="text-white text-lg"
        />
        <motion.div
          className="flex gap-6 text-6xl text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              href: "https://github.com/AsjathAhamedMohamedAazath",
              icon: <FaGithub />,
            },
            {
              href: "https://www.linkedin.com/in/asjathahamed",
              icon: <FaLinkedin />,
            },
            {
              href: "mailto:asjathahamedmohamedaazath@gmail.com", // ✅ change to your real email
              icon: <FaEnvelope />,
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              className="hover:scale-130 hover:bg-[#070b0d] rounded-lg shadow-lg p-2 transition-all duration-300"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    ),
  },
];


export default function AboutPage() {
  return (
    <main className="min-h-screen py-16">
      <StickyScroll content={aboutSections} />
    </main>
  );
}
