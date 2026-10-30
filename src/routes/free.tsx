import { createFileRoute, Link } from '@tanstack/react-router'
import { PageIntro } from '../components/ui/Page'
import { Reveal } from '../components/ui/Reveal'
import {
  IconArrowRight,
  IconCheck,
  IconDownload,
  IconShield,
  IconSparkle,
} from '../components/art/Icons'
import { IsoStack } from '../components/art/Isometric'
import { ArtIdea, ArtCheckout, ArtMeeting } from '../components/art/Illustrations'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/free')({
  head: () =>
    seo(
      '免费素材包 · 194 个图标、45 张插画、71 张立体画 | Overflow Design 中文站',
      'Overflow Design 免费素材包包含 194 个图标、每个插画系列各 15 张、71 张立体画静帧，提供 SVG 与 PNG，无需账号。',
    ),
  component: FreePage,
})

const included = [
  {
    title: '194 个图标',
    note: '界面、事物、人物、技术与创作',
    body: '从搜索、日历到安全与代码，覆盖日常界面里最常被翻找的画面，包含常规与双色版本。',
    to: '/icons',
    art: (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
        <path
          d="M4.4 4.4c5.1-.1 10.3-.1 15.2 0 .1 4.9.1 10.1 0 15.2-4.9.1-10.1.1-15.2 0-.1-5.1-.1-10.3 0-15.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4.4 9.6c5.1-.1 10.3-.1 15.2 0M9.4 4.4c-.1 5.1-.1 10.3 0 15.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: '45 张插画',
    note: '三个系列，各 15 张',
    body: '办公室、通用与电子商务各挑 15 张，先用它们确认整套画的留白与语气是否合适。',
    to: '/illustrations',
    art: (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
        <path
          d="M12 3.8 21 8.4l-9 4.6L3 8.4l9-4.6Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M3 12.6l9 4.6 9-4.6M3 16.6l9 4.6 9-4.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: '71 张立体画',
    note: '全部静帧，矢量 SVG',
    body: '机架、图表、纸箱与工作台。静帧以 SVG 提供，放到任何尺寸都清晰锐利。',
    to: '/isometric',
    art: (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
        <path
          d="M12 3.6 20 8v8l-8 4.4L4 16V8l8-4.4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M4 8l8 4.4L20 8M12 12.4v8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

const comparison = [
  { label: '图标', free: '194 个', pro: '全部 1,120 个，常规与双色' },
  { label: '插画', free: '每系列 15 张，共 45 张', pro: '全部 457 张，线稿与淡彩' },
  { label: '立体画', free: '71 张静帧', pro: '249 张，含会动的代码片段' },
  { label: '文件格式', free: 'SVG 与 PNG', pro: 'Figma 源文件、SVG、PNG 与代码片段' },
  { label: 'Figma 插件', free: '免费部分可直接插入', pro: 'Pro 密钥解锁全部 1,826 张画' },
  { label: 'MCP 服务', free: '免费部分无需密钥直接调用', pro: 'Bearer 密钥解锁全库（30 张/分钟）' },
  { label: '商业项目', free: '可以，无需署名', pro: '可以，包含客户交付项目' },
  { label: '模板转售', free: '不含模板转售用途', pro: '可作为模板设计的一部分，需遵守条款' },
  { label: '后续更新', free: '一次性免费包', pro: '一次买断，包含之后新增的画' },
  { label: '价格', free: '0 元', pro: 'US$99 一次买断' },
]

const faqs = [
  {
    q: '免费包需要注册账号吗？',
    a: '不需要。免费部分不需要注册，也不需要密钥，下载后就能直接放进项目。Figma 插件和 MCP 服务里的免费部分同样无需密钥。',
  },
  {
    q: '可以用在商业项目里吗？',
    a: '可以。免费素材可用于个人与商业成品，网站、应用、客户项目、演示与社交媒体都在授权范围内，也不需要署名。',
  },
  {
    q: '可以放进我出售的模板里吗？',
    a: '免费包不包含模板转售用途。Notion、Framer、Webflow、Figma 模板、主题与 UI 套件等转售场景需要完整版授权，且素材必须是模板设计的一部分，不能作为独立素材包再分发。',
  },
  {
    q: '免费包和完整版差在哪？',
    a: '免费包是每个系列的一小部分样本：194 个图标、45 张插画和 71 张立体画静帧。完整版包含全部 1,826 张画、可编辑 Figma 源文件，以及会动的立体画代码片段。',
  },
  {
    q: '动态立体画在免费包里吗？',
    a: '不在。71 张免费立体画是矢量静帧；跟随指针视差、自动播放与进入视口启动的动态版本属于完整版。',
  },
  {
    q: '从免费包升级到完整版需要替换已有图标吗？',
    a: '不需要。免费包里的图标与插画和完整版使用完全一致的命名、24×24 网格与线宽体系，直接无缝衔接。',
  },
]

function FreePage() {
  return (
    <>
      <PageIntro
        eyebrow="免费素材包"
        title="先拿走一小叠，再决定要不要整套"
        lead="194 个图标、每个插画系列各 15 张，加上 71 张立体画静帧，打包成一个免费包。提供 SVG 与 PNG，不需要账号，也不需要署名。"
        facts={[
          { k: '价格', v: '0 元' },
          { k: '图标', v: '194 个' },
          { k: '插画', v: '45 张' },
          { k: '立体画', v: '71 张静帧' },
        ]}
      />

      <section className="border-b border-line">
        <div className="wrap py-16">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="eyebrow">包里有什么</p>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                  三个系列，各留一小部分给你
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft">
                  免费包不是缩水版的全套，而是每个系列里挑出来的真实样本。用它确认线条、留白和文件格式是否适合你的项目，再决定要不要完整授权。
                </p>

                <div className="mt-8 space-y-3">
                  {included.map((item) => (
                    <Link
                      key={item.title}
                      to={item.to}
                      className="card card-hover group flex gap-4 p-5"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line bg-wash text-ink">
                        {item.art}
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="text-base font-semibold group-hover:text-accent">
                            {item.title}
                          </h3>
                          <span className="text-xs text-muted">{item.note}</span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://www.overflow.design/notion-icons/free/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    <IconDownload className="size-4" />
                    去原站下载免费包
                  </a>
                  <Link to="/figma-plugin" className="btn btn-ghost btn-lg">
                    <IconSparkle className="size-4" />
                    在 Figma 里直接用
                  </Link>
                </div>
                <p className="mt-3 text-xs text-muted">
                  文件在原站免费获取；本站为中文导览，不托管原始压缩包。
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:sticky lg:top-24">
                <Link
                  to="/isometric"
                  search={{ scene: 'stack' }}
                  className="card card-hover grid-paper flex aspect-4/3 items-center justify-center p-4"
                >
                  <IsoStack className="h-full w-full" />
                </Link>
                <Link
                  to="/illustrations"
                  hash="set-notion-club"
                  className="card card-hover flex aspect-4/3 items-center justify-center bg-white p-4"
                >
                  <ArtIdea className="h-full w-full" />
                </Link>
                <Link
                  to="/illustrations"
                  hash="set-ecommerce-club"
                  className="card card-hover flex aspect-4/3 items-center justify-center bg-white p-4"
                >
                  <ArtCheckout className="h-full w-full" />
                </Link>
                <Link
                  to="/illustrations"
                  hash="set-office-club"
                  className="card card-hover flex aspect-4/3 items-center justify-center bg-white p-4"
                >
                  <ArtMeeting className="h-full w-full" />
                </Link>
                <div className="sm:col-span-2 rounded-lg border border-line bg-wash px-4 py-3">
                  <p className="text-xs leading-relaxed text-muted">
                    点击上方卡片可在本站查看对应分类的更多交互示例。
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-wash">
        <div className="wrap py-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">版本对比</p>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">免费包与完整版</h2>
              </div>
              <a
                href="https://www.overflow.design/pricing/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                查看原站定价 <IconArrowRight className="size-4" />
              </a>
            </div>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-white">
              <table className="w-full min-w-160 border-collapse text-left">
                <thead>
                  <tr className="border-b border-line bg-wash/50">
                    <th className="w-[24%] px-6 py-4 text-xs font-semibold text-muted">
                      对比项
                    </th>
                    <th className="w-[36%] px-6 py-4">
                      <span className="text-sm font-semibold">免费包</span>
                      <span className="ml-2 rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                        0 元
                      </span>
                    </th>
                    <th className="w-[40%] px-6 py-4">
                      <span className="text-sm font-semibold">完整版</span>
                      <span className="ml-2 rounded-md border border-line bg-white px-2 py-0.5 text-xs font-medium text-ink">
                        Pro · US$99
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line-soft">
                  {comparison.map((row) => (
                    <tr key={row.label} className="align-top">
                      <th className="px-6 py-3.5 text-xs font-semibold text-ink-soft">
                        {row.label}
                      </th>
                      <td className="tabular px-6 py-3.5 text-sm text-ink-soft">{row.free}</td>
                      <td className="tabular px-6 py-3.5 text-sm font-medium text-ink">
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  n: '01',
                  t: '先看真实文件',
                  b: '打开 SVG 看路径与节点，导出 PNG 放进你真实的页面里，而不是只看白底预览图。',
                },
                {
                  n: '02',
                  t: '再试一个页面',
                  b: '挑一个图标和一张插画，放进同一屏里，确认它们不会互相抢注意力。',
                },
                {
                  n: '03',
                  t: '合适再买断',
                  b: '如果风格契合，完整版一次买断，之后新增的画也会自动进到同一份文件与密钥里。',
                },
              ].map((step) => (
                <div key={step.n} className="card p-6">
                  <span className="tabular font-mono text-xs font-semibold text-accent">
                    {step.n}
                  </span>
                  <h3 className="mt-2 text-base font-semibold">{step.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="eyebrow">授权范围</p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">能做什么，不能做什么</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                免费素材可以放心用在个人和商业成品里。唯一需要留意的是把素材本身再打包分发，或者放进你要出售的模板。
              </p>
              <a
                href="https://www.overflow.design/license/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost mt-6"
              >
                <IconShield className="size-4" />
                阅读原站完整授权
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card p-6">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <IconCheck className="size-4 text-accent" /> 可以直接使用
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                  {['个人与商业成品', '网站、应用与客户交付项目', '演示、文档与社交媒体', '全场景无需附带署名'].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="card bg-wash p-6">
                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <span className="grid size-4 place-items-center rounded-full border border-line bg-white text-xs font-semibold text-muted">
                    !
                  </span>
                  需要 Pro 或额外授权
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                  {[
                    '把素材本身重新打包分发',
                    '作为独立图标或插画包出售',
                    '放进要出售的模板、主题或 UI 套件',
                    '动态立体画用于模板转售',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="free-faq" className="scroll-mt-24">
        <div className="wrap py-16">
          <Reveal>
            <div>
              <p className="eyebrow">常见问题</p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">关于免费包的六个问题</h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.q} className="card p-6">
                  <h3 className="text-base font-semibold text-ink">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{faq.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
