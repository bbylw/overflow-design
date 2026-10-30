import { useEffect, useRef, useState, type ReactNode } from 'react'

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.01, rootMargin: '64px 0px 64px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal-base ${visible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
    >
      {children}
    </div>
  )
}

/**
 * Tagline reveal section (Landing Page Design B11):
 * Words/phrases transition one at a time from muted opacity to full ink color
 * as the user scrolls past the trigger line, throttled via requestAnimationFrame
 * and gated by IntersectionObserver.
 */
export function TaglineReveal({
  eyebrow = '同一支笔',
  segments,
}: {
  eyebrow?: string
  segments: string[]
}) {
  const containerRef = useRef<HTMLElement>(null)
  const [activeCount, setActiveCount] = useState(2)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActiveCount(segments.length)
      return
    }

    let rafId = 0
    let inViewport = false

    const updateProgress = () => {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 800
      const start = vh * 0.88
      const end = vh * 0.28
      const progress = Math.min(1, Math.max(0.2, (start - rect.top) / (start - end)))
      const count = Math.max(2, Math.round(progress * segments.length))
      setActiveCount((prev) => (count > prev ? count : prev))
    }

    const onScroll = () => {
      if (!inViewport) return
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        updateProgress()
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        inViewport = entries[0]?.isIntersecting ?? false
        if (inViewport) updateProgress()
      },
      { threshold: [0, 0.2, 0.5, 0.8, 1] },
    )

    observer.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    updateProgress()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [segments.length])

  return (
    <section ref={containerRef} className="border-b border-line bg-white">
      <div className="wrap py-20 md:py-24">
        <div className="max-w-170">
          <p className="eyebrow">{eyebrow}</p>
          <p className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            {segments.map((word, idx) => {
              const active = idx < activeCount
              return (
                <span
                  key={idx}
                  style={{ transitionDelay: `${Math.min(idx * 30, 210)}ms` }}
                  className={`inline transition-opacity duration-500 ease-spring ${
                    active ? 'text-ink opacity-100' : 'text-ink opacity-25'
                  }`}
                >
                  {word}
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </section>
  )
}
