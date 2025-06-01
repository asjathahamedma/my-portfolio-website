import { getAllWriteupSlugs, getWriteupData } from '@/lib/writeups'
import WriteupLayout from '../../components/writeups/WriteupLayout'

// Force Node.js runtime (optional, helps avoid edge runtime issues)
export const runtime = 'nodejs'

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

// ✅ Properly await params
export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const writeupData = await getWriteupData(slug)

  if (!writeupData) {
    return (
      <div className="text-center py-20 text-gray-500">
        Writeup not found.
      </div>
    )
  }

  return (
    <WriteupLayout
      title={writeupData.title}
      date={writeupData.date}
      coverImage={writeupData.coverImage}
      tags={writeupData.tags}
    >
      <div dangerouslySetInnerHTML={{ __html: writeupData.content || '' }} />
    </WriteupLayout>
  )
}

// ✅ generateStaticParams should still work normally
export async function generateStaticParams() {
  const slugs = await getAllWriteupSlugs()
  return slugs.map((item: { params: { slug: string } }) => ({
    slug: item.params.slug,
  }))
}
