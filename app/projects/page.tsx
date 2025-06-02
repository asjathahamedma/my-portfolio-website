"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FaBackward, FaForward, FaGithub } from "react-icons/fa";



const bootLines = [
  "[*] 🚦 Boot sequence initiated...",
  "[+] 🧠 Neural matrix online: GlitchViper.exe",
  "[!] 🔍 Scanning darknets for exploitable surfaces...",
  "[✓] 🔓 Firewall bypassed — UID=0(root) acquired",
  "[*] 🧬 Injecting code anomalies into live memory...",
  "[+] 🐍 ViperStrike protocol engaged — entropy rising...",
  "[✓] 🧠 System breach complete. Intelligence secured.",
  "[!] ⚡ GlitchViper active — rewriting digital reality...",
];

type Category =
  | "penetration-testing"
  | "malware-analysis"
  | "network-security"
  | "scripting"
  | "frontend-development";

type Project = {
  title: string;
  description: string;
  image: string;
  status: string;
  techStack: string[];
  github: string;
};

const projectsData: Record<Category, Project[]> = {
  "penetration-testing": [
    {
      title: "ViperScan",
      description:
        "A Python-based web vulnerability scanner integrating Nmap, Burp Suite, and Nikto to detect OWASP Top 10 issues.",
      image: "/ViperScan.jpg",
      status: "In Progress / Research Project",
      techStack: ["Python", "Nmap", "OWASP", "Burp Suite", "Nikto"],
      github: "/"
    },
    {
      title: "XSS Hunter",
      description:
        "An automated tool for detecting reflected and stored XSS using JS payloads and Burp Suite macros.",
      image: "/XssHunter.jpg",
      status: "Completed",
      techStack: ["JavaScript", "Burp Suite", "Python"],
      github: "/"
    },
  ],
  "malware-analysis": [
    {
      title: "MalwareLab-X",
      description:
        "An isolated lab for reverse-engineering malware using REMnux, Wireshark, and debugging tools.",
      image: "/MalwareLab-X.jpg",
      status: "Research Simulation",
      techStack: [
        "REMnux",
        "Python",
        "x64dbg",
        "Wireshark",
        "Process Hacker",
      ],
      github: "/"
    },
    {
      title: "YARA Scanner",
      description:
        "A YARA-based scanner for identifying malware signatures in sandboxed environments.",
      image: "/YARAscanner.jpg",
      status: "Completed",
      techStack: ["Python", "YARA", "VirtualBox"],
      github: "/"
    },
  ],
  "network-security": [
    {
      title: "NetSentinel",
      description:
        "A red/blue team simulation lab for testing IDS, firewalls, and network analysis tools.",
      image: "/NetSentinal.jpg",
      status: "Learning Environment",
      techStack: [
        "Kali Linux",
        "Wireshark",
        "iptables",
        "pfSense",
        "TCPDump",
        "Ettercap",
      ],
      github: "/"
    },
  ],
  scripting: [
    {
      title: "AutoReconX",
      description:
        "A CTF-focused recon tool combining subdomain, directory, and DNS enumeration workflows.",
      image: "/AutoReconX.jpg",
      status: "Tool Prototype",
      techStack: [
        "Python",
        "Bash",
        "Sublist3r",
        "Dirsearch",
        "Nmap",
        "Whois",
        "DNS",
      ],
      github: "/"
    },
  ],
  "frontend-development": [
    {
      title: "GlitchViper.dev",
      description:
        "A hacker-themed portfolio with animations, interactive UI, and dynamic project showcases.",
      image: "/myPortfolio.jpg",
      status: "Live",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "React", "Vercel"],
      github: "https://github.com/AsjathAhamedMohamedAazath/my-portfolio-website"
    },
    {
      title: "Admin Dashboard",
      description:
        "A responsive dashboard with charts, filters, and clean UI built using Tailwind and Chart.js.",
      image: "/AdminDashboard.jpg",
      status: "Completed",
      techStack: ["React", "Tailwind CSS", "Chart.js"],
      github: "/"
    },
  ],
};



const categories: { label: string; value: Category }[] = [
  { label: "Penetration Testing", value: "penetration-testing" },
  { label: "Malware Analysis", value: "malware-analysis" },
  { label: "Network Security", value: "network-security" },
  { label: "Scripting & Automation", value: "scripting" },
  { label: "Frontend Development", value: "frontend-development" },
];

export default function ProjectsPage() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    bootLines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        if (i === bootLines.length - 1) {
          setTimeout(() => setShowProjects(true), 1000);
        }
      }, i * 1500);
    });
  }, []);

  const [activeCategory, setActiveCategory] = useState<Category>(
    "penetration-testing"
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeProjects = projectsData[activeCategory];
  const currentProject = activeProjects[activeIndex];

  const handlePrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? activeProjects.length - 1 : prev - 1
    );

  const handleNext = () =>
    setActiveIndex((prev) =>
      prev === activeProjects.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="h-screen text-[#00D9FF] overflow-x-hidden relative ">
      {!showProjects ? (
        <div className="text-lg p-5 drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]">
          {visibleLines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-2"
            >
              {line}
            </motion.p>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="h-screen text-white flex flex-col items-start px-3 gap-8 overflow-hidden ">
            {/* Category Tabs */}
            <div className="flex mt-11 gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => {
                    setActiveCategory(cat.value);
                    setActiveIndex(0);
                  }}
                  className={`px-4 py-1 text-sm md:text-sm rounded-full font-semibold transition-all duration-300 
        border border-cyan-500 shadow-md 
        ${activeCategory === cat.value
                      ? "bg-cyan-400 text-black shadow-[0_0_12px_#00D9FF] scale-105"
                      : "bg-transparent text-white hover:bg-white hover:text-black hover:shadow-[0_0_10px_#00D9FF] hover:scale-105"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Project Viewer */}
            <div className="flex items-center justify-center gap-6 w-full ">
              <div>
                <Image
                  src="/hacker-3.png"
                  alt=""
                  width={800}
                  height={800}
                  className="hover:scale-105 transition-transform duration-300 animate-img"

                />
              </div>
              <div className="p-[2px] rounded-full bg-gradient-to-r items-center from-[#0252f1] via-[#02e0f4] to-[#fff] transition-transform duration-300 hover:scale-105">
                <button
                  onClick={handleNext}
                  className="rounded-full p-2 bg-zinc-900 text-white transition-all duration-300
               hover:bg-gradient-to-r from-[#0252f1] via-[#02e0f4] to-[#fff]
               hover:shadow-[0_0_15px_#0ff] hover:scale-110"
                >
                  <FaBackward />
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.title}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-[90%] h-[60%] overflow-hidden glass-glow flex flex-col md:flex-row items-center justify-between p-6 gap-6 hover:scale-102 transition-all duration-300"
                >
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl text-[#00D9FF] font-bold mb-2">{currentProject.title}</h3>
                    <p className="text-white mb-2">{currentProject.description}</p>
                    <p className="text-sm text-emerald-300 mb-1">
                      <strong>Status:</strong> {currentProject.status}
                    </p>
                    <p className="text-sm text-sky-300">
                      <strong>Tech Stack:</strong> {currentProject.techStack.join(", ")}
                    </p>
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white mt-2 hover:text-cyan-300 transition-colors"
                    >
                      <FaGithub className="text-xl" />
                      View on GitHub
                    </a>

                  </div>
                  <div className="w-full md:w-1/2">
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>


              <div className="p-[2px] rounded-full bg-gradient-to-r from-[#0252f1] via-[#02e0f4] to-[#fff] transition-transform duration-300 hover:scale-105">
                <button
                  onClick={handleNext}
                  className="rounded-full p-2 bg-zinc-900 text-white transition-all duration-300
               hover:bg-gradient-to-r from-[#0252f1] via-[#02e0f4] to-[#fff]
               hover:shadow-[0_0_15px_#0ff] hover:scale-110"
                >
                  <FaForward />
                </button>
              </div>



            </div>

          </div>

        </motion.div>
      )}
    </div>
  );
}
