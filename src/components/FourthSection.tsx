'use client'


const SoftwareGraphics = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 mix-blend-overlay">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice">
      {/* Node: CRM */}
      <circle cx="200" cy="300" r="48" fill="none" stroke="#e6f1f3" strokeWidth="2" opacity="0.8" />
      <text x="200" y="305" textAnchor="middle" fill="#e6f1f3" fontSize="12" fontFamily="monospace" opacity="0.9">CRM</text>

      {/* Node: SaaS */}
      <circle cx="500" cy="180" r="48" fill="none" stroke="#e6f1f3" strokeWidth="2" opacity="0.8" />
      <text x="500" y="185" textAnchor="middle" fill="#e6f1f3" fontSize="12" fontFamily="monospace" opacity="0.9">SaaS</text>

      {/* Node: API */}
      <circle cx="800" cy="300" r="48" fill="none" stroke="#e6f1f3" strokeWidth="2" opacity="0.8" />
      <text x="800" y="305" textAnchor="middle" fill="#e6f1f3" fontSize="12" fontFamily="monospace" opacity="0.9">API</text>

      {/* Node: DB */}
      <circle cx="350" cy="550" r="40" fill="none" stroke="#e6f1f3" strokeWidth="2" opacity="0.6" />
      <text x="350" y="555" textAnchor="middle" fill="#e6f1f3" fontSize="11" fontFamily="monospace" opacity="0.9">DB</text>

      {/* Node: App */}
      <circle cx="650" cy="550" r="40" fill="none" stroke="#e6f1f3" strokeWidth="2" opacity="0.6" />
      <text x="650" y="555" textAnchor="middle" fill="#e6f1f3" fontSize="11" fontFamily="monospace" opacity="0.9">App</text>

      {/* Connection lines */}
      <line x1="248" y1="300" x2="452" y2="210" stroke="#e6f1f3" strokeWidth="1.5" opacity="0.4" />
      <line x1="548" y1="210" x2="752" y2="290" stroke="#e6f1f3" strokeWidth="1.5" opacity="0.4" />
      <line x1="220" y1="345" x2="320" y2="515" stroke="#e6f1f3" strokeWidth="1.5" opacity="0.3" />
      <line x1="500" y1="228" x2="390" y2="515" stroke="#e6f1f3" strokeWidth="1.5" opacity="0.3" />
      <line x1="500" y1="228" x2="610" y2="515" stroke="#e6f1f3" strokeWidth="1.5" opacity="0.3" />
      <line x1="780" y1="345" x2="685" y2="515" stroke="#e6f1f3" strokeWidth="1.5" opacity="0.3" />

      {/* Pulse dots */}
      <circle cx="350" cy="255" r="5" fill="#e6f1f3" opacity="0.9" />
      <circle cx="648" cy="255" r="5" fill="#e6f1f3" opacity="0.9" />
    </svg>
  </div>
)

const WebGraphics = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice">
      {/* Large orbital arc */}
      <path d="M 150 1000 A 400 400 0 0 1 850 1000" fill="none" stroke="#e6f1f3" strokeWidth="2" opacity="0.3" />
      
      {/* Squares along arc */}
      <rect x="250" y="420" width="16" height="16" fill="#e6f1f3" opacity="0.6"/>
      <rect x="700" y="250" width="16" height="16" fill="#e6f1f3" opacity="0.6"/>
      <rect x="800" y="480" width="16" height="16" fill="#e6f1f3" opacity="0.6"/>
      <rect x="650" y="620" width="16" height="16" fill="#e6f1f3" opacity="0.4"/>
      <rect x="180" y="720" width="16" height="16" fill="#e6f1f3" opacity="0.4"/>

      {/* Grid lines bottom */}
      <line x1="300" y1="750" x2="300" y2="1000" stroke="#e6f1f3" strokeWidth="1" opacity="0.2" />
      <line x1="450" y1="800" x2="450" y2="1000" stroke="#e6f1f3" strokeWidth="1" opacity="0.2" />
      <line x1="600" y1="750" x2="600" y2="1000" stroke="#e6f1f3" strokeWidth="1" opacity="0.2" />
      <line x1="750" y1="700" x2="750" y2="1000" stroke="#e6f1f3" strokeWidth="1" opacity="0.2" />

      {/* Bar chart steps */}
      <rect x="600" y="850" width="150" height="200" fill="#e6f1f3" opacity="0.3" />
      <rect x="750" y="780" width="150" height="250" fill="#e6f1f3" opacity="0.4" />
      <rect x="900" y="700" width="150" height="350" fill="#e6f1f3" opacity="0.5" />
    </svg>
  </div>
)

export default function FourthSection() {
  return (
    <section className="bg-background text-foreground pt-10 pb-32 transition-colors duration-700 ease-out">
      <div className="px-8 lg:px-20 mx-auto w-full">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12">Our Services</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">

          {/* Software Card */}
          <a href="/software" className="group relative w-full h-[70vw] sm:h-[60vw] lg:h-auto lg:aspect-[4/3] xl:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out hover:shadow-2xl block">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#1e293b] transition-transform duration-1000 ease-out group-hover:scale-110" />
            
            <SoftwareGraphics />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-8 lg:p-10 transition-transform duration-700 group-hover:scale-105">
              <p className="font-sans text-[11px] sm:text-[13px] uppercase tracking-widest text-white/40 mb-2 sm:mb-3">CRM · SaaS · Applications</p>
              <h3 className="font-sans font-medium text-white text-[clamp(36px,7vw,80px)] tracking-tight drop-shadow-lg leading-none">
                Software
              </h3>
            </div>
          </a>

          {/* Web Card */}
          <a href="/websites" className="group relative w-full h-[70vw] sm:h-[60vw] lg:h-auto lg:aspect-[4/3] xl:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out hover:shadow-2xl block">
            {/* Background color */}
            <div className="absolute inset-0 bg-foreground transition-transform duration-1000 ease-out group-hover:scale-110" />
            
            <WebGraphics />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-8 lg:p-10 transition-transform duration-700 group-hover:scale-105">
              <p className="font-sans text-[11px] sm:text-[13px] uppercase tracking-widest text-brand-blue/50 mb-2 sm:mb-3">Design · Development · CMS</p>
              <h3 className="font-sans font-medium text-brand-blue text-[clamp(36px,7vw,80px)] tracking-tight drop-shadow-lg leading-none">
                Web
              </h3>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
