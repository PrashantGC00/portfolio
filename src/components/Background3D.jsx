import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from '@react-three/drei'
import Model from './Model.jsx'
import { useSceneReady } from '../context/screen-ready.jsx'
import { useMediaQuery } from '../hooks/use-meida-query.jsx'

const MIN_WIDTH = 1280
const MAX_WIDTH = 1920
const MIN_SCALE = 3
const MAX_SCALE = 4.5

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function useResponsiveScale() {
  const [scale, setScale] = useState(MIN_SCALE)
  useEffect(() => {
    const computeScale = () => {
      const w = window.innerWidth
      const t = clamp((w - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH), 0, 1)
      return MIN_SCALE + t * (MAX_SCALE - MIN_SCALE)
    }
    const handleResize = () => setScale(computeScale())
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return scale
}

export default function Background3D() {
  const isVisible = useMediaQuery('(min-width: 1280px)')
  const scale = useResponsiveScale()
  const modelScale = scale * 0.01
  const { setReady } = useSceneReady()

  useEffect(() => {
    if (!isVisible) {
      setReady('MACINTOSH')
    }
  }, [isVisible, setReady])

  if (!isVisible) return null

  return (
    <div
      className="hidden xl:block fixed top-0 right-0 h-screen w-[42vw] z-10 pointer-events-auto bg-ink transition-colors duration-300 ease-in-out"
      aria-hidden="true"
    >
      <Canvas
        shadows
        camera={{ position: [3, 2, 5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        className='cursor-grab active:cursor-grabbing'
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[0, 6, 0]}
          intensity={1.4}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-near={0.5}
          shadow-camera-far={12}
          shadow-camera-left={-3}
          shadow-camera-right={3}
          shadow-camera-top={3}
          shadow-camera-bottom={-3}
          shadow-bias={-0.0005}
        />
        <directionalLight position={[-4, -2, -3]} intensity={0.2} color="#5FB3AE" />
        <Suspense fallback={null}>
          <Model scale={modelScale} />
          <ContactShadows
            position={[0, -1.05, 0]}
            opacity={0.55}
            scale={10}
            blur={2.4}
            far={2.5}
            color="#8a795d"
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
