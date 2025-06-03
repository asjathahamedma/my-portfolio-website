"use client";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useState } from "react";
import { certifications } from "./data/certifications";

export const AnimatedImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHover = () => {
    setIsHovered(true);
    controls.start({ opacity: 1, scale: 1 });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({ opacity: 0, scale: 0.5 });
  };

  return (
    <div
      className="flex-1 relative"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      <motion.img
        src="/hacker2.png"
        alt="Cyber Surgeon"
        className="w-auto max-w-md rounded-xl h-90 relative z-10 ml-20"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 200 }}
      />

      {certifications.map((cert, i) => (
        <motion.img
          key={cert.name}
          src={cert.img}
          alt={cert.name}
          className={`absolute w-16 h-16 ${cert.position} cursor-pointer z-20 cert-pulse border-2 p-2 border-[#00D9FF] rounded-full  `}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controls}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: i * 0.1,
          }}
          whileHover={{
            scale: 1.2,
            rotate: [0, 5, -5, 0],
            transition: { duration: 0.5 },
            background:"#00D9FF",
            boxShadow: "0px 0px 20px 0 #00D9FF",

          }}
        />
      ))}

      <motion.div
        className="absolute inset-5 bg-[#00D9FF]/10 rounded-xl blur-xl"
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};
