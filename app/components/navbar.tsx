'use client'

import Link from 'next/link'
import { Show, UserButton } from '@clerk/nextjs'
import { useTheme } from './theme-context'

export function Navbar() {
  const { theme, toggle } = useTheme()

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]
      bg-[var(--bg-primary)] transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-indigo-500" />
        <span className="text-sm font-medium text-[var(--text-primary)]">DevLog</span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#features" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
          Features
        </a>
        <a href="#how-it-works" className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
          How it works
        </a>
        <a
          href="https://github.com/shubhamchauhan639"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          GitHub
        </a>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all duration-200
            border-[var(--border)] bg-[var(--bg-card)] hover:bg-[var(--bg-hover)]
            text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs font-medium"
        >
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

        <div className="w-px h-4 bg-[var(--border)]" />

        {/* Signed-out state */}
        <Show when="signed-out">
          <Link
            href="/sign-in"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            Sign in
          </Link>
          <div className="w-px h-4 bg-[var(--border)]" />
          <Link
            href="/sign-up"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
          >
            Get started free
          </Link>
        </Show>

        {/* Signed-in state */}
        <Show when="signed-in">
          <Link
            href="/dashboard"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            Dashboard
          </Link>
          <div className="w-px h-4 bg-[var(--border)]" />
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-7 h-7',
              },
            }}
          />
        </Show>
      </div>
    </nav>
  )
}
