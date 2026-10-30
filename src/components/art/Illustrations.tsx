/* Original hand-drawn line illustrations, 4:3 canvas, thin ink strokes.
   Figures are simplified on purpose: the originals are ink-and-wash,
   so these stay line-only with a single accent element. */

type Props = { className?: string }

const ink = '#111111'
const wash = '#f2f1ee'
const accent = '#e2572b'

const S = (p: Props) => ({
  viewBox: '0 0 400 300',
  className: p.className,
  fill: 'none' as const,
  stroke: ink,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

/* A person at a desk with a laptop */
export function ArtDeskWork({ className }: Props) {
  return (
    <svg {...S({ className })} strokeWidth="1.6" role="img" aria-label="在桌前工作的人">
      <path d="M52 232c98-3 198-3 296 0" stroke="#cfcfcb" />
      <path d="M78 232v-58c0-4 3-7 7-7h214c4 0 7 3 7 7v58" fill={wash} />
      <path d="M96 167h190v-9c0-3-2-5-5-5H101c-3 0-5 2-5 5Z" fill="#fff" />
      {/* laptop */}
      <path d="M160 167v-38c0-3 2-5 5-5h62c3 0 5 2 5 5v43" fill="#fff" />
      <path d="M164 162v-33c0-2 1-3 3-3h56c2 0 3 1 3 3v33Z" fill="#e9e8e4" />
      <path d="M150 167h92" />
      {/* person */}
      <path d="M120 141c0-13 9-22 21-22s21 9 21 22" />
      <path d="M141 119c8 0 14-6 14-14s-6-14-14-14-14 6-14 14 6 14 14 14Z" fill="#fff" />
      <path d="M131 96c3-5 8-8 14-7 5 1 8 5 9 10" />
      <path d="M126 141c-4 14-5 27-4 41M162 141c4 14 5 27 4 41" />
      <path d="M120 182h42" />
      <path d="M162 152c9 4 18 8 26 13" />
      {/* coffee */}
      <path d="M232 160v-12c0-2 2-4 4-4h16c2 0 4 2 4 4v12" fill="#fff" />
      <path d="M256 150c5 0 7 4 5 7" />
      <path d="M241 138c0-4 3-6 3-10M248 138c0-4 3-6 3-10" stroke={accent} />
      {/* papers */}
      <path d="M262 176l26-2 3 22-26 2Z" fill="#fff" />
      <path d="M268 182l16-1M269 188l16-1" stroke="#c9c9c4" />
    </svg>
  )
}

/* Two people talking, one presenting a board */
export function ArtMeeting({ className }: Props) {
  return (
    <svg {...S({ className })} strokeWidth="1.6" role="img" aria-label="两个人讨论一块白板">
      <path d="M46 246c104-3 208-3 312 0" stroke="#cfcfcb" />
      {/* board */}
      <path d="M212 96c0-3 2-5 5-5h108c3 0 5 2 5 5v94c0 3-2 5-5 5H217c-3 0-5-2-5-5Z" fill="#fff" />
      <path d="M240 118h72M240 134h56M240 150h64" stroke="#d3d3ce" />
      <path d="M240 172l14-12 14 7 16-18 18 9" stroke={accent} strokeWidth="2" />
      <path d="M262 196v22M282 196v22" stroke="#bdbdb8" />
      {/* presenter */}
      <path d="M300 206c0-22 8-34 22-34s22 12 22 34" fill="#fff" />
      <path d="M322 168c8 0 14-6 14-14s-6-14-14-14-14 6-14 14 6 14 14 14Z" fill="#fff" />
      <path d="M310 145c3-5 8-8 14-7 6 1 9 6 9 11" />
      <path d="M310 182c-10-6-18-14-24-24" />
      {/* listener */}
      <path d="M118 214c0-24 9-38 25-38s25 14 25 38" fill="#fff" />
      <path d="M143 172c9 0 15-7 15-15s-6-15-15-15-15 7-15 15 6 15 15 15Z" fill="#fff" />
      <path d="M128 150c4-6 9-9 16-8 7 1 11 7 11 13" />
      <path d="M168 196c8 4 14 9 20 14" />
      <path d="M118 200c-6 4-12 9-18 14" />
      <path d="M96 246c0-20 8-32 22-32" />
      {/* sticky notes */}
      <path d="M224 166l16-1 1 16-16 1Z" fill="#fdf1ed" stroke={accent} />
    </svg>
  )
}

/* Person carrying a box, shelf in background */
export function ArtShipping({ className }: Props) {
  return (
    <svg {...S({ className })} strokeWidth="1.6" role="img" aria-label="正在搬运纸箱的人">
      <path d="M40 250c110-3 220-3 330 0" stroke="#cfcfcb" />
      {/* shelf */}
      <path d="M56 250V92M56 92h130M186 92v158" />
      <path d="M56 148h130M56 204h130" stroke="#d3d3ce" />
      <path d="M74 148V126c0-2 1-4 4-4h30c3 0 4 2 4 4v22Z" fill="#fff" />
      <path d="M74 204v-26c0-3 2-5 5-5h24c3 0 5 2 5 5v26Z" fill="#fff" />
      <path d="M120 148v-34c0-2 1-4 4-4h26c3 0 4 2 4 4v34Z" fill="#fff" />
      {/* person */}
      <path d="M268 246c0-26 10-41 27-41s27 15 27 41" fill="#fff" />
      <path d="M295 205c10 0 17-8 17-17s-7-17-17-17-17 8-17 17 7 17 17 17Z" fill="#fff" />
      <path d="M282 180c4-7 10-10 18-9 8 2 12 8 12 15" />
      <path d="M272 222c-8 2-16 0-22-4M318 222c8 0 16-2 22-6" />
      {/* box */}
      <path d="M250 178l40-4 4 34-40 4Z" fill="#fff" />
      <path d="M250 178l14-10 40 4-14 10M304 172l4 34-14 10" fill={wash} />
      <path d="M270 176l16-1" stroke={accent} strokeWidth="2" />
    </svg>
  )
}

/* Person reading a large document */
export function ArtReading({ className }: Props) {
  return (
    <svg {...S({ className })} strokeWidth="1.6" role="img" aria-label="正在阅读文档的人">
      <path d="M48 250c104-3 208-3 304 0" stroke="#cfcfcb" />
      <path d="M150 250V118c0-4 3-7 7-7h86c4 0 7 3 7 7v132" fill="#fff" />
      <path d="M172 136h56M172 154h56M172 172h40M172 190h56M172 208h48" stroke="#d0d0cb" />
      <path d="M172 226h30" stroke={accent} strokeWidth="2" />
      {/* person peeking over the page */}
      <path d="M196 118c0-18 12-30 28-30s28 12 28 30" fill="#fff" />
      <path d="M224 88c9 0 16-7 16-16s-7-16-16-16-16 7-16 16 7 16 16 16Z" fill="#fff" />
      <path d="M210 58c5-6 11-9 19-8 8 2 12 9 12 16" />
      <path d="M224 88v14M206 102c6 6 12 9 18 9s12-3 18-9" />
      <path d="M158 132c-12 4-20 12-24 22" />
      <path d="M258 128c12 2 20 10 24 20" />
    </svg>
  )
}

/* Two people handing over a card / checkout */
export function ArtCheckout({ className }: Props) {
  return (
    <svg {...S({ className })} strokeWidth="1.6" role="img" aria-label="结账与交付">
      <path d="M44 248c106-3 212-3 314 0" stroke="#cfcfcb" />
      <path d="M112 248V96c0-3 2-5 5-5h74c3 0 5 2 5 5v152" fill={wash} />
      <path d="M132 112h44M132 128h44M132 144h30" stroke="#d3d3ce" />
      <path d="M132 210h44" stroke={accent} strokeWidth="2" />
      {/* clerk */}
      <path d="M206 248c0-24 9-37 24-37s24 13 24 37" fill="#fff" />
      <path d="M230 211c9 0 15-7 15-15s-6-15-15-15-15 7-15 15 6 15 15 15Z" fill="#fff" />
      <path d="M217 190c3-6 9-9 15-8 6 2 10 7 10 12" />
      <path d="M206 228c-8-4-14-10-18-18" />
      {/* customer */}
      <path d="M292 248c0-26 10-40 26-40s26 14 26 40" fill="#fff" />
      <path d="M318 208c10 0 17-8 17-17s-7-17-17-17-17 8-17 17 7 17 17 17Z" fill="#fff" />
      <path d="M305 182c4-7 10-10 17-9 7 2 11 8 11 14" />
      <path d="M306 220c-10 2-16 8-20 16" />
      {/* card */}
      <path d="M240 196l34 6-4 22-34-6Z" fill="#fff" />
      <path d="M243 204l20 4" stroke={accent} strokeWidth="2" />
    </svg>
  )
}

/* Person thinking, lightbulb above, scattered notes */
export function ArtIdea({ className }: Props) {
  return (
    <svg {...S({ className })} strokeWidth="1.6" role="img" aria-label="正在构思的人">
      <path d="M52 252c100-3 200-3 296 0" stroke="#cfcfcb" />
      <path d="M120 252c0-28 10-44 28-44s28 16 28 44" fill="#fff" />
      <path d="M148 208c10 0 18-8 18-18s-8-18-18-18-18 8-18 18 8 18 18 18Z" fill="#fff" />
      <path d="M133 182c4-7 11-10 18-9 7 2 11 8 11 15" />
      <path d="M176 224c14 2 24 8 30 16" />
      <path d="M148 216v-6M148 210h0" />
      {/* bulb */}
      <path d="M232 60c14 0 24 11 24 24 0 9-5 15-9 21-2 3-3 6-3 10h-24c0-4-1-7-3-10-4-6-9-12-9-21 0-13 10-24 24-24Z" fill="#fff" />
      <path d="M228 108h8M228 116h8" stroke={accent} strokeWidth="2" />
      <path d="M232 32v-6M196 44l-5-4M268 44l5-4M186 76h-7M278 76h7" stroke={accent} />
      {/* notes */}
      <path d="M266 158l38-4 3 30-38 4Z" fill="#fff" />
      <path d="M274 168l22-2M275 176l22-2" stroke="#cfcfca" />
      <path d="M94 176l30-3 2 24-30 3Z" fill="#fff" />
      <path d="M101 184l16-2M102 191l16-2" stroke="#cfcfca" />
    </svg>
  )
}

/* Person at a shelf picking an item */
export function ArtLibrary({ className }: Props) {
  return (
    <svg {...S({ className })} strokeWidth="1.6" role="img" aria-label="在架子上挑选的人">
      <path d="M40 250c110-3 220-3 320 0" stroke="#cfcfcb" />
      <path d="M64 250V86M64 86h140M204 86v164" />
      <path d="M64 144h140M64 202h140" stroke="#d3d3ce" />
      <path d="M80 144v-30c0-2 1-3 3-3h18c2 0 3 1 3 3v30Z" fill="#fff" />
      <path d="M110 144v-42c0-2 1-3 3-3h16c2 0 3 1 3 3v42Z" fill="#fff" />
      <path d="M140 144v-24c0-2 1-3 3-3h20c2 0 3 1 3 3v24Z" fill="#fff" />
      <path d="M80 202v-36c0-2 1-3 3-3h20c2 0 3 1 3 3v36Z" fill="#fff" />
      <path d="M120 202v-28c0-2 1-3 3-3h16c2 0 3 1 3 3v28Z" fill="#fff" />
      {/* person */}
      <path d="M266 250c0-28 11-44 30-44s30 16 30 44" fill="#fff" />
      <path d="M296 206c11 0 19-9 19-19s-8-19-19-19-19 9-19 19 8 19 19 19Z" fill="#fff" />
      <path d="M281 179c4-8 11-11 19-10 8 2 13 9 13 16" />
      <path d="M266 228c-14-4-24-12-30-24" />
      <path d="M326 226c10 2 18 8 22 16" />
      <path d="M222 150l26-2 2 20-26 2Z" fill="#fdf1ed" stroke={accent} />
    </svg>
  )
}

/* Two people at a large table reviewing a chart */
export function ArtReview({ className }: Props) {
  return (
    <svg {...S({ className })} strokeWidth="1.6" role="img" aria-label="围桌复盘">
      <path d="M40 214c108-3 216-3 320 0" stroke="#cfcfcb" />
      <path d="M84 214V132c0-4 3-7 7-7h218c4 0 7 3 7 7v82" fill={wash} />
      <path d="M84 132h232" />
      <path d="M140 190l24-26 22 12 26-32 28 10" stroke={accent} strokeWidth="2.2" />
      <path d="M124 214v18M268 214v18" stroke="#bdbdb8" />
      {/* left person */}
      <path d="M56 214c0-22 8-34 22-34s22 12 22 34" fill="#fff" />
      <path d="M78 180c9 0 15-7 15-15s-6-15-15-15-15 7-15 15 6 15 15 15Z" fill="#fff" />
      <path d="M65 158c3-6 9-9 15-8 6 2 9 7 9 12" />
      <path d="M100 190c14 0 24 4 30 10" />
      {/* right person */}
      <path d="M306 214c0-22 8-34 22-34s22 12 22 34" fill="#fff" />
      <path d="M328 180c9 0 15-7 15-15s-6-15-15-15-15 7-15 15 6 15 15 15Z" fill="#fff" />
      <path d="M315 158c3-6 9-9 15-8 6 2 9 7 9 12" />
      <path d="M306 190c-14 0-24 4-30 10" />
    </svg>
  )
}

/* Person looking at a big wall clock / calendar deadline */
export function ArtDeadline({ className }: Props) {
  return (
    <svg {...S({ className })} strokeWidth="1.6" role="img" aria-label="截止日期与日程表">
      <path d="M46 248c102-3 204-3 308 0" stroke="#cfcfcb" />
      {/* large wall calendar */}
      <path d="M82 88c0-3 2-5 5-5h112c3 0 5 2 5 5v102c0 3-2 5-5 5H87c-3 0-5-2-5-5Z" fill="#fff" />
      <path d="M82 114h122" />
      <path d="M108 74v18M178 74v18" stroke={accent} strokeWidth="2" />
      <path d="M104 136h18v16h-18ZM134 136h18v16h-18ZM164 136h18v16h-18Z" stroke="#cfcfca" />
      <path d="M134 162h18v16h-18Z" fill="#fdf1ed" stroke={accent} />
      {/* clock */}
      <circle cx="246" cy="96" r="24" fill="#fff" />
      <path d="M246 82v14l10 6" stroke={accent} strokeWidth="1.8" />
      {/* person checking list */}
      <path d="M242 248c0-26 10-42 28-42s28 16 28 42" fill="#fff" />
      <path d="M270 206c10 0 17-8 17-17s-7-17-17-17-17 8-17 17 7 17 17 17Z" fill="#fff" />
      <path d="M256 180c4-6 10-9 17-8 7 1 11 7 11 13" />
      <path d="M242 222c-12-4-20-12-26-22" />
    </svg>
  )
}

/* Person organizing cards and notes on a board */
export function ArtNotebook({ className }: Props) {
  return (
    <svg {...S({ className })} strokeWidth="1.6" role="img" aria-label="整理笔记与卡片">
      <path d="M48 248c102-3 204-3 304 0" stroke="#cfcfcb" />
      {/* notebook page */}
      <path d="M96 86c0-4 3-7 7-7h106c4 0 7 3 7 7v162H96V86Z" fill="#fff" />
      <path d="M88 104h16M88 134h16M88 164h16M88 194h16" stroke={accent} strokeWidth="2" />
      <path d="M124 112h68M124 130h52M124 166h68M124 184h44" stroke="#cfcfca" />
      <path d="M124 148h36" stroke={accent} strokeWidth="2" />
      {/* person */}
      <path d="M250 248c0-26 10-40 26-40s26 14 26 40" fill="#fff" />
      <path d="M276 208c9 0 16-7 16-16s-7-16-16-16-16 7-16 16 7 16 16 16Z" fill="#fff" />
      <path d="M262 184c4-6 10-9 16-8 7 1 11 7 11 13" />
      <path d="M250 222c-14-2-24-8-32-18" />
    </svg>
  )
}

/* Person returning a package / refund & exchange */
export function ArtRefund({ className }: Props) {
  return (
    <svg {...S({ className })} strokeWidth="1.6" role="img" aria-label="退换货与包裹检查">
      <path d="M44 248c106-3 212-3 312 0" stroke="#cfcfcb" />
      {/* counter */}
      <path d="M76 248v-64c0-3 2-5 5-5h146c3 0 5 2 5 5v64" fill={wash} />
      {/* open box on counter */}
      <path d="M126 179v-34h52v34" fill="#fff" />
      <path d="M126 145l-16-12M178 145l16-12" />
      {/* return arrow */}
      <path d="M138 114c10-10 26-10 36 0M138 114l2-10M138 114l10 2" stroke={accent} strokeWidth="2" />
      {/* person */}
      <path d="M262 248c0-26 10-42 28-42s28 16 28 42" fill="#fff" />
      <path d="M290 206c10 0 17-8 17-17s-7-17-17-17-17 8-17 17 7 17 17 17Z" fill="#fff" />
      <path d="M276 180c4-6 10-9 17-8 7 1 11 7 11 13" />
      <path d="M262 222c-18-2-34-10-46-22" />
    </svg>
  )
}
