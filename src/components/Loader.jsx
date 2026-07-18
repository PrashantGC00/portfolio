import { useProgress } from '@react-three/drei'
import { useSceneReady } from '../context/screen-ready'

function Loader() {
  const { progress: downloadProgress } = useProgress()
  const { allReady, readyProgress, readyCount, totalCount } = useSceneReady()

  const active = !allReady
  const displayProgress = downloadProgress < 100 ? downloadProgress : readyProgress

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-ink transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      aria-hidden={!active}
    >
      <span className="font-mono text-xs text-paper-dim tracking-widest uppercase">
        loading models please wait...
      </span>
      <div className="h-px w-40 bg-ink-line overflow-hidden">
        <div
          className="h-full bg-brass transition-all duration-200 ease-out"
          style={{ width: `${displayProgress}%` }}
        />
      </div>
      <span className="font-mono text-xs text-brass tabular-nums">
        {Math.round(displayProgress)}% · {readyCount}/{totalCount} models
      </span>
    </div>
  )
}
export default Loader
