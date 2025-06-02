// components/MdxLayout.tsx
import { ReactNode } from 'react';

export default function MdxLayout({ children }: { children: ReactNode }) {
  return (
    <article className="prose max-w-4xl text-5xl mx-auto py-8 px-4 dark:prose-invert">
      {children}
    </article>
  );
}