"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="w-12 h-12 flex items-center justify-center rounded-full border-2 
             border-fuchsia-600 dark:border-cyan-400 
             bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800
             text-xl shadow-md hover:scale-120 transition-all duration-300 cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
