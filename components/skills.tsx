import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/lib/content'

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" id="skills" className="scroll-mt-20 border-y border-border bg-muted/40">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <SectionHeading id="skills-heading" index="02 / skills" title="Skills & coursework" />
        <div className="grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="border-border p-6 not-last:border-b md:not-last:border-r md:not-last:border-b-0">
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-brand">$</span> ls ./{group.command}
              </p>
              <h3 className="mt-3 font-semibold">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-md bg-muted px-2.5 py-1 text-sm text-foreground/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
