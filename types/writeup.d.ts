// types/writeup.d.ts
export interface Writeup {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  tags?: string[];
  readingTime?: string;
}