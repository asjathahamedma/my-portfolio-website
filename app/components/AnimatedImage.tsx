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
          className={`absolute w-16 h-16 ${cert.position} cursor-pointer z-20 cert-pulse border-2 p-2 
      border-fuchsia-600 dark:border-[#00D9FF] rounded-full 
      hover:bg-fuchsia-500 hover:shadow-[0_0_20px_#f0f] 
      dark:hover:bg-[#00D9FF] dark:hover:shadow-[0_0_20px_#00D9FF]`}
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
          }}
        />
      ))}

      <motion.div
        className="absolute inset-5 bg-[#dd0de42d] dark:bg-[#13c0df43] rounded-xl blur-xl"
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};
