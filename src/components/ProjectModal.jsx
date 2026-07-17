import { useState } from 'react'
import Modal from './Modal.jsx'
import { ImageSlider } from './ImageSlider.jsx'

export default function ProjectModal({ project, onClose }) {
  return (
    <Modal isOpen={!!project} onClose={onClose} className='p-5'>
      {project && (
        <>
          {(project.media || project.media) && (project.media || project.media).length > 0 && (
            <div className="mb-5">
              <ImageSlider images={project.media || project.media} alt={project.name} />
            </div>
          )}
          <div className="flex items-start gap-3">
            {project.index != null && (
              <span className="font-mono text-sm text-paper-faint pt-0.5 shrink-0">
                [{project.index}]
              </span>
            )}
            <h2 className="text-xl font-medium text-paper">{project.name}</h2>
          </div>
          <p className="mt-3 text-sm text-paper-dim leading-relaxed">
            {project.description}
          </p>
          {project.stack && project.stack.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s, i) => (
                <li key={s} className="font-mono text-xs text-teal">
                  {s}
                  {i !== project.stack.length - 1 ? (
                    <span className="text-paper-faint">,</span>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs text-paper-dim">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brass transition-colors underline decoration-ink-line underline-offset-4"
              >
                View project
              </a>
            )}
            {project.links &&
              project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brass transition-colors underline decoration-ink-line underline-offset-4"
                >
                  {l.label}
                </a>
              ))}
          </div>
        </>
      )}
    </Modal>
  )
}
