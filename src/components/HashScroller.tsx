import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'

/**
 * Scroll to the anchor after a client-side route change. TanStack Router
 * restores scroll for path changes; this covers links like /illustrations#set-office-club.
 */
export function HashScroller() {
  const hash = useRouterState({ select: (state) => state.location.hash })

  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.replace(/^#/, ''))
    let attempts = 0
    let timer: ReturnType<typeof setTimeout>

    const scroll = () => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (attempts++ < 6) timer = setTimeout(scroll, 120)
    }

    timer = setTimeout(scroll, 80)
    return () => clearTimeout(timer)
  }, [hash])

  return null
}
