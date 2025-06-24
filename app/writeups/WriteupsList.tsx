"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-Card";
import { Post } from './writeupsData';
import Image from 'next/image';

export default function WriteupsList({
  allPosts,
  categories
}: {
  allPosts: Post[];
  categories: string[];
}) {
  const defaultImage = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(allPosts);

  useEffect(() => {
    if (!selectedCategory) {
      setFilteredPosts(allPosts);
    } else {
      setFilteredPosts(allPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory, allPosts]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-cyan-900/70 z-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/writeups-banner.jpg')] bg-cover bg-center animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
        </div>

        <div className="relative z-20 py-24 px-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cybersecurity <span className="text-cyan-400">Writeups</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Detailed reports of security assessments, CTF solutions, and vulnerability discoveries and my projects
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-cyan-500/10 border border-cyan-400 rounded-full px-6 py-2 text-cyan-300">
              <span className="text-cyan-400 font-bold">20+</span> Vulnerabilities Discovered
            </div>
            <div className="bg-emerald-500/10 border border-cyan-400 rounded-full px-6 py-2 text-cyan-300">
              <span className="text-cyan-300 font-bold">50+</span> CTF Challenges Solved
            </div>
            <div className="bg-amber-500/10 border border-cyan-400 rounded-full px-6 py-2 text-cyan-300">
              <span className="text-cyan-300 font-bold">30+</span> Penetration Tests
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Filter by Category</h2>

        <div className="flex flex-wrap gap-2 md:gap-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-all ${!selectedCategory ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'bg-gray-800  hover:bg-white hover:text-[#1a4343]'}`}
          >
            All Categories
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${selectedCategory === category ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'bg-gray-800 hover:text-[#1a4343] hover:bg-white'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Writeups Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredPosts.map((post) => (
          <motion.div key={`${post.category}-${post.slug}`} variants={itemVariants}>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-cyan-500/100 dark:bg-gray-900 dark:border-gray-800 border-gray-200 w-full h-[28rem] rounded-xl p-4 border transition-all duration-500">
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
                  className="text-cyan-600 dark:text-cyan-400 font-medium text-sm mb-1"
                >
                  {post.category}
                </CardItem>

                {/* Title */}
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2"
                >
                  {post.title}
                </CardItem>

                {/* Description */}
                {post.description && (
                  <CardItem
                    translateZ="60"
                    className="text-gray-600 dark:text-gray-300 text-sm max-w-sm mt-2 line-clamp-2"
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
                          className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-1 rounded"
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
                <CardItem
                  translateZ={20}
                  className="mt-6"
                >
                  <Link
                    href={`/writeups/${encodeURIComponent(post.category)}/${encodeURIComponent(post.slug)}`}
                    className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#fff] to-[#02cef3] text-[#011e23] text-sm font-bold transition-all hover:from-[#02cef3] hover:to-white hover:shadow-lg hover:shadow-cyan-500/80 duration-300"
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