"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StickyScroll } from "../components/sticky-scroll-reveal";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { TextGenerateEffect } from "../components/text-generate-effect";
import { motion, AnimatePresence } from "framer-motion";

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function AboutPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // success: reset + close
        setFormData({ name: "", email: "", message: "" });
        setShowForm(false);
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const aboutSections = [
    {
      title: "About Me",
      description:
        "I’m Asjath Ahamed Mohamed Aazath, a Cybersecurity and Network Engineer from Sri Lanka with hands-on experience in penetration testing, network defense, and malware analysis. My passion lies in building secure systems, breaking them apart ethically, and engineering better defenses.",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <Image
            src="/asjath.png"
            width={140}
            height={140}
            alt="Asjath Ahamed"
            className="rounded-lg border-4 border-black hover:scale-125 transition-all duration-300 shadow-2xl mb-5"
          />
          <TextGenerateEffect
            words="Dynamic Cybersecurity & Network Engineer with two years of experience configuring and securing infrastructures, conducting vulnerability assessments, and developing innovative incident response strategies."
            className="max-w-md font-light text-gray-800 dark:text-gray-300"
          />
        </div>
      ),
    },
    {
      title: "Professional Experience",
      description:
        "Here’s an overview of my practical industry and training experience in cybersecurity and networking.",
      content: (
        <div className="text-gray-800 dark:text-white px-4 space-y-4 text-left">
          <div>
            <h4 className="font-semibold text-white dark:text-[#00D9FF]">
              Cyber Security & Network Engineer – ICBT Campus
            </h4>
            <p className="text-sm italic">Sept 2022 – Dec 2024</p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>
                Configured and secured networks with routers, firewalls, and
                advanced encryption (WPA3, IPsec, TLS).
              </li>
              <li>
                Performed penetration testing with OWASP Top 10 and SIEM tools.
              </li>
              <li>
                Managed Windows/Linux systems and virtualization (VMware,
                Hyper-V).
              </li>
              <li>
                Administered Active Directory and DHCP for user management.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white dark:text-[#00D9FF]">
              Hack The Box Academy Labs – Hands-On Training
            </h4>
            <p className="text-sm italic">July 2025 – Present</p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>
                Completed modules on Nmap, Web Application Security, and Linux
                fundamentals.
              </li>
              <li>
                Exploited vulnerabilities using Burp Suite and Metasploit.
              </li>
              <li>
                Developed incident response strategies and collaborated on
                real-world attack simulations.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      description:
        "My academic journey that strengthens my foundation in cybersecurity and data science.",
      content: (
        <div className="text-gray-800 dark:text-white px-4 space-y-3">
          <div>
            <h4 className="font-semibold text-white dark:text-black">
              Higher Diploma in Networking & Cybersecurity
            </h4>
            <p className="text-sm italic">Sept 2022 – Dec 2024</p>
          </div>
          <div>
            <h4 className="font-semibold text-white dark:text-black">
              BSc (Hons) Data Science
            </h4>
            <p className="text-sm italic">Aug 2025 – Present</p>
          </div>
        </div>
      ),
    },
    {
      title: "Tech Stack",
      description:
        "Technologies and tools I frequently use in cybersecurity and frontend development.",
      content: (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm p-4"
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
            { name: "C++", url: "/C++.png" },
            { name: "Burp Suite", url: "/burp-suite.png" },
            { name: "Nmap", url: "/nmap.png" },
            { name: "Metasploit", url: "/metasploit.png" },
            { name: "Wireshark", url: "/wireshark.png" },
            { name: "Linux", url: "/bash.png" },
            { name: "React", url: "/react.png" },
            { name: "Next.js", url: "/nextjs.png" },
            { name: "Tailwind CSS", url: "/tailwaindcss2.png" },
            { name: "PostgreSQL", url: "/postgresql.png" },
            { name: "GitHub", url: "/github.png" },
          ].map((tech, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center hover:scale-110 hover:drop-shadow-lg transition-all duration-300 gap-2 text-gray-800 dark:text-gray-200"
              variants={iconVariants}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={tech.url}
                alt={tech.name}
                width={48}
                height={48}
                className="rounded-lg shadow-md"
              />
              <span className="text-center">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      ),
    },
    {
      title: "Certifications & Courses",
      description:
        "Credentials and specialized training that reinforce my skills.",
      content: (
        <div className="text-gray-800 dark:text-white px-4">
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              <span className="font-semibold text-white dark:text-black">
                Certified Bug Bounty Hunter
              </span>{" "}
              – Hack The Box Academy (Aug 2025 – Present)
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Fun Facts",
      description: "Some personal touches beyond the code and exploits.",
      content: (
        <div className="text-gray-800 dark:text-white px-4 space-y-2">
          <ul className="list-disc list-inside text-sm">
            <li>Favorite CTF Platform: Hack The Box</li>
            <li>
              I love glitch effects, hacker themes, and building interactive
              animations.
            </li>
            <li>
              I break things to understand them — and then rebuild them stronger
              🔧
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Let’s Connect",
      description:
        "I’m open to collaborations, freelance projects, and knowledge-sharing.",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-gray-800 ">
          <TextGenerateEffect words="Reach out via:" className="text-lg" />
          <motion.div
            className="flex gap-6 text-5xl"
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
              { href: "https://github.com/asjathahamedma", icon: <FaGithub /> },
              {
                href: "https://www.linkedin.com/in/asjathahamedma",
                icon: <FaLinkedin />,
              },
              {
                href: "#",
                icon: <FaEnvelope />,
                action: () => setShowForm(true),
              },
            ].map((item, idx) =>
              item.href === "#" ? (
                <motion.button
                  key={idx}
                  onClick={item.action}
                  variants={iconVariants}
                  className="hover:scale-125 hover:text-white transition-all duration-300"
                >
                  {item.icon}
                </motion.button>
              ) : (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  className="hover:scale-125 hover:text-white transition-all duration-300"
                >
                  {item.icon}
                </motion.a>
              )
            )}
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen py-16">
      <StickyScroll content={aboutSections} />

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-[#0b1120] rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-fuchsia-600 dark:text-[#00D9FF] mb-4">
                Contact Me
              </h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 dark:focus:ring-[#00D9FF]"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 dark:focus:ring-[#00D9FF]"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 dark:focus:ring-[#00D9FF]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-fuchsia-600 dark:bg-[#00D9FF] text-white font-semibold py-2 rounded-lg hover:opacity-80 transition-all disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
