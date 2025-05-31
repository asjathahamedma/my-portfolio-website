"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaBackward, FaForward } from "react-icons/fa";
import { LettersPullUp } from "../components/letters-pull-up";

const BackgroundParticles = dynamic(
  () => import("../components/BackgroundParticles"),
  { ssr: false }
);


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
};

const projectsData: Record<Category, Project[]> = {
  "penetration-testing": [
    {
      title: "ViperScan",
      description:
        "Custom vulnerability scanner using Python and Nmap for small web apps.",
      image: "/ViperScan.jpg",
      status: "In Progress / Research Project",
      techStack: ["Python", "Nmap", "OWASP", "Burp Suite", "Nikto"],
    },
    {
      title: "XSS Hunter",
      description: "Automates XSS discovery in websites.",
      image: "/XssHunter.jpg",
      status: "Completed",
      techStack: ["JavaScript", "Burp Suite", "Python"],
    },
  ],
  "malware-analysis": [
    {
      title: "MalwareLab-X",
      description:
        "Controlled malware analysis lab with REMnux and keylogger dropper simulation.",
      image: "/MalwareLab-X.jpg",
      status: "Research Simulation",
      techStack: [
        "REMnux",
        "Python",
        "x64dbg",
        "Wireshark",
        "Process Hacker",
      ],
    },
    {
      title: "YARA Scanner",
      description: "Scan files using YARA rules in sandboxed environments.",
      image: "/YARAscanner.jpg",
      status: "Completed",
      techStack: ["Python", "YARA", "VirtualBox"],
    },
  ],
  "network-security": [
    {
      title: "NetSentinel",
      description:
        "Virtual lab for enterprise network attack-defense simulation.",
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
    },
  ],
  scripting: [
    {
      title: "AutoReconX",
      description:
        "Automated recon tool for CTFs using Python and Bash scripting.",
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
    },
  ],
  "frontend-development": [
    {
      title: "GlitchViper.dev",
      description:
        "Animated hacker-themed portfolio site using Next.js and Framer Motion.",
      image: "/myPortfolio.jpg",
      status: "Live",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "React", "Vercel"],
    },
    {
      title: "Admin Dashboard",
      description: "Responsive admin panel with charts and controls.",
      image: "/AdminDashboard.jpg",
      status: "Completed",
      techStack: ["React", "Tailwind CSS", "Chart.js"],
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
    <div className="h-screen text-[#00D9FF] overflow-x-hidden relative bg-gradient-to-b dark:from-[#01242da4] dark:to-[#020006c5]">
      {!showProjects ? (
        <div className="text-lg drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]">
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
          <div className="h-screen text-white flex flex-row items-center px-4 gap-10 overflow-hidden ">
            {/* Category Tabs */}
            <div className="flex flex-col gap-6 text-md font-semibold">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => {
                    setActiveCategory(cat.value);
                    setActiveIndex(0);
                  }}
                  className={`transition duration-200 ${activeCategory === cat.value
                    ? " text-cyan-400 hover:scale-110"
                    : "text-white hover:scale-110 hover:text-gray-400 transition-all duration-600"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Project Viewer */}
            <div className="flex items-center justify-center gap-6 w-full ">
              <div className="p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 transition-transform duration-300 hover:scale-105">
                <button
                  onClick={handleNext}
                  className="rounded-full p-4 bg-zinc-900 text-white transition-all duration-300
               hover:bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500
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
                  className="relative w-[50%] h-[400px] overflow-hidden glass-glow flex flex-col md:flex-row items-center justify-between p-6 gap-6 hover:scale-102 transition-all duration-300"
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


              <div className="p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 transition-transform duration-300 hover:scale-105">
                <button
                  onClick={handleNext}
                  className="rounded-full p-4 bg-zinc-900 text-white transition-all duration-300
               hover:bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500
               hover:shadow-[0_0_15px_#0ff] hover:scale-110"
                >
                  <FaForward />
                </button>
              </div>



            </div>
            <div className="fixed inset-0 -z-50 opacity-5">
              <img src="/effect.png" alt="background" className="w-full h-full object-cover" />
            </div>
          </div>

        </motion.div>
      )}
    <BackgroundParticles/>
    </div>
  );
}
