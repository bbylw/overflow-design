import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import appCss from '../styles/app.css?url'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { HashScroller } from '../components/HashScroller'
import { Toast, useToast } from '../components/ui/Toast'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Overflow Design 中文站 · 手绘图标与插画',
      },
      {
        name: 'description',
        content:
          '1,120 个图标、457 张插画与 249 张立体画，全部出自同一只手。提供 SVG、PNG 与 Figma 源文件，可用于网站、应用、演示、文档和 Notion 页面。',
      },
      { property: 'og:site_name', content: 'Overflow Design 中文站' },
      { property: 'og:locale', content: 'zh_CN' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    links: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Geist:wght@400;500;600;700&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  const toast = useToast()

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-120 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-white"
      >
        跳到正文
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <HashScroller />
      <Toast message={toast.message} />
    </div>
  )
}

function NotFound() {
  return (
    <div className="wrap flex min-h-[60dvh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-semibold">这一页还没画出来</h1>
      <p className="mt-3 max-w-md text-base text-muted">
        链接可能已经改过名字。回到首页，或者从下面的入口重新找。
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link to="/" className="btn btn-primary">
          回到首页
        </Link>
        <Link to="/icons" className="btn btn-ghost">
          浏览图标
        </Link>
        <Link to="/illustrations" className="btn btn-ghost">
          浏览插画
        </Link>
      </div>
      <p className="mt-6 text-xs text-muted">
        也可以按{' '}
        <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-xs">
          ⌘K
        </kbd>{' '}
        搜索全部内容
      </p>
    </div>
  )
}
