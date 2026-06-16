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
  metadataBase: new URL('https://thepiecraft.com'),
  title: {
    default: "TCP Web Development | High-End Web Solutions",
    template: "%s | TCP Web Development",
  },
  description: "We craft high-performance, aesthetically premium websites and software that empower your brand to grow.",
  keywords: ["Web Development", "Web Design", "Software Development", "React", "Next.js", "Brand Identity"],
  authors: [{ name: "ThePieCraft" }],
  creator: "ThePieCraft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thepiecraft.com",
    title: "TCP Web Development",
    description: "We craft high-performance, aesthetically premium websites and software that empower your brand to grow.",
    siteName: "TCP Web Development",
    images: [{
      url: "/og-image.jpg", // You can place an og-image.jpg in the public folder
      width: 1200,
      height: 630,
      alt: "TCP Web Development",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TCP Web Development",
    description: "We craft high-performance, aesthetically premium websites and software that empower your brand to grow.",
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
};

import SmoothScroll from "@/components/SmoothScroll";
import Ticker from "@/components/Ticker";
import Navbar from "@/components/Navbar";

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
      <body className="min-h-[100dvh] flex flex-col">
        <SmoothScroll>
          <header className="sticky top-0 z-50 w-full flex flex-col">
            <Ticker />
            <Navbar />
          </header>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
