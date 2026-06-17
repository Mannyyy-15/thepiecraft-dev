'use client'

import { useEffect, useRef, useState, useCallback, ReactNode } from 'react'

export interface Pill {
  label: string
  icon?: ReactNode
}

interface PhysicsPill {
  id: number
  x: number
  y: number
  angle: number
  width: number
  height: number
  spawned: boolean
}

interface Props {
  pills: Pill[]
  className?: string
}

const PILL_H_DESKTOP = 68
const PILL_H_MOBILE  = 40
const CHAR_W_DESKTOP = 11.5
const CHAR_W_MOBILE  = 8
const PILL_PAD = 56
const ICON_W   = 32

function estimateWidth(label: string, hasIcon: boolean, mobile: boolean) {
  const cw = mobile ? CHAR_W_MOBILE : CHAR_W_DESKTOP
  return Math.ceil(label.length * cw + PILL_PAD + (hasIcon ? ICON_W : 0))
}

export default function FallingPills({ pills, className = '' }: Props) {
  const sceneRef    = useRef<HTMLDivElement>(null)
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const engineRef   = useRef<import('matter-js').Engine | null>(null)
  const renderRef   = useRef<import('matter-js').Render | null>(null)
  const runnerRef   = useRef<import('matter-js').Runner | null>(null)
  const bodiesRef   = useRef<Map<number, import('matter-js').Body>>(new Map())
  const pillDataRef = useRef<PhysicsPill[]>([])
  const frameRef    = useRef<number>(0)
  const pausedRef   = useRef(false)
  const [pillStates, setPillStates] = useState<PhysicsPill[]>([])

  const syncPositions = useCallback(() => {
    if (!engineRef.current || pausedRef.current) return

    const updated = pillDataRef.current.map(p => {
      const body = bodiesRef.current.get(p.id)
      if (!body || !p.spawned) return p
      return { ...p, x: body.position.x, y: body.position.y, angle: body.angle }
    })

    pillDataRef.current = updated
    setPillStates([...updated])
    frameRef.current = requestAnimationFrame(syncPositions)
  }, [])

  const pausePhysics = useCallback(() => {
    pausedRef.current = true
    cancelAnimationFrame(frameRef.current)
    import('matter-js').then(({ Runner, Render }) => {
      if (runnerRef.current) Runner.stop(runnerRef.current)
      if (renderRef.current) Render.stop(renderRef.current)
    })
  }, [])

  const resumePhysics = useCallback(() => {
    if (!engineRef.current) return
    pausedRef.current = false
    import('matter-js').then(({ Runner, Render }) => {
      if (runnerRef.current) Runner.run(runnerRef.current, engineRef.current!)
      if (renderRef.current) Render.run(renderRef.current)
    })
    frameRef.current = requestAnimationFrame(syncPositions)
  }, [syncPositions])

  useEffect(() => {
    async function init() {
      const Matter = await import('matter-js')
      const { Engine, Render, Runner, Bodies, Body, World, Mouse, MouseConstraint, Events } = Matter

      const container = sceneRef.current
      const canvas    = canvasRef.current
      if (!container || !canvas) return

      const rect = container.getBoundingClientRect()
      const W = rect.width
      const H = rect.height
      const isMobile = W < 640
      const PILL_H = isMobile ? PILL_H_MOBILE : PILL_H_DESKTOP

      const activePills = isMobile ? pills.slice(0, Math.min(10, pills.length)) : pills

      // enableSleeping: false keeps bodies interactive after coming to rest
      const engine = Engine.create({ gravity: { y: 0.5 }, enableSleeping: false })
      engineRef.current = engine

      const render = Render.create({
        canvas,
        engine,
        options: { width: W, height: H, wireframes: false, background: 'transparent', pixelRatio: 1 },
      })
      renderRef.current = render
      canvas.style.opacity       = '0'
      canvas.style.position      = 'absolute'
      canvas.style.inset         = '0'
      canvas.style.pointerEvents = 'auto'

      const wo = { isStatic: true, friction: 0.5, restitution: 0.2, label: 'wall' }
      World.add(engine.world, [
        Bodies.rectangle(W / 2, H + 30,  W * 4, 60,   wo),
        Bodies.rectangle(-30,   H / 2,   60,    H * 4, wo),
        Bodies.rectangle(W + 30, H / 2,  60,    H * 4, wo),
      ])

      const mouse = Mouse.create(canvas)
      mouse.pixelRatio = 1
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      })
      World.add(engine.world, mouseConstraint)

      // Wake up any body the mouse touches so it can be dragged
      Events.on(mouseConstraint, 'startdrag', (e: import('matter-js').IEvent<typeof mouseConstraint> & { body?: import('matter-js').Body }) => {
        if (e.body) Body.setStatic(e.body, false)
      })

      const runner = Runner.create()
      runnerRef.current = runner
      Runner.run(runner, engine)
      Render.run(render)

      const initial: PhysicsPill[] = activePills.map((p, i) => ({
        id: i, x: -300, y: -300, angle: 0,
        width: estimateWidth(p.label, !!p.icon, isMobile), height: PILL_H, spawned: false,
      }))
      pillDataRef.current = initial
      setPillStates([...initial])

      activePills.forEach((_, i) => {
        setTimeout(() => {
          if (!engineRef.current) return
          const pw = estimateWidth(activePills[i].label, !!activePills[i].icon, isMobile)
          const r  = PILL_H / 2
          const minX = pw / 2 + 5
          const maxX = W - pw / 2 - 5
          const spawnX = minX + Math.random() * Math.max(0, maxX - minX)
          const spawnY = -PILL_H - Math.random() * 80

          const rectW   = Math.max(pw - r * 2, 4)
          const rectPart = Bodies.rectangle(0, 0, rectW, PILL_H, { friction: 0.4, restitution: 0.25, density: 0.003 })
          const capL     = Bodies.circle(-(rectW / 2 + r / 2), 0, r, { friction: 0.4, restitution: 0.25, density: 0.003 })
          const capR     = Bodies.circle( (rectW / 2 + r / 2), 0, r, { friction: 0.4, restitution: 0.25, density: 0.003 })
          const body     = Body.create({
            parts: [rectPart, capL, capR],
            friction: 0.4, restitution: 0.25, density: 0.003,
            frictionAir: 0.01,
            label: `pill-${i}`,
          })

          Body.setPosition(body, { x: spawnX, y: spawnY })
          Body.setAngle(body, (Math.random() - 0.5) * 0.6)
          Body.setVelocity(body, { x: (Math.random() - 0.5) * 2, y: 1 })
          World.add(engine.world, body)
          bodiesRef.current.set(i, body)

          pillDataRef.current = pillDataRef.current.map(p =>
            p.id === i ? { ...p, spawned: true, x: spawnX, y: spawnY } : p
          )
        }, i * 100 + 50)
      })

      frameRef.current = requestAnimationFrame(syncPositions)

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            resumePhysics()
          } else {
            pausePhysics()
          }
        },
        { threshold: 0 }
      )
      observer.observe(container)

      return () => observer.disconnect()
    }

    init()

    return () => {
      cancelAnimationFrame(frameRef.current)
      import('matter-js').then(({ Runner, Render, Engine }) => {
        if (runnerRef.current) Runner.stop(runnerRef.current)
        if (renderRef.current) Render.stop(renderRef.current)
        if (engineRef.current) Engine.clear(engineRef.current)
      })
      engineRef.current = null
      renderRef.current = null
      runnerRef.current = null
      bodiesRef.current.clear()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={sceneRef} className={`relative w-full overflow-hidden ${className}`} style={{ minHeight: 200 }}>
      <canvas ref={canvasRef} className="absolute inset-0 z-30" />

      {pillStates.filter(p => p.spawned).map(p => {
        const pill = pills[p.id]
        if (!pill) return null
        const isSmall = p.height <= PILL_H_MOBILE
        return (
          <div
            key={p.id}
            className="absolute select-none"
            style={{
              left: p.x,
              top: p.y,
              width: p.width,
              height: p.height,
              transform: `translate(-50%, -50%) rotate(${p.angle}rad)`,
              willChange: 'transform',
              zIndex: 20,
              pointerEvents: 'none',
            }}
          >
            <div
              className="w-full h-full flex items-center justify-center gap-1.5 rounded-full whitespace-nowrap font-medium"
              style={{
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.16)',
                fontSize: isSmall ? 12 : 16,
                color: 'rgba(255,255,255,0.88)',
                paddingLeft: isSmall ? 12 : 22,
                paddingRight: isSmall ? 14 : 24,
              }}
            >
              {pill.icon && (
                <span className="shrink-0 flex items-center justify-center" style={{ width: isSmall ? 16 : 22, height: isSmall ? 16 : 22, opacity: 0.9 }}>
                  {pill.icon}
                </span>
              )}
              <span>{pill.label}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
