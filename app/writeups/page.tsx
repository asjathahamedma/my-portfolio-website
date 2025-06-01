// app/writeups/page.tsx
import { getAllWriteups } from '@/lib/writeups'
import { Writeup } from '@/types/writeup'
import WriteupCard from '../components/writeups/WriteupCard'

export const metadata = {
  title: "My Writeups",
  description: "Writeups of penetration testing and CTF challenges.",
}

export default async function WriteupsPage() {
  const writeups: Omit<Writeup, 'content'>[] = await getAllWriteups()

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">My Writeups</h1>
      <div className="space-y-8">
        {writeups.map((writeup) => (
          <WriteupCard key={writeup.slug} writeup={writeup} />
        ))}
      </div>
    </div>
  )
}
