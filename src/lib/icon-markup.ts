const attributeMap: Record<string, string> = {
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'fill-rule': 'fillRule',
  'fill-opacity': 'fillOpacity',
  'stroke-opacity': 'strokeOpacity',
  'clip-rule': 'clipRule',
  'aria-hidden': 'aria-hidden',
  class: 'className',
}

function toJsxAttributes(markup: string) {
  return Object.entries(attributeMap).reduce(
    (result, [from, to]) => result.replaceAll(`${from}="`, `${to}="`),
    markup,
  )
}

/** Serialize a full illustration or isometric scene for reuse outside the site. */
export function serializeSvgElement(svg: SVGSVGElement | null) {
  if (!svg) return ''
  const clone = svg.cloneNode(true) as SVGSVGElement
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  clone.removeAttribute('class')
  return clone.outerHTML
}

/** Serialize the rendered icon so it can be pasted into a standalone SVG file. */
export function serializeIcon(
  svg: SVGSVGElement | null,
  { size, strokeWidth }: { size: number; strokeWidth: number },
) {
  if (!svg) return ''

  const clone = svg.cloneNode(true) as SVGSVGElement
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  clone.setAttribute('width', String(size))
  clone.setAttribute('height', String(size))
  clone.setAttribute('stroke-width', String(strokeWidth))
  clone.removeAttribute('class')
  return clone.outerHTML
}

/** Turn the SVG markup into a JSX-ready snippet for components, with empty elements self-closed. */
export function serializeIconJsx(
  svg: SVGSVGElement | null,
  options: { size: number; strokeWidth: number },
) {
  const markup = serializeIcon(svg, options)
  if (!markup) return ''

  const withLines = toJsxAttributes(markup)
    .replace(/<(path|circle|rect|line|polyline|polygon|ellipse)([^>]*)><\/\1>/g, '<$1$2 />')
    .replace(/></g, '>\n<')

  return withLines
    .split('\n')
    .map((line, index) => (index === 0 || line.startsWith('</') ? line : `  ${line}`))
    .join('\n')
}

/** Trigger a client-side download of serialized SVG content. */
export function downloadSvgFile(filename: string, svgContent: string): boolean {
  if (!svgContent || typeof document === 'undefined') return false
  try {
    const safeName = filename.endsWith('.svg') ? filename : `${filename}.svg`
    const blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = safeName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    return true
  } catch {
    return false
  }
}
