'use client'

const items = [
  "15 Years! This year we celebrate 7,888,680 minutes in business!",
  "New software, new website, same boring people.",
  "New software, new website, new news banner!",
  "15 Years! This year we celebrate 7,888,680 minutes in business!",
  "New software, new website, same us.",
  "We build software that works on the web.",
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
