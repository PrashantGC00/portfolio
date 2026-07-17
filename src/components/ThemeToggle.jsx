import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark'),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={() => setIsDark((d) => !d)}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-ink-line bg-white dark:bg-ink-surface transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <span
        className={`flex h-4 w-4 items-center justify-center rounded-full bg-white dark:bg-ink shadow-sm transition-transform duration-300 ${
          isDark ? 'translate-x-6' : 'translate-x-1'
        }`}
      >
        {isDark ? (
          <Moon className="h-2.5 w-2.5 text-paper" strokeWidth={2.5} />
        ) : (
          <Sun className="h-2.5 w-2.5 text-brass" strokeWidth={2.5} />
        )}
      </span>
    </button>
  )
}
