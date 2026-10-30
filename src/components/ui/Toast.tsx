import { useEffect, useRef, useState } from 'react'
import { IconCheck } from '../art/Icons'

const TOAST_EVENT = 'overflow:toast'

export function showToast(message: string) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent<string>(TOAST_EVENT, { detail: message }))
}

export function useToast() {
  const [message, setMessage] = useState<string | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onEvent = (event: Event) => {
      const custom = event as CustomEvent<string>
      if (custom.detail) {
        setMessage(custom.detail)
        if (timer.current) clearTimeout(timer.current)
        timer.current = setTimeout(() => setMessage(null), 2200)
      }
    }

    window.addEventListener(TOAST_EVENT, onEvent)
    return () => {
      window.removeEventListener(TOAST_EVENT, onEvent)
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  const show = (next: string, duration = 2200) => {
    setMessage(next)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setMessage(null), duration)
  }

  return { message, show }
}

export function Toast({ message }: { message: string | null }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed bottom-6 left-1/2 z-110 -translate-x-1/2"
    >
      {message && (
        <div
          key={message}
          className="toast-in flex items-center gap-2 rounded-lg border border-ink bg-ink px-4 py-2 text-xs font-medium text-white shadow-[0_4px_12px_rgba(19,18,9,0.2)]"
        >
          <IconCheck className="size-3.5 text-accent" />
          <span>{message}</span>
        </div>
      )}
    </div>
  )
}
