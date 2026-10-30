import { createFileRoute, Link } from '@tanstack/react-router'
import { PageIntro, Prose } from '../components/ui/Page'
import { Reveal } from '../components/ui/Reveal'
import { IconCheck, IconDownload, IconShield } from '../components/art/Icons'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/about')({
  head: () =>
    seo(
      '使用说明 · 格式、尺寸与授权 | Overflow Design 中文站',
      'Overflow 素材的文件构成、24×24 图标网格、商业使用与署名说明，以及这个中文站的定位。',
    ),
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="使用说明"
        title="格式、尺寸与授权"
        lead="这一页把使用前最常问的几件事讲清楚：文件里有什么、能用在什么地方、需不需要署名。"
        facts={[
          { k: '源文件', v: 'Figma 矢量' },
          { k: '导出格式', v: 'SVG / PNG / JSX' },
          { k: '商业用途', v: '免费与 Pro 均支持' },
          { k: '署名要求', v: '无需署名' },
        ]}
      />

      <section className="border-b border-line">
        <div className="wrap grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-semibold">文件里有什么</h2>
                <div className="mt-3">
                  <Prose>
                    <p>
                      每个产品都包含原始可编辑的 Figma 源文件，加上切好的 SVG 与高分辨率 PNG
                      导出。既有能随时改路径的矢量原稿，也有能直接放进生产代码的成品文件。
                    </p>
                    <p>
                      全部 1,120 个图标画在统一的 24×24 网格上，线条粗细与圆角收笔保持一致。立体画与插画均为纯矢量路径，放大到任何尺寸都不会发虚。
                    </p>
                  </Prose>
                </div>
              </div>

              <div id="license-scope" className="scroll-mt-28">
                <h2 className="text-xl font-semibold">可以用在哪里（授权范围）</h2>
                <div className="mt-3">
                  <Prose>
                    <p>
                      公司网站、商业应用、SaaS 产品、市场推广物料、演示文稿和客户交付项目全部覆盖在内。不需要附带版权署名，可以在已发布的成品里直接使用。
                    </p>
                    <p>
                      模板类转售用途（Notion、Framer、Webflow、Figma 模板、网站主题、UI 套件）需要
                      Pro 完整授权，且素材必须作为设计页面的一部分，不能单独拆出作为图标包、插画包或立体画包二次分发。
                    </p>
                  </Prose>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold">关于这个中文站</h2>
                <div className="mt-3">
                  <Prose>
                    <p>
                      这是一份依据 overflow.design 公开信息整理的中文导览与交互预览站，用于帮助中文设计师与开发者了解素材构成、在线体验图标双色与线宽变化，以及查阅 MCP 与 Figma 插件配置。
                    </p>
                    <p>
                      本站不托管付费压缩包、不处理交易；完整素材包下载与 Pro 授权购买请前往官方原站。
                    </p>
                  </Prose>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <aside className="space-y-4">
              <div className="card p-6">
                <IconDownload className="size-5 text-accent" />
                <h3 className="mt-3 text-base font-semibold">免费素材包（310 张）</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                  {[
                    '194 个图标（常规与双色）',
                    '每个插画系列各 15 张（共 45 张）',
                    '71 张立体画静帧',
                    'SVG 与 PNG 格式，无需注册',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <IconCheck className="size-4 text-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link to="/free" className="btn btn-ghost mt-5 w-full">
                  查看免费包详情
                </Link>
              </div>

              <div className="card p-6">
                <IconShield className="size-5 text-accent" />
                <h3 className="mt-3 text-base font-semibold">免署名商业授权</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  无论免费包还是完整版，在已发布的应用、网站和文档中使用都不需要添加署名链接。
                </p>
              </div>

              <div className="card bg-wash p-6">
                <h3 className="text-base font-semibold">官方原始站点</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  完整的英文授权条款、Pro 买断定价与源文件下载均在官方站点。
                </p>
                <a
                  href="https://www.overflow.design/license/"
                  className="btn btn-primary mt-4 w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  阅读原站完整授权
                </a>
                <a
                  href="https://www.overflow.design/"
                  className="btn btn-ghost mt-2 w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  前往 overflow.design ↗
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  )
}
