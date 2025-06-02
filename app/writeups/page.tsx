import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { CardBody, CardContainer, CardItem } from "@/app/components/3d-Card"; // Adjust import path as needed

type PostMeta = {
  title: string
  date: string
  category: string
  image?: string  // Added image property
  tags?: string[]
  description?: string
  author?: string
}

type Post = PostMeta & {
  slug: string
  category: string
}

export default function WriteupsPage() {
  const basePath = path.join(process.cwd(), 'content/writeups')
  const categories = fs.readdirSync(basePath)

  const posts: Post[] = categories.flatMap((category) => {
    const categoryPath = path.join(basePath, category)
    const files = fs.readdirSync(categoryPath)

    return files.map((filename) => {
      const filePath = path.join(categoryPath, filename)
      const source = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(source)

      const metadata = data as PostMeta

      return {
        ...metadata,
        slug: filename.replace(/\.mdx$/, ''),
        category,
      }
    })
  })

  // Default image if none is provided
  const defaultImage = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Writeups</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <CardContainer
            key={`${post.category}-${post.slug}`}
            className="inter-var"
          >
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[23rem]  h-[32rem] rounded-xl p-3  border">

              {/* 🔼 Image on Top */}
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mb-4"
              >
                <img
                  src={post.image || defaultImage}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={post.title}
                  height="400"
                  width="400"
                />
              </CardItem>

              {/* 🏷️ Category & Date */}
              <div className="flex justify-between items-start mb-2">
                <CardItem
                  translateZ="40"
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded z-10"
                >
                  {post.category}
                </CardItem>
                <CardItem
                  translateZ="30"
                  className="text-gray-500 dark:text-gray-300 text-sm z-10"
                >
                  {post.date}
                </CardItem>
              </div>

              {/* 📝 Title */}
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {post.title}
              </CardItem>

              {/* 📄 Description */}
              {post.description && (
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {post.description}
                </CardItem>
              )}

              {/* 🏷️ Tags */}
              {(() => {
                const tags = post.tags ?? [];
                return tags.length > 0 ? (
                  <CardItem translateZ="40" className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardItem>
                ) : null;
              })()}



              {/* 🔘 CTA Buttons */}
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  {post.author || "Author"}
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="a"
                  href={`/writeups/${encodeURIComponent(post.category)}/${encodeURIComponent(post.slug)}`}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Read Writeup →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}

      </div>
    </div>
  )
}