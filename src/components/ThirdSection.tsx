'use client'


const Badge = () => (
  <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
    {/* SVG for circular text and background */}
    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]">
      <defs>
        <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
      </defs>
      <circle cx="50" cy="50" r="46" fill="#c4e5e3" />
      <text fontSize="7.5" fontWeight="600" letterSpacing="0.1" fill="#000">
        <textPath href="#circlePath" startOffset="0%">
          YEARS IN BUSINESS · YEARS IN BUSINESS · 
        </textPath>
      </text>
    </svg>
    {/* The stationary '15' in the middle */}
    <span className="relative z-10 text-[40px] sm:text-[48px] lg:text-[56px] font-medium text-black leading-none mt-2" style={{ fontFamily: 'var(--font-sans)' }}>
      15
    </span>
  </div>
)

// A purely CSS-based marquee for the logos
const LogoMarquee = () => {
  const logos = [
    <span key="1" className="font-serif text-xl sm:text-3xl opacity-80">Nebraska</span>,
    <span key="2" className="font-sans font-medium text-xl sm:text-3xl opacity-80">Google</span>,
    <span key="3" className="font-sans font-bold text-xl sm:text-3xl tracking-tighter opacity-80">twitch</span>,
    <span key="4" className="font-sans font-bold text-xl sm:text-3xl flex items-center gap-2 opacity-80">
      <span className="w-6 h-6 rounded-full border-4 border-current grid place-items-center">
        <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
      </span>
      twilio
    </span>,
    <span key="5" className="font-sans font-black text-2xl sm:text-4xl tracking-tight opacity-80">hudl</span>,
    <span key="6" className="font-sans font-black italic text-xl sm:text-3xl tracking-widest opacity-80">SIGNAL</span>,
    <span key="7" className="font-sans font-semibold text-xl sm:text-3xl flex items-center gap-2 opacity-80">
      <span className="font-black text-4xl">S</span>SauceLabs
    </span>,
  ]

  return (
    <div className="flex w-full overflow-hidden mt-16 sm:mt-32 py-8 sm:py-10 border-t border-white/10 select-none">
      <div
        className="flex w-max items-center gap-10 sm:gap-16 lg:gap-24 pr-10 sm:pr-16 lg:pr-24"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        <div className="flex items-center gap-10 sm:gap-16 lg:gap-24">{logos}</div>
        <div className="flex items-center gap-10 sm:gap-16 lg:gap-24">{logos}</div>
        <div className="flex items-center gap-10 sm:gap-16 lg:gap-24">{logos}</div>
      </div>
    </div>
  )
}

export default function ThirdSection() {
  return (
    <section className="bg-background text-foreground transition-colors duration-700 ease-out pt-16 sm:pt-32 pb-16 overflow-hidden w-full">
      <div className="px-5 sm:px-8 lg:px-20 mx-auto w-full">
        
        {/* Top Text and Button */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="font-serif text-[clamp(28px,4vw,56px)] leading-[1.1] text-foreground mb-8 sm:mb-12">
            Great work gets us hired, but<br />
            our process, character, and<br />
            relationships keep us in business.
          </h2>
          
          <a href="/about" className="inline-block bg-foreground text-background hover:opacity-80 text-black font-medium text-sm px-8 py-4 rounded-full transition-colors duration-300">
            About Us
          </a>
        </div>

        {/* Middle Area: "We've helped folks" and Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-16 sm:mt-32 relative gap-8">
          <div className="flex items-baseline gap-4">
            <span className="font-serif text-2xl sm:text-4xl text-foreground">We've helped folks</span>
            <span className="font-sans text-sm font-medium opacity-60">big &amp; small</span>
          </div>
          
          <div className="shrink-0">
            <Badge />
          </div>
        </div>

      </div>

      {/* Scrolling Logos */}
      <LogoMarquee />
    </section>
  )
}
