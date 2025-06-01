// lib/writeups.ts
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Writeup } from '../types/writeup';

const writeupsDirectory = path.join(process.cwd(), 'content/writeups');

interface WriteupSlug {
  params: {
    slug: string;
  };
}

interface WriteupFrontMatter {
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
}

export async function getAllWriteupSlugs(): Promise<WriteupSlug[]> {
  try {
    const filenames = await fs.readdir(writeupsDirectory);
    return filenames.map((filename) => ({
      params: {
        slug: filename.replace(/\.md$/, ''),
      },
    }));
  } catch (error) {
    console.error('Error reading writeups directory:', error);
    return [];
  }
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

export async function getWriteupData(slug: string): Promise<Writeup | null> {
  try {
    const fullPath = path.join(writeupsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');

    // Parse front matter with type assertion
    const matterResult = matter(fileContents);
    const frontMatter = matterResult.data as WriteupFrontMatter;

    // Convert markdown to HTML
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      content: contentHtml,
      readingTime: calculateReadingTime(matterResult.content),
      ...frontMatter,
    };
  } catch (error) {
    console.error(`Error loading writeup ${slug}:`, error);
    return null;
  }
}

export async function getAllWriteups(): Promise<Omit<Writeup, 'content'>[]> {
  try {
    const filenames = await fs.readdir(writeupsDirectory);
    const writeups = await Promise.all(
      filenames.map(async (filename) => {
        const slug = filename.replace(/\.md$/, '');
        const fullPath = path.join(writeupsDirectory, filename);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        const frontMatter = matterResult.data as WriteupFrontMatter;

        return {
          slug,
          readingTime: calculateReadingTime(matterResult.content),
          ...frontMatter,
        };
      })
    );

    return writeups.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error loading writeups:', error);
    return [];
  }
}