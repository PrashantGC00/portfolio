import { useState } from 'react'
import { projects } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="scroll-mt-24 py-10 lg:py-16">
      <SectionHeading label="projects" />
      <div className="max-w-content grid gap-4">
        {projects.map((p) => (
          <button
            key={p.index}
            type="button"
            onClick={() => setSelected(p)}
            className="group relative rounded-lg border border-ink-line bg-ink-surface p-5 text-left transition-colors hover:border-brass/60"
          >
            <div className="flex items-start gap-4">
              <span className="font-mono text-sm text-paper-faint pt-0.5 shrink-0">
                [{p.index}]
              </span>
              <div className="flex-1">
                <h3 className="font-medium text-paper group-hover:text-brass transition-colors">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-sm text-paper-dim leading-relaxed">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="font-mono text-xs text-teal">
                      {s}
                      {s !== p.stack[p.stack.length - 1] ? <span className="text-paper-faint">,</span> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
