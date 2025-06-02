import React from 'react'

type NoteProps = {
  text: string
}

type TagListProps = {
  tags: string[]
}

export const mdxComponents = {
  Note: ({ text }: NoteProps) => (
    <div className="border-l-4 p-4 bg-yellow-100 border-yellow-500 text-yellow-800 rounded">
      ⚠️ {text}
    </div>
  ),

  TagList: ({ tags }: TagListProps) => (
    <div className="flex gap-2 mt-4 flex-wrap">
      {tags.map(tag => (
        <span key={tag} className="bg-black text-white px-3 py-1 text-sm rounded-full">
          #{tag}
        </span>
      ))}
    </div>
  ),
}
