/* Original isometric line drawings. 30° projection, thin ink strokes,
   one accent fill per scene. No external assets. */

type Props = { className?: string }

const ink = '#111111'
const faint = '#d9d9d9'
const accent = '#e2572b'

export function IsoStack({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="层叠的立体卡片">
      <g stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M160 34 232 74 160 114 88 74Z" fill="#fff" />
        <path d="M88 74v16l72 40v-16" fill="#fafafa" />
        <path d="M232 74v16l-72 40v-16" fill="#f2f2f2" />
        <path d="M160 96 232 136 160 176 88 136Z" fill="#fff" />
        <path d="M88 136v16l72 40v-16" fill="#fafafa" />
        <path d="M232 136v16l-72 40v-16" fill="#f2f2f2" />
      </g>
      <g stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M124 74h40M136 84h40" />
        <path d="M124 136h40M136 146h40" />
      </g>
    </svg>
  )
}

export function IsoServer({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="立体服务器机箱">
      <g stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M160 30 246 78 160 126 74 78Z" fill="#fff" />
        <path d="M74 78v34l86 48v-34" fill="#fafafa" />
        <path d="M246 78v34l-86 48v-34" fill="#f2f2f2" />
        <path d="M160 126 246 174 160 222 74 174Z" fill="#fff" />
        <path d="M74 174v10l86 48v-10" fill="#fafafa" />
        <path d="M246 174v10l-86 48v-10" fill="#f2f2f2" />
        <path d="M104 92l40 22v10l-40-22Z" fill="#fff" />
        <path d="M104 112l40 22v10l-40-22Z" fill="#fff" />
      </g>
      <g fill={accent}>
        <circle cx="216" cy="92" r="3.4" />
        <circle cx="216" cy="104" r="3.4" />
      </g>
      <g stroke={ink} strokeWidth="1.3" fill="none">
        <path d="M120 100h20M120 120h20" />
      </g>
    </svg>
  )
}

export function IsoChart({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="立体柱状图">
      <g stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M60 150 160 96 260 150 160 204Z" fill="#fafafa" />
        <path d="M96 132 128 116v-34l-32 16Z" fill="#fff" />
        <path d="M128 116l32 16v-34l-32-16Z" fill="#f2f2f2" />
        <path d="M128 82l32 16 32-16-32-16Z" fill="#fff" />
        <path d="M160 132 192 116v-56l-32 16Z" fill="#fff" />
        <path d="M192 116l32 16v-56l-32-16Z" fill="#f2f2f2" />
        <path d="M192 60l32 16 32-16-32-16Z" fill="#fff" />
        <path d="M224 132 256 116v-22l-32 16Z" fill="#fff" />
        <path d="M256 116l32 16v-22l-32-16Z" fill="#f2f2f2" />
        <path d="M256 94l32 16 32-16-32-16Z" fill="#fff" />
      </g>
      <path d="M192 60l32 16 32-16-32-16Z" fill={accent} fillOpacity="0.9" stroke={ink} strokeWidth="1.4" />
      <path d="M224 76v40" stroke={accent} strokeWidth="1.6" />
    </svg>
  )
}

export function IsoBoxes({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="立体纸箱">
      <g stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M84 96 128 72l44 24-44 24Z" fill="#fff" />
        <path d="M84 96v44l44 24v-44" fill="#fafafa" />
        <path d="M172 96v44l-44 24v-44" fill="#f2f2f2" />
        <path d="M128 72v24" />
        <path d="M160 118 204 94l44 24-44 24Z" fill="#fff" />
        <path d="M160 118v40l44 24v-40" fill="#fafafa" />
        <path d="M248 118v40l-44 24v-40" fill="#f2f2f2" />
        <path d="M204 94v24" />
        <path d="M204 94l-44-22-44 22" />
      </g>
      <path d="M128 72l22 12 22-12-22-12Z" fill={accent} fillOpacity="0.85" stroke={ink} strokeWidth="1.4" />
    </svg>
  )
}

export function IsoDesk({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="立体工作台">
      <g stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M56 132 160 74l104 58-104 58Z" fill="#fff" />
        <path d="M56 132v10l104 58v-10" fill="#fafafa" />
        <path d="M264 132v10l-104 58v-10" fill="#f2f2f2" />
        <path d="M112 118 160 92l48 26-48 26Z" fill="#f7f7f7" />
        <path d="M112 118v22l48 26v-22" fill="#fff" />
        <path d="M208 118v22l-48 26v-22" fill="#ededed" />
        <path d="M160 144v22" />
        <path d="M96 96l24-14 24 14-24 14Z" fill="#fff" />
        <path d="M96 96v18l24 14v-18" fill="#fafafa" />
        <path d="M144 96v18l-24 14v-18" fill="#f2f2f2" />
      </g>
      <g stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M136 118h48M148 130h24" />
      </g>
    </svg>
  )
}

export function IsoPhone({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="立体手机">
      <g stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M132 40 196 76v96l-64-36Z" fill="#fff" />
        <path d="M196 76l40-22v96l-40 22Z" fill="#f2f2f2" />
        <path d="M132 40l40-22 64 36-40 22Z" fill="#fafafa" />
        <path d="M132 40v96l64 36" />
        <path d="M148 56l32 18v60l-32-18Z" fill="#f7f7f7" />
      </g>
      <g stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M156 78h16M156 90h16M156 102h10" />
      </g>
    </svg>
  )
}

export function IsoGlobe({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="立体地球">
      <g stroke={ink} strokeWidth="1.4" fill="none">
        <ellipse cx="160" cy="112" rx="76" ry="76" fill="#fff" />
        <ellipse cx="160" cy="112" rx="76" ry="30" fill="none" />
        <ellipse cx="160" cy="112" rx="76" ry="56" fill="none" stroke={faint} />
        <ellipse cx="160" cy="112" rx="30" ry="76" fill="none" />
        <path d="M160 36v152" stroke={faint} />
        <path d="M96 74c22 10 44 14 64 14s42-4 64-14" stroke={faint} />
        <path d="M96 150c22-10 44-14 64-14s42 4 64 14" stroke={faint} />
      </g>
      <path d="M160 36a76 76 0 0 1 66 38" stroke={accent} strokeWidth="2" fill="none" />
    </svg>
  )
}

export function IsoLayers({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="立体图层">
      <g stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M160 46 244 92 160 138 76 92Z" fill="#fff" />
        <path d="M76 92v12l84 46v-12" fill="#fafafa" />
        <path d="M244 92v12l-84 46v-12" fill="#f2f2f2" />
        <path d="M160 108 244 154 160 200 76 154Z" fill="#fff" />
        <path d="M76 154v12l84 46v-12" fill="#fafafa" />
        <path d="M244 154v12l-84 46v-12" fill="#f2f2f2" />
      </g>
      <path d="M160 46 244 92 160 138 76 92Z" fill={accent} fillOpacity="0.08" stroke={accent} strokeWidth="1.6" />
    </svg>
  )
}

export function IsoPipeline({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="立体流水线">
      <g stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M64 94 104 72l40 22-40 22Z" fill="#fff" />
        <path d="M64 94v24l40 22v-24" fill="#fafafa" />
        <path d="M144 94v24l-40 22v-24" fill="#f2f2f2" />

        <path d="M140 118 180 96l40 22-40 22Z" fill="#fff" />
        <path d="M140 118v24l40 22v-24" fill="#fafafa" />
        <path d="M220 118v24l-40 22v-24" fill="#f2f2f2" />

        <path d="M216 142 256 120l40 22-40 22Z" fill="#fff" />
        <path d="M216 142v24l40 22v-24" fill="#fafafa" />
        <path d="M296 142v24l-40 22v-24" fill="#f2f2f2" />
      </g>
      <path d="M140 118 180 96l40 22-40 22Z" fill={accent} fillOpacity="0.16" stroke={accent} strokeWidth="1.5" />
      <g stroke={accent} strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M124 106l34 12M200 130l34 12" />
      </g>
    </svg>
  )
}

export function IsoDatabase({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="立体数据库簇">
      <g stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <ellipse cx="160" cy="64" rx="58" ry="26" fill="#fff" />
        <path d="M102 64v28c0 14.4 26 26 58 26s58-11.6 58-26V64" fill="#fafafa" />
        <path d="M102 92v28c0 14.4 26 26 58 26s58-11.6 58-26V92" fill="#f5f5f4" />
        <path d="M102 120v28c0 14.4 26 26 58 26s58-11.6 58-26v-28" fill="#efefef" />
        <ellipse cx="160" cy="64" rx="58" ry="26" fill="#fff" />
      </g>
      <ellipse cx="160" cy="64" rx="34" ry="14" fill={accent} fillOpacity="0.14" stroke={accent} strokeWidth="1.5" />
      <g fill={accent}>
        <circle cx="196" cy="96" r="2.8" />
        <circle cx="196" cy="124" r="2.8" />
        <circle cx="196" cy="152" r="2.8" />
      </g>
    </svg>
  )
}

export function IsoShield({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="立体安全网关">
      <g stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M72 138 160 90l88 48-88 48Z" fill="#fafafa" />
        <path d="M72 138v10l88 48v-10" fill="#f2f2f2" />
        <path d="M248 138v10l-88 48v-10" fill="#e8e8e6" />
        <path d="M160 40 202 62v46c0 26-18 44-42 54-24-10-42-28-42-54V62l42-22Z" fill="#fff" />
      </g>
      <path
        d="M144 102l12 12 22-24"
        fill="none"
        stroke={accent}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IsoKanban({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="立体看板墙">
      <g stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M76 52 228 134v60L76 112Z" fill="#fff" />
        <path d="M228 134l16-9v60l-16 9Z" fill="#f2f2f2" />
        <path d="M76 52l16-9 152 82-16 9Z" fill="#fafafa" />
        <path d="M94 76l36 20v24l-36-20Z" fill="#f7f7f6" />
        <path d="M138 100l36 20v24l-36-20Z" fill="#fdf1ed" stroke={accent} />
        <path d="M182 124l32 18v24l-32-18Z" fill="#f7f7f6" />
      </g>
    </svg>
  )
}

/* Layered scenes used by the pointer-following demo. Each group moves at a
   different rate, which gives the drawing depth. */
export function IsoMotionScene({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="会跟随指针移动的立体场景">
      <g className="iso-layer iso-depth-1" stroke={faint} strokeWidth="1.1" fill="none">
        <path d="M160 44 292 112 160 180 28 112Z" fill="#fbfbfa" />
        <path d="M160 64 272 120 160 176 48 120Z" fill="none" stroke="#ececea" />
        <path d="M160 44v136M28 112h264M94 78l132 68M226 78 94 146" stroke="#f0f0ee" />
      </g>

      <g className="iso-layer iso-depth-2" stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M160 70 226 106 160 142 94 106Z" fill="#fff" />
        <path d="M94 106v18l66 34v-18" fill="#fafafa" />
        <path d="M226 106v18l-66 34v-18" fill="#f1f1ef" />
        <path d="M112 112l34 18v6l-34-18Z" fill="#fff" />
        <path d="M112 126l34 18v6l-34-18Z" fill="#fff" />
      </g>
      <g className="iso-layer iso-depth-2">
        <circle cx="206" cy="112" r="2.6" fill={accent} />
        <circle cx="206" cy="122" r="2.6" fill={accent} fillOpacity="0.45" />
      </g>

      <g className="iso-layer iso-depth-3" stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M54 148 92 127l38 21-38 21Z" fill="#fff" />
        <path d="M54 148v12l38 21v-12" fill="#fafafa" />
        <path d="M130 148v12l-38 21v-12" fill="#f1f1ef" />
      </g>
      <g className="iso-layer iso-depth-3" stroke={accent} strokeWidth="1.7" fill="none" strokeLinecap="round">
        <path d="M66 147h22M76 157h22" />
      </g>

      <g className="iso-layer iso-depth-3" stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M234 112 258 99l24 13-24 13Z" fill="#fff" />
        <path d="M234 112v9l24 13v-9" fill="#fafafa" />
        <path d="M282 112v9l-24 13v-9" fill="#f1f1ef" />
      </g>
      <g className="iso-layer iso-depth-3">
        <circle cx="258" cy="107" r="4" fill={accent} fillOpacity="0.9" stroke={ink} strokeWidth="1.3" />
      </g>

      <g className="iso-layer iso-depth-3" stroke={accent} strokeWidth="1.5" strokeLinecap="round">
        <path d="M214 62v8M210 66h8M86 88v6M83 91h6" />
      </g>
    </svg>
  )
}

export function IsoMotionPipeline({ className }: Props) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="动态构建流水线立体场景">
      <g className="iso-layer iso-depth-1" stroke={faint} strokeWidth="1.1" fill="none">
        <path d="M40 132 160 68l120 64-120 64Z" fill="#fbfbfa" />
        <path d="M100 100l120 64M220 100 100 164" stroke="#efefef" />
      </g>

      <g className="iso-layer iso-depth-2" stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M76 112 118 89l42 23-42 23Z" fill="#fff" />
        <path d="M76 112v18l42 23v-18" fill="#fafafa" />
        <path d="M160 112v18l-42 23v-18" fill="#f1f1ef" />

        <path d="M160 132 202 109l42 23-42 23Z" fill="#fff" />
        <path d="M160 132v18l42 23v-18" fill="#fafafa" />
        <path d="M244 132v18l-42 23v-18" fill="#f1f1ef" />
      </g>

      <g className="iso-layer iso-depth-3" stroke={ink} strokeWidth="1.4" fill="none" strokeLinejoin="round">
        <path d="M132 76 168 56l36 20-36 20Z" fill="#fdf1ed" stroke={accent} />
        <path d="M132 76v12l36 20V96" fill="#fff" />
        <path d="M204 76v12l-36 20V96" fill="#f7f7f6" />
        <circle cx="168" cy="76" r="3.5" fill={accent} stroke="none" />
      </g>
    </svg>
  )
}
