'use client'

import Link from 'next/link'
import { Show, UserButton } from '@clerk/nextjs'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
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
        <ThemeToggle />
        <div className="w-px h-4 bg-[var(--border)]" />

        {/* Signed-out state: show Sign in + Get started */}
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

        {/* Signed-in state: show Dashboard link + UserButton */}
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
