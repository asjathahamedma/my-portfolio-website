"use client";
import { motion } from "framer-motion";
import React from "react";

const BackgroundParticles = () => {
  const particles = React.useMemo(
    () =>
      Array.from({ length: 80 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        digit: Math.random() > 0.5 ? "0" : "1",
        duration: 5 + Math.random() * 10,
      })),
    []
  );

  return (
    <div className="absolute inset-0 -z-40 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute text-[#00D9FF] opacity-10"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{ y: [0, -100, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {particle.digit}
        </motion.div>
      ))}
    </div>
  );
};
export default BackgroundParticles;
