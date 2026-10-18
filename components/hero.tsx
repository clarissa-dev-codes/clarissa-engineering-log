import { Handshake, MapPin } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { DevDuckyTerminal } from '@/components/devducky-terminal'
import { profile } from '@/lib/content'

const socials = [
  { label: 'GitHub', handle: 'clarissa-dev-codes', href: profile.links.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedInIcon },
  { label: 'Handshake', href: profile.links.handshake, Icon: Handshake },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="mx-auto max-w-5xl px-5 pt-16 pb-20 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden="true" />
            Huntsville, AL · Open to backend roles
          </p>

          <h1 id="hero-heading" className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            {profile.name}{' '}
            <span className="align-middle font-mono text-base font-normal text-muted-foreground">({profile.pronouns})</span>
          </h1>

          <p className="mt-3 text-lg text-foreground/80">
            {profile.title} <span className="text-muted-foreground">|</span>{' '}
            <span className="text-brand">{profile.role}</span>
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-pretty text-muted-foreground">{profile.bio}</p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {socials.map(({ label, handle, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3.5 py-2 text-sm font-medium transition-colors hover:border-foreground/30 hover:bg-muted"
                >
                  <Icon className="size-4" />
                  {label}
                  {handle ? <span className="hidden font-mono text-xs font-normal text-muted-foreground sm:inline">@{handle}</span> : null}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <DevDuckyTerminal />
      </div>
    </section>
  )
}
