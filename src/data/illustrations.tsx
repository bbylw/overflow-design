import type { ReactNode } from 'react'
import {
  ArtDeskWork,
  ArtMeeting,
  ArtShipping,
  ArtReading,
  ArtCheckout,
  ArtIdea,
  ArtLibrary,
  ArtReview,
  ArtDeadline,
  ArtNotebook,
  ArtRefund,
} from '../components/art/Illustrations'

export type IllustrationPiece = {
  id: string
  cn: string
  free?: boolean
  keywords: string[]
  art: ReactNode
}

export type IllustrationSet = {
  id: string
  title: string
  slug: string
  count: number
  desc: string
  keywords: string[]
  pieces: IllustrationPiece[]
}

export const illustrationSets: IllustrationSet[] = [
  {
    id: 'office',
    title: '办公室系列',
    slug: 'office-club',
    count: 151,
    desc: '办公桌、会议、截止日期，以及职场里那些小小的难堪。画给以文字为主的文档：报告、周报、内部说明。',
    keywords: ['办公室', '职场', 'office', 'work', '会议', '报告'],
    pieces: [
      {
        id: 'desk-work',
        cn: '在桌前工作',
        free: true,
        keywords: ['工作', '办公桌', 'desk', 'work', '电脑', '远程'],
        art: <ArtDeskWork className="h-full w-full" />,
      },
      {
        id: 'meeting',
        cn: '围着白板讨论',
        free: true,
        keywords: ['会议', '白板', 'meeting', '讨论', '协作'],
        art: <ArtMeeting className="h-full w-full" />,
      },
      {
        id: 'deadline',
        cn: '截止日期前',
        free: false,
        keywords: ['截止', '日程', '时钟', 'deadline', 'calendar', '排期'],
        art: <ArtDeadline className="h-full w-full" />,
      },
      {
        id: 'review',
        cn: '围桌复盘',
        free: false,
        keywords: ['复盘', 'review', '会议', '图表', '数据'],
        art: <ArtReview className="h-full w-full" />,
      },
    ],
  },
  {
    id: 'notion',
    title: '通用系列',
    slug: 'notion-club',
    count: 150,
    desc: '人物、物件与想法。为 Notion 页面顶部而画，尺寸和重量都不会盖过正文的声音。',
    keywords: ['通用', 'notion', '页面', '文档', '想法'],
    pieces: [
      {
        id: 'idea',
        cn: '构思与灵感',
        free: true,
        keywords: ['想法', '构思', 'idea', '灯泡', '灵感'],
        art: <ArtIdea className="h-full w-full" />,
      },
      {
        id: 'reading',
        cn: '读一份长文档',
        free: true,
        keywords: ['阅读', '文档', 'reading', '报告', '长文'],
        art: <ArtReading className="h-full w-full" />,
      },
      {
        id: 'notebook',
        cn: '整理笔记',
        free: false,
        keywords: ['笔记', '归档', 'notebook', 'notes', '文档', '知识库'],
        art: <ArtNotebook className="h-full w-full" />,
      },
      {
        id: 'library',
        cn: '在架上挑选',
        free: false,
        keywords: ['挑选', '书架', 'library', '选择', '素材'],
        art: <ArtLibrary className="h-full w-full" />,
      },
    ],
  },
  {
    id: 'ecommerce',
    title: '电子商务系列',
    slug: 'ecommerce-club',
    count: 156,
    desc: '购物车、结账、配送与退款。一次购买的完整形状，包括出错的那一部分。',
    keywords: ['电商', '购物', 'ecommerce', '结账', '配送', '退款'],
    pieces: [
      {
        id: 'checkout',
        cn: '结账与支付',
        free: true,
        keywords: ['结账', '付款', 'checkout', '支付', '收银'],
        art: <ArtCheckout className="h-full w-full" />,
      },
      {
        id: 'shipping',
        cn: '打包与发货',
        free: true,
        keywords: ['发货', '配送', 'shipping', '物流', '快递', '纸箱'],
        art: <ArtShipping className="h-full w-full" />,
      },
      {
        id: 'refund',
        cn: '退换货处理',
        free: false,
        keywords: ['退款', '退货', '换货', 'refund', 'return', '售后'],
        art: <ArtRefund className="h-full w-full" />,
      },
      {
        id: 'browse',
        cn: '挑选商品',
        free: false,
        keywords: ['挑选', '商品', 'browse', '购物', '货架'],
        art: <ArtLibrary className="h-full w-full" />,
      },
    ],
  },
]
