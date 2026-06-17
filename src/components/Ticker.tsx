'use client'

const items = [
  "Custom websites & software built for ambitious brands.",
  "Now live at dev.thepiecraftmarketing.com",
  "Web design · Software development · Brand identity.",
  "8.5x ROAS for elite clients — now bringing that standard to web & software.",
  "High-performance websites built with Next.js & React.",
  "Get in touch → info@thepiecraftmarketing.com",
]

const separator = <span className="mx-8 lg:mx-16 select-none"></span>

const marqueeContent = items.map((item, i) => (
  <span key={i} className="whitespace-nowrap">
    {separator}
    {item}
  </span>
))

export default function Ticker() {
  return (
    <div className="bg-black text-white text-xs font-bold tracking-wide py-3 overflow-hidden select-none">
      <div
        className="flex w-max"
        style={{ animation: 'marquee 38s linear infinite' }}
      >
        <span className="flex">{marqueeContent}</span>
        <span className="flex" aria-hidden>{marqueeContent}</span>
      </div>
    </div>
  )
}
