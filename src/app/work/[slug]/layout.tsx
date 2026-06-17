import { ReactNode } from 'react';
import { PROJECTS } from '@/lib/projects';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function WorkLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
