const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX({
  // Put pageExtensions here — NOT inside the withMDX options
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // your other Next.js config here
})
