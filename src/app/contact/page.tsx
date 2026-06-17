'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
// Navbar + Ticker rendered globally by layout.tsx

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-700 ease-out flex flex-col">
      <main className="flex-1 px-8 lg:px-20 pt-20 pb-32">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Typography & Info */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.h1 
              className="font-serif text-6xl md:text-7xl lg:text-[100px] leading-[1.05] tracking-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Start a project.
            </motion.h1>
            
            <motion.p 
              className="font-sans text-xl lg:text-2xl text-foreground/70 leading-relaxed mb-16 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Whether you need a custom website, a software platform, or a brand identity — we'd love to hear about your project. We reply within 24 hours.
            </motion.p>

            <motion.div 
              className="mt-auto space-y-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div>
                <p className="font-sans text-[13px] uppercase tracking-widest text-foreground/50 mb-2">Email</p>
                <a href="mailto:hello@thepiecraft.com" className="font-sans text-xl lg:text-2xl hover:opacity-60 transition-opacity">
                  hello@thepiecraft.com
                </a>
              </div>
              
              <div>
                <p className="font-sans text-[13px] uppercase tracking-widest text-foreground/50 mb-2">Location</p>
                <p className="font-sans text-xl lg:text-2xl">
                  Global / Remote
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6 lg:col-start-7 lg:mt-6">
            <motion.form 
              className="flex flex-col gap-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                }
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative group">
                  <input type="text" id="firstName" required className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl lg:text-2xl focus:outline-none focus:border-foreground transition-colors peer placeholder-transparent" placeholder="First Name" />
                  <label htmlFor="firstName" className="absolute left-0 top-4 text-foreground/50 text-xl lg:text-2xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm pointer-events-none">First Name *</label>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative group">
                  <input type="text" id="lastName" required className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl lg:text-2xl focus:outline-none focus:border-foreground transition-colors peer placeholder-transparent" placeholder="Last Name" />
                  <label htmlFor="lastName" className="absolute left-0 top-4 text-foreground/50 text-xl lg:text-2xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm pointer-events-none">Last Name *</label>
                </motion.div>
              </div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative group">
                <input type="email" id="email" required className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl lg:text-2xl focus:outline-none focus:border-foreground transition-colors peer placeholder-transparent" placeholder="Email Address" />
                <label htmlFor="email" className="absolute left-0 top-4 text-foreground/50 text-xl lg:text-2xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm pointer-events-none">Email Address *</label>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative group">
                <input type="text" id="company" className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl lg:text-2xl focus:outline-none focus:border-foreground transition-colors peer placeholder-transparent" placeholder="Company / Organization" />
                <label htmlFor="company" className="absolute left-0 top-4 text-foreground/50 text-xl lg:text-2xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm pointer-events-none">Company / Organization</label>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative group">
                <textarea id="message" required rows={4} className="w-full bg-transparent border-b border-foreground/20 py-4 text-xl lg:text-2xl focus:outline-none focus:border-foreground transition-colors peer placeholder-transparent resize-none" placeholder="How can we help?"></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-foreground/50 text-xl lg:text-2xl transition-all peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm pointer-events-none">How can we help? *</label>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pt-8">
                <button 
                  type="submit" 
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-foreground text-background px-12 py-5 font-medium transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 text-lg">Send Message</span>
                </button>
              </motion.div>

            </motion.form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
