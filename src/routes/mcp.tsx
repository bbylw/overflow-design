import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { PageIntro } from '../components/ui/Page'
import { Reveal } from '../components/ui/Reveal'
import { showToast } from '../components/ui/Toast'
import { copyText } from '../lib/clipboard'
import { IconCopy, IconCheck, IconTerminal, IconCode } from '../components/art/Icons'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/mcp')({
  head: () =>
    seo(
      'MCP 服务 · 让代码助手调用 1,826 张画 | Overflow Design 中文站',
      '把 Overflow MCP 服务接到 Claude Code、Cursor、VS Code 与 Codex，按画面内容检索并以 SVG、JSX 或文件取回素材。免费部分无需密钥。',
    ),
  component: McpPage,
})

const clients = [
  {
    id: 'claude',
    label: 'Claude Code',
    cmd: 'claude mcp add --transport http overflow \\\n  https://www.overflow.design/api/mcp/',
    cmdPro:
      'claude mcp add --transport http overflow \\\n  --header "Authorization: Bearer $OVERFLOW_PRO_KEY" \\\n  https://www.overflow.design/api/mcp/',
    note: '在终端里运行，然后重启 Claude Code 会话。',
  },
  {
    id: 'cursor',
    label: 'Cursor',
    cmd: '{\n  "mcpServers": {\n    "overflow": {\n      "url": "https://www.overflow.design/api/mcp/"\n    }\n  }\n}',
    cmdPro:
      '{\n  "mcpServers": {\n    "overflow": {\n      "url": "https://www.overflow.design/api/mcp/",\n      "headers": {\n        "Authorization": "Bearer ${env:OVERFLOW_PRO_KEY}"\n      }\n    }\n  }\n}',
    note: '写入 ~/.cursor/mcp.json，或在设置里的 MCP 面板添加。',
  },
  {
    id: 'vscode',
    label: 'VS Code',
    cmd: '{\n  "servers": {\n    "overflow": {\n      "type": "http",\n      "url": "https://www.overflow.design/api/mcp/"\n    }\n  }\n}',
    cmdPro:
      '{\n  "servers": {\n    "overflow": {\n      "type": "http",\n      "url": "https://www.overflow.design/api/mcp/",\n      "headers": {\n        "Authorization": "Bearer ${env:OVERFLOW_PRO_KEY}"\n      }\n    }\n  }\n}',
    note: '写入工作区的 .vscode/mcp.json。',
  },
  {
    id: 'codex',
    label: 'Codex',
    cmd: '[mcp_servers.overflow]\nurl = "https://www.overflow.design/api/mcp/"',
    cmdPro:
      '[mcp_servers.overflow]\nurl = "https://www.overflow.design/api/mcp/"\nenv_http_headers = { "Authorization" = "OVERFLOW_PRO_KEY" }',
    note: '写入 ~/.codex/config.toml，下一次会话生效。',
  },
  {
    id: 'devin',
    label: 'Devin / Windsurf',
    cmd: '{\n  "mcpServers": {\n    "overflow": {\n      "serverUrl": "https://www.overflow.design/api/mcp/"\n    }\n  }\n}',
    cmdPro:
      '{\n  "mcpServers": {\n    "overflow": {\n      "serverUrl": "https://www.overflow.design/api/mcp/",\n      "headers": {\n        "Authorization": "Bearer $OVERFLOW_PRO_KEY"\n      }\n    }\n  }\n}',
    note: '写入 ~/.config/devin/mcp_config.json。原 Windsurf 用户使用同一份配置。',
  },
  {
    id: 'opencode',
    label: 'OpenCode',
    cmd: '{\n  "$schema": "https://opencode.ai/config.json",\n  "mcp": {\n    "overflow": {\n      "type": "remote",\n      "url": "https://www.overflow.design/api/mcp/",\n      "enabled": true\n    }\n  }\n}',
    cmdPro:
      '{\n  "$schema": "https://opencode.ai/config.json",\n  "mcp": {\n    "overflow": {\n      "type": "remote",\n      "url": "https://www.overflow.design/api/mcp/",\n      "headers": {\n        "Authorization": "Bearer {env:OVERFLOW_PRO_KEY}"\n      },\n      "enabled": true\n    }\n  }\n}',
    note: '写入项目根目录的 opencode.json。',
  },
]

const tools = [
  {
    name: 'list_sets',
    desc: '列出图标、插画与立体画的全部系列和分类，并标明当前密钥能打开哪些。适合先看目录，再决定搜什么。',
    args: '无参数',
  },
  {
    name: 'search_drawings',
    desc: '按画面内容检索全部 1,826 张画。支持中文与英文关键词，返回 id、类型和是否属于免费部分。',
    args: 'query, type?, limit?',
  },
  {
    name: 'get_drawings',
    desc: '一次取回最多 20 张画。图标与多数立体画静帧返回 SVG 或 JSX；插画与较大的动态立体画返回下载链接，15 分钟内有效。',
    args: 'ids, format?',
  },
]

function McpPage() {
  const [active, setActive] = useState(clients[0].id)
  const [withProKey, setWithProKey] = useState(false)
  const [copied, setCopied] = useState(false)
  const current = clients.find((c) => c.id === active) ?? clients[0]
  const codeText = withProKey ? current.cmdPro : current.cmd

  const copy = async () => {
    if (await copyText(codeText)) {
      setCopied(true)
      showToast(`已复制 ${current.label} ${withProKey ? 'Pro ' : ''}配置`)
      setTimeout(() => setCopied(false), 1600)
    }
  }

  return (
    <>
      <PageIntro
        eyebrow="MCP 服务"
        title="让你的代码助手认得每一张画"
        lead="把 Overflow MCP 服务接到 Claude Code、Cursor、Codex 或任何其他助手。它按画面内容检索全部 1,826 张画，把合适的那张以 SVG、JSX 或文件的形式取回来。"
        facts={[
          { k: '协议', v: 'MCP · HTTP' },
          { k: '可检索', v: '1,826 张' },
          { k: '免费部分', v: '无需密钥' },
          { k: 'Pro 速率', v: '30 张 / 分钟' },
        ]}
      />

      <section className="border-b border-line">
        <div className="wrap py-16">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl font-semibold md:text-2xl">客户端接入</h2>
                  <button
                    type="button"
                    onClick={() => setWithProKey((v) => !v)}
                    aria-pressed={withProKey}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-300 ease-spring ${
                      withProKey
                        ? 'border-accent bg-accent-soft text-accent'
                        : 'border-line bg-white text-ink-soft hover:bg-wash'
                    }`}
                  >
                    {withProKey ? '已启用 Pro 密钥模板' : '切换为 Pro 密钥模板'}
                  </button>
                </div>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                  选你正在用的助手，复制配置即可。免费部分（310 张画）不需要配置任何密钥。
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {clients.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setActive(c.id)}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-300 ease-spring ${
                        active === c.id
                          ? 'border-ink bg-ink text-white'
                          : 'border-line bg-white text-ink-soft hover:bg-wash'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>

                <div className="card mt-4 overflow-hidden">
                  <div className="flex items-center justify-between border-b border-line bg-wash px-4 py-2.5">
                    <span className="font-mono text-xs text-muted">
                      {current.label} {withProKey ? '· Pro 授权' : '· 免费直连'}
                    </span>
                    <button
                      type="button"
                      onClick={copy}
                      className="flex items-center gap-1.5 rounded-md border border-line bg-white px-2.5 py-1 text-xs font-medium text-ink-soft transition-colors hover:bg-wash"
                    >
                      {copied ? (
                        <IconCheck className="size-3.5 text-accent" />
                      ) : (
                        <IconCopy className="size-3.5" />
                      )}
                      {copied ? '已复制' : '复制配置'}
                    </button>
                  </div>
                  <pre className="overflow-x-auto bg-ink p-4 font-mono text-xs leading-relaxed text-[#e8e8e8]">
                    {codeText}
                  </pre>
                </div>
                <p className="mt-2.5 text-xs text-muted">{current.note}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold md:text-2xl">三个工具</h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                  先看目录，再找，再取。三个动作职责清晰，代码助手会根据上下文自己决定调用顺序。
                </p>

                <div className="mt-6 space-y-3">
                  {tools.map((t) => (
                    <div key={t.name} className="card p-5">
                      <div className="flex items-center gap-2">
                        <IconCode className="size-4 text-accent" />
                        <code className="font-mono text-sm font-semibold">{t.name}</code>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.desc}</p>
                      <p className="mt-3 border-t border-line-soft pt-2.5 font-mono text-xs text-muted">
                        参数：{t.args}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-line bg-wash p-5">
                  <p className="text-sm leading-relaxed text-ink-soft">
                    <span className="font-semibold text-ink">带上 Pro 密钥：</span>
                    在配置里加入请求头
                    <code className="mx-1 rounded bg-white px-1.5 py-0.5 font-mono text-xs text-ink">
                      Authorization: Bearer &lt;你的密钥&gt;
                    </code>
                    ，即可检索并下载全部 1,826 张画。每个密钥速率上限为每分钟 30 张 Pro 素材。
                  </p>
                  <a
                    href="https://www.overflow.design/mcp/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    阅读原站 MCP 文档 ↗
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap py-16">
          <Reveal>
            <h2 className="text-xl font-semibold md:text-2xl">一段真实的调用过程</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
              下面是接上服务之后，Claude Code 找到一张日历图标并放进表单组件的过程。
            </p>

            <div className="card mt-6 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-line bg-wash/60 px-4 py-3">
                <IconTerminal className="size-4 text-muted" />
                <span className="text-xs font-medium text-muted">Claude Code · Overflow MCP</span>
              </div>
              <div className="space-y-3 p-4 font-mono text-xs leading-relaxed">
                <p className="rounded-lg border border-line bg-wash px-3.5 py-2.5 font-sans text-sm text-ink">
                  「在日期字段旁边加一个 Overflow 的日历图标。」
                </p>
                <div className="rounded-lg border border-line px-3.5 py-3">
                  <div className="tabular flex items-center justify-between text-xs text-muted">
                    <span>search_drawings</span>
                    <span>246 ms</span>
                  </div>
                  <div className="mt-1.5 text-ink-soft">
                    query: <span className="text-ink">"日历"</span>
                  </div>
                  <div className="mt-2 space-y-1 border-t border-line-soft pt-2">
                    {[
                      { n: '日历', p: 'isometric/48/calendar', t: '免费' },
                      { n: '日历', p: 'icon/calendar', t: '完整版' },
                      { n: '日历', p: 'illustration/notion-club/calendar', t: '完整版' },
                      { n: '方形日历', p: 'icon/calendar-square', t: '免费' },
                    ].map((r) => (
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
                    <span>115 ms</span>
                  </div>
                  <div className="mt-1.5 text-ink-soft">
                    ids: <span className="text-ink">["icon/calendar-square"]</span>
                  </div>
                </div>
                <p className="font-sans text-xs leading-relaxed text-ink-soft">
                  已在日期字段旁加入 ni-calendar-square.svg，尺寸 16px，与标签基线对齐。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
