import type { ComponentType } from 'react'
import {
  IconCalendar, IconSearch, IconUser, IconMail, IconFolder, IconChart,
  IconSettings, IconLock, IconGlobe, IconCloud, IconStar, IconHeart,
  IconBell, IconCart, IconBox, IconLayers, IconPen, IconCode, IconDownload,
  IconArrowRight, IconCheck, IconCopy, IconGrid, IconBook, IconClock,
  IconSparkle, IconCamera, IconMap, IconMic, IconPlay, IconShield,
  IconTag, IconWand, IconTerminal, IconHome, IconFilter, IconLink,
  IconRefresh, IconCreditCard, IconArchive, IconBookmark, IconUsers,
  IconSmile, IconChat, IconDatabase, IconCpu, IconImage, IconPalette,
} from '../components/art/Icons'
import type { IconProps } from '../components/art/Icons'

export type IconComponent = ComponentType<IconProps>

export type Glyph = {
  name: string
  cn: string
  free?: boolean
  keywords: string[]
  El: IconComponent
}

export type GlyphGroup = {
  id: string
  title: string
  note: string
  items: Glyph[]
}

export const iconGroups: GlyphGroup[] = [
  {
    id: 'interface',
    title: '界面',
    note: '导航、搜索与基础控件',
    items: [
      { name: 'search', cn: '搜索', free: true, keywords: ['find', 'lookup', '放大镜', '查找'], El: IconSearch },
      { name: 'home', cn: '首页', free: true, keywords: ['house', 'main', '主页', '房子'], El: IconHome },
      { name: 'settings', cn: '设置', free: true, keywords: ['gear', 'config', '齿轮', '配置'], El: IconSettings },
      { name: 'grid', cn: '网格', free: true, keywords: ['layout', 'table', '布局', '表格'], El: IconGrid },
      { name: 'layers', cn: '图层', free: false, keywords: ['stack', 'layer', '堆叠', '层级'], El: IconLayers },
      { name: 'filter', cn: '筛选', free: false, keywords: ['funnel', 'sort', '过滤', '漏斗'], El: IconFilter },
      { name: 'link', cn: '链接', free: true, keywords: ['url', 'chain', '超链接', '分享'], El: IconLink },
      { name: 'refresh', cn: '刷新', free: false, keywords: ['reload', 'sync', '同步', '更新'], El: IconRefresh },
      { name: 'terminal', cn: '终端', free: false, keywords: ['command', 'shell', '命令行', '代码'], El: IconTerminal },
      { name: 'copy', cn: '复制', free: true, keywords: ['duplicate', 'clone', '拷贝'], El: IconCopy },
      { name: 'check', cn: '完成', free: true, keywords: ['done', 'success', '对勾', '成功'], El: IconCheck },
      { name: 'arrow-right', cn: '箭头', free: true, keywords: ['next', 'forward', '下一步', '向右'], El: IconArrowRight },
    ],
  },
  {
    id: 'objects',
    title: '事物',
    note: '日常物件、文件与商业',
    items: [
      { name: 'calendar', cn: '日历', free: true, keywords: ['date', 'schedule', '日期', '日程'], El: IconCalendar },
      { name: 'mail', cn: '邮件', free: true, keywords: ['email', 'envelope', 'inbox', '信封', '消息'], El: IconMail },
      { name: 'folder', cn: '文件夹', free: true, keywords: ['directory', 'files', '目录', '归档'], El: IconFolder },
      { name: 'archive', cn: '归档', free: false, keywords: ['box', 'storage', '存档', '收纳'], El: IconArchive },
      { name: 'box', cn: '纸箱', free: true, keywords: ['package', 'parcel', 'shipping', '包裹', '快递'], El: IconBox },
      { name: 'cart', cn: '购物车', free: false, keywords: ['shopping', 'buy', 'store', '购买', '电商'], El: IconCart },
      { name: 'credit-card', cn: '银行卡', free: false, keywords: ['payment', 'card', 'billing', '支付', '账单'], El: IconCreditCard },
      { name: 'tag', cn: '标签', free: true, keywords: ['price', 'label', 'discount', '价格', '折扣'], El: IconTag },
      { name: 'bookmark', cn: '书签', free: true, keywords: ['save', 'mark', '收藏', '标记'], El: IconBookmark },
      { name: 'book', cn: '文档', free: true, keywords: ['doc', 'read', 'page', '文档', '阅读'], El: IconBook },
      { name: 'camera', cn: '相机', free: false, keywords: ['photo', 'picture', 'shot', '照片', '摄影'], El: IconCamera },
    ],
  },
  {
    id: 'people',
    title: '人',
    note: '身份、沟通与情绪',
    items: [
      { name: 'user', cn: '用户', free: true, keywords: ['person', 'profile', 'avatar', 'account', '头像', '账户'], El: IconUser },
      { name: 'users', cn: '团队', free: false, keywords: ['team', 'group', 'members', '成员', '协作'], El: IconUsers },
      { name: 'chat', cn: '对话', free: true, keywords: ['message', 'comment', 'talk', '消息', '评论'], El: IconChat },
      { name: 'smile', cn: '表情', free: true, keywords: ['emoji', 'happy', 'face', '笑脸', '反馈'], El: IconSmile },
      { name: 'heart', cn: '喜欢', free: true, keywords: ['like', 'love', 'favorite', '爱心', '收藏'], El: IconHeart },
      { name: 'star', cn: '收藏', free: true, keywords: ['favorite', 'rating', 'bookmark', '星标', '评分'], El: IconStar },
      { name: 'bell', cn: '通知', free: true, keywords: ['notification', 'alert', 'reminder', '提醒', '铃铛'], El: IconBell },
      { name: 'mic', cn: '录音', free: false, keywords: ['voice', 'audio', 'microphone', '语音', '麦克风'], El: IconMic },
      { name: 'sparkle', cn: '亮点', free: true, keywords: ['magic', 'ai', 'new', '闪光', '智能'], El: IconSparkle },
    ],
  },
  {
    id: 'tech',
    title: '技术与数据',
    note: '开发、安全与基础设施',
    items: [
      { name: 'code', cn: '代码', free: true, keywords: ['developer', 'programming', 'dev', '开发', '编程'], El: IconCode },
      { name: 'database', cn: '数据库', free: false, keywords: ['db', 'sql', 'storage', '数据', '存储'], El: IconDatabase },
      { name: 'cpu', cn: '芯片', free: false, keywords: ['hardware', 'compute', 'ai', '算力', '处理器'], El: IconCpu },
      { name: 'chart', cn: '图表', free: true, keywords: ['data', 'analytics', 'growth', '数据', '分析', '增长'], El: IconChart },
      { name: 'globe', cn: '全球', free: true, keywords: ['world', 'language', 'international', '世界', '语言', '国际'], El: IconGlobe },
      { name: 'cloud', cn: '云', free: true, keywords: ['storage', 'server', 'weather', '存储', '服务'], El: IconCloud },
      { name: 'shield', cn: '安全', free: false, keywords: ['security', 'protect', 'privacy', '防护', '隐私'], El: IconShield },
      { name: 'lock', cn: '锁定', free: true, keywords: ['password', 'private', 'secure', '密码', '隐私'], El: IconLock },
      { name: 'map', cn: '地图', free: false, keywords: ['location', 'place', 'navigation', '位置', '导航'], El: IconMap },
      { name: 'clock', cn: '时间', free: true, keywords: ['time', 'timer', 'later', '时钟', '稍后'], El: IconClock },
    ],
  },
  {
    id: 'create',
    title: '创作',
    note: '画笔、媒体与导出',
    items: [
      { name: 'pen', cn: '画笔', free: true, keywords: ['edit', 'write', 'draw', '编辑', '写作', '铅笔'], El: IconPen },
      { name: 'palette', cn: '调色盘', free: false, keywords: ['color', 'theme', 'style', '色彩', '主题'], El: IconPalette },
      { name: 'image', cn: '图片', free: true, keywords: ['photo', 'gallery', 'media', '画廊', '图像'], El: IconImage },
      { name: 'wand', cn: '魔法', free: false, keywords: ['magic', 'generate', 'sparkle', '生成', '智能'], El: IconWand },
      { name: 'play', cn: '播放', free: true, keywords: ['video', 'start', 'media', '视频', '开始'], El: IconPlay },
      { name: 'download', cn: '下载', free: true, keywords: ['save', 'export', '保存', '导出'], El: IconDownload },
    ],
  },
]

export const allIcons = iconGroups.flatMap((group) =>
  group.items.map((item) => ({ ...item, group: group.title, groupId: group.id })),
)

export type FlatGlyph = (typeof allIcons)[number]

export function findGlyph(name: string | undefined) {
  if (!name) return undefined
  return allIcons.find((item) => item.name === name)
}
