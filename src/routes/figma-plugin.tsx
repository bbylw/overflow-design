import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { PageIntro } from '../components/ui/Page'
import { Reveal } from '../components/ui/Reveal'
import { showToast } from '../components/ui/Toast'
import { IconSearch, IconCopy, IconPen, type IconTone } from '../components/art/Icons'
import { allIcons, type FlatGlyph } from '../data/icons'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/figma-plugin')({
  head: () =>
    seo(
      'Figma 插件 · 1,826 张画在一个面板里 | Overflow Design 中文站',
      'Overflow 插件把全部图标、插画与立体画带进 Figma 和 FigJam。按画面内容搜索，点击或拖到画布上，免费部分任何人可用。',
    ),
  component: FigmaPluginPage,
})

const steps = [
  {
    n: '1',
    t: '从 Figma 社区安装',
    b: '在 Figma 与 FigJam 中免费使用，任何方案都可以。不用复制大文件，也不用把组件库发布出去。',
  },
  {
    n: '2',
    t: '按它画的东西搜索',
    b: '输入「日历」「安全」「购物」「数据库」。复数、从别处粘贴来的组件名、小的拼写错误，都能找到。',
  },
  {
    n: '3',
    t: '点击或拖到画布',
    b: '点击会落在你选中的画框里，拖动会放在松手的位置，自动布局容器里也能直接放进去。常规或双色，尺寸随你挑。',
  },
]

const panelIcons = allIcons.slice(0, 12)

function FigmaPluginPage() {
  const [q, setQ] = useState('')
  const [tone, setTone] = useState<IconTone>('duotone')
  const [freeOnly, setFreeOnly] = useState(false)
  const [canvasSize, setCanvasSize] = useState<16 | 20 | 24>(20)
  const [inserted, setInserted] = useState<FlatGlyph>(panelIcons[0])

  const normalized = q.trim().toLowerCase()
  const pool = normalized ? allIcons : panelIcons
  const shown = pool
    .filter((item) => !freeOnly || item.free)
    .filter(
      (item) =>
        normalized === '' ||
        item.cn.includes(normalized) ||
        item.name.includes(normalized) ||
        item.keywords.some((k) => k.includes(normalized)),
    )
    .slice(0, 12)

  const handleInsert = (glyph: FlatGlyph) => {
    setInserted(glyph)
    showToast(`已将「${glyph.cn}」插入右侧 Auto Layout 画框`)
  }

  return (
    <>
      <PageIntro
        eyebrow="Figma 插件"
        title="1,826 张画，都在一个面板里"
        lead="Overflow 插件把全部图标、插画与立体画带进 Figma 和 FigJam。按画面内容搜索，点一下或者拖到画布上。免费部分任何人可用。"
        facts={[
          { k: '总数', v: '1,826 张' },
          { k: '平台', v: 'Figma / FigJam' },
          { k: '价格', v: '免费安装' },
          { k: '获取', v: 'Figma 社区' },
        ]}
      />

      <section className="border-b border-line">
        <div className="wrap py-16">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-6">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <span className="tabular grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-wash text-sm font-semibold">
                      {s.n}
                    </span>
                    <div className="pt-0.5">
                      <h2 className="text-base font-semibold">{s.t}</h2>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.b}</p>
                    </div>
                  </div>
                ))}

                <div className="card mt-8 p-6">
                  <h3 className="text-base font-semibold">310 张免费素材开箱即用</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    194 个图标、每个插画系列各 15 张、71 张立体画静帧，装上插件就能插入，不需要填入任何密钥。
                  </p>
                  <a
                    href="https://www.figma.com/community/plugin/1687128231376306385/overflow-icons-illustrations"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mt-5"
                  >
                    <IconPen className="size-4" />
                    在 Figma 社区安装
                  </a>
                </div>
              </div>

              {/* interactive panel + live canvas frame mock */}
              <div className="card overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-wash/60 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-[#d4d4d4]" />
                    <span className="size-2.5 rounded-full bg-[#d4d4d4]" />
                    <span className="size-2.5 rounded-full bg-[#d4d4d4]" />
                    <span className="ml-2 text-xs font-medium text-muted">
                      Overflow · Figma 交互面板模拟
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5 rounded-md border border-line bg-white p-0.5">
                      <button
                        type="button"
                        onClick={() => setTone('regular')}
                        className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
                          tone === 'regular' ? 'bg-ink text-white' : 'text-muted hover:text-ink'
                        }`}
                      >
                        常规
                      </button>
                      <button
                        type="button"
                        onClick={() => setTone('duotone')}
                        className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
                          tone === 'duotone' ? 'bg-ink text-white' : 'text-muted hover:text-ink'
                        }`}
                      >
                        双色
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFreeOnly((v) => !v)}
                      className={`rounded-md border px-2 py-1 text-xs font-medium transition-colors ${
                        freeOnly
                          ? 'border-accent bg-accent-soft text-accent'
                          : 'border-line bg-white text-muted hover:text-ink'
                      }`}
                    >
                      仅免费
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2">
                    <IconSearch className="size-4 text-muted" />
                    <input
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="搜索画面内容，比如「日历」「安全」「代码」"
                      aria-label="在插件面板中搜索"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
                    />
                    {q && (
                      <button
                        type="button"
                        onClick={() => setQ('')}
                        className="text-xs text-muted hover:text-ink"
                      >
                        清除
                      </button>
                    )}
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {shown.map((d) => {
                      const active = inserted.name === d.name
                      return (
                        <button
                          key={d.name}
                          type="button"
                          onClick={() => handleInsert(d)}
                          className={`group relative flex aspect-square flex-col items-center justify-center gap-1.5 rounded-lg border p-2 transition-all duration-300 ease-spring ${
                            active
                              ? 'border-ink bg-wash shadow-xs'
                              : 'border-line bg-white hover:border-ink-soft'
                          }`}
                        >
                          <d.El className="size-6 text-ink" strokeWidth={1.5} tone={tone} />
                          <span className="text-xs text-ink-soft">{d.cn}</span>
                          <span
                            className={`absolute top-1.5 right-1.5 text-xs font-medium ${
                              d.free ? 'text-accent' : 'text-muted'
                            }`}
                          >
                            {d.free ? '免费' : 'Pro'}
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  {shown.length === 0 && (
                    <p className="py-10 text-center text-sm text-muted">
                      没有匹配的图标，换个词试试。
                    </p>
                  )}

                  {/* Simulated Figma Frame Auto Layout Drop Zone */}
                  <div className="mt-4 rounded-lg border border-line bg-wash p-3.5">
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span className="font-mono text-ink-soft">
                        Frame · Auto Layout 画布预览
                      </span>
                      <div className="flex items-center gap-1">
                        {([16, 20, 24] as const).map((sz) => (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => setCanvasSize(sz)}
                            className={`tabular rounded px-1.5 py-0.5 font-mono text-xs ${
                              canvasSize === sz
                                ? 'bg-ink text-white'
                                : 'bg-white text-muted hover:text-ink'
                            }`}
                          >
                            {sz}px
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid-paper mt-2.5 flex items-center justify-between rounded-md border border-dashed border-ink/25 bg-white px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <span
                          style={{ width: canvasSize, height: canvasSize }}
                          className="grid shrink-0 place-items-center text-ink"
                        >
                          <inserted.El
                            className="h-full w-full"
                            strokeWidth={1.5}
                            tone={tone}
                          />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-ink">{inserted.cn}</p>
                          <p className="font-mono text-xs text-muted">
                            ni-{inserted.name}.svg · {tone === 'duotone' ? '双色' : '常规'}
                          </p>
                        </div>
                      </div>
                      <span className="rounded border border-line bg-wash px-2 py-1 font-mono text-xs text-muted">
                        已对齐
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-muted">
                    <span className="tabular">当前展示 {shown.length} 个结果</span>
                    <span className="flex items-center gap-1">
                      <IconCopy className="size-3.5" /> 点击图标插入画布
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap py-16">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  t: '按画面搜，不按文件名',
                  b: '文件名是给机器看的。插件索引的是画面本身，所以输入「用来表示头像的那个」或「安全」都能直接命中。',
                },
                {
                  t: '原生支持自动布局',
                  b: '拖动时松开的位置就是落点，Auto Layout 容器也直接识别，放进去以后尺寸与间距跟着容器走。',
                },
                {
                  t: '插入前随时换风格',
                  b: '常规或双色，在面板顶部切换后再点击插入，不用把两个版本都拖进画布再删掉一个。',
                },
              ].map((c) => (
                <div key={c.t} className="card p-6">
                  <IconPen className="size-5 text-accent" />
                  <h3 className="mt-3 text-base font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
