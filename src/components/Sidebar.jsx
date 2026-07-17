import { profile, nav } from '../data/content.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Sidebar() {
  return (
    <header className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[300px] px-8 py-14 lg:py-16 flex flex-col justify-between">
      <div className="reveal">
        <p className="font-mono text-sm text-teal mb-3">
          <span className="punct">{'{'}</span> hello world <span className="punct">{'}'}</span>
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-paper font-mono">
          {profile.name}
        </h1>
        <p className="mt-2 text-paper-dim">{profile.role}</p>
        <p className="mt-4 text-sm text-paper-dim leading-relaxed max-w-[26ch]">
          {profile.blurb}
        </p>

        <nav className="mt-12 hidden lg:block" aria-label="Section navigation">
          <ul className="space-y-4 font-mono text-sm">
            {nav.map((item, i) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="group inline-flex items-baseline gap-2 text-paper-dim hover:text-brass transition-colors"
                >
                  <span className="punct group-hover:text-brass transition-colors">
                    &quot;{item.key}&quot;
                  </span>
                  <span className="punct">{i === nav.length - 1 ? '' : ','}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <div className='my-4'>
          <ThemeToggle />
        </div>
        <ul className="flex gap-5 font-mono text-xs text-paper-dim mt-12 lg:mt-0">


          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="hover:text-brass transition-colors underline decoration-ink-line underline-offset-4"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
