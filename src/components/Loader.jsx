import { useProgress } from '@react-three/drei'

function Loader() {
  const { active, progress } = useProgress()

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-ink transition-opacity duration-500 ${
        active ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!active}
    >
      <span className="font-mono text-xs text-paper-dim tracking-widest uppercase">
        loading models please wait...
      </span>
      <div className="h-px w-40 bg-ink-line overflow-hidden">
        <div
          className="h-full bg-brass transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="font-mono text-xs text-brass tabular-nums">
        {Math.round(progress)}%
      </span>
    </div>
  )
}

export default Loader
