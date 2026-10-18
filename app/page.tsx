import { BeyondTheCode } from '@/components/beyond-the-code'
import { Hero } from '@/components/hero'
import { Journal } from '@/components/journal'
import { Projects } from '@/components/projects'
import { SiteHeader } from '@/components/site-header'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Journal />
      </main>
      <BeyondTheCode />
    </>
  )
}
