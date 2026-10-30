export type IconTone = 'regular' | 'duotone'

export type IconProps = {
  className?: string
  strokeWidth?: number
  tone?: IconTone
  style?: React.CSSProperties
}

const DUOTONE_FILL = '#e2572b'
const DUOTONE_OPACITY = 0.16

const base = (className?: string, style?: React.CSSProperties) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
  style,
  'aria-hidden': true,
})

/* Hand-drawn line icon set. Original artwork, 24x24 grid, 1.5 stroke, regular + duotone. */

export const IconCalendar = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <path
        d="M4.2 7.4c0-1 .8-1.6 1.8-1.6 3.9-.1 8.1-.1 12 0 1 0 1.8.6 1.8 1.6v3.2H4.2V7.4Z"
        fill={DUOTONE_FILL}
        fillOpacity={0.22}
        stroke="none"
      />
    )}
    <path d="M4.2 7.4c-.1 3.9-.1 8.6 0 11.4.1 1 .8 1.6 1.8 1.6 3.9.1 8.4.1 12 0 1 0 1.7-.6 1.8-1.6.1-2.8.1-7.5 0-11.4 0-1-.8-1.6-1.8-1.6-3.6-.1-8.1-.1-12 0-1 0-1.7.6-1.8 1.6Z" />
    <path d="M4.4 10.6c4.9-.2 10.3-.2 15.2 0" />
    <path d="M8.2 3.6v3.2M15.8 3.6v3.2" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
    <path
      d="M8 14.2h.9M11.6 14.2h.9M15.2 14.2h.9M8 17.4h.9M11.6 17.4h.9"
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
    />
  </svg>
)

export const IconSearch = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <circle cx="10.9" cy="10.8" r="6.7" fill={DUOTONE_FILL} fillOpacity={DUOTONE_OPACITY} stroke="none" />
    )}
    <path d="M10.9 4.1c3.7 0 6.7 3 6.7 6.7s-3 6.7-6.7 6.7-6.7-3-6.7-6.7 3-6.7 6.7-6.7Z" />
    <path d="M15.8 15.9c1.4 1.4 2.8 2.8 4.2 4.1" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconUser = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <circle cx="12" cy="7.9" r="3.9" fill={DUOTONE_FILL} fillOpacity={0.2} stroke="none" />
    )}
    <path d="M12 3.9c2.2 0 3.9 1.8 3.9 4s-1.7 4-3.9 4-3.9-1.8-3.9-4 1.7-4 3.9-4Z" />
    <path d="M4.6 20.1c.4-3.6 3.5-6.2 7.4-6.2s7 2.6 7.4 6.2" />
  </svg>
)

export const IconMail = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <path d="M4.6 7.2 12 13.3 19.4 7.2H4.6Z" fill={DUOTONE_FILL} fillOpacity={0.2} stroke="none" />
    )}
    <path d="M4.3 6.6c-.1 3.6-.1 7.4 0 10.8 0 1 .7 1.6 1.7 1.6 3.8.1 8.2.1 12 0 1 0 1.7-.6 1.7-1.6.1-3.4.1-7.2 0-10.8 0-1-.7-1.6-1.7-1.6-3.8-.1-8.2-.1-12 0-1 0-1.7.6-1.7 1.6Z" />
    <path d="M4.6 7.2c2.3 1.9 4.8 4 7.4 6.1 2.6-2.1 5.1-4.2 7.4-6.1" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconFolder = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <path
        d="M3.9 7.1c-.1 3.5-.1 7.6 0 10.4 0 1 .7 1.6 1.7 1.6 4.1.1 8.7.1 12.8 0 1 0 1.7-.6 1.7-1.6.1-2.6.1-6 0-8.4 0-1-.7-1.6-1.7-1.6-2.2-.1-4.4-.1-6.4 0-.5-1-.9-1.9-1.4-2.8-.3-.5-.7-.8-1.3-.8-1.5 0-3 0-4.4 0-1 0-1.7.6-1.7 1.6Z"
        fill={DUOTONE_FILL}
        fillOpacity={DUOTONE_OPACITY}
        stroke="none"
      />
    )}
    <path d="M3.9 7.1c-.1 3.5-.1 7.6 0 10.4 0 1 .7 1.6 1.7 1.6 4.1.1 8.7.1 12.8 0 1 0 1.7-.6 1.7-1.6.1-2.6.1-6 0-8.4 0-1-.7-1.6-1.7-1.6-2.2-.1-4.4-.1-6.4 0-.5-1-.9-1.9-1.4-2.8-.3-.5-.7-.8-1.3-.8-1.5 0-3 0-4.4 0-1 0-1.7.6-1.7 1.6Z" />
  </svg>
)

export const IconChart = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path d="M3.8 20.2c5.4.1 11 .1 16.4 0" />
    <path d="M6.6 20c-.1-2.6-.1-5.4 0-7.8M16.2 20c-.1-3-.1-6.2 0-9" />
    <path
      d="M11.4 20c-.1-4-.1-8.4 0-12.2"
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
    />
  </svg>
)

export const IconSettings = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <circle cx="12" cy="12" r="3.6" fill={DUOTONE_FILL} fillOpacity={0.22} stroke="none" />
    )}
    <path d="M12 8.4c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6-3.6-1.6-3.6-3.6 1.6-3.6 3.6-3.6Z" />
    <path d="M12 3.4v2.1M12 18.5v2.1M4.6 12H2.5M21.5 12h-2.1M6.7 6.7 5.2 5.2M18.8 18.8l-1.5-1.5M17.3 6.7l1.5-1.5M5.2 18.8l1.5-1.5" />
  </svg>
)

export const IconLock = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <rect x="5.4" y="9" width="13.2" height="11.4" rx="1.7" fill={DUOTONE_FILL} fillOpacity={DUOTONE_OPACITY} stroke="none" />
    )}
    <path d="M5.4 10.6c-.1 2.7-.1 5.8 0 8.2 0 1 .7 1.6 1.7 1.6 3.3.1 6.5.1 9.8 0 1 0 1.7-.6 1.7-1.6.1-2.4.1-5.5 0-8.2 0-1-.7-1.6-1.7-1.6-3.3-.1-6.5-.1-9.8 0-1 0-1.7.6-1.7 1.6Z" />
    <path d="M8.4 10.4V7.9c0-2 1.6-3.6 3.6-3.6s3.6 1.6 3.6 3.6v2.5" />
    <path d="M12 14.2v2.4" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconGlobe = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <circle cx="12" cy="12" r="8.1" fill={DUOTONE_FILL} fillOpacity={0.14} stroke="none" />
    )}
    <path d="M12 3.9c4.5 0 8.1 3.6 8.1 8.1s-3.6 8.1-8.1 8.1-8.1-3.6-8.1-8.1 3.6-8.1 8.1-8.1Z" />
    <path d="M3.9 12c5.4-.2 10.8-.2 16.2 0" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
    <path d="M12 3.9c2.2 2.3 3.4 5.1 3.4 8.1s-1.2 5.8-3.4 8.1c-2.2-2.3-3.4-5.1-3.4-8.1S9.8 6.2 12 3.9Z" />
  </svg>
)

export const IconCloud = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M7.4 18.4c-2.3 0-4.2-1.9-4.2-4.2 0-2.1 1.5-3.8 3.5-4.1.5-2.4 2.6-4.2 5.1-4.2 2.7 0 4.9 2 5.2 4.6 1.9.2 3.4 1.8 3.4 3.8 0 2.3-1.9 4.1-4.2 4.1Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
  </svg>
)

export const IconStar = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M12 3.8c1 2.4 2 4.9 3 7.3 2.4.2 4.9.4 7.3.7-1.9 1.6-3.8 3.3-5.6 5 .6 2.4 1.2 4.8 1.8 7.2-2.1-1.3-4.3-2.6-6.5-3.9-2.2 1.3-4.4 2.6-6.5 3.9.6-2.4 1.2-4.8 1.8-7.2-1.8-1.7-3.7-3.4-5.6-5 2.4-.3 4.9-.5 7.3-.7 1-2.4 2-4.9 3-7.3Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.18 : undefined}
    />
  </svg>
)

export const IconHeart = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M12 20.2c-3.4-2.4-6.6-5-8.1-7.9-1.4-2.7-.6-5.8 2-7 2.2-1 4.4-.2 6.1 2 1.7-2.2 3.9-3 6.1-2 2.6 1.2 3.4 4.3 2 7-1.5 2.9-4.7 5.5-8.1 7.9Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.2 : undefined}
    />
  </svg>
)

export const IconBell = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M6.4 16.6c1.1-1.3 1.4-2.9 1.4-4.9 0-2.4 1.9-4.3 4.2-4.3s4.2 1.9 4.2 4.3c0 2 .3 3.6 1.4 4.9Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
    <path d="M5.4 16.6c4.4-.1 8.8-.1 13.2 0" />
    <path d="M10.4 19.2c.4.9 1 1.3 1.6 1.3s1.2-.4 1.6-1.3" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconCart = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <path d="M7.3 6.5h13.4l-2.1 7.8H8.6L7.3 6.5Z" fill={DUOTONE_FILL} fillOpacity={DUOTONE_OPACITY} stroke="none" />
    )}
    <path d="M3.4 4.4c1.1 0 2.2 0 3.3 0 .6 3.3 1.3 6.6 1.9 9.9 3.3.1 6.6.1 9.9 0 .7-2.6 1.4-5.2 2.1-7.8-3.6-.1-7.2-.1-10.8 0" />
    <path
      d="M9.4 18.2c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2ZM16.4 18.2c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2Z"
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
    />
  </svg>
)

export const IconBox = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <path d="M12 3.6 20 8l-8 4.4L4 8l8-4.4Z" fill={DUOTONE_FILL} fillOpacity={0.22} stroke="none" />
    )}
    <path d="M12 3.6 20 8v8l-8 4.4L4 16V8l8-4.4Z" />
    <path d="M4 8l8 4.4L20 8M12 12.4v8" />
  </svg>
)

export const IconLayers = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M12 3.8 21 8.4l-9 4.6L3 8.4l9-4.6Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.2 : undefined}
    />
    <path d="M3 12.6l9 4.6 9-4.6" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
    <path d="M3 16.6l9 4.6 9-4.6" />
  </svg>
)

export const IconPen = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M16.6 3.9c1 .9 2 1.9 3 2.9-3.4 3.5-6.8 7-10.2 10.5-1.2.2-2.4.4-3.6.6.2-1.2.4-2.4.6-3.6 3.4-3.5 6.8-7 10.2-10.4Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
    <path d="M5.8 17.3c-.3 1-.6 2-1 3 1-.3 2-.6 3-1" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconCode = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path d="M8.4 7.6 3.6 12l4.8 4.4M15.6 7.6 20.4 12l-4.8 4.4" />
    <path d="M13.6 4.6l-3.2 14.8" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconTerminal = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <rect x="3.9" y="4.8" width="16.2" height="14.4" rx="1.7" fill={DUOTONE_FILL} fillOpacity={0.14} stroke="none" />
    )}
    <path d="M3.9 6.4c-.1 3.7-.1 7.5 0 11.2 0 1 .7 1.6 1.7 1.6 4.1.1 8.7.1 12.8 0 1 0 1.7-.6 1.7-1.6.1-3.7.1-7.5 0-11.2 0-1-.7-1.6-1.7-1.6-4.1-.1-8.7-.1-12.8 0-1 0-1.7.6-1.7 1.6Z" />
    <path d="M7.2 9.6 10 12l-2.8 2.4" />
    <path d="M12.4 14.8h4" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconDownload = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path d="M12 3.8v10.4M8.2 10.6 12 14.4l3.8-3.8" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
    <path d="M4.4 17.4c-.1.9-.1 1.7 0 2.4 4.9.1 10.3.1 15.2 0 .1-.7.1-1.5 0-2.4" />
  </svg>
)

export const IconArrowRight = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path d="M4.2 12c5.2-.1 10.4-.1 15.6 0" />
    <path d="M14.4 6.6 19.8 12l-5.4 5.4" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconCheck = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <circle cx="12" cy="12" r="8" fill={DUOTONE_FILL} fillOpacity={DUOTONE_OPACITY} stroke="none" />
    )}
    <path d="M4.4 12.4 9.2 17 19.6 6.8" />
  </svg>
)

export const IconCopy = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M8.6 8.4c-.1 3.2-.1 6.8 0 9.8 0 1 .7 1.6 1.7 1.6 2.7.1 5.5.1 8.2 0 1 0 1.7-.6 1.7-1.6.1-3 .1-6.6 0-9.8 0-1-.7-1.6-1.7-1.6-2.7-.1-5.5-.1-8.2 0-1 0-1.7.6-1.7 1.6Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
    <path d="M6.4 15.6c-1 0-1.7-.6-1.7-1.6-.1-3-.1-6.6 0-9.8 0-1 .7-1.6 1.7-1.6 2.7-.1 5.5-.1 8.2 0 1 0 1.7.6 1.7 1.6" />
  </svg>
)

export const IconGrid = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <rect x="4.4" y="4.4" width="15.2" height="5.2" fill={DUOTONE_FILL} fillOpacity={0.2} stroke="none" />
    )}
    <path d="M4.4 4.4c-.1 5.1-.1 10.3 0 15.2 5.1.1 10.3.1 15.2 0 .1-4.9.1-10.1 0-15.2-4.9-.1-10.1-.1-15.2 0Z" />
    <path d="M4.4 9.6c5.1-.1 10.3-.1 15.2 0M4.4 14.6c5.1-.1 10.3-.1 15.2 0M9.4 4.4c-.1 5.1-.1 10.3 0 15.2M14.6 4.4c-.1 5.1-.1 10.3 0 15.2" />
  </svg>
)

export const IconBook = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M3.8 5.4c-.1 4.4-.1 9.2 0 13.2 2.9-.5 5.7-.5 8.2 1.2 2.5-1.7 5.3-1.7 8.2-1.2.1-4 .1-8.8 0-13.2-2.9-.5-5.7-.5-8.2 1.2-2.5-1.7-5.3-1.7-8.2-1.2Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
    <path d="M12 6.6v13.2" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconClock = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <circle cx="12" cy="12" r="8.1" fill={DUOTONE_FILL} fillOpacity={DUOTONE_OPACITY} stroke="none" />
    )}
    <path d="M12 3.9c4.5 0 8.1 3.6 8.1 8.1s-3.6 8.1-8.1 8.1-8.1-3.6-8.1-8.1 3.6-8.1 8.1-8.1Z" />
    <path d="M12 7.4v4.8l3.4 2" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconSparkle = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M12 3.6c.6 3.1 1.3 6.2 1.9 9.3 1.3.2 2.6.4 3.9.6-1.3.2-2.6.4-3.9.6-.6 3.1-1.3 6.2-1.9 9.3-.6-3.1-1.3-6.2-1.9-9.3-1.3-.2-2.6-.4-3.9-.6 1.3-.2 2.6-.4 3.9-.6.6-3.1 1.3-6.2 1.9-9.3Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.22 : undefined}
    />
  </svg>
)

export const IconCamera = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path d="M4.2 8.4c-.1 2.9-.1 6.1 0 8.8 0 1 .7 1.6 1.7 1.6 4.1.1 8.1.1 12.2 0 1 0 1.7-.6 1.7-1.6.1-2.7.1-5.9 0-8.8 0-1-.7-1.6-1.7-1.6-1.3-.1-2.6-.1-3.8 0l-1.2-1.8c-2.1-.1-4.1-.1-6.2 0l-1 1.8c-1.3.1-2.6.1-3.7 0-1 0-1.7.6-1.7 1.6Z" />
    <path
      d="M12 9.6c1.9 0 3.4 1.5 3.4 3.4s-1.5 3.4-3.4 3.4-3.4-1.5-3.4-3.4 1.5-3.4 3.4-3.4Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.22 : undefined}
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
    />
  </svg>
)

export const IconMap = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M3.8 6.2c-.1 3.9-.1 8.1 0 11.6 2.7-.9 5.4-.9 8.2 0 2.8-.9 5.5-.9 8.2 0 .1-3.5.1-7.7 0-11.6-2.7-.9-5.4-.9-8.2 0-2.8-.9-5.5-.9-8.2 0Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
    <path d="M12 6.2v11.6" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconMic = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M12 3.8c1.5 0 2.7 1.2 2.7 2.7v5.4c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7V6.5c0-1.5 1.2-2.7 2.7-2.7Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.22 : undefined}
    />
    <path d="M6.6 11.4c0 3 2.4 5.4 5.4 5.4s5.4-2.4 5.4-5.4M12 16.8v3.4" />
  </svg>
)

export const IconPlay = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path d="M12 3.9c4.5 0 8.1 3.6 8.1 8.1s-3.6 8.1-8.1 8.1-8.1-3.6-8.1-8.1 3.6-8.1 8.1-8.1Z" />
    <path
      d="M10.2 8.6c1.9 1.1 3.8 2.3 5.6 3.4-1.8 1.1-3.7 2.3-5.6 3.4-.1-2.3-.1-4.5 0-6.8Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.24 : undefined}
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
    />
  </svg>
)

export const IconShield = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M12 3.6c2.3 1 4.6 1.9 6.9 2.8.1 3.6-.4 7.2-2.2 10.1-1.4 2.3-3.1 3.5-4.7 4.3-1.6-.8-3.3-2-4.7-4.3-1.8-2.9-2.3-6.5-2.2-10.1 2.3-.9 4.6-1.8 6.9-2.8Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
    <path d="M9.2 11.8 11.4 14l3.6-3.8" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconTag = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M4.2 4.2c-.1 2.6-.1 5.4 0 8 .1.5.3.9.7 1.3 2.4 2.4 4.8 4.8 7.2 7.2.8.8 1.9.8 2.7 0 1.6-1.6 3.2-3.2 4.8-4.8.8-.8.8-1.9 0-2.7-2.4-2.4-4.8-4.8-7.2-7.2-.4-.4-.8-.6-1.3-.7-2.6-.1-5.4-.1-8 0Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
    <path d="M8.2 8.2h.1" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconWand = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path d="M4.4 19.6 15.8 8.2" />
    <path
      d="M17.6 3.6v3.2M16 5.2h3.2M20.4 9.6v2.4M19.2 10.8h2.4M8.4 3.6v2.4M7.2 4.8h2.4"
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
    />
  </svg>
)

export const IconPointer = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M5.2 4.2 18.8 12l-6.2 1.6-2.4 5.8L5.2 4.2Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
    <path d="M12.9 13.7 17.2 19" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

/* 14 additional hand-drawn icons to bring the interactive library to 48 */

export const IconHome = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M4.6 10.4 12 4l7.4 6.4v8.4c0 .8-.6 1.4-1.4 1.4H6c-.8 0-1.4-.6-1.4-1.4v-8.4Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
    <path d="M9.6 20.2v-5.6c0-.6.4-1 1-1h2.8c.6 0 1 .4 1 1v5.6" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconFilter = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M3.8 5.2h16.4l-6.4 7.4v5.8l-3.6 1.8v-7.6L3.8 5.2Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
  </svg>
)

export const IconLink = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path d="M9.8 14.2 14.2 9.8" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
    <path d="M10.6 7.4 13 5c1.8-1.8 4.6-1.8 6.4 0s1.8 4.6 0 6.4l-2.4 2.4" />
    <path d="M13.4 16.6 11 19c-1.8 1.8-4.6 1.8-6.4 0s-1.8-4.6 0-6.4L7 10.2" />
  </svg>
)

export const IconRefresh = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path d="M19.6 9.4A7.8 7.8 0 0 0 6.2 6.8L4.4 8.6M4.4 4.8v3.8h3.8" />
    <path
      d="M4.4 14.6a7.8 7.8 0 0 0 13.4 2.6l1.8-1.8M19.6 19.2v-3.8h-3.8"
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
    />
  </svg>
)

export const IconCreditCard = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <rect x="3.6" y="5.6" width="16.8" height="12.8" rx="1.8" fill={DUOTONE_FILL} fillOpacity={DUOTONE_OPACITY} stroke="none" />
    )}
    <path d="M3.6 7.4c0-1 .8-1.8 1.8-1.8h13.2c1 0 1.8.8 1.8 1.8v9.2c0 1-.8 1.8-1.8 1.8H5.4c-1 0-1.8-.8-1.8-1.8V7.4Z" />
    <path d="M3.8 10.2h16.4" />
    <path d="M7.2 14.6h3.6" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconArchive = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M3.6 5.2h16.8v3.6H3.6V5.2Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.2 : undefined}
    />
    <path d="M5 8.8v9.4c0 .9.7 1.6 1.6 1.6h10.8c.9 0 1.6-.7 1.6-1.6V8.8" />
    <path d="M9.8 12.6h4.4" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconBookmark = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M6.2 4.2h11.6c.8 0 1.4.6 1.4 1.4v14.6L12 15.6l-7.2 4.6V5.6c0-.8.6-1.4 1.4-1.4Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
  </svg>
)

export const IconUsers = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <circle cx="9.2" cy="8.2" r="3.4" fill={DUOTONE_FILL} fillOpacity={0.22} stroke="none" />
    )}
    <path d="M9.2 4.8a3.4 3.4 0 1 1 0 6.8 3.4 3.4 0 0 1 0-6.8Z" />
    <path d="M3.4 19.6c.4-3.1 2.8-5.2 5.8-5.2s5.4 2.1 5.8 5.2" />
    <path
      d="M15.4 5.4a3 3 0 0 1 0 5.8M17.2 14.6c1.9.5 3.2 2.1 3.5 4.8"
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
    />
  </svg>
)

export const IconSmile = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    {tone === 'duotone' && (
      <circle cx="12" cy="12" r="8.1" fill={DUOTONE_FILL} fillOpacity={DUOTONE_OPACITY} stroke="none" />
    )}
    <path d="M12 3.9a8.1 8.1 0 1 1 0 16.2 8.1 8.1 0 0 1 0-16.2Z" />
    <path
      d="M8.6 14.2c.9 1.3 2.1 2 3.4 2s2.5-.7 3.4-2M9.2 9.8h.1M14.8 9.8h.1"
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
    />
  </svg>
)

export const IconChat = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M4.4 6.2c0-1 .8-1.8 1.8-1.8h11.6c1 0 1.8.8 1.8 1.8v8.2c0 1-.8 1.8-1.8 1.8H9.6l-4.2 3.4v-3.4H6.2c-1 0-1.8-.8-1.8-1.8V6.2Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
    <path d="M8.2 9.2h7.6M8.2 12.2h4.8" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconDatabase = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <ellipse
      cx="12"
      cy="6.2"
      rx="6.8"
      ry="2.6"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.22 : undefined}
    />
    <path d="M5.2 6.2v11.6c0 1.4 3 2.6 6.8 2.6s6.8-1.2 6.8-2.6V6.2" />
    <path d="M5.2 12c0 1.4 3 2.6 6.8 2.6s6.8-1.2 6.8-2.6" stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'} />
  </svg>
)

export const IconCpu = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <rect x="6.4" y="6.4" width="11.2" height="11.2" rx="1.6" />
    <rect
      x="9.4"
      y="9.4"
      width="5.2"
      height="5.2"
      rx="0.8"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.22 : undefined}
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
    />
    <path d="M9.6 3.6v2.8M14.4 3.6v2.8M9.6 17.6v2.8M14.4 17.6v2.8M3.6 9.6h2.8M3.6 14.4h2.8M17.6 9.6h2.8M17.6 14.4h2.8" />
  </svg>
)

export const IconImage = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <rect x="4" y="4.6" width="16" height="14.8" rx="1.8" />
    <circle
      cx="8.8"
      cy="9.2"
      r="1.6"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.25 : undefined}
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
    />
    <path
      d="M4.6 17.2 9.8 12l3.4 3.2 2.6-2.4 3.6 3.8"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? 0.14 : undefined}
    />
  </svg>
)

export const IconPalette = ({ className, strokeWidth = 1.5, tone = 'regular', style }: IconProps) => (
  <svg {...base(className, style)} strokeWidth={strokeWidth}>
    <path
      d="M12 3.8a8.2 8.2 0 0 0-8.2 8.2c0 4.5 3.7 8.2 8.2 8.2 1.4 0 2.4-1 2.4-2.2 0-.6-.2-1.1-.6-1.5-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h1.4c2.1 0 3.5-1.6 3.5-3.8 0-3.1-3.7-5.6-8.2-5.6Z"
      fill={tone === 'duotone' ? DUOTONE_FILL : 'none'}
      fillOpacity={tone === 'duotone' ? DUOTONE_OPACITY : undefined}
    />
    <path
      d="M8.2 10.4h.1M10.6 7.8h.1M14.2 8.2h.1"
      stroke={tone === 'duotone' ? DUOTONE_FILL : 'currentColor'}
      strokeWidth={strokeWidth + 0.6}
    />
  </svg>
)
