import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Work & Portfolio",
  description: "Explore ThePieCraft's portfolio of web design, custom software, and brand identity projects. See how we've helped businesses across industries build exceptional digital products.",
  keywords: [
    "web design portfolio",
    "web development portfolio",
    "software development portfolio",
    "brand design portfolio",
    "agency case studies",
  ],
  alternates: { canonical: "https://dev.thepiecraftmarketing.com/work" },
  openGraph: {
    title: "Portfolio & Work | ThePieCraft",
    description: "Explore our portfolio of web design, custom software, and branding projects built for ambitious businesses.",
    url: "https://dev.thepiecraftmarketing.com/work",
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
