import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Start a project with ThePieCraft. Get in touch to discuss your website design, custom software, or branding project. We respond within 24 hours.",
  keywords: [
    "hire web design agency",
    "contact web developer",
    "start a web project",
    "web design quote",
    "custom software quote",
  ],
  alternates: { canonical: "https://thepiecraft.com/contact" },
  openGraph: {
    title: "Contact ThePieCraft | Start Your Project",
    description: "Get in touch to start your website, software, or branding project. We respond within 24 hours.",
    url: "https://thepiecraft.com/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
