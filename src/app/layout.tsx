import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dev.thepiecraftmarketing.com'),
  title: {
    default: "ThePieCraft — Web Design & Development Agency",
    template: "%s | ThePieCraft",
  },
  description: "ThePieCraft is a full-service web design and development agency building high-performance websites, custom software, and brand identities. React, Next.js, and Tailwind specialists.",
  keywords: [
    "web design agency",
    "web development agency",
    "custom website design",
    "Next.js development",
    "React development agency",
    "custom software development",
    "SaaS development",
    "brand identity design",
    "UI UX design agency",
    "full stack web development",
    "Shopify development",
    "ecommerce web design",
    "ThePieCraft",
  ],
  authors: [{ name: "ThePieCraft" }],
  creator: "ThePieCraft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dev.thepiecraftmarketing.com",
    title: "ThePieCraft — Web Design & Development Agency",
    description: "ThePieCraft builds high-performance websites, custom software, and brand identities for ambitious businesses. React, Next.js, and Tailwind specialists.",
    siteName: "ThePieCraft",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "ThePieCraft — Web Design & Development Agency",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThePieCraft — Web Design & Development Agency",
    description: "ThePieCraft builds high-performance websites, custom software, and brand identities for ambitious businesses.",
    creator: "@thepiecraft",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "3TZFNOvSOGROrASk-UkM-HI2FivDjBBgl4M-PFinyoM",
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import Ticker from "@/components/Ticker";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col antialiased font-sans font-normal overflow-x-hidden selection:bg-foreground selection:text-background">
        <Preloader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ThePieCraft",
              "url": "https://dev.thepiecraftmarketing.com",
              "logo": "https://dev.thepiecraftmarketing.com/logo.png",
              "description": "ThePieCraft is a full-service web design, development, and branding agency specialising in Next.js, React, custom software, and brand identity design.",
              "email": "hello@thepiecraft.com",
              "areaServed": "Worldwide",
              "serviceType": [
                "Web Design",
                "Web Development",
                "Custom Software Development",
                "Brand Identity Design",
                "UI/UX Design",
                "Ecommerce Development",
                "SaaS Development"
              ],
              "sameAs": [
                "https://twitter.com/thepiecraft",
                "https://instagram.com/thepiecraft"
              ]
            })
          }}
        />
        <SmoothScroll>
          <CustomCursor />
          <header className="sticky top-0 z-50 w-full flex flex-col">
            <Ticker />
            <Navbar />
          </header>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
