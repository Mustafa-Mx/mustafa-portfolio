"use client"

import { useEffect, useRef } from "react"

// The living layer of the blueprint: tracer lines that draw themselves across
// the grid in right-angled runs — the way a wiring diagram comes into being —
// each fading as the next begins. Pure canvas, DPR-aware, and it retires
// itself entirely under prefers-reduced-motion.

interface Tracer {
  points: { x: number; y: number }[]
  progress: number
  speed: number
  life: number
}

const GRID = 24
const TRACERS = 7

function snap(value: number) {
  return Math.round(value / GRID) * GRID
}

function makeTracer(width: number, height: number): Tracer {
  const points = [{ x: snap(Math.random() * width), y: snap(Math.random() * height) }]
  let horizontal = Math.random() > 0.5
  const segments = 3 + Math.floor(Math.random() * 4)
  for (let i = 0; i < segments; i++) {
    const last = points[points.length - 1]
    const run = (1 + Math.floor(Math.random() * 6)) * GRID * (Math.random() > 0.5 ? 1 : -1)
    points.push(horizontal ? { x: last.x + run, y: last.y } : { x: last.x, y: last.y + run })
    horizontal = !horizontal
  }
  return { points, progress: 0, speed: 0.9 + Math.random() * 1.4, life: 1 }
}

export function BlueprintCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return

    let width = 0
    let height = 0
    let raf = 0
    let tracers: Tracer[] = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      tracers = Array.from({ length: TRACERS }, () => makeTracer(width, height))
    }

    const totalLength = (tracer: Tracer) => {
      let length = 0
      for (let i = 1; i < tracer.points.length; i++) {
        const a = tracer.points[i - 1]
        const b = tracer.points[i]
        length += Math.abs(b.x - a.x) + Math.abs(b.y - a.y)
      }
      return length
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      for (const tracer of tracers) {
        const length = totalLength(tracer)
        tracer.progress += tracer.speed
        if (tracer.progress > length + 120) {
          tracer.life -= 0.02
          if (tracer.life <= 0) {
            Object.assign(tracer, makeTracer(width, height))
            continue
          }
        }

        const alpha = 0.28 * Math.max(tracer.life, 0)
        context.strokeStyle = `rgba(111, 211, 255, ${alpha})`
        context.lineWidth = 1.25
        context.beginPath()

        let remaining = Math.min(tracer.progress, length)
        context.moveTo(tracer.points[0].x, tracer.points[0].y)
        let headX = tracer.points[0].x
        let headY = tracer.points[0].y
        for (let i = 1; i < tracer.points.length && remaining > 0; i++) {
          const a = tracer.points[i - 1]
          const b = tracer.points[i]
          const seg = Math.abs(b.x - a.x) + Math.abs(b.y - a.y)
          const t = Math.min(remaining / seg, 1)
          headX = a.x + (b.x - a.x) * t
          headY = a.y + (b.y - a.y) * t
          context.lineTo(headX, headY)
          remaining -= seg
        }
        context.stroke()

        // The pen tip: a small node glowing at the head of the line.
        if (tracer.progress < length) {
          context.fillStyle = `rgba(255, 180, 84, ${0.9 * tracer.life})`
          context.beginPath()
          context.arc(headX, headY, 2.2, 0, Math.PI * 2)
          context.fill()
        }
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener("resize", resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
