"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaFileAlt } from "react-icons/fa";
import { sentences } from "../components/data/projectSentences";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";
import { TextGenerateEffect } from "../components/text-generate-effect";

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
    description: "A Python-based web vulnerability scanner integrating Nmap, Burp Suite, and Nikto. It supports automated scanning, intelligent target parsing, and customizable modules for detecting OWASP Top 10 vulnerabilities.",
    shortDescription: "Web scanner with Nmap, Burp Suite, and Nikto integration.",
    image: "/ViperScan.jpg",
    status: "In Progress",
    techStack: ["Python", "Nmap", "Burp Suite"],
    github: "/",
    category: "Penetration Testing",
    writeup: "/"
  },
  {
    title: "XSS Hunter",
    description: "Automated tool for detecting reflected and stored XSS vulnerabilities using payload injection and browser-based scripts. Ideal for testing input sanitization.",
    shortDescription: "Detects XSS vulnerabilities using JS payloads.",
    image: "/XssHunter.jpg",
    status: "Completed",
    techStack: ["JavaScript", "Burp Suite", "Python"],
    github: "/",
    category: "Penetration Testing",
    writeup: "/"
  },
  {
    title: "MalwareLab-X",
    description: "Reverse engineering malware using REMnux, x64dbg, and Wireshark. Includes behavioral analysis and static inspection in a safe lab setup.",
    shortDescription: "Reverse engineering malware using REMnux and x64dbg.",
    image: "/MalwareLab-X.jpg",
    status: "Research",
    techStack: ["REMnux", "x64dbg", "Wireshark"],
    github: "/",
    category: "Malware Analysis",
    writeup: "/"
  },
  {
    title: "YARA Scanner",
    description: "Detects malware in virtual sandbox environments using custom YARA rules. Supports real-time alerts and detailed match reports.",
    shortDescription: "Malware detection using YARA rules.",
    image: "/YARAscanner.jpg",
    status: "Completed",
    techStack: ["Python", "YARA", "VirtualBox"],
    github: "/",
    category: "Malware Analysis",
    writeup: "/"
  },
  {
    title: "AutoReconX",
    description: "Automates reconnaissance tasks for CTFs including subdomain enumeration, directory brute-forcing, and port scanning.",
    shortDescription: "Automates CTF recon tasks like subdomain and dir scan.",
    image: "/AutoReconX.jpg",
    status: "Prototype",
    techStack: ["Python", "Sublist3r", "Dirsearch", "Nmap"],
    github: "/",
    category: "Scripting",
    writeup: "/"
  },
  {
    title: "NetSentinel",
    description: "Simulated lab environment for network defense including firewall setup, intrusion detection, and packet inspection using open-source tools.",
    shortDescription: "Network defense lab with IDS, firewall, and sniffing.",
    image: "/NetSentinal.jpg",
    status: "Simulated",
    techStack: ["Wireshark", "pfSense", "Ettercap"],
    github: "/",
    category: "Network Security",
    writeup: "/"
  },
  {
    title: "GlitchViper.dev",
    description: "A modern, animated cybersecurity-themed portfolio using Next.js, Tailwind CSS, and Framer Motion. Features glitch effects, 3D assets, and smooth page transitions.",
    shortDescription: "Cyber-themed animated portfolio with glitch effects.",
    image: "/myPortfolio.jpg",
    status: "Live",
    techStack: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/AsjathAhamedMohamedAazath/my-portfolio-website",
    category: "Frontend Development",
    writeup: "/"
  },
  {
    title: "Admin Dashboard",
    description: "A minimal admin dashboard interface built with Tailwind CSS and Chart.js. Displays analytics, real-time charts, and theme customization.",
    shortDescription: "Admin UI with Tailwind and Chart.js.",
    image: "/AdminDashboard.jpg",
    status: "Completed",
    techStack: ["React", "Tailwind", "Chart.js"],
    github: "/",
    category: "Frontend Development",
    writeup: "/"
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated Typewriter */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={showContent ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <TypewriterEffectSmooth
          sentences={sentences}
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-4xl p-3 font-normal"
          cursorClassName="bg-[#00D9FF]"
        />
      </motion.div>

      {/* Animated Projects Carousel */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 left-0 flex gap-10 px-10"
        initial={{ y: 400, opacity: 0 }}
        animate={showContent ? { y: 0, opacity: 1 } : {}}
        transition={{
          y: { duration: 1, ease: "easeOut" },
          opacity: { duration: 0.8 },
          // Keep the existing horizontal animation
          x: { duration: 180, repeat: Infinity, ease: "linear" }
        }}
      >
        {[...allProjects, ...allProjects].map((project, i) => (
          <motion.div
            key={`${project.title}-${i}`}
            onClick={() => setSelectedProject(project)}
            className="min-w-[50vw] h-[60vh] p-4 bg-[#393c3d80] rounded-xl flex flex-col justify-between items-center hover:shadow-[0_0_70px_#ffffffff] hover:scale-105 transition-all duration-500 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={500}
              className="w-full h-[45%] object-cover rounded-md shadow-lg hover:scale-110 transition-all duration-300"
            />
            <div className="flex flex-col justify-center items-center flex-grow">
              <motion.h2 className="text-3xl font-bold text-cyan-400 text-center mt-4">
                {project.title}
              </motion.h2>
              <p className="mt-2 text-gray-300 text-center text-sm max-w-2xl">
                {project.shortDescription}
              </p>
              <p className="mt-2 text-emerald-400 text-sm">
                <strong>Status:</strong> {project.status}
              </p>
              <p className="text-cyan-300 text-sm">
                <strong>Category:</strong> {project.category}
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs border border-cyan-400 bg-cyan-500/10 text-cyan-300 rounded-full hover:bg-white hover:text-cyan-950 hover:border-white hover:scale-120 transition-all duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#8ce5f468] backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#011417] text-white p-8 rounded-lg max-w-3xl w-full shadow-lg relative"
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
                className="text-3xl font-bold text-cyan-400 mb-2 text-left"
              />
              <TextGenerateEffect
                words={selectedProject.description}
                className="text-gray-300 mb-2 text-sm text-left"
              />
              <TextGenerateEffect
                words={`Status: ${selectedProject.status}`}
                className="text-emerald-400 mb-2 text-sm text-left"
              />
              <TextGenerateEffect
                words={`Category: ${selectedProject.category}`}
                className="text-cyan-300 mb-2 text-sm text-left"
              />
              <div className="mb-2 flex justify-between items-center flex-wrap gap-2">
                {/* Tags on the left */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-cyan-400 bg-cyan-500/10 text-cyan-300 rounded-full hover:bg-white hover:text-cyan-950 hover:border-white hover:scale-120 transition-all duration-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Icons on the right */}
                <div className="flex flex-col items-center gap-4 group">
                  {/* Write-up link (only if exists) */}
                  {selectedProject.writeup && (
                    <a
                      href={selectedProject.writeup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-end text-green-300 hover:text-green-200 text-md overflow-hidden group/writeup"
                    >
                      <span className="opacity-0 transform translate-x-4 transition-all duration-300 group-hover/writeup:opacity-100 group-hover/writeup:translate-x-0 whitespace-nowrap">
                        Read Write-up
                      </span>
                      <FaFileAlt className="text-xl ml-2" />
                    </a>
                  )}

                  {/* GitHub Link */}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-end text-cyan-300 hover:text-cyan-200 text-md overflow-hidden group/github"
                    >
                      <span className="opacity-0 transform translate-x-4 transition-all duration-300 group-hover/github:opacity-100 group-hover/github:translate-x-0 whitespace-nowrap">
                        View on GitHub
                      </span>
                      <FaGithub className="text-xl ml-2" />
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