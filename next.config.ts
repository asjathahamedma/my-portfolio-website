import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

// Wrap Next.js config with MDX support
const withMDX = createMDX({
  extension: /\.mdx?$/, // handle both .md and .mdx
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
})

const nextConfig: NextConfig = {
  // Include .md and .mdx in routing
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // Any other Next.js options you want
  reactStrictMode: true,
}

export default withMDX(nextConfig)
