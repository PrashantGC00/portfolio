import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const SceneReadyContext = createContext(null)

export function SceneReadyProvider({ children }) {
  const [ready, setReadyState] = useState({
    MACINTOSH: false,
  })

  const setReady = useCallback((key) => {
    setReadyState((prev) => {
      if (prev[key]) return prev
      return { ...prev, [key]: true }
    })
  }, [])

  const { allReady, readyProgress, readyCount, totalCount } = useMemo(() => {
    const values = Object.values(ready)
    const total = values.length
    const done = values.filter(Boolean).length
    return {
      allReady: total > 0 && done === total,
      readyProgress: total === 0 ? 100 : (done / total) * 100,
      readyCount: done,
      totalCount: total,
    }
  }, [ready])

  return (
    <SceneReadyContext.Provider
      value={{ ready, setReady, allReady, readyProgress, readyCount, totalCount }}
    >
      {children}
    </SceneReadyContext.Provider>
  )
}

export function useSceneReady() {
  const ctx = useContext(SceneReadyContext)
  if (!ctx) {
    throw new Error('useSceneReady must be used within a SceneReadyProvider')
  }
  return ctx
}
