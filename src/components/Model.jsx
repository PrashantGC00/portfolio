import { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'
import * as THREE from 'three'
import { useSceneReady } from '../context/screen-ready'

const NAME = 'MACINTOSH'

function useIsDarkMode() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark'),
  )
  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'))
    })
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])
  return isDark
}

function readCssColor(varName, fallbackHex) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
  const parts = raw.split(/\s+/).map(Number)
  if (parts.length < 3 || parts.some(Number.isNaN)) return new THREE.Color(fallbackHex)
  const [r, g, b] = parts
  return new THREE.Color(r / 255, g / 255, b / 255)
}

const DARK_MODE_MATERIAL_MAP = {
  '02___Default': { var: '--color-ink-surface', fallback: '#2a2a28' },
  dark_beige: { var: '--color-ink-soft', fallback: '#3a3733' },
  dark_grey: { var: '--color-ink', fallback: '#1c1b19' },
  darker_beige: { var: '--color-ink', fallback: '#171614' },
  darkest_beige: { var: '--color-ink', fallback: '#0f0e0d' },
  light_beige: { var: '--color-ink-surface', fallback: '#2f2c28' },
  lighter_beige: { var: '--color-ink-soft', fallback: '#403c36' },
}

const COLOR_TRANSITION_SPEED = 3.5

const VIDEOS = ['/static.mp4', '/code_1.mp4']

function Screen({ geometry }) {
  const [index, setIndex] = useState(0)
  const videosRef = useRef([])
  const materialRef = useRef()

  const textures = useMemo(() => {
    return VIDEOS.map((src) => {
      const video = document.createElement('video')
      video.src = src
      video.muted = true
      video.loop = true
      video.playsInline = true
      video.crossOrigin = 'anonymous'
      video.play().catch(() => { })
      videosRef.current.push(video)

      const texture = new THREE.VideoTexture(video)
      texture.colorSpace = THREE.SRGBColorSpace
      texture.flipY = true
      return texture
    })
  }, [])

  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: textures[0],
        toneMapped: false,
      }),
    [textures],
  )
  materialRef.current = material

  useEffect(() => {
    return () => {
      videosRef.current.forEach((v) => {
        v.pause()
        v.src = ''
        v.load()
      })
    }
  }, [])

  const handleClick = () => {
    setIndex((prev) => {
      const next = (prev + 1) % VIDEOS.length
      materialRef.current.map = textures[next]
      materialRef.current.needsUpdate = true
      return next
    })
  }

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={geometry}
      material={material}
      onClick={(e) => {
        e.stopPropagation()
        handleClick()
      }}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    />
  )
}

export default function Model(props) {
  const group = useRef()
  const { setReady } = useSceneReady()
  const isReady = useRef(false)
  const { nodes, materials } = useGLTF('/apple_macintosh.glb')
  const isDark = useIsDarkMode()

  const localMaterials = useMemo(() => {
    const clones = {}
    Object.entries(materials).forEach(([key, mat]) => {
      clones[key] = mat.clone()
    })
    return clones
  }, [materials])

  const originalColors = useMemo(() => {
    const colors = {}
    Object.entries(localMaterials).forEach(([key, mat]) => {
      if (mat.color) colors[key] = mat.color.clone()
    })
    return colors
  }, [localMaterials])

  const targetColors = useRef({})

  useEffect(() => {
    const targets = {}
    Object.entries(localMaterials).forEach(([key, mat]) => {
      if (!mat.color) return
      const target = DARK_MODE_MATERIAL_MAP[key]
      if (isDark && target) {
        targets[key] = readCssColor(target.var, target.fallback)
      } else if (originalColors[key]) {
        targets[key] = originalColors[key]
      }
    })
    targetColors.current = targets
  }, [isDark, localMaterials, originalColors])

  useFrame((_, delta) => {
    if (!group.current && !isReady.current) return
    if (!isReady.current) {
      isReady.current = true
      setReady(NAME)
    }
    // const t = clock.getElapsedTime()
    // const swing = Math.PI / 9
    // const offset = Math.PI / 9
    // group.current.rotation.y = Math.cos(t * 0.6) * swing + offset

    const targets = targetColors.current
    Object.entries(localMaterials).forEach(([key, mat]) => {
      const targetColor = targets[key]
      if (!mat.color || !targetColor) return
      mat.color.lerp(targetColor, 1 - Math.exp(-COLOR_TRANSITION_SPEED * delta))
      mat.needsUpdate = true
    })
  })

  return (
    <group ref={group} {...props}>
      <Center>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <Screen geometry={nodes.Object_5.geometry} />
          <mesh geometry={nodes.Object_2.geometry} material={localMaterials['02___Default']} />
          <mesh geometry={nodes.Object_4.geometry} material={localMaterials.dark_beige} />
          <mesh geometry={nodes.Object_5.geometry} material={localMaterials.dark_grey} />
          <mesh geometry={nodes.Object_6.geometry} material={localMaterials.darker_beige} />
          <mesh geometry={nodes.Object_7.geometry} material={localMaterials.darker_beige} />
          <mesh geometry={nodes.Object_8.geometry} material={localMaterials.darkest_beige} />
          <mesh geometry={nodes.Object_9.geometry} material={localMaterials.darkest_beige} />
          <mesh geometry={nodes.Object_10.geometry} material={localMaterials.light_beige} />
          <mesh geometry={nodes.Object_11.geometry} material={localMaterials.lighter_beige} />
        </group>
      </Center>
    </group>
  )
}
useGLTF.preload('/apple_macintosh.glb')
