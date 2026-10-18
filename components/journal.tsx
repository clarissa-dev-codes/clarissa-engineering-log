'use client'

import { ChevronDown } from 'lucide-react'
import { useMemo, useState } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import { journalEntries, type JournalEntry } from '@/lib/content'
import { cn } from '@/lib/utils'

const markdownComponents: Components = {
  h3: ({ children }) => <h4 className="mt-6 mb-2 font-semibold first:mt-0">{children}</h4>,
  p: ({ children }) => <p className="my-3 leading-relaxed text-foreground/85">{children}</p>,
  ul: ({ children }) => <ul className="my-3 list-disc space-y-1 pl-5 text-foreground/85 marker:text-brand">{children}</ul>,
  ol: ({ children }) => <ol className="my-3 list-decimal space-y-1 pl-5 text-foreground/85">{children}</ol>,
  a: ({ children, href }) => (
    <a href={href} className="text-brand underline underline-offset-4" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-lg border border-border bg-muted p-4 font-mono text-[13px] leading-relaxed">
      {children}
    </pre>
  ),
  code: ({ className, children }) =>
    className ? (
      <code className={className}>{children}</code>
    ) : (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">{children}</code>
    ),
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function EntryCard({ entry, defaultOpen }: { entry: JournalEntry; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = `${entry.id}-body`

  return (
    <article className="relative pl-8">
      <span className="absolute top-2 left-0 size-3 rounded-full border-2 border-brand bg-background" aria-hidden="true" />
      <header>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
          <time dateTime={entry.date}>{formatDate(entry.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{entry.readTime}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-balance">
          <span className="font-mono text-brand">Log #{String(entry.number).padStart(2, '0')}:</span> {entry.title}
        </h3>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
          {entry.tags.map((tag) => (
            <li key={tag} className="font-mono text-xs text-muted-foreground">
              #{tag}
            </li>
          ))}
        </ul>
      </header>

      <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">{entry.excerpt}</p>

      <div id={panelId} hidden={!open} className="mt-4 rounded-xl border border-border bg-card px-5 py-4">
        <ReactMarkdown components={markdownComponents}>{entry.body}</ReactMarkdown>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-4 inline-flex items-center gap-1.5 font-mono text-sm text-foreground hover:text-brand"
      >
        {open ? 'collapse entry' : 'read full entry'}
        <ChevronDown className={cn('size-4 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>
    </article>
  )
}

export function Journal() {
  const allTags = useMemo(() => Array.from(new Set(journalEntries.flatMap((e) => e.tags))).sort(), [])
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const visible = activeTag ? journalEntries.filter((e) => e.tags.includes(activeTag)) : journalEntries

  return (
    <section aria-labelledby="journal-heading" id="journal" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-xs text-brand">03 / journal</p>
          <h2 id="journal-heading" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            Dev Journal
          </h2>
          <p className="mt-2 text-sm text-muted-foreground text-pretty">
            Markdown logs documenting what I&apos;m building, breaking, and learning.
          </p>

          <div className="mt-6" role="group" aria-label="Filter entries by tag">
            <p className="mb-2 font-mono text-xs text-muted-foreground">filter --tag</p>
            <div className="flex flex-wrap gap-1.5">
              {[null, ...allTags].map((tag) => {
                const isActive = activeTag === tag
                return (
                  <button
                    key={tag ?? 'all'}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveTag(tag)}
                    className={cn(
                      'rounded-md border px-2 py-1 font-mono text-xs transition-colors',
                      isActive
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border bg-card text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {tag ?? 'all'}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="relative space-y-12 before:absolute before:top-3 before:bottom-0 before:left-[5px] before:w-px before:bg-border">
          {visible.map((entry, i) => (
            <EntryCard key={entry.id} entry={entry} defaultOpen={i === 0} />
          ))}
          <div className="relative pl-8">
            <span className="absolute top-1.5 left-0 size-3 rounded-full border-2 border-dashed border-muted-foreground/50 bg-background" aria-hidden="true" />
            <p className="font-mono text-sm text-muted-foreground">
              Log #{String(journalEntries.length + 1).padStart(2, '0')}: <span className="italic">in progress…</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
