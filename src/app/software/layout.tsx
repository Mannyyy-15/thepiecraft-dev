import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Custom Software Development",
  description: "ThePieCraft builds custom software, SaaS platforms, CRMs, APIs, and scalable web applications using React, Next.js, Node.js, TypeScript, and PostgreSQL. Tailored solutions for your business.",
  keywords: [
    "custom software development",
    "SaaS development agency",
    "custom CRM development",
    "API development",
    "web application development",
    "React development",
    "Next.js development agency",
    "Node.js backend development",
    "TypeScript development",
    "full stack development agency",
    "scalable software architecture",
  ],
  alternates: { canonical: "https://thepiecraft.com/software" },
  openGraph: {
    title: "Custom Software Development | ThePieCraft",
    description: "We build custom SaaS platforms, CRMs, APIs, and web applications. React, Next.js, Node.js, and PostgreSQL specialists.",
    url: "https://thepiecraft.com/software",
  },
}

export default function SoftwareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
