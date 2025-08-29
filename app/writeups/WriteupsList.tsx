"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-Card";
import { Post } from "./writeupsData";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";
import { writeupSentences } from "../components/data/some";
import { Bug, ShieldCheck, Target } from "lucide-react";

const stats = [
  {
    icon: <Bug className="text-cyan-400 w-6 h-6" />,
    label: "Labs & Boxes Completed",
    color: "from-cyan-500/30 to-cyan-400/10",
  },
  {
    icon: <Target className="text-emerald-400 w-6 h-6" />,
    label: "CTF Challenges Solved",
    color: "from-emerald-500/30 to-emerald-400/10",
  },
  {
    icon: <ShieldCheck className="text-amber-400 w-6 h-6" />,
    label: "Hours Practicing Offensive Security",
    color: "from-amber-500/30 to-amber-400/10",
  },
];

export default function WriteupsList({
  allPosts,
  categories,
}: {
  allPosts: Post[];
  categories: string[];
}) {
  const defaultImage =
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(allPosts);

  useEffect(() => {
    if (!selectedCategory) {
      setFilteredPosts(allPosts);
    } else {
      setFilteredPosts(
        allPosts.filter((post) => post.category === selectedCategory)
      );
    }
  }, [selectedCategory, allPosts]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pb-30 ">
      {/* Hero Section */}
      <div className="relative z-20 py-24 px-8 text-center ">
        {/* Title (Typewriter centered) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <TypewriterEffectSmooth
            sentences={writeupSentences}
            cursorClassName="bg-fuchsia-600 dark:bg-[#00D9FF]"
            className="
    text-xl        /* base mobile */
    sm:text-2xl    /* small devices */
    md:text-4xl    /* tablets */
    lg:text-5xl    /* desktops */
    xl:text-6xl    /* large screens */ 
    drop-shadow-[0_2px_20px_rgba(0,217,255,0.25)]
    text-center    /* keeps it balanced on all devices */
  "
          />
        </motion.div>

        {/* Description (theme-aware, subtle highlight) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-base md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed
               text-gray-800 dark:text-white/80"
        >
          Field-tested notes from labs, boxes, and CTFs — focused on{" "}
          <span className="font-semibold text-fuchsia-600 dark:text-[#00D9FF]">
            practical exploitation
          </span>
          ,{" "}
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            repeatable methodology
          </span>
          , and{" "}
          <span className="font-semibold text-cyan-700 dark:text-cyan-300">
            clean remediations
          </span>
          . Short, actionable, and straight to the point.
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Browse by Category
        </h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          className="flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {/* All */}
          <motion.button
            variants={{
              hidden: { y: 10, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-all
        ${
          !selectedCategory
            ? "bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-400/70 dark:shadow-cyan-500/70 dark:bg-[#00D9FF] dark:text-[#011417]"
            : "bg-white text-[#01333a] border border-fuchsia-600 hover:bg-fuchsia-100  " +
              "dark:bg-[#0b1f23] dark:text-white dark:border-cyan-400/30 dark:hover:bg-[#0f2a2f]"
        }`}
          >
            All Categories
          </motion.button>

          {categories.map((cat) => (
            <motion.button
              key={cat}
              variants={{
                hidden: { y: 10, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all
          ${
            selectedCategory === cat
              ? "bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-400/70 dark:shadow-cyan-500/70 dark:bg-[#00D9FF] dark:text-[#011417]"
              : "bg-white text-[#01333a] border border-fuchsia-600 hover:bg-fuchsia-100 " +
                "dark:bg-[#0b1f23] dark:text-white dark:border-cyan-400/30 dark:hover:bg-[#0f2a2f]"
          }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Writeups Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredPosts.map((post) => (
          <motion.div
            key={`${post.category}-${post.slug}`}
            variants={itemVariants}
          >
            <CardContainer className="inter-var">
              <CardBody
                className="
    relative group/card w-full h-[30rem] rounded-xl p-4 border transition-all duration-500
    bg-[#3634374e] border-fuchsia-600 hover:shadow-lg hover:shadow-fuchsia-400
    dark:bg-[#011a1ab7] dark:border-cyan-400 dark:hover:shadow-cyan-400
  "
              >
                {/* Image */}
                <CardItem
                  translateZ="100"
                  rotateX={10}
                  rotateZ={-5}
                  className="w-full mb-4"
                >
                  <div className="relative overflow-hidden rounded-xl h-48">
                    <Image
                      src={post.image || defaultImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover/card:scale-110 transition-transform duration-500 rounded-xl"
                    />

                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {post.date}
                    </div>
                  </div>
                </CardItem>

                {/* Category */}
                <CardItem
                  translateZ="40"
                  className="text-fuchsia-800 dark:text-cyan-400 font-medium text-sm mb-1"
                >
                  {post.category}
                </CardItem>

                {/* Title */}
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-black dark:text-white mb-2 line-clamp-2"
                >
                  {post.title}
                </CardItem>

                {/* Description */}
                {post.description && (
                  <CardItem
                    translateZ="60"
                    className="text-gray-800 dark:text-gray-300 text-sm max-w-sm mt-2 line-clamp-2"
                  >
                    <p>{post.description}</p>
                  </CardItem>
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <CardItem translateZ="40" className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full transition-all
    bg-fuchsia-100 text-fuchsia-950 hover:shadow-md hover:shadow-cyan-400/40 hover:scale-105
    dark:bg-[#00D9FF]/10 dark:text-[#00D9FF] dark:hover:shadow-[#00D9FF]/40"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-1 rounded">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </CardItem>
                )}

                {/* CTA Button */}
                <CardItem translateZ={20} className="mt-6">
                  <Link
                    href={`/writeups/${encodeURIComponent(
                      post.category
                    )}/${encodeURIComponent(post.slug)}`}
                    className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-fuchsia-800 to-fuchsia-400 dark:from-[#fff] dark:to-[#02cef3] text-white dark:text-[#011e23] text-sm font-bold transition-all hover:from-fuchsia-400 hover:to-fuchsia-800 dark:hover:from-[#02cef3] dark:hover:to-white hover:shadow-md hover:shadow-fuchsia-400 dark:hover:shadow-cyan-500/80 hover:scale-110 duration-300"
                  >
                    Read Writeup
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            No writeups found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            {selectedCategory
              ? `We couldn't find any writeups in the "${selectedCategory}" category.`
              : "No writeups available at the moment. Please check back later."}
          </p>
          <button
            onClick={() => setSelectedCategory(null)}
            className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors"
          >
            View All Writeups
          </button>
        </div>
      )}
    </div>
  );
}
