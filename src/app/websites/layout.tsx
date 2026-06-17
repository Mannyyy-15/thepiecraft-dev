import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Web Design & Development",
  description: "ThePieCraft designs and develops high-performance websites using Next.js, React, Tailwind CSS, and Framer Motion. Custom ecommerce, Shopify, CMS integration, and SEO-led web design.",
  keywords: [
    "web design agency",
    "web development agency",
    "custom website design",
    "Next.js website development",
    "React website agency",
    "Shopify development",
    "ecommerce website design",
    "CMS website development",
    "Tailwind CSS development",
    "SEO web design",
    "responsive web design",
    "website redesign agency",
    "Framer Motion animations",
    "headless CMS development",
  ],
  alternates: { canonical: "https://thepiecraft.com/websites" },
  openGraph: {
    title: "Web Design & Development | ThePieCraft",
    description: "We design and build high-performance websites with Next.js, React, and Tailwind CSS. Ecommerce, CMS, and SEO-led web design for ambitious brands.",
    url: "https://thepiecraft.com/websites",
  },
}

export default function WebsitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
