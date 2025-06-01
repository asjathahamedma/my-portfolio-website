// components/writeups/WriteupLayout.tsx
'use client'


import { ReactNode } from 'react'
import Head from 'next/head'
import SyntaxHighlighter from './SyntaxHighlighter'

interface WriteupLayoutProps {
  children: ReactNode
  title: string
  date: string
  coverImage?: string
  tags?: string[]
  readingTime?: string
}

const WriteupLayout: React.FC<WriteupLayoutProps> = ({
  children,
  title,
  date,
  coverImage,
  tags,
  readingTime,
}) => {
  return (
    <>
      <Head>
        <title>{title} | My Portfolio</title>
        <meta name="description" content={`Writeup about ${title}`} />
      </Head>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 ">{title}</h1>
          
          <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6">
            <span>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            {readingTime && (
              <>
                <span className="mx-2">•</span>
                <span>{readingTime}</span>
              </>
            )}
            {tags && (
              <div className="ml-4 flex space-x-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {coverImage && (
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-normal prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300 prose-blockquote:border-l-4 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-600 prose-blockquote:pl-4 prose-blockquote:italic prose-img:rounded-lg prose-img:shadow-lg">
          {children}
          <SyntaxHighlighter />
        </div>
      </article>
    </>
  )
}

export default WriteupLayout