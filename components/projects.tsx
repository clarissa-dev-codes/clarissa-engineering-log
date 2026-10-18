import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { projects, type Project } from '@/lib/content'
import { cn } from '@/lib/utils'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        'flex flex-col rounded-xl border bg-card p-6 transition-colors hover:border-foreground/25',
        project.featured ? 'border-brand/40' : 'border-border',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-balance">{project.title}</h3>
        {project.featured ? (
          <span className="shrink-0 rounded-full bg-highlight px-2 py-0.5 font-mono text-[11px] font-medium text-highlight-foreground">
            featured
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{project.summary}</p>

      <ul className="mt-4 space-y-1.5 text-sm">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="font-mono text-brand" aria-hidden="true">
              {'›'}
            </span>
            <span className="text-foreground/85">{h}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
        {project.tech.map((t) => (
          <li key={t} className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm font-medium">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-brand"
        >
          <GitHubIcon className="size-4" />
          Source
          <span className="sr-only"> code for {project.title}</span>
        </a>
        {project.live ? (
          <a
            href={project.live.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-brand"
          >
            {project.live.label}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20">
      <SectionHeading
        id="projects-heading"
        index="01 / projects"
        title="Things I've built"
        description="Backend tooling, automation pipelines, and developer utilities — mostly Python and C++."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
