// components/WriteupCard.tsx
import Link from 'next/link'
import { Writeup } from '@/types/writeup'

interface WriteupCardProps {
  writeup: Omit<Writeup, 'content'>
}

const WriteupCard: React.FC<WriteupCardProps> = ({ writeup }) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {writeup.coverImage && (
        <div className="h-48 relative">
          <img
            src={writeup.coverImage}
            alt={writeup.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
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
                  className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <Link href={`/writeups/${writeup.slug}`}>
          <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {writeup.title}
          </h2>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{writeup.excerpt}</p>
        <Link
          href={`/writeups/${writeup.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
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
      </div>
    </article>
  )
}

export default WriteupCard