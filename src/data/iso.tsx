import type { ReactNode } from 'react'
import {
  IsoStack,
  IsoServer,
  IsoChart,
  IsoBoxes,
  IsoDesk,
  IsoPhone,
  IsoGlobe,
  IsoLayers,
  IsoPipeline,
  IsoDatabase,
  IsoShield,
  IsoKanban,
} from '../components/art/Isometric'

export type IsoScene = {
  id: string
  name: string
  path: string
  free: boolean
  desc: string
  keywords: string[]
  art: ReactNode
}

export const isoScenes: IsoScene[] = [
  {
    id: 'stack',
    name: '层叠卡片',
    path: 'isometric/stack',
    free: true,
    desc: '两叠错开的卡片，用来表示图层、数据块或者一组可拖动的元素。',
    keywords: ['卡', '卡片', '层叠', 'stack', 'cards', '图层'],
    art: <IsoStack className="h-full w-full" />,
  },
  {
    id: 'server',
    name: '服务器机箱',
    path: 'isometric/server',
    free: true,
    desc: '两台叠放的机箱，适合基础设施、部署与托管服务的说明。',
    keywords: ['服务器', '机箱', 'server', 'rack', '部署', 'infra'],
    art: <IsoServer className="h-full w-full" />,
  },
  {
    id: 'chart',
    name: '柱状图',
    path: 'isometric/chart',
    free: true,
    desc: '一组高低不一的柱子，给增长、营收和用量报告一个立体的入口。',
    keywords: ['图表', '柱状图', 'chart', 'growth', '数据', '增长'],
    art: <IsoChart className="h-full w-full" />,
  },
  {
    id: 'boxes',
    name: '纸箱',
    path: 'isometric/boxes',
    free: true,
    desc: '两个开着口的纸箱，适合运输、仓储、打包和电商履约。',
    keywords: ['纸箱', '箱子', 'box', 'package', '物流', '仓储'],
    art: <IsoBoxes className="h-full w-full" />,
  },
  {
    id: 'desk',
    name: '工作台',
    path: 'isometric/desk',
    free: true,
    desc: '一张等距工作台，显示器、键盘和便签都在属于自己的位置上。',
    keywords: ['工作台', '桌子', 'desk', 'workspace', '办公', '远程'],
    art: <IsoDesk className="h-full w-full" />,
  },
  {
    id: 'pipeline',
    name: '流水线',
    path: 'isometric/pipeline',
    free: true,
    desc: '三个相连的阶段模块，用来表达构建流水线、队列或自动化步骤。',
    keywords: ['流水线', '队列', 'pipeline', 'workflow', 'ci', '构建'],
    art: <IsoPipeline className="h-full w-full" />,
  },
  {
    id: 'database',
    name: '数据库簇',
    path: 'isometric/database',
    free: false,
    desc: '三层叠放的数据存储节点，适合备份、缓存层与数据库架构图。',
    keywords: ['数据库', '存储', 'database', 'sql', 'cache', '缓存'],
    art: <IsoDatabase className="h-full w-full" />,
  },
  {
    id: 'shield',
    name: '安全网关',
    path: 'isometric/shield',
    free: true,
    desc: '立在底座上的防护盾牌，用于权限校验、合规与数据安全说明。',
    keywords: ['安全', '防护', 'shield', 'security', 'auth', '权限'],
    art: <IsoShield className="h-full w-full" />,
  },
  {
    id: 'phone',
    name: '手机',
    path: 'isometric/phone',
    free: false,
    desc: '斜放的手机与一块操作界面，用来说明移动端或通知流程。',
    keywords: ['手机', '移动端', 'phone', 'mobile', 'app', '通知'],
    art: <IsoPhone className="h-full w-full" />,
  },
  {
    id: 'globe',
    name: '地球',
    path: 'isometric/globe',
    free: false,
    desc: '一张带经纬线的地球，适合全球部署、时区与国际化相关的内容。',
    keywords: ['地球', '全球', 'globe', 'world', '国际', '部署'],
    art: <IsoGlobe className="h-full w-full" />,
  },
  {
    id: 'layers',
    name: '图层',
    path: 'isometric/layers',
    free: false,
    desc: '两层薄薄的平面叠在一起，表示层级、权限或者一个设计系统。',
    keywords: ['图层', '层级', 'layers', 'stack', '设计系统'],
    art: <IsoLayers className="h-full w-full" />,
  },
  {
    id: 'kanban',
    name: '看板墙',
    path: 'isometric/kanban',
    free: false,
    desc: '立面上的三列任务卡片，适合项目排期、任务流转与团队协作。',
    keywords: ['看板', '任务', 'kanban', 'board', 'project', '排期'],
    art: <IsoKanban className="h-full w-full" />,
  },
]
