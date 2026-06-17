'use client'

const SoftwareGraphics = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#a8c5a0] via-[#b8d4b0] to-[#c8d878]" />
    {/* Decorative SVG */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
      {/* Large circle */}
      <circle cx="200" cy="220" r="140" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      {/* Small circles */}
      <circle cx="60"  cy="150" r="28"  fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <circle cx="320" cy="320" r="22"  fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <circle cx="340" cy="110" r="14"  fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      {/* Rectangles top-right */}
      <rect x="290" y="30"  width="50" height="50" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      <rect x="310" y="50"  width="50" height="50" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      {/* Brush / swirl path */}
      <path
        d="M 80 380 C 100 300, 160 280, 200 240 C 240 200, 260 160, 240 120 C 220 80, 180 100, 190 140"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M 80 380 C 100 300, 160 280, 200 240 C 240 200, 260 160, 240 120 C 220 80, 180 100, 190 140"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

const WebGraphics = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Dark background */}
    <div className="absolute inset-0 bg-[#1e2a2a]" />
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
      {/* Large circle outline */}
      <circle cx="200" cy="220" r="155" fill="none" stroke="rgba(180,220,200,0.2)" strokeWidth="1.5" />
      {/* Small accent squares — lime/yellow */}
      <rect x="100" y="120" width="14" height="14" fill="#c8d820" opacity="0.85" />
      <rect x="290" y="90"  width="14" height="14" fill="#c8d820" opacity="0.85" />
      <rect x="310" y="250" width="14" height="14" fill="#c8d820" opacity="0.85" />
      <rect x="80"  cy="280" width="10" height="10" fill="#c8d820" opacity="0.5" />
      {/* Grid / bar chart at bottom */}
      <line x1="60"  y1="440" x2="60"  y2="500" stroke="rgba(180,220,200,0.15)" strokeWidth="1" />
      <line x1="120" y1="440" x2="120" y2="500" stroke="rgba(180,220,200,0.15)" strokeWidth="1" />
      <line x1="180" y1="440" x2="180" y2="500" stroke="rgba(180,220,200,0.15)" strokeWidth="1" />
      <line x1="240" y1="440" x2="240" y2="500" stroke="rgba(180,220,200,0.15)" strokeWidth="1" />
      <line x1="300" y1="440" x2="300" y2="500" stroke="rgba(180,220,200,0.15)" strokeWidth="1" />
      <line x1="360" y1="440" x2="360" y2="500" stroke="rgba(180,220,200,0.15)" strokeWidth="1" />
      {/* Rising bars */}
      <rect x="200" y="390" width="55" height="120" fill="rgba(120,180,160,0.2)" />
      <rect x="258" y="360" width="55" height="150" fill="rgba(120,180,160,0.28)" />
      <rect x="316" y="330" width="55" height="180" fill="rgba(120,180,160,0.35)" />
      {/* Gradient wash at bottom */}
      <defs>
        <linearGradient id="webFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4db890" stopOpacity="0" />
          <stop offset="100%" stopColor="#4db890" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect x="0" y="350" width="400" height="150" fill="url(#webFade)" />
    </svg>
  </div>
)

export default function FourthSection() {
  return (
    <section className="bg-background text-foreground transition-colors duration-700 ease-out pt-10 pb-20">
      <div className="px-5 sm:px-8 lg:px-20 mb-8 sm:mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">Our Services</h2>
      </div>

      {/* Cards grid */}
      <div className="px-5 sm:px-8 lg:px-20 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">

        {/* Software / Brand card */}
        <a
          href="/software"
          className="group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer block transition-transform duration-500 hover:scale-[1.02]"
          style={{ aspectRatio: '4/5' }}
        >
          <SoftwareGraphics />
          {/* Centered title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="font-serif text-[clamp(48px,10vw,80px)] text-black/80 tracking-tight leading-none">
              Software
            </h3>
          </div>
          {/* Bottom label */}
          <div className="absolute bottom-6 left-6">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-black/40">CRM · SaaS · Apps</p>
          </div>
        </a>

        {/* Web card */}
        <a
          href="/websites"
          className="group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer block transition-transform duration-500 hover:scale-[1.02]"
          style={{ aspectRatio: '4/5' }}
        >
          <WebGraphics />
          {/* Centered title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="font-serif text-[clamp(48px,10vw,80px)] text-white/70 tracking-tight leading-none">
              Web
            </h3>
          </div>
          {/* Bottom label */}
          <div className="absolute bottom-6 left-6">
            <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30">Design · Dev · CMS</p>
          </div>
        </a>

      </div>
    </section>
  )
}
