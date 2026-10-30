import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  IconArrowRight,
  IconDownload,
  IconCheck,
  IconCopy,
  IconPen,
  IconTerminal,
  IconCalendar,
  IconSearch,
  IconUser,
  IconMail,
  IconFolder,
  IconChart,
  IconSettings,
  IconLock,
  IconGlobe,
  IconCloud,
  IconStar,
  IconHeart,
  IconBell,
  IconCart,
  IconBox,
  IconLayers,
  IconSparkle,
  IconShield,
  type IconTone,
} from '../components/art/Icons'
import { IsoStack, IsoServer, IsoChart, IsoBoxes, IsoDesk } from '../components/art/Isometric'
import {
  ArtDeskWork,
  ArtMeeting,
  ArtShipping,
  ArtReading,
  ArtCheckout,
  ArtIdea,
  ArtLibrary,
} from '../components/art/Illustrations'
import { Reveal, TaglineReveal } from '../components/ui/Reveal'
import { copyText } from '../lib/clipboard'
import { showToast } from '../components/ui/Toast'

const taglineSegments = [
  '1,826 张手绘作品，',
  '出自同一支笔。',
  '一样的线宽、',
  '一样的转角、',
  '一样的留白节奏。',
  '把图标、插画与立体画放进同一屏，',
  '既不会抢走正文的声音，',
  '也不会像拼凑出来的素材库。',
]

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <TaglineReveal eyebrow="为什么只有一个人画" segments={taglineSegments} />
      <Collections />
      <FigmaSection />
      <McpSection />
      <FreeBundle />
      <Faq />
    </>
  )
}

/* ---------------------------------------------------------------- hero */

function Hero() {
  const heroScenes = [
    { id: 'stack', art: <IsoStack className="h-full w-full" />, label: '层叠卡片', tag: '免费' },
    { id: 'server', art: <IsoServer className="h-full w-full" />, label: '服务器机箱', tag: '免费' },
    { id: 'chart', art: <IsoChart className="h-full w-full" />, label: '增长柱状图', tag: '免费' },
    { id: 'boxes', art: <IsoBoxes className="h-full w-full" />, label: '仓储纸箱', tag: '免费' },
  ]

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 grid-paper opacity-70 mask-[radial-gradient(ellipse_at_50%_0%,#000_35%,transparent_78%)]" />

      <div className="wrap relative pt-16 pb-20 md:pt-24 md:pb-24">
        <Reveal>
          <div className="mx-auto max-w-170 text-center">
            <span className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-1 text-xs font-medium text-ink-soft">
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="tabular">1,826 张画，全部手绘</span>
            </span>

            <h1 className="hero-heading-gradient mt-6 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              为产品、文档与界面画的手绘素材库
            </h1>

            <p className="mx-auto mt-6 max-w-170 text-base leading-relaxed text-ink-soft md:text-lg">
              1,120 个图标、457 张插画、249 张立体画，出自同一只手。提供 SVG、PNG 与 Figma
              源文件，直接放进网站、应用、演示和 Notion 页面。
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/free" className="btn btn-primary btn-lg w-full sm:w-auto">
                <IconDownload className="size-4" />
                获取免费素材包
              </Link>
              <Link
                to="/icons"
                className=" inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-ink-soft transition-colors duration-300 ease-spring hover:text-ink"
              >
                先在线预览 48 个图标
                <IconArrowRight className="size-4" />
              </Link>
            </div>

            <p className="tabular mt-4 text-xs text-muted">
              免费包无需注册账号，含 194 个图标、45 张插画与 71 张立体画静帧，支持商业项目
            </p>
          </div>
        </Reveal>

        {/* hero art strip */}
        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-16">
            {heroScenes.map((it) => (
              <Link
                key={it.id}
                to="/isometric"
                search={{ scene: it.id }}
                className="card art-lift group flex flex-col overflow-hidden"
              >
                <div className="grid-paper flex aspect-4/3 items-center justify-center overflow-hidden p-3">
                  <div className="h-full w-full transition-transform duration-500 ease-spring group-hover:scale-105">
                    {it.art}
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-line-soft px-3.5 py-2.5">
                  <span className="text-xs font-medium text-ink-soft group-hover:text-ink">
                    {it.label}
                  </span>
                  <span className="rounded bg-accent-soft px-1.5 py-0.5 text-xs font-medium text-accent">
                    {it.tag}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- stats */

function Stats() {
  const items = [
    { n: '1,120', label: '个图标', note: '常规与双色两种风格，24×24 网格', to: '/icons' },
    { n: '457', label: '张插画', note: '办公室、通用与电商三套系列', to: '/illustrations' },
    { n: '249', label: '张立体画', note: '71 张静帧免费，支持视差与自动播放代码片段', to: '/isometric' },
  ]
  return (
    <section className="border-b border-line bg-wash">
      <div className="wrap grid divide-y divide-line py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((it) => (
          <Link
            key={it.label}
            to={it.to}
            className="group block px-2 py-6 transition-colors duration-300 ease-spring sm:px-8 sm:first:pl-0 sm:last:pr-0"
          >
            <div className="flex items-baseline gap-2">
              <span className="tabular text-3xl font-semibold tracking-tight text-ink group-hover:text-accent">
                {it.n}
              </span>
              <span className="text-sm font-medium text-ink-soft">{it.label}</span>
            </div>
            <p className="mt-1 text-xs text-muted">{it.note}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

/* --------------------------------------------------------- collections */

const collections = [
  {
    to: '/icons',
    hash: undefined,
    title: '图标',
    count: '1,120 个',
    desc: '常规与双色两种风格，画在 24×24 的格子上，提供 Figma、SVG 与 PNG。',
    art: null,
    artType: 'icon' as const,
  },
  {
    to: '/isometric',
    hash: undefined,
    title: '立体画',
    count: '249 张',
    desc: '71 张以静帧免费提供。完整版另有会动的那部分，作为代码片段贴进你自己的页面。',
    art: <IsoDesk className="h-full w-full" />,
    artType: 'iso' as const,
  },
  {
    to: '/illustrations',
    hash: 'set-office-club',
    title: '办公室系列',
    count: '151 张插画',
    desc: '办公桌、会议、截止日期，以及职场里那些小小的难堪，画给以文字为主的文档。',
    art: <ArtDeskWork className="h-full w-full" />,
    artType: 'art' as const,
  },
  {
    to: '/illustrations',
    hash: 'set-notion-club',
    title: '通用系列',
    count: '150 张插画',
    desc: '人物、物件与想法。放在 Notion 页面顶部，不会盖过正文的声音。',
    art: <ArtIdea className="h-full w-full" />,
    artType: 'art' as const,
  },
  {
    to: '/illustrations',
    hash: 'set-ecommerce-club',
    title: '电子商务系列',
    count: '156 张插画',
    desc: '购物车、结账、配送与退款：一次购买的完整形状，包括出错的那部分。',
    art: <ArtCheckout className="h-full w-full" />,
    artType: 'art' as const,
  },
]

function Collections() {
  return (
    <section className="border-b border-line bg-wash/40">
      <div className="wrap pt-16 pb-20 md:pt-20 md:pb-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">画集</p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">五个系列，一种笔触</h2>
            </div>
            <Link
              to="/illustrations"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors duration-300 ease-spring hover:text-ink"
            >
              浏览全部系列
              <IconArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {collections.slice(0, 2).map((c) => (
              <CollectionCard key={c.title} {...c} large />
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {collections.slice(2).map((c) => (
              <CollectionCard key={c.title} {...c} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CollectionCard({
  to,
  hash,
  title,
  count,
  desc,
  art,
  artType,
  large,
}: {
  to: string
  hash?: string
  title: string
  count: string
  desc: string
  art: React.ReactNode
  artType: 'icon' | 'iso' | 'art'
  large?: boolean
}) {
  return (
    <Link
      to={to}
      hash={hash}
      className="card card-hover group flex flex-col overflow-hidden"
    >
      <div className="flex items-baseline justify-between gap-2 p-6 pb-0">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="tabular text-xs font-medium text-muted">{count}</span>
      </div>

      <div
        className={`mt-4 flex items-center justify-center overflow-hidden border-y border-line-soft bg-wash ${
          large ? 'aspect-video' : 'aspect-4/3'
        }`}
      >
        <div className="size-full p-6">
          {artType === 'icon' ? (
            <IconWall />
          ) : (
            <div className="size-full transition-transform duration-500 ease-spring group-hover:scale-[1.03]">
              {art}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
          查看详情
          <IconArrowRight className="size-4 transition-transform duration-300 ease-spring group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

const wallIcons = [
  { El: IconCalendar, tone: 'duotone' as const },
  { El: IconSearch, tone: 'regular' as const },
  { El: IconUser, tone: 'duotone' as const },
  { El: IconMail, tone: 'regular' as const },
  { El: IconFolder, tone: 'duotone' as const },
  { El: IconChart, tone: 'regular' as const },
  { El: IconSettings, tone: 'regular' as const },
  { El: IconLock, tone: 'duotone' as const },
  { El: IconGlobe, tone: 'regular' as const },
  { El: IconCloud, tone: 'duotone' as const },
  { El: IconStar, tone: 'regular' as const },
  { El: IconHeart, tone: 'duotone' as const },
  { El: IconBell, tone: 'regular' as const },
  { El: IconCart, tone: 'duotone' as const },
  { El: IconBox, tone: 'regular' as const },
  { El: IconLayers, tone: 'duotone' as const },
  { El: IconPen, tone: 'regular' as const },
  { El: IconSparkle, tone: 'duotone' as const },
]

function IconWall() {
  return (
    <div className="grid size-full grid-cols-6 place-items-center gap-2">
      {wallIcons.map(({ El, tone }, i) => (
        <div
          key={i}
          className="grid size-10 place-items-center rounded-lg border border-line-soft bg-white text-ink transition-transform duration-300 ease-spring group-hover:scale-105"
        >
          <El className="size-5" strokeWidth={1.5} tone={tone} />
        </div>
      ))}
    </div>
  )
}

/* --------------------------------------------------------------- figma */

const figmaDemoIcons = [
  { cn: '用户头像', name: 'user', El: IconUser, tag: '免费' },
  { cn: '日程日历', name: 'calendar', El: IconCalendar, tag: '免费' },
  { cn: '图层堆叠', name: 'layers', El: IconLayers, tag: '完整版' },
  { cn: '数据增长', name: 'chart', El: IconChart, tag: '免费' },
  { cn: '安全防护', name: 'shield', El: IconShield, tag: '完整版' },
  { cn: '购物车', name: 'cart', El: IconCart, tag: '完整版' },
]

function FigmaSection() {
  const [tone, setTone] = useState<IconTone>('duotone')
  const [picked, setPicked] = useState(figmaDemoIcons[0])

  const steps = [
    {
      n: '1',
      title: '从 Figma 社区安装',
      body: '在 Figma 与 FigJam 中免费使用，任何方案都行。',
    },
    {
      n: '2',
      title: '按画面内容搜索',
      body: '输入「头像」「安全」「购物」。复数、粘贴来的组件名、小拼写错误都能匹配。',
    },
    {
      n: '3',
      title: '点击或拖入画布',
      body: '点击落在选中的画框里，拖动放在松手的位置，自动布局容器也能直接放入。',
    },
  ]

  return (
    <section className="border-b border-line bg-white">
      <div className="wrap pt-16 pb-20 md:pt-20 md:pb-24">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">Figma 插件</p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                每一张画，都在 Figma 面板里
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
                搜索、点击，它就落到画布上。插件把全部 1,826 张图标、插画与立体画带进 Figma 和
                FigJam。不用复制大文件，也不用维护组件库。
              </p>

              <div className="mt-8 space-y-6">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <span className="tabular grid size-7 shrink-0 place-items-center rounded-md border border-line bg-wash text-xs font-semibold">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.figma.com/community/plugin/1687128231376306385/overflow-icons-illustrations"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <IconPen className="size-4" />
                  在 Figma 社区安装
                </a>
                <Link to="/figma-plugin" className="btn btn-ghost">
                  体验交互面板
                  <IconArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="flex items-center justify-between border-b border-line bg-wash/60 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#d4d4d4]" />
                  <span className="size-2.5 rounded-full bg-[#d4d4d4]" />
                  <span className="size-2.5 rounded-full bg-[#d4d4d4]" />
                  <span className="ml-2 text-xs font-medium text-muted">Overflow · 插件面板</span>
                </div>
                <div className="flex items-center gap-1 rounded-md border border-line bg-white p-0.5">
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
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 rounded-lg border border-line bg-wash/50 px-3 py-2">
                  <IconSearch className="size-4 text-muted" />
                  <span className="text-sm text-ink">{picked.cn}</span>
                  <span className="ml-auto font-mono text-xs text-muted">icon/{picked.name}</span>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {figmaDemoIcons.map((g) => {
                    const active = picked.name === g.name
                    return (
                      <button
                        key={g.name}
                        type="button"
                        onClick={() => {
                          setPicked(g)
                          showToast(`已在画布中选中「${g.cn}」（${tone === 'duotone' ? '双色' : '常规'}）`)
                        }}
                        className={`relative grid aspect-square place-items-center rounded-lg border transition-all duration-300 ease-spring ${
                          active
                            ? 'border-ink bg-wash shadow-xs'
                            : 'border-line bg-white hover:border-ink-soft'
                        }`}
                      >
                        <g.El className="size-7 text-ink" strokeWidth={1.5} tone={tone} />
                        <span className="absolute top-1.5 left-2 text-xs text-muted">{g.cn}</span>
                        <span
                          className={`absolute right-2 bottom-1.5 text-xs font-medium ${
                            g.tag === '免费' ? 'text-accent' : 'text-muted'
                          }`}
                        >
                          {g.tag}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <div className="mt-3 flex items-center justify-between rounded-lg border border-line-soft bg-wash px-3 py-2 text-xs text-muted">
                  <span>点击任意图标预览插入效果</span>
                  <span className="font-mono text-ink">24 × 24 · SVG</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- mcp */

const agentTabs = [
  {
    id: 'claude',
    label: 'Claude Code',
    cmd: 'claude mcp add --transport http overflow \\\n  https://www.overflow.design/api/mcp/',
  },
  {
    id: 'cursor',
    label: 'Cursor',
    cmd: 'npx @overflow/mcp init --client cursor',
  },
  {
    id: 'vscode',
    label: 'VS Code',
    cmd: 'code --add-mcp \'{"name":"overflow","url":"https://www.overflow.design/api/mcp/"}\'',
  },
  {
    id: 'codex',
    label: 'Codex',
    cmd: 'codex mcp add overflow --url https://www.overflow.design/api/mcp/',
  },
]

const mcpScenarios = [
  {
    prompt: '「在日期字段旁边加一个 Overflow 的日历图标。」',
    query: '日历',
    timeSearch: '246 ms',
    timeGet: '115 ms',
    results: [
      { n: '方形日历', p: 'icon/calendar-square', t: '免费' },
      { n: '日历', p: 'isometric/48/calendar', t: '免费' },
      { n: '日程表', p: 'illustration/office-club/deadline', t: '完整版' },
    ],
    pickedId: 'icon/calendar-square',
    file: 'ni-calendar-square.svg',
    format: 'SVG，24 × 24 网格',
    summary: '已在日期字段旁加入 ni-calendar-square.svg，尺寸 16px，与标签对齐。',
  },
  {
    prompt: '「找一张 Overflow 插画放在订阅区，存到我们的图片目录。」',
    query: '构思与灵感',
    timeSearch: '198 ms',
    timeGet: '142 ms',
    results: [
      { n: '构思与灵感', p: 'illustration/notion-club/idea', t: '免费' },
      { n: '整理笔记', p: 'illustration/notion-club/notebook', t: '完整版' },
      { n: '读一份长文档', p: 'illustration/notion-club/reading', t: '免费' },
    ],
    pickedId: 'illustration/notion-club/idea',
    file: 'public/images/overflow-idea.svg',
    format: 'SVG 矢量插画，400 × 300',
    summary: '已保存至 public/images/overflow-idea.svg 并嵌入订阅引导卡片。',
  },
  {
    prompt: '「给我三个能代表用户资料页的图标，我来挑。」',
    query: '用户资料',
    timeSearch: '184 ms',
    timeGet: '96 ms',
    results: [
      { n: '用户', p: 'icon/user', t: '免费' },
      { n: '团队', p: 'icon/users', t: '完整版' },
      { n: '安全防护', p: 'icon/shield', t: '完整版' },
    ],
    pickedId: 'icon/user',
    file: 'src/icons/UserIcon.tsx',
    format: 'React JSX，currentColor',
    summary: '已导出 UserIcon.tsx 组件，支持 strokeWidth 与双色切换。',
  },
]

function McpSection() {
  const [scenarioIdx, setScenarioIdx] = useState(0)

  return (
    <section className="border-b border-line bg-wash/40">
      <div className="wrap pt-16 pb-20 md:pt-20 md:pb-24">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <McpTerminal scenario={mcpScenarios[scenarioIdx]} />
            </div>

            <div className="order-1 lg:order-2">
              <p className="eyebrow">MCP 服务</p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                你的代码助手，认得每一张画
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
                把 Overflow MCP 服务接到 Claude Code、Cursor、Codex 或任何其他助手。它按画面内容检索全部
                1,826 张画，把合适的那张以 SVG、JSX 或文件的形式取回来。点击下方示例切换终端演示：
              </p>

              <div className="mt-6 space-y-2.5">
                {mcpScenarios.map((item, idx) => {
                  const active = scenarioIdx === idx
                  return (
                    <button
                      key={item.prompt}
                      type="button"
                      onClick={() => setScenarioIdx(idx)}
                      className={`w-full rounded-lg border px-4 py-3 text-left text-sm transition-all duration-300 ease-spring ${
                        active
                          ? 'border-ink bg-white font-medium text-ink shadow-xs'
                          : 'border-line bg-wash text-ink-soft hover:bg-white'
                      }`}
                    >
                      {item.prompt}
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {['Claude Code', 'Cursor', 'GitHub Copilot', 'Codex', 'Gemini CLI', 'Cline', 'Warp'].map(
                  (a) => (
                    <span
                      key={a}
                      className="rounded-md border border-line bg-white px-2.5 py-1 text-xs text-muted"
                    >
                      {a}
                    </span>
                  ),
                )}
              </div>

              <Link to="/mcp" className="btn btn-ghost mt-8">
                <IconTerminal className="size-4" />
                查看完整接入配置
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function McpTerminal({ scenario }: { scenario: (typeof mcpScenarios)[number] }) {
  const [activeTab, setActiveTab] = useState(agentTabs[0].id)
  const currentTab = agentTabs.find((t) => t.id === activeTab) ?? agentTabs[0]

  const onCopyCmd = async () => {
    if (await copyText(currentTab.cmd)) {
      showToast(`已复制 ${currentTab.label} 接入命令`)
    }
  }

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-wash/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          {agentTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-ink text-white'
                  : 'text-muted hover:bg-white hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={onCopyCmd}
          className="inline-flex items-center gap-1 rounded border border-line bg-white px-2 py-1 text-xs text-ink-soft transition-colors hover:bg-wash"
        >
          <IconCopy className="size-3" />
          复制命令
        </button>
      </div>

      <div className="space-y-3 p-4 font-mono text-xs leading-relaxed">
        <pre className="overflow-x-auto rounded-lg bg-ink px-3.5 py-3 text-[#e8e8e8]">
          <code>$ {currentTab.cmd}</code>
        </pre>

        <div className="rounded-lg border border-line px-3.5 py-3">
          <div className="tabular flex items-center justify-between text-xs text-muted">
            <span>search_drawings</span>
            <span>{scenario.timeSearch}</span>
          </div>
          <div className="mt-1.5 text-ink-soft">
            query: <span className="font-medium text-ink">"{scenario.query}"</span>
          </div>
          <div className="mt-2 space-y-1 border-t border-line-soft pt-2">
            {scenario.results.map((r) => (
              <div key={r.p} className="flex items-center justify-between gap-2">
                <span className="truncate text-ink">{r.n}</span>
                <span className="truncate text-xs text-muted">{r.p}</span>
                <span
                  className={`shrink-0 text-xs font-medium ${
                    r.t === '免费' ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {r.t}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-line px-3.5 py-3">
          <div className="tabular flex items-center justify-between text-xs text-muted">
            <span>get_drawings</span>
            <span>{scenario.timeGet}</span>
          </div>
          <div className="mt-1.5 text-ink-soft">
            ids: <span className="text-ink">["{scenario.pickedId}"]</span>
          </div>
          <div className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 border-t border-line-soft pt-2 text-xs">
            <span className="text-muted">输出</span>
            <span className="text-ink">{scenario.file}</span>
            <span className="text-muted">规格</span>
            <span className="text-ink">{scenario.format}</span>
          </div>
        </div>

        <p className="pt-1 font-sans text-xs leading-relaxed text-ink-soft">{scenario.summary}</p>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------- free bundle */

function FreeBundle() {
  return (
    <section className="border-b border-line bg-wash">
      <div className="wrap pt-16 pb-20 md:pt-20 md:pb-24">
        <Reveal>
          <div className="card overflow-hidden">
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              <div className="p-8 md:p-12">
                <p className="eyebrow">零风险试用</p>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">先拿走 310 张免费画</h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                  194 个图标，加上每个插画系列各 15 张，打包成一个免费包，提供 SVG 与 PNG；另有 71
                  张立体画静帧。不需要注册账号，也不用绑卡。
                </p>

                <ul className="mt-6 space-y-2.5">
                  {[
                    '194 个图标，常规与双色两种风格',
                    '每个插画系列各 15 张，共 45 张',
                    '71 张等距立体画静帧',
                    'SVG 与 PNG 两种格式，商业项目免署名',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm text-ink-soft">
                      <IconCheck className="size-4 shrink-0 text-accent" />
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to="/free" className="btn btn-primary btn-lg">
                    <IconDownload className="size-4" />
                    获取免费素材包
                  </Link>
                  <Link to="/figma-plugin" className="btn btn-ghost btn-lg">
                    在 Figma 插件里用
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-line bg-white p-6 lg:border-l lg:border-t-0">
                {[
                  { art: <ArtMeeting className="h-full w-full" />, label: '围着白板讨论' },
                  { art: <ArtShipping className="h-full w-full" />, label: '打包与发货' },
                  { art: <ArtReading className="h-full w-full" />, label: '读一份长文档' },
                  { art: <ArtLibrary className="h-full w-full" />, label: '在架上挑选' },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to="/illustrations"
                    className="group flex aspect-4/3 items-center justify-center overflow-hidden rounded-lg border border-line-soft bg-wash p-2 transition-colors hover:border-line"
                    aria-label={item.label}
                  >
                    <div className="h-full w-full transition-transform duration-500 ease-spring group-hover:scale-105">
                      {item.art}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- faq */

const faqs = [
  {
    q: '包含 Figma 设计源文件吗？',
    a: '包含。每个付费产品都提供原始 Figma 源文件，所有画面本身就是在 Figma 里绘制的，放进你的设计系统无需格式转换。',
  },
  {
    q: 'Figma 插件怎么收费？',
    a: 'Overflow Icons & Illustrations 在 Figma 社区免费安装，把全部 1,826 张图标、插画和立体画放进侧边面板。其中 310 张免费素材无需密钥即可直接拖入画布。',
  },
  {
    q: '源文件压缩包里有什么？',
    a: '包含你所购系列的原始可编辑矢量图层，以及切好的 SVG 与高分辨率 PNG 导出，改颜色或直接放到代码里都很顺手。',
  },
  {
    q: '可以用在商业项目或客户项目里吗？',
    a: '可以。无论免费包还是完整版，都覆盖公司官网、SaaS 应用、市场推广、演示文稿与客户交付项目。',
  },
  {
    q: '在网站或应用里使用需要署名吗？',
    a: '不需要。你可以在已发布的产品和文档中直接使用，无需附带版权署名。',
  },
  {
    q: '后续新增的画需要再付费吗？',
    a: '不需要。完整版为 US$99 一次性买断，后续新画的图标、插画和立体场景都会直接加入同一份授权与插件密钥中。',
  },
]

function Faq() {
  return (
    <section>
      <div className="wrap pt-16 pb-20 md:pt-20 md:pb-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">常见问题</p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">使用与授权说明</h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              查看完整格式与授权说明
              <IconArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="text-base font-semibold text-ink">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
