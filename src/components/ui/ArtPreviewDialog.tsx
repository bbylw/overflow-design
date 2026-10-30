import { useEffect, useRef, useState, type ReactNode } from 'react'
import { IconCheck, IconCopy, IconDownload } from '../art/Icons'
import { copyText } from '../../lib/clipboard'
import { downloadSvgFile, serializeSvgElement } from '../../lib/icon-markup'
import { showToast } from './Toast'

export function ArtPreviewDialog({
  title,
  subtitle,
  art,
  tag,
  note,
  initialMonochrome = false,
  onPrev,
  onNext,
  footer,
  onClose,
}: {
  title: string
  subtitle: string
  art: ReactNode
  tag?: { label: string; accent?: boolean }
  note?: string
  initialMonochrome?: boolean
  onPrev?: () => void
  onNext?: () => void
  footer?: ReactNode
  onClose: () => void
}) {
  const previewRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [copied, setCopied] = useState(false)
  const [monochrome, setMonochrome] = useState(initialMonochrome)
  const closeHandler = useRef(onClose)
  closeHandler.current = onClose

  useEffect(() => {
    setCopied(false)
  }, [title, monochrome])

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1600)
    return () => clearTimeout(timer)
  }, [copied])

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeHandler.current()
      } else if (event.key === 'ArrowLeft' && onPrev) {
        event.preventDefault()
        onPrev()
      } else if (event.key === 'ArrowRight' && onNext) {
        event.preventDefault()
        onNext()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [onPrev, onNext])

  const getSerializedSvg = () => {
    const svg = previewRef.current?.querySelector('svg') ?? null
    const raw = serializeSvgElement(svg)
    if (!monochrome) return raw
    return raw
      .replaceAll('stroke="#e2572b"', 'stroke="#111111"')
      .replaceAll('fill="#e2572b"', 'fill="#e9e8e4"')
      .replaceAll('fill="#fdf1ed"', 'fill="#ffffff"')
  }

  const onCopy = async () => {
    const content = getSerializedSvg()
    if (await copyText(content)) {
      setCopied(true)
      showToast(`已复制「${title}」的 SVG 代码`)
    }
  }

  const onDownload = () => {
    const content = getSerializedSvg()
    const cleanName = subtitle.replaceAll('/', '-')
    if (downloadSvgFile(`overflow-${cleanName}.svg`, content)) {
      showToast(`已下载 overflow-${cleanName}.svg`)
    }
  }

  return (
    <div className="fixed inset-0 z-80 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="关闭预览"
        onClick={onClose}
        className="fixed inset-0 h-full w-full cursor-default bg-ink/40 backdrop-blur-[2px]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="art-dialog-title"
        className="modal-in relative z-10 max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-white shadow-[0_8px_16px_rgba(19,18,9,0.06),0_32px_80px_-24px_rgba(19,18,9,0.35)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 id="art-dialog-title" className="text-base font-semibold">
                {title}
              </h2>
              {tag && (
                <span
                  className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                    tag.accent ? 'bg-accent-soft text-accent' : 'border border-line text-muted'
                  }`}
                >
                  {tag.label}
                </span>
              )}
            </div>
            <p className="mt-1 font-mono text-xs text-muted">{subtitle}</p>
          </div>

          <div className="flex items-center gap-1.5">
            {(onPrev || onNext) && (
              <>
                <button
                  type="button"
                  onClick={onPrev}
                  disabled={!onPrev}
                  aria-label="上一张"
                  title="上一张 (←)"
                  className="grid size-8 place-items-center rounded-lg border border-line text-muted transition-colors duration-300 ease-spring hover:bg-wash hover:text-ink disabled:opacity-40"
                >
                  <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
                    <path
                      d="M10 3.5 5.5 8 10 12.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  disabled={!onNext}
                  aria-label="下一张"
                  title="下一张 (→)"
                  className="grid size-8 place-items-center rounded-lg border border-line text-muted transition-colors duration-300 ease-spring hover:bg-wash hover:text-ink disabled:opacity-40"
                >
                  <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden>
                    <path
                      d="M6 3.5 10.5 8 6 12.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="关闭"
              className="grid size-8 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors duration-300 ease-spring hover:bg-wash hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="size-3.5" aria-hidden>
                <path
                  d="M5 5l14 14M19 5 5 19"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="relative">
            <div
              ref={previewRef}
              className={`grid-paper flex aspect-4/3 items-center justify-center overflow-hidden rounded-lg border border-line-soft bg-wash p-6 ${
                monochrome ? 'art-monochrome' : ''
              }`}
            >
              {art}
            </div>

            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-lg border border-line bg-white/90 p-1 backdrop-blur">
              <button
                type="button"
                onClick={() => setMonochrome(false)}
                aria-pressed={!monochrome}
                className={`rounded px-2 py-1 text-xs font-medium transition-colors duration-300 ease-spring ${
                  !monochrome ? 'bg-ink text-white' : 'text-muted hover:text-ink'
                }`}
              >
                淡彩
              </button>
              <button
                type="button"
                onClick={() => setMonochrome(true)}
                aria-pressed={monochrome}
                className={`rounded px-2 py-1 text-xs font-medium transition-colors duration-300 ease-spring ${
                  monochrome ? 'bg-ink text-white' : 'text-muted hover:text-ink'
                }`}
              >
                纯线稿
              </button>
            </div>
          </div>

          {note && <p className="mt-4 text-sm leading-relaxed text-ink-soft">{note}</p>}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line-soft pt-4">
            <p className="font-mono text-xs text-muted">SVG · 矢量路径 · 放大不失真</p>
            <div className="flex flex-wrap items-center gap-2">
              {footer}
              <button type="button" onClick={onDownload} className="btn btn-ghost">
                <IconDownload className="size-4" />
                下载 SVG
              </button>
              <button type="button" onClick={onCopy} className="btn btn-primary">
                {copied ? <IconCheck className="size-4" /> : <IconCopy className="size-4" />}
                {copied ? '已复制' : '复制 SVG'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
