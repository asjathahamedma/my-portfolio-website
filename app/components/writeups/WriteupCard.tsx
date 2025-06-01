'use client'

import React from 'react'
import Link from 'next/link'
import { Writeup } from '@/types/writeup'
import { CardBody, CardContainer, CardItem } from '../3d-Card'

interface WriteupCardProps {
  writeup: Omit<Writeup, 'content'>
}

const WriteupCard: React.FC<WriteupCardProps> = ({ writeup }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#0089f9bd] dark:bg-[#0000005d] dark:border-white/[0.2] border-black/[0.1] w-[25rem] h-[30rem] rounded-xl p-4 border transition-transform duration-300 flex flex-col gap-2 ">
        
        <CardItem
          translateZ="100"
          rotateX={10}
          rotateZ={-5}
          className="h-[50%] w-full mb-4 overflow-hidden rounded-lg"
        >
          {writeup.coverImage && (
            <img
              src={writeup.coverImage}
              alt={writeup.title}
              className="w-full h-[100%] object-cover rounded-xl group-hover/card:shadow-xl"
            />
          )}
        </CardItem>

        <CardItem translateZ="60" className="mb-2">
          <div className="flex justify-between items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <span>
              {new Date(writeup.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            {writeup.tags && (
              <div className="flex space-x-2">
                {writeup.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 flex items-center justify-center text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </CardItem>

        <CardItem translateZ="70">
          <Link href={`/writeups/${writeup.slug}`}>
            <h2 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-white line-clamp-2">
              {writeup.title}
            </h2>
          </Link>
        </CardItem>

        <CardItem translateZ="40" as="p" className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
          {writeup.excerpt}
        </CardItem>

        <CardItem translateZ="30">
          <Link
            href={`/writeups/${writeup.slug}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
          >
            Read more
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default WriteupCard
