import Image from 'next/image'
import { GitHubIcon } from '@/components/brand-icons'
import { profile } from '@/lib/content'

const interests = [
  {
    title: 'Equestrian Western Cutting',
    description:
      'Competing in cutting — reading the herd, holding position, and trusting split-second decisions. Turns out it trains the same focus as debugging.',
    image: '/images/krazykat-and-me.jpg',
    alt: 'Clarissa in a white cowboy hat riding her chestnut horse KrazyKat in front of a weathered wooden barn',
    imagePosition: 'object-[center_20%]',
  },
  {
    title: 'Certembe Farms',
    description:
      'Managing a growing goat herd — scheduling, record-keeping, and logistics that inspired my Livestock Management Database Engine.',
    image: '/images/certembe-goats.jpg',
    alt: 'A row of black, white, and tan goats lined up along a mesh fence in a grassy pasture at sunset',
    imagePosition: 'object-[center_40%]',
  },
]

export function BeyondTheCode() {
  return (
    <footer id="beyond" aria-labelledby="beyond-heading" className="scroll-mt-20 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-5xl px-5 py-20">
        <p className="font-mono text-xs text-brand">04 / off-screen</p>
        <h2 id="beyond-heading" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Beyond the code
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {interests.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="relative aspect-[16/9]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className={`object-cover ${'imagePosition' in item ? item.imagePosition : ''}`}
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {profile.name} · Built with Next.js &amp; Tailwind, deployed on Vercel.
          </p>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono hover:text-foreground"
          >
            <GitHubIcon className="size-4" />
            clarissa-dev-codes
          </a>
        </div>
      </div>
    </footer>
  )
}
