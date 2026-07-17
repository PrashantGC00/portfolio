import { about } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-10 lg:py-16">
      <SectionHeading label="about" />
      <div className="space-y-4 max-w-content text-paper-dim leading-relaxed">
        {about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  )
}
