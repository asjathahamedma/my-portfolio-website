import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

// Define your custom components
const Note = ({ children }: { children: ReactNode }) => (
  <div className="bg-gray-700 border-l-4 border-blue-500 p-4 my-4">
    <div className="flex items-start">
      <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      <div>{children}</div>
    </div>
  </div>
)

const components = {
  Note,
  // Add other custom components here
}

type Params = {
  category: string
  slug: string
}

export async function generateStaticParams() {
  const basePath = path.join(process.cwd(), 'content/writeups')
  const categories = await fs.readdir(basePath)

  const params: Params[] = []

  for (const category of categories) {
    const categoryPath = path.join(basePath, category)
    const files = await fs.readdir(categoryPath)

    for (const file of files) {
      if (path.extname(file) === '.mdx') {
        params.push({
          category: category,
          slug: file.replace(/\.mdx$/, '')
        })
      }
    }
  }

  return params
}

// FIXED: Properly handle async params
export default async function WriteupPage(props: { params: Promise<Params> }) {
  // Await the params promise
  const params = await props.params
  const decodedCategory = decodeURIComponent(params.category)
  const decodedSlug = decodeURIComponent(params.slug)

  try {
    // Construct file path
    const basePath = path.join(process.cwd(), 'content/writeups')
    const filePath = path.join(basePath, decodedCategory, `${decodedSlug}.mdx`)

    // Read and parse file content
    const source = await fs.readFile(filePath, 'utf8')
    const { content, data } = matter(source)

    return (
      <div className="prose dark:prose-invert mx-auto max-w-4xl p-6">
        <article >
          <header className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                {data.category}
              </span>
              <time className="text-gray-400 text-sm">
                {new Date(data.date).toLocaleDateString()}
              </time>
            </div>

            {/* 🖼️ Image */}
            {data.image && (
              <img
                src={data.image}
                alt={data.title}
                className="rounded-xl w-full h-64 object-cover mb-6"
              />
            )}

            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

            {data.description && (
              <p className="text-gray-400 text-lg">{data.description}</p>
            )}

            {data.tags && data.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {data.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-800 text-xs px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>


          <div className="border-t pt-6 ">
            {/* Pass custom components to MDXRemote */}
            <MDXRemote source={content} components={components} />
          </div>
        </article>
      </div>
    )
  } catch (error) {
    return notFound()
  }
}