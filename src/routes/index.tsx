import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '../pages/HomePage'
import { seo } from '../lib/seo'

export const Route = createFileRoute('/')({
  head: () =>
    seo(
      'Overflow Design 中文站 · 手绘图标与插画',
      '1,120 个图标、457 张插画与 249 张立体画，全部出自同一只手。提供 SVG、PNG 与 Figma 源文件，可用于网站、应用、演示、文档和 Notion 页面。',
    ),
  component: HomePage,
})