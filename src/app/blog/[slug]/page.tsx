import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOGS } from '@/lib/blogs';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = BLOGS.find((b) => b.slug === resolvedParams.slug);
  
  if (!blog) return { title: 'Post Not Found' };

  return {
    title: `${blog.title} | ThePieCraft Blogs`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = BLOGS.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f0ece1] text-[#0a0a0a] flex flex-col selection:bg-brand-blue selection:text-white">
      <main className="flex-1">
        
        {/* Article Header */}
        <article className="pt-40 pb-20 px-5 sm:px-8 lg:px-20 max-w-[1200px] mx-auto">
          <header className="mb-16 md:mb-24 flex flex-col items-center text-center">
            <div className="flex items-center gap-4 text-xs font-sans font-semibold uppercase tracking-widest opacity-60 mb-8">
              <span>{blog.category}</span>
              <span>·</span>
              <time>{blog.date}</time>
              <span>·</span>
              <span>{blog.readTime}</span>
            </div>
            
            <h1 className="font-serif text-[clamp(40px,7vw,100px)] leading-[1.05] tracking-tight mb-10 max-w-[1000px]">
              {blog.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-black/10">
                <Image 
                  src="/founder-placeholder.png" 
                  alt={blog.author} 
                  width={48} 
                  height={48} 
                  className="object-cover w-full h-full grayscale" 
                />
              </div>
              <div className="text-left flex flex-col">
                <span className="font-sans font-medium text-[15px]">{blog.author}</span>
                <span className="font-sans text-xs opacity-60 uppercase tracking-widest">Author</span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-20 bg-[#0a0a0a]/5 relative">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body */}
          <div className="max-w-[800px] mx-auto font-sans text-lg sm:text-[21px] leading-relaxed font-light opacity-90">
            {blog.content.map((block, idx) => {
              switch (block.type) {
                case 'h2':
                  return (
                    <h2 key={idx} className="font-serif text-4xl sm:text-5xl mt-20 mb-8 leading-tight tracking-tight opacity-100" dangerouslySetInnerHTML={{ __html: block.content }} />
                  );
                case 'h3':
                  return (
                    <h3 key={idx} className="font-serif text-2xl sm:text-3xl mt-12 mb-6 leading-snug tracking-tight opacity-100" dangerouslySetInnerHTML={{ __html: block.content }} />
                  );
                case 'p':
                  return (
                    <p key={idx} className="mb-8 [&>a]:text-black [&>a]:font-medium [&>a]:underline [&>a]:underline-offset-4 [&>a]:decoration-black/30 [&>a:hover]:decoration-black [&>a:hover]:opacity-80 transition-opacity" dangerouslySetInnerHTML={{ __html: block.content }} />
                  );
                case 'quote':
                  return (
                    <blockquote key={idx} className="border-l-2 border-black/20 pl-8 my-16 italic font-serif text-2xl sm:text-3xl leading-snug">
                      <p className="mb-4 text-black" dangerouslySetInnerHTML={{ __html: block.content }} />
                      {block.author && <footer className="text-sm font-sans not-italic uppercase tracking-widest opacity-50">— {block.author}</footer>}
                    </blockquote>
                  );
                case 'list':
                  return (
                    <ul key={idx} className="list-disc pl-6 mb-8 flex flex-col gap-3">
                      {block.items.map((item, i) => (
                        <li key={i} className="pl-2 marker:text-black/30" dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  );
                case 'image':
                  return (
                    <figure key={idx} className="my-16">
                      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/5">
                        <Image src={block.src} alt={block.alt} fill className="object-cover" />
                      </div>
                      {block.caption && <figcaption className="text-center text-sm mt-4 opacity-50 font-sans tracking-wide">{block.caption}</figcaption>}
                    </figure>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* CTA Footer */}
          <div className="max-w-[800px] mx-auto mt-32 pt-16 border-t border-black/10 flex flex-col items-center text-center">
            <h3 className="font-serif text-4xl mb-6">Ready to scale your business?</h3>
            <p className="font-sans text-lg opacity-70 mb-8 max-w-lg">
              Whether you need a custom SaaS product, a high-converting website, or an automated CRM, our team builds digital assets that drive revenue.
            </p>
            <Link 
              href="/contact" 
              className="bg-[#0a0a0a] text-white px-8 py-4 rounded-full font-sans font-medium text-[15px] tracking-wide hover:scale-105 transition-transform"
            >
              Start a Project
            </Link>
          </div>
        </article>

      </main>
      <Footer />
    </div>
  );
}
