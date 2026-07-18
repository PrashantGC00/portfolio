export default function SectionHeading({ label }) {
  return (
    <h2 className="relative flex items-baseline gap-2 h-full font-mono text-lg font-medium text-paper mb-6 sticky top-0 -mt-3 z-10">
      <span
        className="absolute inset-0 bg-ink/20 backdrop-blur-[4px] transition-colors duration-300 ease-in-out"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <span className="relative text-brass capitalize">
        &quot;{label}&quot;
      </span>
    </h2>
  )
}
