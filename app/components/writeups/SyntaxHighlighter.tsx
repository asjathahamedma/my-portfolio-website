// app/components/writeups/SyntaxHighlighter.tsx
'use client'

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-typescript'
// Add any other languages you want Prism to support

const SyntaxHighlighter = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return null
}

export default SyntaxHighlighter
