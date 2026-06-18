'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BLOGS } from '@/lib/blogs';
import Footer from '@/components/Footer';

export default function BlogListingPage() {
  return (
    <div className="min-h-screen bg-[#f0ece1] text-[#0a0a0a] flex flex-col selection:bg-black selection:text-white transition-colors duration-700 ease-out">
      <main className="flex-1">
        
        {/* Header Section */}
        <section className="px-5 sm:px-8 lg:px-20 pt-48 pb-20 border-b border-[#0a0a0a]/10">
          <div className="max-w-[1600px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-serif text-[clamp(50px,10vw,140px)] leading-[0.9] tracking-tight mb-8">
                Blogs
              </h1>
              <p className="font-sans text-[clamp(20px,2vw,28px)] max-w-2xl opacity-70 leading-relaxed font-light">
                Deep dives into premium web design, technical SEO, and conversion optimization for modern luxury brands.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-5 sm:px-8 lg:px-20 py-24">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
              {BLOGS.map((blog, idx) => (
                <motion.article 
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col"
                >
                  <Link href={`/blog/${blog.slug}`} className="block relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#0a0a0a]/5" data-cursor="view">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-sm text-black text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </Link>

                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs font-sans font-medium uppercase tracking-widest opacity-50 mb-4">
                      <time>{blog.date}</time>
                      <span>·</span>
                      <span>{blog.readTime}</span>
                    </div>
                    
                    <h2 className="font-serif text-3xl leading-snug tracking-tight mb-4 group-hover:opacity-70 transition-opacity">
                      <Link href={`/blog/${blog.slug}`} className="outline-none">
                        {blog.title}
                      </Link>
                    </h2>
                    
                    <p className="font-sans text-lg opacity-70 leading-relaxed font-light mb-8 flex-1">
                      {blog.excerpt}
                    </p>

                    <Link 
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 font-sans font-semibold tracking-wide text-[15px] hover:gap-4 transition-all"
                    >
                      Read Article
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
