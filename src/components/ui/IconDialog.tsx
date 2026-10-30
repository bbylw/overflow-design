import { useEffect, useRef, useState } from 'react'
import { IconCheck, IconCopy, IconDownload, type IconTone } from '../art/Icons'
import { copyText } from '../../lib/clipboard'
import { downloadSvgFile, serializeIcon, serializeIconJsx } from '../../lib/icon-markup'
import { showToast } from './Toast'
import type { FlatGlyph } from '../../data/icons'

const sizes = [16, 24, 32, 48, 64]
const weights = [
  { label: '细', value: 1.25 },
  { label: '常规', value: 1.5 },
  { label: '加粗', value: 2 },
]
const colors = [
  { label: '墨黑', value: '#0a0a0a' },
  { label: '朱砂', value: '#e2572b' },
  { label: '石青', value: '#1d4ed8' },
  { label: '松绿', value: '#15803d' },
  { label: '岩灰', value: '#525252' },
]

export function IconDialog({
  glyph,
  initialTone = 'regular',
  initialStrokeWidth = 1.5,
  onSelectGlyph,
  allGlyphs,
  onClose,
}: {
  glyph: FlatGlyph
  initialTone?: IconTone
  initialStrokeWidth?: number
  onSelectGlyph?: (name: string) => void
  allGlyphs?: FlatGlyph[]
  onClose: () => void
}) {
  const [size, setSize] = useState(48)
  const [strokeWidth, setStrokeWidth] = useState(initialStrokeWidth)
  const [tone, setTone] = useState<IconTone>(initialTone)
  const [color, setColor] = useState('#0a0a0a')
  const [format, setFormat] = useState<'svg' | 'jsx'>('svg')
  const [copied, setCopied] = useState<'code' | 'name' | null>(null)
  const [markup, setMarkup] = useState('')
  const [jsx, setJsx] = useState('')
  const previewRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const closeHandler = useRef(onClose)
  closeHandler.current = onClose

  const currentIndex = allGlyphs ? allGlyphs.findIndex((g) => g.name === glyph.name) : -1
  const canNavigate = Boolean(onSelectGlyph && allGlyphs && allGlyphs.length > 1 && currentIndex >= 0)

  const goPrev = () => {
    if (!canNavigate || !allGlyphs || !onSelectGlyph) return
    const nextIdx = (currentIndex - 1 + allGlyphs.length) % allGlyphs.length
    onSelectGlyph(allGlyphs[nextIdx].name)
  }

  const goNext = () => {
    if (!canNavigate || !allGlyphs || !onSelectGlyph) return
    const nextIdx = (currentIndex + 1) % allGlyphs.length
    onSelectGlyph(allGlyphs[nextIdx].name)
  }

  useEffect(() => {
    const svg = previewRef.current?.querySelector('svg') ?? null
    setMarkup(serializeIcon(svg, { size, strokeWidth }))
    setJsx(serializeIconJsx(svg, { size, strokeWidth }))
  }, [glyph.name, size, strokeWidth, tone, color])

  useEffect(() => {
    setCopied(null)
  }, [glyph.name, format, tone, strokeWidth, size])

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(null), 1600)
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
      } else if (event.key === 'ArrowLeft' && canNavigate) {
        event.preventDefault()
        goPrev()
      } else if (event.key === 'ArrowRight' && canNavigate) {
        event.preventDefault()
        goNext()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [glyph.name, canNavigate])

  const snippet = format === 'svg' ? markup : jsx

  const onCopyCode = async () => {
    if (await copyText(snippet)) {
      setCopied('code')
      showToast(`已复制 ${glyph.cn} 的 ${format.toUpperCase()} 代码`)
    }
  }

  const onCopyName = async () => {
    if (await copyText(glyph.name)) {
      setCopied('name')
      showToast(`已复制图标名称 "${glyph.name}"`)
    }
  }

  const onDownloadSvg = () => {
    const filename = `ni-${glyph.name}${tone === 'duotone' ? '-duotone' : ''}.svg`
    if (downloadSvgFile(filename, markup)) {
      showToast(`已下载 ${filename}`)
    }
  }

  return (
    <div className="fixed inset-0 z-80 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="关闭图标详情"
        onClick={onClose}
        className="fixed inset-0 h-full w-full cursor-default bg-ink/40 backdrop-blur-[2px]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="icon-dialog-title"
        className="modal-in relative z-10 max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-white shadow-[0_8px_16px_rgba(19,18,9,0.06),0_32px_80px_-24px_rgba(19,18,9,0.35)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 id="icon-dialog-title" className="text-base font-semibold">
                {glyph.cn}
              </h2>
              <span className="rounded-md border border-line px-2 py-0.5 text-xs text-muted">
                {glyph.group}
              </span>
              {glyph.free && (
                <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                  免费
                </span>
              )}
            </div>
            <p className="mt-1 font-mono text-xs text-muted">icon/{glyph.name}</p>
          </div>

          <div className="flex items-center gap-1.5">
            {canNavigate && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="上一个图标"
                  title="上一个图标 (←)"
                  className="grid size-8 place-items-center rounded-lg border border-line text-muted transition-colors duration-300 ease-spring hover:bg-wash hover:text-ink"
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
                  onClick={goNext}
                  aria-label="下一个图标"
                  title="下一个图标 (→)"
                  className="grid size-8 place-items-center rounded-lg border border-line text-muted transition-colors duration-300 ease-spring hover:bg-wash hover:text-ink"
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
          <div
            ref={previewRef}
            className="grid-paper relative grid min-h-46 place-items-center rounded-lg border border-line-soft bg-wash"
          >
            <div
              style={{ width: size * 2.5, height: size * 2.5, color }}
              className="transition-all duration-300 ease-spring"
            >
              <glyph.El strokeWidth={strokeWidth} tone={tone} className="h-full w-full" />
            </div>

            <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md border border-line bg-white/90 p-1 backdrop-blur">
              {colors.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setColor(c.value)}
                  aria-label={`预览颜色 ${c.label}`}
                  title={c.label}
                  className={`grid size-5 place-items-center rounded transition-transform ${
                    color === c.value ? 'scale-110 ring-1 ring-ink' : 'opacity-75 hover:opacity-100'
                  }`}
                >
                  <span
                    className="size-3 rounded-full"
                    style={{ backgroundColor: c.value }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium text-muted">风格</p>
              <div className="mt-2 flex gap-1.5">
                {(
                  [
                    { id: 'regular', label: '常规' },
                    { id: 'duotone', label: '双色' },
                  ] as const
                ).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    aria-pressed={tone === t.id}
                    className={`flex-1 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors duration-300 ease-spring ${
                      tone === t.id
                        ? 'border-ink bg-ink text-white'
                        : 'border-line text-ink-soft hover:bg-wash'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-muted">尺寸</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    aria-pressed={size === s}
                    className={`tabular rounded-md border px-2 py-1.5 text-xs font-medium transition-colors duration-300 ease-spring ${
                      size === s
                        ? 'border-ink bg-ink text-white'
                        : 'border-line text-ink-soft hover:bg-wash'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-muted">线宽</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {weights.map((w) => (
                  <button
                    key={w.value}
                    type="button"
                    onClick={() => setStrokeWidth(w.value)}
                    aria-pressed={strokeWidth === w.value}
                    className={`tabular rounded-md border px-2 py-1.5 text-xs font-medium transition-colors duration-300 ease-spring ${
                      strokeWidth === w.value
                        ? 'border-ink bg-ink text-white'
                        : 'border-line text-ink-soft hover:bg-wash'
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-lg border border-line">
            <div className="flex items-center justify-between border-b border-line bg-wash px-3 py-2">
              <div className="flex items-center gap-1">
                {(['svg', 'jsx'] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFormat(f)}
                    aria-pressed={format === f}
                    className={`rounded px-2 py-1 font-mono text-xs uppercase transition-colors duration-300 ease-spring ${
                      format === f ? 'bg-white font-medium text-ink shadow-xs' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={onCopyCode}
                className="flex items-center gap-1.5 rounded-md border border-line bg-white px-2.5 py-1 text-xs font-medium text-ink-soft transition-colors duration-300 ease-spring hover:bg-wash"
              >
                {copied === 'code' ? (
                  <IconCheck className="size-3.5 text-accent" />
                ) : (
                  <IconCopy className="size-3.5" />
                )}
                {copied === 'code' ? '已复制' : '复制代码'}
              </button>
            </div>
            <pre className="max-h-32 overflow-auto bg-ink p-3.5 font-mono text-xs leading-relaxed text-[#e8e8e8]">
              <code>{snippet || '…'}</code>
            </pre>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted">
              24 × 24 网格 · <code className="font-mono text-ink-soft">currentColor</code>
            </p>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={onCopyName} className="btn btn-ghost">
                {copied === 'name' ? (
                  <IconCheck className="size-4 text-accent" />
                ) : (
                  <IconCopy className="size-4" />
                )}
                {copied === 'name' ? '已复制名称' : '复制名称'}
              </button>
              <button type="button" onClick={onDownloadSvg} className="btn btn-ghost">
                <IconDownload className="size-4" />
                下载 SVG
              </button>
              <button type="button" onClick={onCopyCode} className="btn btn-primary">
                <IconCopy className="size-4" />
                {format === 'svg' ? '复制 SVG' : '复制 JSX'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
