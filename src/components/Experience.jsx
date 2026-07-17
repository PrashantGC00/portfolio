import { experience } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-10 lg:py-16">
      <SectionHeading label="experience" />
      <div className="max-w-content divide-y divide-ink-line">
        {experience.map((job) => (
          <article key={job.index} className="py-6 first:pt-0 group">
            <div className="flex gap-4">
              <span className="font-mono text-sm text-paper-faint pt-1 shrink-0">
                [{job.index}]
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-medium text-paper">
                    {job.role} <span className="text-paper-dim">· {job.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-paper-faint whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <p className="mt-2 text-sm text-paper-dim leading-relaxed">{job.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <li
                      key={s}
                      className="font-mono text-xs text-teal bg-ink-surface border border-ink-line rounded px-2 py-0.5"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
