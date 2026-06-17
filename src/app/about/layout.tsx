import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us",
  description: "ThePieCraft is a full-service web design, development, and branding agency. Meet our experienced team of designers, developers, and strategists dedicated to building exceptional digital products.",
  keywords: [
    "web design agency team",
    "web development company",
    "about ThePieCraft",
    "digital agency",
    "creative agency",
  ],
  alternates: { canonical: "https://thepiecraft.com/about" },
  openGraph: {
    title: "About ThePieCraft | Web Design & Development Agency",
    description: "Meet the ThePieCraft team — experienced designers, developers, and strategists building exceptional websites, software, and brand identities.",
    url: "https://thepiecraft.com/about",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
