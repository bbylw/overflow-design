import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { IconBox, IconStar, IconLayers, IconArrowRight, IconSearch } from './art/Icons'
import { CommandPalette } from './CommandPalette'

const moreItems = [
  { label: '免费素材包', to: '/free', desc: '194 个图标、45 张插画与 71 张立体画' },
  { label: 'Figma 插件', to: '/figma-plugin', desc: '在 Figma 和 FigJam 里搜索并拖入' },
  { label: 'MCP 服务', to: '/mcp', desc: '让你的代码助手直接调用素材' },
  { label: '新画了什么', to: '/whats-new', desc: '最近加入的图标与插画' },
  { label: '使用说明', to: '/about', desc: '格式、尺寸与授权范围' },
]

export function SiteHeader() {
  const [openMore, setOpenMore] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const isMoreActive = moreItems.some((item) => item.to === location.pathname)

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpenMore(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  useEffect(() => {
    setOpenMore(false)
    setOpenMobile(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      const typing =
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.isContentEditable === true

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpenSearch((value) => !value)
        setOpenMore(false)
        setOpenMobile(false)
        return
      }

      if (event.key === '/' && !typing) {
        event.preventDefault()
        setOpenSearch(true)
        setOpenMore(false)
        setOpenMobile(false)
        return
      }

      if (event.key === 'Escape') {
        setOpenMore(false)
        setOpenMobile(false)
      }
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
        <header className="mx-auto max-w-300 rounded-2xl border border-line bg-white/88 backdrop-blur-md shadow-[0_2px_8px_rgba(19,18,9,0.04)]">
          <div className="flex h-14 items-center justify-between gap-4 px-4 sm:px-5">
            <Link to="/" className="flex shrink-0 items-center gap-2">
              <span className="grid size-8 place-items-center rounded-full border border-ink bg-white">
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
              <span className="text-sm font-semibold tracking-tight text-ink">
                Overflow Design
              </span>
            </Link>

            <nav aria-label="主导航" className="hidden items-center gap-1 md:flex">
              <NavLink to="/isometric" icon={<IconBox className="size-4" />} label="立体画" />
              <NavLink to="/icons" icon={<IconStar className="size-4" />} label="图标" />
              <NavLink
                to="/illustrations"
                icon={<IconLayers className="size-4" />}
                label="插画"
              />

              <div className="relative" ref={ref}>
                <button
                  type="button"
                  onClick={() => setOpenMore((v) => !v)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-300 ease-spring ${
                    openMore || isMoreActive
                      ? 'bg-wash text-ink'
                      : 'text-ink-soft hover:bg-wash hover:text-ink'
                  }`}
                  aria-expanded={openMore}
                  aria-haspopup="menu"
                >
                  更多
                  <svg viewBox="0 0 12 12" className="size-3" aria-hidden>
                    <path
                      d="M2.5 4.5 6 8l3.5-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      className={`transition-transform duration-300 ease-spring ${
                        openMore ? 'rotate-180' : ''
                      }`}
                      style={{ transformOrigin: 'center' }}
                    />
                  </svg>
                </button>
                {openMore && (
                  <div
                    role="menu"
                    className="modal-in absolute right-0 top-full mt-2 w-72 rounded-2xl border border-line bg-white p-2 shadow-[0_4px_12px_rgba(19,18,9,0.06),0_20px_40px_-16px_rgba(19,18,9,0.16)]"
                  >
                    {moreItems.map((it) => {
                      const active = location.pathname === it.to
                      return (
                        <Link
                          key={it.to}
                          to={it.to}
                          role="menuitem"
                          onClick={() => setOpenMore(false)}
                          className={`flex flex-col gap-0.5 rounded-lg px-3 py-2 transition-colors duration-300 ease-spring ${
                            active ? 'bg-wash text-ink' : 'hover:bg-wash'
                          }`}
                        >
                          <span className="text-sm font-medium text-ink">{it.label}</span>
                          <span className="text-xs text-muted">{it.desc}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpenSearch(true)}
                className="hidden items-center gap-2 rounded-lg border border-line bg-white px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-300 ease-spring hover:bg-wash hover:text-ink lg:flex"
                aria-label="站内搜索"
              >
                <IconSearch className="size-4" />
                <span>搜索</span>
                <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-xs text-muted">
                  ⌘K
                </kbd>
              </button>
              <button
                type="button"
                onClick={() => setOpenSearch(true)}
                className="grid size-9 place-items-center rounded-lg border border-line bg-white text-ink-soft transition-colors duration-300 ease-spring hover:bg-wash hover:text-ink lg:hidden"
                aria-label="站内搜索"
              >
                <IconSearch className="size-4" />
              </button>
              <Link to="/free" className="btn btn-primary hidden sm:inline-flex">
                免费素材包
                <IconArrowRight className="size-4" />
              </Link>
              <button
                type="button"
                onClick={() => setOpenMobile((v) => !v)}
                className="grid size-9 place-items-center rounded-lg border border-line bg-white text-ink transition-colors duration-300 ease-spring hover:bg-wash md:hidden"
                aria-label={openMobile ? '关闭菜单' : '打开菜单'}
                aria-expanded={openMobile}
              >
                <span className="relative block h-3.5 w-4">
                  <span
                    className={`absolute left-0 h-[1.5px] w-4 rounded-full bg-current transition-transform duration-300 ease-spring ${
                      openMobile ? 'top-1.5 rotate-45' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 h-[1.5px] w-4 rounded-full bg-current transition-opacity duration-300 ease-spring ${
                      openMobile ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-[1.5px] w-4 rounded-full bg-current transition-transform duration-300 ease-spring ${
                      openMobile ? 'top-1.5 -rotate-45' : 'top-3'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {openMobile && (
        <div className="fixed inset-x-0 top-17 bottom-0 z-40 overflow-y-auto bg-white/95 backdrop-blur-lg md:hidden">
          <div className="wrap flex min-h-full flex-col justify-between py-6">
            <div className="grid gap-1">
              {[
                { to: '/isometric', label: '立体画', desc: '249 张等距场景，71 张免费' },
                { to: '/icons', label: '图标', desc: '1,120 个手绘图标，24×24 网格' },
                { to: '/illustrations', label: '插画', desc: '457 张，三个系列' },
                ...moreItems,
              ].map((it, idx) => {
                const active = location.pathname === it.to
                return (
                  <Link
                    key={it.to}
                    to={it.to}
                    onClick={() => setOpenMobile(false)}
                    style={{ animationDelay: `${Math.min(idx * 45, 320)}ms` }}
                    className={`mobile-link-in flex items-center justify-between rounded-xl px-4 py-3 transition-colors duration-300 ease-spring ${
                      active ? 'bg-wash font-semibold text-ink' : 'hover:bg-wash'
                    }`}
                  >
                    <div>
                      <span className="block text-base font-medium text-ink">{it.label}</span>
                      <span className="block text-xs text-muted">{it.desc}</span>
                    </div>
                    <IconArrowRight className="size-4 text-muted" />
                  </Link>
                )
              })}
            </div>

            <div className="mt-6 border-t border-line pt-4">
              <Link
                to="/free"
                onClick={() => setOpenMobile(false)}
                className="btn btn-primary btn-lg w-full"
              >
                获取免费素材包
                <IconArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <CommandPalette open={openSearch} onClose={() => setOpenSearch(false)} />
    </>
  )
}

function NavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors duration-300 ease-spring hover:bg-wash hover:text-ink"
      activeProps={{ className: 'bg-wash text-ink font-semibold' }}
    >
      <span className="text-ink">{icon}</span>
      {label}
    </Link>
  )
}
