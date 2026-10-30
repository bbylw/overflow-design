import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { PageIntro, SectionTitle } from '../components/ui/Page'
import { ArtPreviewDialog } from '../components/ui/ArtPreviewDialog'
import { Reveal } from '../components/ui/Reveal'
import {
  illustrationSets,
  type IllustrationPiece,
  type IllustrationSet,
} from '../data/illustrations'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/illustrations')({
  head: () =>
    seo(
      '插画 · 457 张手绘插画 | Overflow Design 中文站',
      '457 张手绘插画，分为办公室、通用与电子商务三个系列。为文档、Notion 页面与演示而画，提供 Figma、SVG 与 PNG。',
    ),
  component: IllustrationsPage,
})

type Selected = { set: IllustrationSet; piece: IllustrationPiece }

function IllustrationsPage() {
  const [activeSet, setActiveSet] = useState<string>('all')
  const [monochrome, setMonochrome] = useState(false)
  const [freeOnly, setFreeOnly] = useState(false)
  const [selected, setSelected] = useState<Selected | null>(null)

  const sets = illustrationSets
    .filter((set) => activeSet === 'all' || set.id === activeSet)
    .map((set) => ({
      ...set,
      pieces: set.pieces.filter((p) => !freeOnly || p.free),
    }))
    .filter((set) => set.pieces.length > 0)

  const allEntries: Selected[] = sets.flatMap((set) =>
    set.pieces.map((piece) => ({ set, piece })),
  )

  const selectedIdx = selected
    ? allEntries.findIndex(
        (e) => e.set.id === selected.set.id && e.piece.id === selected.piece.id,
      )
    : -1

  const goPrev = () => {
    if (selectedIdx < 0 || allEntries.length === 0) return
    setSelected(allEntries[(selectedIdx - 1 + allEntries.length) % allEntries.length])
  }

  const goNext = () => {
    if (selectedIdx < 0 || allEntries.length === 0) return
    setSelected(allEntries[(selectedIdx + 1) % allEntries.length])
  }

  return (
    <>
      <PageIntro
        eyebrow="插画"
        title="457 张插画，留白比线条更用力"
        lead="三个系列：办公室、通用、电子商务。每套两种风格，画面里永远只留一个人、一个动作、一件要说的事。为文档、页面和演示而生。"
        facts={[
          { k: '总数', v: '457 张' },
          { k: '系列', v: '3 套' },
          { k: '风格', v: '线稿 / 线稿加淡彩' },
          { k: '格式', v: 'Figma / SVG / PNG' },
        ]}
      />

      <div className="sticky top-17 z-30 border-b border-line bg-white/90 backdrop-blur-md">
        <div className="wrap flex flex-wrap items-center justify-between gap-2 py-3">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <SetFilter
              active={activeSet === 'all'}
              onClick={() => setActiveSet('all')}
              label="全部系列"
              count={illustrationSets.reduce((total, set) => total + set.count, 0)}
            />
            {illustrationSets.map((set) => (
              <SetFilter
                key={set.id}
                active={activeSet === set.id}
                onClick={() => setActiveSet(set.id)}
                label={set.title}
                count={set.count}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-lg border border-line bg-wash p-1">
              <button
                type="button"
                onClick={() => setMonochrome(false)}
                aria-pressed={!monochrome}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-300 ease-spring ${
                  !monochrome ? 'bg-white text-ink shadow-xs' : 'text-muted hover:text-ink'
                }`}
              >
                线稿加淡彩
              </button>
              <button
                type="button"
                onClick={() => setMonochrome(true)}
                aria-pressed={monochrome}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-300 ease-spring ${
                  monochrome ? 'bg-white text-ink shadow-xs' : 'text-muted hover:text-ink'
                }`}
              >
                纯线稿
              </button>
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
      </div>

      {sets.map((set, idx) => (
        <section
          key={set.slug}
          id={`set-${set.slug}`}
          className={`scroll-mt-32 border-b border-line ${idx % 2 === 0 ? '' : 'bg-wash'}`}
        >
          <div className="wrap py-16">
            <Reveal>
              <SectionTitle
                title={set.title}
                note={`${set.count} 张插画 · 两种风格 · ${set.slug}`}
              />
              <p className="-mt-4 mb-8 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {set.desc}
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {set.pieces.map((piece) => (
                  <button
                    key={`${set.slug}-${piece.id}`}
                    id={`${set.slug}-${piece.id}`}
                    type="button"
                    onClick={() => setSelected({ set, piece })}
                    className="card card-hover group scroll-mt-32 overflow-hidden text-left"
                    aria-label={`查看插画 ${piece.cn}`}
                  >
                    <div
                      className={`flex aspect-4/3 items-center justify-center overflow-hidden bg-white p-3 ${
                        monochrome ? 'art-monochrome' : ''
                      }`}
                    >
                      <div className="h-full w-full transition-transform duration-500 ease-spring group-hover:scale-105">
                        {piece.art}
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 border-t border-line-soft px-4 py-3">
                      <div>
                        <p className="text-sm font-semibold">{piece.cn}</p>
                        <p className="font-mono text-xs text-muted">{set.slug}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-medium ${
                          piece.free
                            ? 'bg-accent-soft text-accent'
                            : 'border border-line text-muted'
                        }`}
                      >
                        {piece.free ? '免费' : '完整版'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section>
        <div className="wrap py-16">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  t: '一种笔画',
                  b: '所有插画共用同一支笔：一样的线宽、一样的转角、一样的留白节奏。整套放在一起像是一个人画的，因为它们确实是一个人画的。',
                },
                {
                  t: '一个焦点',
                  b: '每张画只说一件事。画面里没有多余的背景装饰，所以放在卡片、文档或演示里都能立刻看懂。',
                },
                {
                  t: '两种风格',
                  b: '纯线稿用于克制的地方；加一层淡彩的版本用于需要标记重点的地方。同一张画，两种都是现成的。',
                },
              ].map((c) => (
                <div key={c.t} className="card p-6">
                  <h3 className="text-base font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {selected && (
        <ArtPreviewDialog
          title={selected.piece.cn}
          subtitle={`${selected.set.slug}/${selected.piece.id}`}
          art={selected.piece.art}
          tag={{
            label: selected.piece.free ? `${selected.set.title} · 免费` : selected.set.title,
            accent: Boolean(selected.piece.free),
          }}
          note={`${selected.set.title}：${selected.set.desc}`}
          initialMonochrome={monochrome}
          onPrev={goPrev}
          onNext={goNext}
          footer={
            <a
              href={`https://www.overflow.design/notion-illustrations/${selected.set.slug}/`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              在原站查看
            </a>
          }
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}

function SetFilter({
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
      className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-300 ease-spring ${
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
