export default function SectionHeading({ label }) {
  return (
    <h2 className="flex items-baseline gap-2 font-mono text-lg font-medium text-paper mb-6 sticky top-0 bg-ink/90 backdrop-blur py-3 -mt-3 z-10 transition-colors duration-300 ease-in-out">
      <span className="text-brass capitalize">&quot;{label}&quot;</span>
    </h2>
  )
}
