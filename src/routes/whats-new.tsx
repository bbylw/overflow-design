import { createFileRoute, Link } from '@tanstack/react-router'
import { PageIntro } from '../components/ui/Page'
import { Reveal } from '../components/ui/Reveal'
import { IsoStack, IsoLayers, IsoGlobe } from '../components/art/Isometric'
import { ArtReview } from '../components/art/Illustrations'
import { IconArrowRight, IconSparkle } from '../components/art/Icons'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/whats-new')({
  head: () =>
    seo(
      '更新 · 最近画了什么 | Overflow Design 中文站',
      'Overflow 素材的最近更新：立体画补齐到 249 张、图标增加到 1,120 个、MCP 服务上线与电子商务系列扩充。',
    ),
  component: WhatsNewPage,
})

const entries = [
  {
    date: '2026 年 10 月 18 日',
    tag: '立体画',
    title: '立体画补齐到 249 张',
    body: '新增的这批偏向数据与基础设施：机架、队列、缓存层、构建流水线与看板墙。静帧仍然免费开放 71 张，会动的那部分随完整版提供。',
    to: '/isometric',
    art: <IsoLayers className="h-full w-full" />,
  },
  {
    date: '2026 年 9 月 12 日',
    tag: '图标',
    title: '图标增加到 1,120 个',
    body: '补齐日常界面里最常被翻找的那一类：文件归档、状态标记、支付与数据库。全部画在 24×24 的格子上，双色版本同步更新。',
    to: '/icons',
    art: <IsoStack className="h-full w-full" />,
  },
  {
    date: '2026 年 8 月 24 日',
    tag: '工具',
    title: 'MCP 服务正式上线',
    body: '代码助手可以直接按画面语义检索并取回素材。先看目录、再搜索、再取回，三个工具，返回 SVG、JSX 或下载链接。',
    to: '/mcp',
    art: <IsoGlobe className="h-full w-full" />,
  },
  {
    date: '2026 年 7 月 09 日',
    tag: '插画',
    title: '电子商务系列扩充至 156 张',
    body: '加了退款、换货、库存不足这些「出错的那部分」。买东西顺利的时候不需要插画，不顺利的时候才需要。',
    to: '/illustrations',
    art: <ArtReview className="h-full w-full" />,
  },
]

function WhatsNewPage() {
  return (
    <>
      <PageIntro
        eyebrow="更新记录"
        title="最近画了什么"
        lead="这套素材还在长。每次更新都会直接进到已购买的文件与插件密钥里，不用重新买。下面是最近几次更新。"
        facts={[
          { k: '当前总数', v: '1,826 张' },
          { k: '图标', v: '1,120' },
          { k: '插画', v: '457' },
          { k: '立体画', v: '249' },
        ]}
      />

      <section className="border-b border-line">
        <div className="wrap py-16">
          <div className="space-y-4">
            {entries.map((e, i) => (
              <Reveal key={e.title} delay={i * 60}>
                <article className="card card-hover grid overflow-hidden md:grid-cols-[240px_1fr]">
                  <div className="grid-paper flex items-center justify-center border-b border-line-soft bg-wash p-4 md:border-r md:border-b-0">
                    <div className="aspect-4/3 w-full">{e.art}</div>
                  </div>
                  <div className="flex flex-col justify-between p-6 md:p-7">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                          {e.tag}
                        </span>
                        <span className="tabular text-xs text-muted">{e.date}</span>
                      </div>
                      <h2 className="mt-3 text-lg font-semibold">{e.title}</h2>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                        {e.body}
                      </p>
                    </div>
                    <div className="mt-4">
                      <Link
                        to={e.to}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink transition-colors hover:text-accent"
                      >
                        查看该系列 <IconArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap py-16">
          <Reveal>
            <div className="card flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center md:p-8">
              <div>
                <h2 className="text-xl font-semibold">下一个系列还在画</h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">
                  想法、缺的画面、想看到的方向，都可以直接向作者反馈。因为是一个人画，每一条建议都看得到。
                </p>
              </div>
              <a
                href="https://x.com/overflowdesign"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary shrink-0"
              >
                <IconSparkle className="size-4" />
                在 X 上提一个想法
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
