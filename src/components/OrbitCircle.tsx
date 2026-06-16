'use client'

import React from 'react'

const RX = 400
const RY = 275
const TILT = 15
const PAD = 110
const W = (RX + PAD) * 2
const H = (RY + PAD) * 2
const CX = W / 2
const CY = H / 2

const ORBIT_PATH =
  `M ${CX + RX},${CY} ` +
  `A ${RX},${RY},0,0,1,${CX - RX},${CY} ` +
  `A ${RX},${RY},0,0,1,${CX + RX},${CY}`

const DURATION = 34

function angleToDelay(angleDeg: number): number {
  const norm = ((angleDeg % 360) + 360) % 360
  // Return negative delay in seconds for SVG begin attribute
  return -(norm / 360) * DURATION
}

// ── Icons ────────────────────────────────────────────────────────────────────

function PixelCursor() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <g transform="translate(50,50)">
        <animateTransform attributeName="transform" type="translate" values="50,50; 50,40; 50,50" dur="2s" repeatCount="indefinite" />
        <path transform="translate(-2.5, -2.5)" d="M-15,-20 L-15,20 L-5,10 L0,25 L10,20 L5,5 L20,5 Z" fill="#bef264" stroke="#134e4a" strokeWidth="3" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

function Toggle() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      {/* Shift Y by +5 so bounds 10..80 become 15..85 (Center 50) */}
      <g transform="translate(0, 5)">
        <rect x="20" y="10" width="30" height="30" rx="8" fill="#064e3b" />
        <path d="M 27 25 L 32 30 L 43 17" stroke="#a3e635" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <animate attributeName="stroke-dasharray" values="0,50; 50,0" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 55 25 L 65 15 M 65 15 L 65 25 M 65 15 L 55 15" stroke="#064e3b" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="20" y="50" width="60" height="30" rx="15" fill="#064e3b" />
        <circle cx="35" cy="65" r="10" fill="#a3e635">
          <animate attributeName="cx" values="35;65;65;35;35" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  )
}

function Cube() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <g transform="translate(50,50)">
        <animateTransform attributeName="transform" type="translate" values="50,50; 50,42; 50,50" dur="3s" repeatCount="indefinite" />
        <g stroke="#064e3b" strokeWidth="2" strokeLinejoin="round" transform="translate(-50,-55)">
          <path d="M 50 15 L 85 35 L 85 75 L 50 95 L 15 75 L 15 35 Z" fill="#bbf7d0" />
          <path d="M 50 55 L 85 35 M 50 55 L 15 35 M 50 55 L 50 95" />
          <path d="M 50 15 L 85 35 L 50 55 L 15 35 Z" fill="#a3e635" />
          <path d="M 15 35 L 50 55 L 50 95 L 15 75 Z" fill="#86efac" />
        </g>
      </g>
    </svg>
  )
}

function BrowserWindow() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <g transform="translate(50,50)">
        <animateTransform attributeName="transform" type="scale" values="1; 1.05; 1" dur="4s" repeatCount="indefinite" />
        <g transform="translate(-50,-50)">
          <rect x="10" y="20" width="80" height="60" rx="6" fill="#134e4a" />
          <rect x="10" y="20" width="80" height="15" fill="#0f766e" />
          <circle cx="20" cy="27.5" r="2.5" fill="#a3e635" />
          <circle cx="28" cy="27.5" r="2.5" fill="#a3e635" />
          <circle cx="36" cy="27.5" r="2.5" fill="#a3e635" />
          <rect x="15" y="42" width="40" height="32" rx="2" fill="#2dd4bf">
             <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="60" y="42" width="25" height="13" rx="2" fill="#5eead4" />
          <rect x="60" y="61" width="25" height="13" rx="2" fill="#bef264" />
        </g>
      </g>
    </svg>
  )
}

function Scribble() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <g transform="translate(50,50)">
        <animateTransform attributeName="transform" type="rotate" values="0; 10; -10; 0" dur="4s" repeatCount="indefinite" />
        <g transform="translate(-50,-50)">
          <circle cx="50" cy="50" r="35" fill="#bef264" />
          <path d="M 35 70 Q 20 40 45 30 T 65 40 T 50 70 T 70 60" fill="none" stroke="#134e4a" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  )
}

function Wireframe() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <g transform="translate(0, 5)">
        <rect x="15" y="20" width="70" height="60" rx="8" fill="none" stroke="#6b7280" strokeWidth="4" />
        <rect x="25" y="10" width="60" height="60" rx="8" fill="none" stroke="#9ca3af" strokeWidth="2" />
        <path d="M 25 35 L 75 35 M 25 50 L 60 50 M 25 65 L 70 65" stroke="#6b7280" strokeWidth="4" strokeLinecap="round">
          <animate attributeName="stroke-dasharray" values="0,100; 100,0; 100,0" dur="4s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  )
}

function BlackCircle() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <circle cx="50" cy="50" r="45" fill="#000000">
        <animate attributeName="r" values="45;48;45" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

function SparkleSquare() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <rect x="15" y="15" width="70" height="70" rx="16" fill="#84cc16" />
      <g transform="translate(50,50)">
        <animateTransform attributeName="transform" type="scale" values="1; 1.2; 1" dur="2s" repeatCount="indefinite" />
        <path d="M 0 -25 Q 0 0 -25 0 Q 0 0 0 25 Q 0 0 25 0 Q 0 0 0 -25 Z" fill="#ecfccb" />
      </g>
    </svg>
  )
}

function BlackSquircle() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <rect x="15" y="15" width="70" height="70" rx="20" fill="#000000" />
      <circle cx="35" cy="35" r="7" fill="#a3e635">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="35" r="7" fill="#14b8a6">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="35" cy="65" r="7" fill="#facc15">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="65" r="7" fill="#4ade80">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

function Database() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <g transform="translate(50,50)">
        <animateTransform attributeName="transform" type="translate" values="50,50; 50,43; 50,50" dur="3.5s" repeatCount="indefinite" />
        <g stroke="#0f766e" strokeWidth="3" fill="#5eead4" transform="translate(-50,-50)">
          <path d="M 20 25 L 20 75 A 30 12 0 0 0 80 75 L 80 25 Z" />
          <ellipse cx="50" cy="75" rx="30" ry="12" fill="#2dd4bf" />
          <ellipse cx="50" cy="50" rx="30" ry="12" fill="#2dd4bf" />
          <ellipse cx="50" cy="25" rx="30" ry="12" fill="#5eead4" />
        </g>
      </g>
    </svg>
  )
}

function CodeBrackets() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <g transform="translate(50,50)">
         <animateTransform attributeName="transform" type="scale" values="1; 1.1; 1" dur="2s" repeatCount="indefinite" />
         <g fill="none" stroke="#064e3b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" transform="translate(-50,-50)">
            <path d="M 35 25 L 15 50 L 35 75" />
            <path d="M 65 25 L 85 50 L 65 75" />
            <path d="M 55 15 L 45 85" stroke="#a3e635" />
         </g>
      </g>
    </svg>
  )
}

function Gear() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <g transform="translate(50,50)">
        <animateTransform attributeName="transform" type="rotate" values="0; 360" dur="10s" repeatCount="indefinite" />
        <g stroke="#134e4a" strokeWidth="4" fill="#84cc16">
          <circle cx="0" cy="0" r="25" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
            <path key={a} transform={`rotate(${a})`} d="M -8 -25 L -6 -35 L 6 -35 L 8 -25 Z" />
          ))}
          <circle cx="0" cy="0" r="10" fill="#ecfccb" />
        </g>
      </g>
    </svg>
  )
}

function Cloud() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <g transform="translate(50,50)">
        <animateTransform attributeName="transform" type="translate" values="50,50; 50,42; 50,50" dur="4s" repeatCount="indefinite" />
        <g transform="translate(-47.5, -35)">
          <path d="M 30 65 A 15 15 0 0 1 30 35 A 25 25 0 0 1 70 30 A 18 18 0 0 1 80 65 Z" fill="#bbf7d0" stroke="#134e4a" strokeWidth="4" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  )
}

function Diamond() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <g transform="translate(50,50)">
         <animateTransform attributeName="transform" type="translate" values="50,50; 50,40; 50,50" dur="3s" repeatCount="indefinite" />
         <g stroke="#0f766e" strokeWidth="3" strokeLinejoin="round" transform="translate(-50,-52.5)">
            <path d="M 50 15 L 85 45 L 50 90 L 15 45 Z" fill="#5eead4" />
            <path d="M 15 45 L 35 45 L 50 90 Z" fill="#2dd4bf" />
            <path d="M 85 45 L 65 45 L 50 90 Z" fill="#14b8a6" />
            <path d="M 35 45 L 65 45 L 50 90 Z" fill="#0d9488" />
            <path d="M 50 15 L 35 45 L 65 45 Z" fill="#ccfbf1" />
            <path d="M 50 15 L 15 45 L 35 45 Z" fill="#99f6e4" />
            <path d="M 50 15 L 85 45 L 65 45 Z" fill="#5eead4" />
         </g>
      </g>
    </svg>
  )
}

// ── Orbit items ──────────────────────────────────────────────────────────────

type OrbitItem = {
  id: string
  angle: number
  size: number
  Component: React.FC
  opacity?: number
}

// Distributing 11 items evenly every ~32.7 degrees around the oval.
const orbitItems: OrbitItem[] = [
  { id: 'cursor',     angle: 0,    size: 80,  Component: PixelCursor },
  { id: 'database',   angle: 33,   size: 100, Component: Database },
  { id: 'squircle',   angle: 65,   size: 100, Component: BlackSquircle },
  { id: 'toggle',     angle: 98,   size: 130, Component: Toggle },
  { id: 'cube',       angle: 131,  size: 110, Component: Cube },
  { id: 'cloud',      angle: 164,  size: 110, Component: Cloud },
  { id: 'browser',    angle: 196,  size: 120, Component: BrowserWindow },
  { id: 'diamond',    angle: 229,  size: 105, Component: Diamond },
  { id: 'scribble',   angle: 262,  size: 110, Component: Scribble },
  { id: 'circle',     angle: 295,  size: 120, Component: BlackCircle },
  { id: 'sparkle',    angle: 327,  size: 110, Component: SparkleSquare },
]

export default function OrbitCircle() {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: W,
        height: H,
        transform: `rotate(${TILT}deg)`,
      }}
    >
      <svg
        className="absolute inset-0 pointer-events-none"
        viewBox={`0 0 ${W} ${H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static dotted oval */}
        <ellipse
          cx={CX}
          cy={CY}
          rx={RX}
          ry={RY}
          stroke="#1a1a1a"
          strokeWidth="1"
          strokeDasharray="2 2"
          fill="none"
        />

        {/* Orbiting SVG Items */}
        {orbitItems.map((item) => (
          <g key={item.id} opacity={item.opacity ?? 1}>
            <animateMotion
              dur={`${DURATION}s`}
              repeatCount="indefinite"
              path={ORBIT_PATH}
              begin={`${angleToDelay(item.angle)}s`}
            />
            {/* 
              Translate by -size/2 to center the icon on the path.
              Counter-rotate by -TILT so the icon remains visually upright.
            */}
            <g transform={`translate(-${item.size / 2}, -${item.size / 2}) rotate(-${TILT}, ${item.size / 2}, ${item.size / 2})`}>
              <svg width={item.size} height={item.size} viewBox="0 0 100 100" className="overflow-visible">
                <item.Component />
              </svg>
            </g>
          </g>
        ))}
      </svg>
    </div>
  )
}
