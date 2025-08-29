"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaFileAlt } from "react-icons/fa";
import { sentences } from "../components/data/projectSentences";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";
import { TextGenerateEffect } from "../components/text-generate-effect";
import { CometCard } from "../components/comet-card";

type Project = {
  writeup: string | undefined;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  status: string;
  techStack: string[];
  github: string;
  category: string;
};

const allProjects: Project[] = [
  {
    title: "ViperScan",
    description:
      "A Python-based web vulnerability scanner integrating Nmap, Burp Suite, and Nikto. It supports automated scanning, intelligent target parsing, and customizable modules for detecting OWASP Top 10 vulnerabilities.",
    shortDescription:
      "Web scanner with Nmap, Burp Suite, and Nikto integration.",
    image: "/ViperScan.jpg",
    status: "In Progress",
    techStack: ["Python", "Nmap", "Burp Suite"],
    github: "/",
    category: "Penetration Testing",
    writeup: "/",
  },
  {
    title: "XSS Hunter",
    description:
      "Automated tool for detecting reflected and stored XSS vulnerabilities using payload injection and browser-based scripts. Ideal for testing input sanitization.",
    shortDescription: "Detects XSS vulnerabilities using JS payloads.",
    image: "/XssHunter.jpg",
    status: "Completed",
    techStack: ["JavaScript", "Burp Suite", "Python"],
    github: "/",
    category: "Penetration Testing",
    writeup: "/",
  },
  {
    title: "MalwareLab-X",
    description:
      "Reverse engineering malware using REMnux, x64dbg, and Wireshark. Includes behavioral analysis and static inspection in a safe lab setup.",
    shortDescription: "Reverse engineering malware using REMnux and x64dbg.",
    image: "/MalwareLab-X.jpg",
    status: "Research",
    techStack: ["REMnux", "x64dbg", "Wireshark"],
    github: "/",
    category: "Malware Analysis",
    writeup: "/",
  },
  {
    title: "YARA Scanner",
    description:
      "Detects malware in virtual sandbox environments using custom YARA rules. Supports real-time alerts and detailed match reports.",
    shortDescription: "Malware detection using YARA rules.",
    image: "/YARAscanner.jpg",
    status: "Completed",
    techStack: ["Python", "YARA", "VirtualBox"],
    github: "/",
    category: "Malware Analysis",
    writeup: "/",
  },
  {
    title: "AutoReconX",
    description:
      "Automates reconnaissance tasks for CTFs including subdomain enumeration, directory brute-forcing, and port scanning.",
    shortDescription: "Automates CTF recon tasks like subdomain and dir scan.",
    image: "/AutoReconX.jpg",
    status: "Prototype",
    techStack: ["Python", "Sublist3r", "Dirsearch", "Nmap"],
    github: "/",
    category: "Scripting",
    writeup: "/",
  },
  {
    title: "NetSentinel",
    description:
      "Simulated lab environment for network defense including firewall setup, intrusion detection, and packet inspection using open-source tools.",
    shortDescription: "Network defense lab with IDS, firewall, and sniffing.",
    image: "/NetSentinal.jpg",
    status: "Simulated",
    techStack: ["Wireshark", "pfSense", "Ettercap"],
    github: "/",
    category: "Network Security",
    writeup: "/",
  },
  {
    title: "GlitchViper.dev",
    description:
      "A modern, animated cybersecurity-themed portfolio using Next.js, Tailwind CSS, and Framer Motion. Features glitch effects, 3D assets, and smooth page transitions.",
    shortDescription: "Cyber-themed animated portfolio with glitch effects.",
    image: "/myPortfolio.jpg",
    status: "Live",
    techStack: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/AsjathAhamedMohamedAazath/my-portfolio-website",
    category: "Frontend Development",
    writeup: "/",
  },
  {
    title: "Admin Dashboard",
    description:
      "A minimal admin dashboard interface built with Tailwind CSS and Chart.js. Displays analytics, real-time charts, and theme customization.",
    shortDescription: "Admin UI with Tailwind and Chart.js.",
    image: "/AdminDashboard.jpg",
    status: "Completed",
    techStack: ["React", "Tailwind", "Chart.js"],
    github: "/",
    category: "Frontend Development",
    writeup: "/",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative w-full h-screen overflow-x-hidden p-6 md:p-12">
      {/* Animated Typewriter */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center items-center text-center"
      >
        <TypewriterEffectSmooth
          sentences={sentences}
          className="
    text-xl       /* mobile */
    sm:text-2xl      /* small devices */
    md:text-4xl     /* tablets */
    lg:text-5xl     /* desktops */
    xl:text-6xl     /* large screens */
    p-5 
  "
          cursorClassName="
    bg-fuchsia-600 dark:bg-[#00D9FF] 
    h-4 sm:h-5 md:h-7 lg:h-8 xl:h-9
  "
        />
      </motion.div>

      {/* Section Description */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="max-w-3xl mx-auto text-center mt-6 px-4"
      >
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Explore a collection of my{" "}
          <span className="text-fuchsia-500 dark:text-[#00D9FF] font-semibold">
            cybersecurity
          </span>{" "}
          and{" "}
          <span className="text-fuchsia-500 dark:text-[#00D9FF] font-semibold">
            development
          </span>{" "}
          projects — ranging from penetration testing tools and malware analysis
          labs to modern web apps and animated portfolios. Each project reflects
          my passion for{" "}
          <span className="text-emerald-400">problem-solving</span>,{" "}
          <span className="text-fuchsia-400 dark:text-[#00D9FF]">
            creativity
          </span>
          , and <span className="text-emerald-400">technical exploration</span>.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="mt-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-15">
        {allProjects.map((project) => (
          <CometCard key={project.title} className="flex flex-col w-full">
            <button
              type="button"
              className="flex flex-col flex-1 rounded-2xl bg-gray-800 p-3 md:p-4 
                   border border-fuchsia-600 dark:border-cyan-400 
                   hover:shadow-2xl hover:shadow-fuchsia-300 dark:hover:shadow-cyan-400 
                   transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative aspect-[3/1] w-full overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              {/* Text */}
              <div className="mt-4 flex flex-col flex-1 text-left text-white">
                <h2 className="text-lg font-semibold text-fuchsia-400 dark:text-[#00D9FF]">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  {project.shortDescription}
                </p>
                <p className="mt-1 text-xs text-emerald-400">
                  Status: {project.status}
                </p>
                <p className="text-xs text-fuchsia-300 dark:text-cyan-300">
                  Category: {project.category}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs 
                         bg-white dark:bg-[#00D9FF]/10 
                         text-fuchsia-800 dark:text-[#00D9FF] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </button>
          </CometCard>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-blue-100 dark:bg-[#011417] text-black dark:text-white p-8 rounded-lg max-w-3xl w-full shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1000}
                height={500}
                className="w-full h-[250px] object-cover rounded-md mb-4"
              />

              <TextGenerateEffect
                words={selectedProject.title}
                className="text-3xl font-bold text-fuchsia-600 dark:text-[#00D9FF] mb-2 text-left"
              />
              <TextGenerateEffect
                words={selectedProject.description}
                className="text-black dark:text-gray-300 mb-2 text-sm text-left"
              />

              <TextGenerateEffect
                words={`Status: ${selectedProject.status}`}
                className="text-emerald-400 dark:text-emerald-400 mb-2 text-sm text-left"
              />
              <TextGenerateEffect
                words={`Category: ${selectedProject.category}`}
                className="text-fuchsia-400 dark:text-cyan-300 mb-2 text-sm text-left"
              />

              <div className="mt-3 flex justify-between items-center flex-wrap gap-2">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-fuchsia-600 dark:border-[#00D9FF] 
                                 bg-fuchsia-500/10 dark:bg-[#00D9FF]/10 
                                 text-fuchsia-600 dark:text-[#00D9FF] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col items-center gap-4">
                  {selectedProject.writeup && (
                    <a
                      href={selectedProject.writeup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black dark:text-white hover:opacity-80 text-sm"
                    >
                      <FaFileAlt className="text-lg" /> Read Write-up
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black dark:text-white hover:opacity-80 text-sm"
                    >
                      <FaGithub className="text-lg" /> View on GitHub
                    </a>
                  )}
                </div>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-white text-lg hover:text-red-500"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
