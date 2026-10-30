import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { IsoMotionPipeline, IsoMotionScene } from '../components/art/Isometric'
import { PageIntro, SectionTitle, Callout } from '../components/ui/Page'
import { ArtPreviewDialog } from '../components/ui/ArtPreviewDialog'
import { Reveal } from '../components/ui/Reveal'
import { showToast } from '../components/ui/Toast'
import { isoScenes } from '../data/iso'
import { copyText } from '../lib/clipboard'
import { seo } from '../lib/seo'
import {
  IconArrowRight,
  IconCheck,
  IconCopy,
  IconPlay,
  IconPointer,
  IconRefresh,
  IconSearch,
  IconWand,
} from '../components/art/Icons'

export const Route = createFileRoute('/isometric')({
  validateSearch: (search: Record<string, unknown>): { scene?: string } => ({
    scene: typeof search.scene === 'string' ? search.scene : undefined,
  }),
  head: () =>
    seo(
      '立体画 · 249 张等距场景 | Overflow Design 中文站',
      '249 张手绘等距立体场景，71 张免费静帧。用于产品功能、架构图和页面顶部，提供 SVG、PNG 与代码片段。',
    ),
  component: IsometricPage,
})

type MotionMode = 'pointer' | 'auto' | 'inview'
type PlaygroundSceneId = 'cluster' | 'pipeline'

function makeSnippet(mode: MotionMode, sceneId: PlaygroundSceneId) {
  return `<div class="iso-scene" data-scene="${sceneId}" data-motion="${mode}">
  <svg viewBox="0 0 320 220">…</svg>
</div>
<script src="/iso-scene.js" defer></script>`
}

function IsometricPage() {
  const search = Route.useSearch()
  const navigate = useNavigate({ from: '/isometric' })
  const [filter, setFilter] = useState<'all' | 'free' | 'pro'>('all')
  const [q, setQ] = useState('')
  const [monochrome, setMonochrome] = useState(false)
  const [playgroundMode, setPlaygroundMode] = useState<MotionMode>('pointer')
  const [playgroundScene, setPlaygroundScene] = useState<PlaygroundSceneId>('cluster')

  const normalized = q.trim().toLowerCase()
  const scenes = isoScenes
    .filter((scene) => (filter === 'all' ? true : filter === 'free' ? scene.free : !scene.free))
    .filter(
      (scene) =>
        normalized === '' ||
        scene.name.toLowerCase().includes(normalized) ||
        scene.path.toLowerCase().includes(normalized) ||
        scene.desc.toLowerCase().includes(normalized) ||
        scene.keywords.some((k) => k.toLowerCase().includes(normalized)),
    )

  const selectedIndex = isoScenes.findIndex((scene) => scene.id === search.scene)
  const selected = selectedIndex >= 0 ? isoScenes[selectedIndex] : undefined

  const openScene = (id: string) => {
    navigate({ search: { scene: id }, replace: true })
  }

  const closeScene = () => {
    navigate({ search: {}, replace: true })
  }

  const goPrev = () => {
    if (selectedIndex < 0) return
    const prev = isoScenes[(selectedIndex - 1 + isoScenes.length) % isoScenes.length]
    openScene(prev.id)
  }

  const goNext = () => {
    if (selectedIndex < 0) return
    const next = isoScenes[(selectedIndex + 1) % isoScenes.length]
    openScene(next.id)
  }

  return (
    <>
      <PageIntro
        eyebrow="立体画"
        title="249 张立体画，71 张免费"
        lead="等距视角的手绘场景，用于产品功能介绍、架构图和页面顶部的视觉。静帧以 SVG 提供，分辨率无关；会动的那部分片段可以直接贴进你自己的页面。"
        facts={[
          { k: '总数', v: '249 张' },
          { k: '免费', v: '71 张静帧' },
          { k: '格式', v: 'SVG / PNG / 代码片段' },
          { k: '视角', v: '等距 30°' },
        ]}
      />

      <section className="border-b border-line">
        <div className="wrap pt-12 pb-16">
          <SectionTitle
            title="等距静帧画廊"
            note="以下展示 12 张代表场景。点击任意一张查看大图、切换淡彩或纯线稿并导出 SVG。"
            action={
              <Link
                to="/icons"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                也看看图标 <IconArrowRight className="size-4" />
              </Link>
            }
          />

          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <SceneFilter
                active={filter === 'all'}
                onClick={() => setFilter('all')}
                label="全部"
                count={isoScenes.length}
              />
              <SceneFilter
                active={filter === 'free'}
                onClick={() => setFilter('free')}
                label="免费"
                count={isoScenes.filter((scene) => scene.free).length}
              />
              <SceneFilter
                active={filter === 'pro'}
                onClick={() => setFilter('pro')}
                label="完整版"
                count={isoScenes.filter((scene) => !scene.free).length}
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-1.5">
                <IconSearch className="size-4 text-muted" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="搜索场景，如「机箱」「流水线」"
                  aria-label="搜索立体场景"
                  className="w-44 bg-transparent text-xs outline-none placeholder:text-muted sm:w-52"
                />
              </div>

              <div className="flex items-center gap-1 rounded-lg border border-line bg-wash p-1">
                <button
                  type="button"
                  onClick={() => setMonochrome(false)}
                  aria-pressed={!monochrome}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-300 ease-spring ${
                    !monochrome ? 'bg-white text-ink shadow-xs' : 'text-muted hover:text-ink'
                  }`}
                >
                  淡彩点缀
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
            </div>
          </div>

          {scenes.length === 0 ? (
            <div className="card py-14 text-center">
              <p className="text-sm font-medium text-ink-soft">没有匹配的立体场景。</p>
              <button
                type="button"
                onClick={() => {
                  setQ('')
                  setFilter('all')
                }}
                className="btn btn-ghost mt-4"
              >
                重置筛选
              </button>
            </div>
          ) : (
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {scenes.map((scene) => (
                  <button
                    key={scene.path}
                    id={`scene-${scene.id}`}
                    type="button"
                    onClick={() => openScene(scene.id)}
                    className="card card-hover group overflow-hidden text-left"
                    aria-label={`查看 ${scene.name} 立体画`}
                  >
                    <div
                      className={`grid-paper flex aspect-4/3 items-center justify-center overflow-hidden bg-wash p-3 ${
                        monochrome ? 'art-monochrome' : ''
                      }`}
                    >
                      <div className="h-full w-full transition-transform duration-500 ease-spring group-hover:scale-105">
                        {scene.art}
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-3 border-t border-line-soft p-4">
                      <div>
                        <p className="text-sm font-semibold">{scene.name}</p>
                        <p className="mt-0.5 font-mono text-xs text-muted">{scene.path}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-medium ${
                          scene.free
                            ? 'bg-accent-soft text-accent'
                            : 'border border-line text-muted'
                        }`}
                      >
                        {scene.free ? '免费' : '完整版'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-b border-line bg-wash">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">动态场景</p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">三种驱动方式，直接贴进页面</h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                会动的场景以一段轻量 HTML 片段交付，贴进页面就能用：跟随指针视差、自动循环播放，或者进入视口时展开。不依赖前端框架，无需额外安装包。
              </p>
              <div className="mt-6 space-y-2.5">
                {[
                  { id: 'pointer' as const, label: '跟随指针的视差（三层景深）' },
                  { id: 'auto' as const, label: '平滑自动循环播放' },
                  { id: 'inview' as const, label: '滚动进入视口时启动' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPlaygroundMode(item.id)}
                    className={`flex w-full items-center gap-2.5 rounded-lg border px-4 py-2.5 text-left text-sm transition-colors duration-300 ease-spring ${
                      playgroundMode === item.id
                        ? 'border-ink bg-white font-semibold text-ink shadow-xs'
                        : 'border-line bg-white/60 text-ink-soft hover:bg-white'
                    }`}
                  >
                    <IconPlay className="size-4 text-accent" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-wash/60 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setPlaygroundScene('cluster')}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                      playgroundScene === 'cluster'
                        ? 'bg-ink text-white'
                        : 'text-muted hover:bg-white hover:text-ink'
                    }`}
                  >
                    场景 A · 节点集群
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlaygroundScene('pipeline')}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                      playgroundScene === 'pipeline'
                        ? 'bg-ink text-white'
                        : 'text-muted hover:bg-white hover:text-ink'
                    }`}
                  >
                    场景 B · 构建流水线
                  </button>
                </div>
                <span className="font-mono text-xs text-muted">实时交互预览</span>
              </div>

              <IsoPlayground
                mode={playgroundMode}
                scene={playgroundScene}
                onModeChange={setPlaygroundMode}
              />

              <div className="border-t border-line">
                <SnippetBlock mode={playgroundMode} sceneId={playgroundScene} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap py-16">
          <Callout
            title="要按你的产品功能定制一套？"
            body="把你的产品架构或核心工作流画成会动的等距场景，适配你的品牌色。先试做一个场景，合适再做三个一组。"
          >
            <a
              href="https://www.overflow.design/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <IconWand className="size-4" />
              前往原站了解定制
            </a>
          </Callout>
        </div>
      </section>

      {selected && (
        <ArtPreviewDialog
          title={selected.name}
          subtitle={selected.path}
          art={selected.art}
          tag={{ label: selected.free ? '免费静帧' : '完整版', accent: selected.free }}
          note={selected.desc}
          initialMonochrome={monochrome}
          onPrev={goPrev}
          onNext={goNext}
          footer={
            <a
              href="https://www.overflow.design/isometric/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              在原站查看
            </a>
          }
          onClose={closeScene}
        />
      )}
    </>
  )
}

function SceneFilter({
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

function IsoPlayground({
  mode,
  scene,
  onModeChange,
}: {
  mode: MotionMode
  scene: PlaygroundSceneId
  onModeChange: (mode: MotionMode) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inViewStep, setInViewStep] = useState(0)

  const setVars = (x: number, y: number) => {
    ref.current?.style.setProperty('--mx', x.toFixed(3))
    ref.current?.style.setProperty('--my', y.toFixed(3))
  }

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches && mode === 'pointer') {
      onModeChange('auto')
    }
  }, [mode, onModeChange])

  useEffect(() => {
    if (mode === 'pointer') {
      setVars(0, 0)
      return
    }

    if (mode === 'inview') {
      setVars(-0.95, 0.75)
      const timer = setTimeout(() => {
        setVars(0, 0)
      }, 180)
      return () => clearTimeout(timer)
    }

    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = (now - start) / 1000
      setVars(Math.sin(t * 1.05) * 0.9, Math.cos(t * 0.82) * 0.6)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [mode, inViewStep, scene])

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (mode !== 'pointer') return
    const rect = event.currentTarget.getBoundingClientRect()
    setVars(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      ((event.clientY - rect.top) / rect.height) * 2 - 1,
    )
  }

  return (
    <div
      ref={ref}
      className="iso-parallax grid-paper relative aspect-16/10 overflow-hidden bg-white"
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        if (mode === 'pointer') setVars(0, 0)
      }}
    >
      <div className="absolute inset-0 p-4 sm:p-6">
        {scene === 'cluster' ? (
          <IsoMotionScene className="h-full w-full" />
        ) : (
          <IsoMotionPipeline className="h-full w-full" />
        )}
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-1 rounded-lg border border-line bg-white/90 p-1 shadow-xs backdrop-blur">
        <button
          type="button"
          onClick={() => onModeChange('pointer')}
          aria-pressed={mode === 'pointer'}
          className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors ${
            mode === 'pointer' ? 'bg-ink text-white' : 'text-muted hover:text-ink'
          }`}
        >
          <IconPointer className="size-3.5" />
          指针
        </button>
        <button
          type="button"
          onClick={() => onModeChange('auto')}
          aria-pressed={mode === 'auto'}
          className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors ${
            mode === 'auto' ? 'bg-ink text-white' : 'text-muted hover:text-ink'
          }`}
        >
          <IconPlay className="size-3.5" />
          自动
        </button>
        <button
          type="button"
          onClick={() => {
            onModeChange('inview')
            setInViewStep((s) => s + 1)
          }}
          aria-pressed={mode === 'inview'}
          className={`flex items-center gap-1 rounded px-2 py-1 text-xs font-medium transition-colors ${
            mode === 'inview' ? 'bg-ink text-white' : 'text-muted hover:text-ink'
          }`}
        >
          <IconRefresh className="size-3.5" />
          视口触发
        </button>
      </div>

      <span className="pointer-events-none absolute bottom-3 left-3 rounded bg-white/85 px-2 py-0.5 text-xs text-muted backdrop-blur">
        {mode === 'pointer'
          ? '移动鼠标查看三层视差'
          : mode === 'auto'
            ? '自动循环视差运行中'
            : '已触发进入视口归位动画（点击右上角重播）'}
      </span>
    </div>
  )
}

function SnippetBlock({
  mode,
  sceneId,
}: {
  mode: MotionMode
  sceneId: PlaygroundSceneId
}) {
  const [copied, setCopied] = useState(false)
  const snippet = makeSnippet(mode, sceneId)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1600)
    return () => clearTimeout(timer)
  }, [copied])

  const copy = async () => {
    if (await copyText(snippet)) {
      setCopied(true)
      showToast('已复制立体场景嵌入代码')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between border-b border-line bg-wash px-4 py-2">
        <span className="font-mono text-xs text-muted">scene.html · 嵌入代码</span>
        <button
          type="button"
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md border border-line bg-white px-2.5 py-1 text-xs font-medium text-ink-soft transition-colors hover:bg-wash"
        >
          {copied ? <IconCheck className="size-3.5 text-accent" /> : <IconCopy className="size-3.5" />}
          {copied ? '已复制' : '复制'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-ink-soft">
        {snippet}
      </pre>
    </div>
  )
}
