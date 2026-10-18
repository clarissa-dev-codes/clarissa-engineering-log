export function SectionHeading({
  id,
  index,
  title,
  description,
}: {
  id: string
  index: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs text-brand">{index}</p>
      <h2 id={id} className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? <p className="mt-2 max-w-2xl text-muted-foreground text-pretty">{description}</p> : null}
    </div>
  )
}
