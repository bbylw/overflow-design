import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import {
  IconCalendar,
  IconMail,
  IconFolder,
  IconChart,
  IconSearch,
  IconPen,
  type IconTone,
} from '../components/art/Icons'
import { PageIntro, SectionTitle } from '../components/ui/Page'
import { IconDialog } from '../components/ui/IconDialog'
import { Reveal } from '../components/ui/Reveal'
import { allIcons, findGlyph, iconGroups } from '../data/icons'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/icons')({
  validateSearch: (search: Record<string, unknown>): { q?: string; icon?: string } => ({
    q: typeof search.q === 'string' ? search.q : undefined,
    icon: typeof search.icon === 'string' ? search.icon : undefined,
  }),
  head: () =>
    seo(
      '图标 · 1,120 个手绘图标 | Overflow Design 中文站',
      '1,120 个手绘图标，常规与双色两种风格，画在 24×24 的格子上。按画面内容搜索，查看并下载 SVG 与 JSX 代码。',
    ),
  component: IconsPage,
})

function IconsPage() {
  const search = Route.useSearch()
  const navigate = useNavigate({ from: '/icons' })
  const [q, setQ] = useState(search.q ?? '')
  const [group, setGroup] = useState('all')
  const [tone, setTone] = useState<IconTone>('regular')
  const [strokeWidth, setStrokeWidth] = useState(1.5)
  const [freeOnly, setFreeOnly] = useState(false)

  useEffect(() => {
    setQ(search.q ?? '')
  }, [search.q])

  const normalized = q.trim().toLowerCase()
  const filtered = iconGroups
    .filter((g) => group === 'all' || g.id === group)
    .map((g) => ({
      ...g,
      items: g.items
        .filter((i) => !freeOnly || i.free)
        .filter(
          (i) =>
            normalized === '' ||
            i.cn.includes(normalized) ||
            i.name.includes(normalized) ||
            i.keywords.some((keyword) => keyword.includes(normalized)),
        )
        .map((item) => ({ ...item, group: g.title, groupId: g.id })),
    }))
    .filter((g) => g.items.length > 0)

  const flatFiltered = filtered.flatMap((g) => g.items)
  const shownCount = flatFiltered.length
  const selected = findGlyph(search.icon)

  const openIcon = (name: string) => {
    navigate({ search: (prev) => ({ ...prev, icon: name }), replace: true })
  }

  const closeIcon = () => {
    navigate({ search: (prev) => ({ ...prev, icon: undefined }), replace: true })
  }

  return (
    <>
      <PageIntro
        eyebrow="图标"
        title="1,120 个图标，画在 24×24 的格子上"
        lead="常规与双色两种风格。线条粗细一致，圆角收笔，混在一排里也不会打架。下面展示 48 个可交互示例，切换风格或线宽即可实时预览并导出 SVG 与 JSX。"
        facts={[
          { k: '总数', v: '1,120 个' },
          { k: '风格', v: '常规 / 双色' },
          { k: '网格', v: '24 × 24' },
          { k: '格式', v: 'Figma / SVG / PNG' },
        ]}
      />

      <section className="border-b border-line">
        <div className="wrap pt-12 pb-16">
          <SectionTitle
            title="在线预览与导出"
            note="点击任意图标打开详情，支持尺寸、线宽、双色切换，以及复制 JSX 或下载 SVG 文件。"
          />

          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 sm:max-w-sm">
              <IconSearch className="size-4 shrink-0 text-muted" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="试试「日历」「购物」「数据库」「安全」"
                aria-label="搜索图标"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
              />
              {q && (
                <button
                  type="button"
                  onClick={() => setQ('')}
                  className="shrink-0 text-xs font-medium text-muted transition-colors hover:text-ink"
                >
                  清除
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 rounded-lg border border-line bg-wash p-1">
                <button
                  type="button"
                  onClick={() => setTone('regular')}
                  aria-pressed={tone === 'regular'}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-300 ease-spring ${
                    tone === 'regular' ? 'bg-white text-ink shadow-xs' : 'text-muted hover:text-ink'
                  }`}
                >
                  常规
                </button>
                <button
                  type="button"
                  onClick={() => setTone('duotone')}
                  aria-pressed={tone === 'duotone'}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-300 ease-spring ${
                    tone === 'duotone' ? 'bg-white text-ink shadow-xs' : 'text-muted hover:text-ink'
                  }`}
                >
                  双色
                </button>
              </div>

              <div className="flex items-center gap-1 rounded-lg border border-line bg-wash p-1">
                {[
                  { label: '细 1.25', value: 1.25 },
                  { label: '常规 1.5', value: 1.5 },
                  { label: '粗 2', value: 2 },
                ].map((w) => (
                  <button
                    key={w.value}
                    type="button"
                    onClick={() => setStrokeWidth(w.value)}
                    aria-pressed={strokeWidth === w.value}
                    className={`tabular rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-300 ease-spring ${
                      strokeWidth === w.value
                        ? 'bg-white text-ink shadow-xs'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setFreeOnly((v) => !v)}
                aria-pressed={freeOnly}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-300 ease-spring ${
                  freeOnly
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-line bg-white text-ink-soft hover:bg-wash'
                }`}
              >
                仅看免费
              </button>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-2">
            <FilterChip
              active={group === 'all'}
              onClick={() => setGroup('all')}
              label="全部"
              count={allIcons.length}
            />
            {iconGroups.map((g) => (
              <FilterChip
                key={g.id}
                active={group === g.id}
                onClick={() => setGroup(g.id)}
                label={g.title}
                count={g.items.length}
              />
            ))}
            <span className="tabular ml-auto text-xs text-muted">
              显示 {shownCount} / {allIcons.length} 个示例
            </span>
          </div>

          {filtered.length === 0 && (
            <div className="card py-14 text-center">
              <p className="text-sm font-medium text-ink-soft">
                没有匹配的图标。试试更短的关键词，或者重置筛选条件。
              </p>
              <button
                type="button"
                onClick={() => {
                  setQ('')
                  setGroup('all')
                  setFreeOnly(false)
                }}
                className="btn btn-ghost mt-4"
              >
                清除全部筛选
              </button>
            </div>
          )}

          <div className="space-y-10">
            {filtered.map((g) => (
              <Reveal key={g.title}>
                <div>
                  <div className="mb-3 flex items-baseline gap-3">
                    <h3 className="text-base font-semibold">{g.title}</h3>
                    <span className="text-xs text-muted">{g.note}</span>
                    <span className="tabular ml-auto text-xs text-muted">{g.items.length}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                    {g.items.map((it) => (
                      <button
                        key={it.name}
                        type="button"
                        onClick={() => openIcon(it.name)}
                        title={`${it.cn} · ${it.name}`}
                        aria-label={`查看 ${it.cn} 图标`}
                        className="group card card-hover relative flex flex-col items-center gap-2.5 px-2 py-4"
                      >
                        {it.free && (
                          <span className="absolute top-2 right-2 size-1.5 rounded-full bg-accent" title="包含在免费包中" />
                        )}
                        <it.El
                          className="size-6 text-ink transition-transform duration-300 ease-spring group-hover:-translate-y-0.5 group-hover:scale-110"
                          strokeWidth={strokeWidth}
                          tone={tone}
                        />
                        <span className="text-xs text-muted transition-colors group-hover:text-ink">
                          {it.cn}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap py-16">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="card p-6 md:p-8">
                <h3 className="text-lg font-semibold">三种线宽，同一套比例</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  完整套件提供常规与双色两种风格。这里用同一组线稿对比线宽变化；线宽变了，画面重心与比例不变，混在一排里也不会跳。
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: '细', value: 1.25 },
                    { label: '常规', value: 1.5 },
                    { label: '加粗', value: 2 },
                  ].map((weight) => (
                    <div key={weight.value} className="rounded-lg border border-line p-4">
                      <div className="grid grid-cols-4 gap-2">
                        {[IconCalendar, IconMail, IconFolder, IconChart].map((I, i) => (
                          <div
                            key={i}
                            className="grid aspect-square place-items-center rounded bg-wash"
                          >
                            <I className="size-5" strokeWidth={weight.value} tone={tone} />
                          </div>
                        ))}
                      </div>
                      <p className="tabular mt-2.5 text-center text-xs text-muted">
                        {weight.label} {weight.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6 md:p-8">
                <h3 className="text-lg font-semibold">尺寸与颜色自适应</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  SVG 默认使用{' '}
                  <code className="rounded bg-wash px-1.5 py-0.5 font-mono text-xs">
                    currentColor
                  </code>
                  ，主线条颜色跟随周围文字变化，切换深浅主题无需替换文件。
                </p>
                <div className="mt-6 flex items-end justify-between gap-4 rounded-lg border border-line p-4">
                  {[16, 20, 24, 32, 48].map((s) => (
                    <div key={s} className="flex flex-col items-center gap-2">
                      <span style={{ width: s, height: s }} className="grid place-items-center">
                        <IconPen className="h-full w-full text-ink" strokeWidth={strokeWidth} tone={tone} />
                      </span>
                      <span className="tabular text-xs text-muted">{s}px</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {selected && (
        <IconDialog
          glyph={selected}
          initialTone={tone}
          initialStrokeWidth={strokeWidth}
          allGlyphs={flatFiltered.length > 0 ? flatFiltered : allIcons}
          onSelectGlyph={openIcon}
          onClose={closeIcon}
        />
      )}
    </>
  )
}

function FilterChip({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean
  onClick: () => void
  label: string
  count: number
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-300 ease-spring ${
        active
          ? 'border-ink bg-ink text-white'
          : 'border-line bg-white text-ink-soft hover:bg-wash'
      }`}
    >
      {label}
      <span className={`tabular ml-1.5 text-xs ${active ? 'text-white/60' : 'text-muted'}`}>
        {count}
      </span>
    </button>
  )
}
