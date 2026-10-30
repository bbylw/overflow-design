import { Reveal } from './Reveal'

export function PageIntro({
  eyebrow,
  title,
  lead,
  facts,
}: {
  eyebrow: string
  title: string
  lead: string
  facts?: { k: string; v: string }[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 grid-paper opacity-60 mask-[radial-gradient(ellipse_at_20%_0%,#000_20%,transparent_70%)]" />
      <div className="wrap relative pt-12 pb-16 md:pt-16 md:pb-20">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="hero-heading-gradient mt-3 max-w-170 text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-170 text-base leading-relaxed text-ink-soft">{lead}</p>

          {facts && (
            <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt className="text-xs font-medium text-muted">{f.k}</dt>
                  <dd className="tabular mt-1 text-sm font-semibold text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export function SectionTitle({
  title,
  note,
  action,
}: {
  title: string
  note?: string
  action?: React.ReactNode
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
        {note && <p className="mt-1 text-sm text-muted">{note}</p>}
      </div>
      {action}
    </div>
  )
}

export function Grid({ cols = 3, children }: { cols?: 2 | 3 | 4; children: React.ReactNode }) {
  const map = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
  }
  return <div className={`grid gap-4 ${map[cols]}`}>{children}</div>
}

export function GridItem({ children }: { children: React.ReactNode }) {
  return <div className="card card-hover overflow-hidden">{children}</div>
}

export function Callout({
  title,
  body,
  children,
}: {
  title: string
  body: string
  children?: React.ReactNode
}) {
  return (
    <Reveal>
      <div className="card flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center md:p-8">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{body}</p>
        </div>
        {children}
      </div>
    </Reveal>
  )
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-cn max-w-[65ch] space-y-4 text-base leading-relaxed">{children}</div>
  )
}
