"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "booting cyber sentinel...", delay: 0 },
  { text: "loading security protocols...", delay: 1200 },
  { text: "establishing encrypted channels...", delay: 2600 },
  { text: "systems nominal. ready for operation.", delay: 4200 },
];

export default function TerminalLoader() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Type lines sequentially
    lines.forEach(({ text, delay }, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, text]);
      }, delay);
    });

    // Blinking cursor toggle
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 600);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "#39ff14",
        fontFamily: "'Source Code Pro', monospace",
        fontSize: "1.3rem",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "3rem",
        userSelect: "none",
        overflow: "hidden",
        whiteSpace: "pre-wrap",
        filter: "drop-shadow(0 0 6px #39ff14)",
      }}
    >
      {visibleLines.map((line, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.3 }}
          style={{
            textShadow:
              "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 20px #00ff00",
          }}
        >
          <span style={{ color: "#00ff00" }}>$</span> {line}
        </motion.div>
      ))}
      <motion.span
        style={{
          marginTop: "0.2rem",
          color: cursorVisible ? "#39ff14" : "transparent",
          fontWeight: "bold",
          fontSize: "1.5rem",
          textShadow: "0 0 5px #39ff14",
          userSelect: "none",
        }}
        animate={{ opacity: cursorVisible ? 1 : 0 }}
      >
        _
      </motion.span>
    </div>
  );
}
