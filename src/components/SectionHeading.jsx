export default function SectionHeading({ label }) {
  return (
    <h2 className="flex items-baseline gap-2 h-full font-mono text-lg font-medium text-paper mb-6 sticky top-0 bg-transparent -mt-3 z-10 ">
      <span className="text-brass capitalize bg-ink w-1/2 h-full transition-colors duration-300 ease-in-out">&quot;{label}&quot;</span>
    </h2>
  )
}
