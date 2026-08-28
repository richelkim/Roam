'use client'

import { useEffect, useRef, useState } from 'react'

export type RouteGeometry = {
  d: string
  viewBox: string
  start: readonly [number, number]
  end: readonly [number, number]
}

export const HOME_ROUTE_TRACE: RouteGeometry = {
  viewBox: '0 0 360 220',
  d: 'M26 173 L41 158 L38 142 L54 128 L72 132 L86 118 L80 101 L95 86 L113 91 L129 77 L142 60 L159 66 L164 83 L181 92 L199 84 L204 65 L221 53 L238 59 L250 77 L266 85 L282 78 L296 62 L312 68 L324 86 L316 104 L299 113 L280 108 L264 120 L269 138 L252 150 L233 143 L216 155 L198 161 L182 150 L164 155 L147 166 L128 160 L111 173 L92 167 L76 179 L58 175 L44 185',
  start: [26, 173],
  end: [44, 185],
}

type RouteTraceProps = {
  path: RouteGeometry
  distance: string
  className?: string
}

export function RouteTrace({ path, distance, className = '' }: RouteTraceProps) {
  const containerRef = useRef<HTMLElement>(null)
  const [hasEntered, setHasEntered] = useState(false)
  const [renderStatic, setRenderStatic] = useState(false)

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setRenderStatic(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setHasEntered(true)
        observer.disconnect()
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  const [startX, startY] = path.start
  const [endX, endY] = path.end

  return (
    <figure
      ref={containerRef}
      className={`route-trace ${className}`.trim()}
      data-visible={hasEntered}
      data-static={renderStatic}
    >
      <svg
        className="route-trace__svg"
        viewBox={path.viewBox}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`${distance} hiking route trace`}
      >
        <path className="route-trace__path" d={path.d} pathLength={1} />
        <circle className="route-trace__point route-trace__point--start" cx={startX} cy={startY} r="5" />
        <circle className="route-trace__point route-trace__point--end" cx={endX} cy={endY} r="5" />
      </svg>
      <figcaption className="route-trace__distance technical">{distance}</figcaption>
    </figure>
  )
}
