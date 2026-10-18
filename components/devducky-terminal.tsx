'use client'

import { Clock, GitBranch } from 'lucide-react'
import { useEffect, useState } from 'react'

const STARTING_SECONDS = 2 * 3600 + 14 * 60 + 37

const lines = [
  { prompt: true, text: 'code --install-extension devducky' },
  { prompt: false, text: '[ok] Extension "devducky" installed', tone: 'ok' },
  { prompt: true, text: 'devducky status' },
  { prompt: false, text: 'tracking active session · idle time excluded', tone: 'muted' },
] as const

function formatDuration(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':')
}

export function DevDuckyTerminal() {
  const [seconds, setSeconds] = useState(STARTING_SECONDS)

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <figure
      className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
      aria-label="Animated terminal showing the DevDucky extension is active"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">zsh — portfolio</span>
      </div>

      <div className="space-y-1.5 px-4 py-4 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <p key={line.text} className="terminal-line" style={{ animationDelay: `${0.3 + i * 0.55}s` }}>
            {line.prompt ? (
              <>
                <span className="text-brand">$</span> <span>{line.text}</span>
              </>
            ) : (
              <span className={'tone' in line && line.tone === 'ok' ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground'}>
                {line.text}
              </span>
            )}
          </p>
        ))}
        <p className="terminal-line" style={{ animationDelay: `${0.3 + lines.length * 0.55}s` }}>
          <span className="text-brand">$</span> <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-foreground" />
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 bg-highlight px-4 py-1.5 font-mono text-xs text-highlight-foreground">
        <span className="inline-flex items-center gap-1.5">
          <GitBranch className="size-3.5" aria-hidden="true" />
          main
        </span>
        <span className="inline-flex items-center gap-1.5 font-semibold">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-highlight-foreground/60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-highlight-foreground" />
          </span>
          DevDucky Extension: Active
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 tabular-nums">
          <Clock className="size-3.5" aria-hidden="true" />
          <span aria-label="Coding time today">{formatDuration(seconds)}</span>
        </span>
      </div>
    </figure>
  )
}
