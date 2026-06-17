import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Brand Identity & Strategy",
  description: "ThePieCraft creates strategic brand identities — from logo design and visual identity systems to brand messaging and positioning. Premium branding for startups and established businesses.",
  keywords: [
    "brand identity design",
    "logo design agency",
    "brand strategy agency",
    "visual identity design",
    "brand messaging",
    "brand design agency",
    "startup branding",
    "brand positioning",
    "typography design",
    "brand guidelines",
    "brand style guide",
  ],
  alternates: { canonical: "https://thepiecraft.com/brand" },
  openGraph: {
    title: "Brand Identity & Strategy | ThePieCraft",
    description: "We craft strategic brand identities — logo design, visual systems, and brand messaging for ambitious businesses.",
    url: "https://thepiecraft.com/brand",
  },
}

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
