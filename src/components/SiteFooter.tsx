import { Link } from '@tanstack/react-router'

const cols = [
  {
    title: '画集',
    items: [
      { label: '立体画', to: '/isometric', hash: undefined },
      { label: '图标', to: '/icons', hash: undefined },
      { label: '全部插画', to: '/illustrations', hash: undefined },
      { label: '办公室系列', to: '/illustrations', hash: 'set-office-club' },
      { label: '通用系列', to: '/illustrations', hash: 'set-notion-club' },
      { label: '电子商务系列', to: '/illustrations', hash: 'set-ecommerce-club' },
    ],
  },
  {
    title: '工具与更新',
    items: [
      { label: '免费素材包', to: '/free', hash: undefined },
      { label: 'Figma 插件', to: '/figma-plugin', hash: undefined },
      { label: 'MCP 服务', to: '/mcp', hash: undefined },
      { label: '新画了什么', to: '/whats-new', hash: undefined },
    ],
  },
  {
    title: '说明与授权',
    items: [
      { label: '使用与格式', to: '/about', hash: undefined },
      { label: '授权范围', to: '/about', hash: 'license-scope' },
      { label: '常见问题', to: '/free', hash: 'free-faq' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="wrap grid gap-10 pt-14 pb-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-full border border-ink">
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
                <path
                  d="M20 12a8 8 0 1 1-8-8"
                  fill="none"
                  stroke="#0a0a0a"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-base font-semibold">Overflow Design</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            1,120 个图标、457 张插画与 249 张立体画，全部出自同一只手。中文站依据公开信息整理。
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[
              { label: 'X (@zafarlab)', href: 'https://x.com/zafarlab' },
              { label: 'GitHub', href: 'https://github.com/Mr-Zafar' },
              {
                label: 'Figma 社区',
                href: 'https://www.figma.com/community/plugin/1687128231376306385/overflow-icons-illustrations',
              },
              { label: 'overflow.design', href: 'https://www.overflow.design/' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="inline-flex h-8 items-center justify-center rounded-lg border border-line px-3 text-xs font-medium text-muted transition-colors duration-300 ease-spring hover:border-ink-soft hover:text-ink"
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="text-xs font-semibold tracking-wider text-muted">
              {c.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {c.items.map((it) => (
                <li key={it.label}>
                  <Link
                    to={it.to}
                    hash={it.hash}
                    className="text-sm text-ink-soft transition-colors duration-300 ease-spring hover:text-ink"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line-soft">
        <div className="wrap flex flex-col items-start justify-between gap-4 py-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>© 2026 Overflow Design · 中文站为非商业信息整理，版权归原作者所有</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/about" className="transition-colors hover:text-ink">
              使用条款与说明
            </Link>
            <a
              href="https://www.overflow.design/license/"
              className="transition-colors hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              原站授权协议
            </a>
            <a
              href="https://www.overflow.design/privacy/"
              className="transition-colors hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              隐私政策
            </a>
            <a
              href="https://www.overflow.design/"
              className="font-medium text-ink-soft underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              overflow.design ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
