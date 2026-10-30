import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { IconArrowRight, IconBox, IconGrid, IconLayers, IconSearch } from './art/Icons'
import { allIcons, type FlatGlyph } from '../data/icons'
import { isoScenes } from '../data/iso'
import { illustrationSets } from '../data/illustrations'

type ResultKind = 'page' | 'icon' | 'iso' | 'illustration'

type Result = {
  id: string
  kind: ResultKind
  label: string
  title: string
  subtitle: string
  keywords: string
  to: string
  icon?: FlatGlyph
  scene?: string
  hash?: string
}

const pages: Result[] = [
  { id: 'page-home', kind: 'page', label: '页面', title: '首页', subtitle: '1,826 张画的总览', keywords: 'home 首页 总览', to: '/' },
  { id: 'page-icons', kind: 'page', label: '页面', title: '图标', subtitle: '1,120 个，24×24 网格', keywords: 'icons 图标 搜索', to: '/icons' },
  { id: 'page-iso', kind: 'page', label: '页面', title: '立体画', subtitle: '249 张等距场景', keywords: 'isometric 立体画 场景', to: '/isometric' },
  { id: 'page-illustrations', kind: 'page', label: '页面', title: '插画', subtitle: '457 张，三个系列', keywords: 'illustrations 插画 系列', to: '/illustrations' },
  { id: 'page-free', kind: 'page', label: '页面', title: '免费素材包', subtitle: '194 个图标、45 张插画、71 张立体画', keywords: 'free 免费 素材包 下载', to: '/free' },
  { id: 'page-figma', kind: 'page', label: '页面', title: 'Figma 插件', subtitle: '在 Figma 与 FigJam 里搜索', keywords: 'figma plugin 插件', to: '/figma-plugin' },
  { id: 'page-mcp', kind: 'page', label: '页面', title: 'MCP 服务', subtitle: '让代码助手直接调用素材', keywords: 'mcp claude cursor codex 服务', to: '/mcp' },
  { id: 'page-whats-new', kind: 'page', label: '页面', title: '新画了什么', subtitle: '最近加入的图标与插画', keywords: 'whats new 更新 新画', to: '/whats-new' },
  { id: 'page-about', kind: 'page', label: '页面', title: '使用说明', subtitle: '格式、尺寸与授权范围', keywords: 'about 说明 授权 格式', to: '/about' },
]

const iconResults: Result[] = allIcons.map((glyph) => ({
  id: `icon-${glyph.name}`,
  kind: 'icon',
  label: '图标',
  title: glyph.cn,
  subtitle: `${glyph.name} · ${glyph.group}`,
  keywords: [glyph.name, glyph.cn, ...glyph.keywords, glyph.group, '图标 icon'].join(' '),
  to: '/icons',
  icon: glyph,
}))

const isoResults: Result[] = isoScenes.map((scene) => ({
  id: `iso-${scene.id}`,
  kind: 'iso',
  label: '立体画',
  title: scene.name,
  subtitle: scene.path,
  keywords: [scene.name, scene.path, scene.desc, ...scene.keywords, '立体画 立体 场景 isometric'].join(' '),
  to: '/isometric',
  scene: scene.id,
}))

const illustrationResults: Result[] = illustrationSets.flatMap((set) => [
  {
    id: `set-${set.id}`,
    kind: 'illustration' as const,
    label: '插画',
    title: set.title,
    subtitle: `${set.count} 张 · ${set.slug}`,
    keywords: [set.title, set.slug, set.desc, ...set.keywords, '插画 illustration 系列'].join(' '),
    to: '/illustrations',
    hash: `set-${set.slug}`,
  },
  ...set.pieces.map((piece) => ({
    id: `piece-${set.id}-${piece.id}`,
    kind: 'illustration' as const,
    label: '插画',
    title: piece.cn,
    subtitle: `${set.title} · ${piece.id}`,
    keywords: [piece.cn, set.title, ...piece.keywords, '插画 illustration'].join(' '),
    to: '/illustrations',
    hash: `${set.slug}-${piece.id}`,
  })),
])

const popularIcons = ['calendar', 'search', 'user', 'mail', 'chart', 'cart', 'shield', 'sparkle']
  .map((name) => iconResults.find((item) => item.id === `icon-${name}`))
  .filter((item): item is Result => Boolean(item))

const allResults = [...pages, ...iconResults, ...isoResults, ...illustrationResults]

const categoryTabs: { id: 'all' | ResultKind; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'icon', label: '图标' },
  { id: 'iso', label: '立体画' },
  { id: 'illustration', label: '插画' },
  { id: 'page', label: '页面' },
]

function searchResults(query: string, category: 'all' | ResultKind): Result[] {
  const q = query.trim().toLowerCase()
  const pool = category === 'all' ? allResults : allResults.filter((r) => r.kind === category)

  if (!q) {
    if (category === 'all') return [...pages, ...popularIcons]
    return pool.slice(0, 24)
  }

  const tokens = q.split(/\s+/)

  return pool
    .map((item) => {
      const title = item.title.toLowerCase()
      const haystack = `${title} ${item.subtitle.toLowerCase()} ${item.keywords.toLowerCase()}`
      let score = 0

      if (title === q) score = 100
      else if (title.startsWith(q)) score = 82
      else if (title.includes(q)) score = 64
      else if (item.keywords.toLowerCase().includes(q)) score = 44
      else if (item.subtitle.toLowerCase().includes(q)) score = 24
      else if (tokens.every((token) => haystack.includes(token))) score = 12

      return { item, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, 'zh-CN'))
    .slice(0, 28)
    .map((entry) => entry.item)
}

const kindIcons = {
  page: IconArrowRight,
  icon: IconGrid,
  iso: IconBox,
  illustration: IconLayers,
} as const

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<'all' | ResultKind>('all')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const closeHandler = useRef(onClose)
  closeHandler.current = onClose

  const results = useMemo(() => searchResults(query, category), [query, category])

  useEffect(() => {
    if (!open) return
    setQuery('')
    setCategory('all')
    setActive(0)
    const previous = document.activeElement as HTMLElement | null
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    window.setTimeout(() => inputRef.current?.focus(), 20)

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeHandler.current()
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query, category])

  useEffect(() => {
    const selected = listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)
    selected?.scrollIntoView({ block: 'nearest' })
  }, [active])

  if (!open) return null

  const run = (item: Result) => {
    closeHandler.current()
    if (item.kind === 'icon' && item.icon) {
      navigate({ to: '/icons', search: { icon: item.icon.name } })
      return
    }
    if (item.scene) {
      navigate({ to: '/isometric', search: { scene: item.scene } })
      return
    }
    if (item.hash) {
      navigate({ to: item.to, hash: item.hash })
      return
    }
    navigate({ to: item.to })
  }

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((index) => (results.length === 0 ? 0 : (index + 1) % results.length))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((index) => (results.length === 0 ? 0 : (index - 1 + results.length) % results.length))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      const item = results[active]
      if (item) run(item)
    } else if (event.key === 'Tab') {
      event.preventDefault()
      const nextIdx = (categoryTabs.findIndex((t) => t.id === category) + 1) % categoryTabs.length
      setCategory(categoryTabs[nextIdx].id)
    }
  }

  return (
    <div className="fixed inset-0 z-90 flex items-start justify-center px-4 pt-[10dvh]">
      <button
        type="button"
        aria-label="关闭搜索"
        onClick={onClose}
        className="fixed inset-0 h-full w-full cursor-default bg-ink/40 backdrop-blur-[2px]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="站内搜索"
        className="modal-in relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-white shadow-[0_8px_16px_rgba(19,18,9,0.06),0_32px_90px_-24px_rgba(19,18,9,0.4)]"
      >
        <div className="flex items-center gap-3 border-b border-line px-4 py-3.5">
          <IconSearch className="size-4 shrink-0 text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="搜索 48 个示例图标、12 个立体场景、12 幅插画或页面…"
            aria-label="搜索内容"
            className="w-full bg-transparent text-base outline-none placeholder:text-muted"
          />
          <kbd className="shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-xs text-muted">
            esc
          </kbd>
        </div>

        <div className="flex items-center gap-1.5 border-b border-line-soft bg-wash/60 px-3 py-2">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setCategory(tab.id)
                inputRef.current?.focus()
              }}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-300 ease-spring ${
                category === tab.id
                  ? 'bg-ink text-white'
                  : 'text-muted hover:bg-white hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <span className="ml-auto hidden font-mono text-xs text-muted sm:inline">
            Tab 切换分类
          </span>
        </div>

        <div ref={listRef} className="max-h-[50dvh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="px-3 py-12 text-center">
              <p className="text-sm font-medium text-ink-soft">没有找到匹配的内容</p>
              <p className="mt-1.5 text-xs text-muted">
                试试「日历」「购物」「服务器」「数据库」或「授权」。
              </p>
            </div>
          ) : (
            results.map((item, index) => {
              const KindIcon = kindIcons[item.kind]
              return (
                <button
                  key={item.id}
                  type="button"
                  data-index={index}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => run(item)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-300 ease-spring ${
                    index === active ? 'bg-wash' : 'hover:bg-wash/70'
                  }`}
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-md border border-line bg-white text-ink-soft">
                    {item.icon ? (
                      <item.icon.El className="size-4" strokeWidth={1.5} />
                    ) : (
                      <KindIcon className="size-4" strokeWidth={1.5} />
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-ink">
                      {item.title}
                    </span>
                    <span className="block truncate text-xs text-muted">{item.subtitle}</span>
                  </span>
                  <span className="shrink-0 rounded-md border border-line bg-white px-2 py-0.5 text-xs text-muted">
                    {item.label}
                  </span>
                </button>
              )
            })
          )}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-line bg-wash px-4 py-2.5 text-xs text-muted">
          <span className="flex items-center gap-3">
            <span>
              <kbd className="font-mono">↑↓</kbd> 选择
            </span>
            <span>
              <kbd className="font-mono">↵</kbd> 打开
            </span>
            <span className="hidden sm:inline">
              <kbd className="font-mono">esc</kbd> 关闭
            </span>
          </span>
          <span className="tabular">{query ? `${results.length} 个结果` : '常用入口'}</span>
        </div>
      </div>
    </div>
  )
}
