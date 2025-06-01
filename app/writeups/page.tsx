// app/writeups/page.tsx
import { getAllWriteups } from '@/lib/writeups'
import { Writeup } from '@/types/writeup'
import WriteupCard from '../components/writeups/WriteupCard'
import { TypewriterEffectSmooth } from '../components/typewriter-effect'

const sentences2 = [
  [
    { text: 'Exploits from the Lab',className:'' },
  ]
]


export const metadata = {
  title: "My Writeups",
  description: "Writeups of penetration testing and CTF challenges.",
}

export default async function WriteupsPage() {
  const writeups: Omit<Writeup, 'content'>[] = await getAllWriteups()

  return (
    <div className="">
      <TypewriterEffectSmooth sentences={sentences2} className="text-4xl  font-bold px-5 py-5 "/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 p-5">
        {writeups.map((writeup) => (
          <WriteupCard key={writeup.slug} writeup={writeup} />
        ))}
        
      </div>
      
    </div>
    
  )
}
