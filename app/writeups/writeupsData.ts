import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type PostMeta = {
  title: string;
  date: string;
  category: string;
  image?: string;
  tags?: string[];
  description?: string;
  author?: string;
};

export type Post = PostMeta & {
  slug: string;
  category: string;
};

export async function getWriteupsData() {
  const basePath = path.join(process.cwd(), 'content/writeups');
  const categories = fs.readdirSync(basePath);
  
  const allPosts: Post[] = categories.flatMap((category) => {
    const categoryPath = path.join(basePath, category);
    const files = fs.readdirSync(categoryPath);

    return files.map((filename) => {
      const filePath = path.join(categoryPath, filename);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(source);

      return {
        ...(data as PostMeta),
        slug: filename.replace(/\.mdx$/, ''),
        category,
      };
    });
  });

  // Sort posts by date (newest first)
  allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { allPosts, categories };
}