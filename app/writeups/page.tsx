import { getWriteupsData } from '@/app/writeups/writeupsData';
import WriteupsList from '@/app/writeups/WriteupsList';

export default async function WriteupsPage() {
  const { allPosts, categories } = await getWriteupsData();
  
  return <WriteupsList allPosts={allPosts} categories={categories} />;
}