export const profile = {
  name: 'Clarissa Edwards',
  pronouns: 'she/her',
  title: 'Computer Engineering Senior @ UAH',
  role: 'Backend Software Engineer',
  bio: 'A motivated Junior Software Engineer focused on building robust backend solutions, optimizing system performance, and automation. Experienced in engineering clean, maintainable code across Python, C++, and automation pipelines.',
  links: {
    github: 'https://github.com/clarissa-dev-codes',
    linkedin: 'https://www.linkedin.com/in/clarissa-edwards-107376396/',
    handshake: 'https://app.joinhandshake.com/profiles/hx2qmm',
  },
}

export type Project = {
  title: string
  summary: string
  highlights: string[]
  tech: string[]
  repo: string
  live?: { label: string; href: string }
  featured?: boolean
}

const gh = (repo: string) => `${profile.links.github}/${repo}`

export const projects: Project[] = [
  {
    title: 'DevDucky',
    summary: 'VS Code time tracker status bar extension.',
    highlights: [
      'Tracks active coding duration right in the status bar',
      'Embedded HTML sidebar workspace for session stats',
      'Published and live on the VS Code Marketplace',
    ],
    tech: ['TypeScript', 'VS Code API', 'HTML/CSS'],
    repo: gh('Time-Tracker-Status-Bar-Extension/releases/tag/vscodeextension'),
    live: {
      label: 'Marketplace',
      href: 'https://marketplace.visualstudio.com/items?itemName=clarissa-dev-codes.ducky-time-tracker-and-focus-companion&ssr=false',
    },
    featured: true,
  },
  {
    title: 'Automated NASA Space Data Deployment Engine',
    summary:
      'Built an automated workflow cron job to fetch daily high-resolution space payloads and deploy fresh builds entirely on autopilot.',
    highlights: ['Scheduled GitHub Actions cron on Linux cloud runners', 'Zero-touch deploys to GitHub Pages'],
    tech: ['Python', 'GitHub Actions', 'Linux Cloud Runners', 'GitHub Pages', 'HTML5/CSS3'],
    repo: gh('Astronomy-Picture-of-the-Day-API'),
    live: { label: 'Live Site', href: 'https://clarissa-dev-codes.github.io/Astronomy-Picture-of-the-Day-API/' },
    featured: true,
  },
  {
    title: 'Livestock Management Database Engine',
    summary:
      'Engineered a file-based CRUD database system. Configured cross-platform engineering overrides directly into the Makefile to resolve Windows/Linux text file formatting conflicts.',
    highlights: ['File-backed persistence with full CRUD', 'Makefile overrides normalize CRLF/LF line endings'],
    tech: ['C++', 'Makefile', 'Linux'],
    repo: gh('LivestockTracker'),
  },
  {
    title: 'Coding Project Manager CLI',
    summary: 'Lightweight, terminal-based CLI utility to track and organize multiple active repositories.',
    highlights: ['Fast, dependency-free terminal workflow'],
    tech: ['C++', 'CLI'],
    repo: gh('Coding-Project-Manager'),
  },
  {
    title: 'PDF to EPub Converter',
    summary: 'Converts free programming books into EPub so they format cleanly on a Kindle reading screen.',
    highlights: ['Reflowable output tuned for e-ink displays'],
    tech: ['Python', 'EPub'],
    repo: gh('PDF-to-EPub-Converter'),
  },
  {
    title: 'GitHub User Finder',
    summary: 'Search any GitHub profile and browse stats and repositories, with full dark mode integration.',
    highlights: ['Live data from the GitHub REST API'],
    tech: ['JavaScript', 'GitHub REST API', 'Dark Mode'],
    repo: gh('GitHub-Profile-Finder'),
    live: { label: 'Live Site', href: 'https://clarissa-dev-codes.github.io/GitHub-Profile-Finder/' },
  },
]

export const skillGroups = [
  {
    label: 'Core Languages',
    command: 'langs',
    items: ['Python', 'C++', 'JavaScript', 'HTML5/CSS3'],
  },
  {
    label: 'Software & Tools',
    command: 'tools',
    items: ['VS Code', 'Visual Studio', 'PyCharm', 'MobaXTerm', 'Git', 'GitHub', 'Linux'],
  },
  {
    label: 'Relevant Coursework',
    command: 'courses',
    items: ['Computer Architecture', 'Intro Discrete Structures', 'Statistics', 'Calculus I', 'Calculus II'],
  },
]

export type JournalEntry = {
  id: string
  number: number
  title: string
  date: string
  readTime: string
  tags: string[]
  excerpt: string
  body: string
}

export const journalEntries: JournalEntry[] = [
  {
    id: 'log-01',
    number: 1,
    title: 'Deploying My Portfolio to Vercel via Handshake AI Missions',
    date: '2026-10-18',
    readTime: '3 min read',
    tags: ['vercel', 'deployment', 'handshake'],
    excerpt:
      'Kicking off the journal by shipping this very site. Notes on going from a blank repo to a live Vercel URL as part of a Handshake AI Mission.',
    body: `### The mission

Handshake AI Missions challenged me to ship a real, public portfolio. Instead of a static resume PDF, I wanted a living space where I could **document what I build** and why.

### What I did

- Scaffolded a Next.js app and styled it with Tailwind CSS
- Added a light/dark theme toggle that respects system preferences
- Connected the GitHub repo to Vercel so every push triggers a deploy

\`\`\`bash
git add .
git commit -m "feat: launch portfolio + dev journal"
git push origin main   # Vercel picks it up automatically
\`\`\`

### What I learned

Preview deployments are a superpower: every branch gets its own URL, which makes reviewing changes feel a lot like the CI/CD pipeline I built for my \`NASA Space Data\` project.

### Next up

Writing up how DevDucky measures *active* coding time without counting idle minutes.`,
  },
]
