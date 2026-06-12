'use client'

import { useTheme } from './theme-context'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-200
        border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-hover)]
        text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs font-medium"
    >
      {/* Track */}
      <span className="relative inline-flex items-center w-8 h-4 rounded-full transition-colors duration-300
        bg-[var(--toggle-track)]">
        <span
          className="absolute w-3 h-3 rounded-full shadow-sm transition-transform duration-300
            bg-[var(--toggle-thumb)]"
          style={{ transform: theme === 'light' ? 'translateX(18px)' : 'translateX(2px)' }}
        />
      </span>
      <span className="w-12 text-left">
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </span>
    </button>
  )
}
