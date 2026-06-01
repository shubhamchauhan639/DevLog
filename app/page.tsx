'use client'

import Link from 'next/link'
import { createContext, useContext, useEffect, useState } from 'react'

// ── Theme Context ──────────────────────────────────────
type Theme = 'dark' | 'light'
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: 'dark',
  toggle: () => {},
})

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('devlog-theme') as Theme | null
    if (stored) setTheme(stored)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('devlog-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  return useContext(ThemeContext)
}

// ── Types ──────────────────────────────────────────────
interface Feature {
  icon: string
  title: string
  description: string
}

interface Step {
  number: string
  title: string
  description: string
}

// ── Data ───────────────────────────────────────────────
const features: Feature[] = [
  {
    icon: '🔥',
    title: 'Streak tracker',
    description:
      'GitHub-style graph for every day you coded. Keep the streak alive and watch consistency grow.',
  },
  {
    icon: '✨',
    title: 'AI insights',
    description:
      'GPT reads your weekly logs and gives one personalized tip — what is working, what to improve.',
  },
  {
    icon: '📝',
    title: 'Daily log',
    description:
      'Log hours, mood, and what you learned in under a minute. Simple form, powerful habit.',
  },
  {
    icon: '🎯',
    title: 'Goal tracking',
    description:
      'Set weekly targets and track completion with progress bars. Stay accountable.',
  },
]

const steps: Step[] = [
  {
    number: '1',
    title: 'Sign in with Google',
    description: 'One click. No passwords. Your data is private and tied to your Google account.',
  },
  {
    number: '2',
    title: 'Log what you coded today',
    description:
      'Takes 60 seconds. Hours coded, your mood, and one line about what you learned.',
  },
  {
    number: '3',
    title: 'Watch your streak grow',
    description:
      'Dashboard updates every day. AI gives weekly insights. Your consistency becomes visible data.',
  },
]

// ── Theme Toggle Button ────────────────────────────────
function ThemeToggle() {
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

// ── Sub-components ─────────────────────────────────────
function Navbar() {
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
          href="https://github.com"
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
        <Link
          href="/login"
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          Sign in
        </Link>
        <div className="w-px h-4 bg-[var(--border)]" />
        <Link
          href="/login"
          className="text-sm font-medium px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
        >
          Get started free
        </Link>
      </div>
    </nav>
  )
}

function HeroPreview() {
  const barHeights = [20, 34, 16, 36, 28, 32, 12]

  return (
    <div className="border border-[var(--border)] rounded-xl bg-[var(--bg-card)] p-4 max-w-lg mx-auto text-left transition-colors duration-300">
      {/* Preview header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-[var(--text-subtle)]">Dashboard — Arjun Kumar</span>
        <span className="text-xs text-amber-500 flex items-center gap-1">
          🔥 12 day streak
        </span>
      </div>

      {/* Mini stats */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-[var(--bg-stat)] border border-[var(--border)] rounded-lg p-2">
          <div className="text-sm font-medium text-indigo-500">24h</div>
          <div className="text-xs text-[var(--text-subtle)] mt-0.5">This week</div>
        </div>
        <div className="bg-[var(--bg-stat)] border border-[var(--border)] rounded-lg p-2">
          <div className="text-sm font-medium text-emerald-500">21</div>
          <div className="text-xs text-[var(--text-subtle)] mt-0.5">Logs this month</div>
        </div>
        <div className="bg-[var(--bg-stat)] border border-[var(--border)] rounded-lg p-2">
          <div className="text-sm font-medium text-amber-500">Good</div>
          <div className="text-xs text-[var(--text-subtle)] mt-0.5">Avg mood</div>
        </div>
      </div>

      {/* Mini bar chart */}
      <div className="flex items-end gap-1 h-8 mb-3">
        {barHeights.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-indigo-500"
            style={{ height: `${h}px`, opacity: h < 18 ? 0.3 : 0.85 }}
          />
        ))}
      </div>

      {/* AI chip */}
      <div className="flex items-start gap-2 p-2.5 rounded-lg border border-indigo-500/20 bg-indigo-500/5">
        <span className="text-xs text-indigo-400 mt-0.5 flex-shrink-0">✨</span>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          You code best on Tuesdays. Your mood drops Fridays — try shorter sessions at end of week.
        </p>
      </div>
    </div>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 transition-colors duration-300">
      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
        <span className="text-sm">{feature.icon}</span>
      </div>
      <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1.5">{feature.title}</h3>
      <p className="text-xs text-[var(--text-muted)] leading-relaxed">{feature.description}</p>
    </div>
  )
}

function StepRow({ step }: { step: Step }) {
  return (
    <div className="flex gap-3 py-4 border-b border-[var(--border)] last:border-none">
      <div className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-xs font-medium text-indigo-400">{step.number}</span>
      </div>
      <div>
        <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">{step.title}</h3>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

function GoogleButton({ label }: { label: string }) {
  return (
    <Link
      href="/login"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
      {label}
    </Link>
  )
}

// ── Theme CSS (inject into <head> via a component) ─────
function ThemeStyles() {
  return (
    <style>{`
      :root, [data-theme="dark"] {
        --bg-primary: #030712;
        --bg-card: #111827;
        --bg-stat: #0f172a;
        --bg-hover: #1f2937;
        --border: #1f2937;
        --text-primary: #f9fafb;
        --text-muted: #9ca3af;
        --text-subtle: #6b7280;
        --toggle-track: #374151;
        --toggle-thumb: #9ca3af;
      }
      [data-theme="light"] {
        --bg-primary: #ffffff;
        --bg-card: #f9fafb;
        --bg-stat: #f3f4f6;
        --bg-hover: #f3f4f6;
        --border: #e5e7eb;
        --text-primary: #111827;
        --text-muted: #4b5563;
        --text-subtle: #9ca3af;
        --toggle-track: #6366f1;
        --toggle-thumb: #ffffff;
      }
      html {
        transition: background-color 0.3s ease, color 0.3s ease;
        background-color: var(--bg-primary);
        color: var(--text-primary);
      }
    `}</style>
  )
}

// ── Main Page ──────────────────────────────────────────
export default function LandingPage() {
  return (
    <ThemeProvider>
      <ThemeStyles />
      <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <Navbar />

        {/* Hero */}
        <section className="text-center px-6 py-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs text-indigo-400 mb-5">
            ✨ AI-powered dev tracker
          </div>

          <h1 className="text-3xl font-medium leading-snug text-[var(--text-primary)] mb-3">
            Track your coding journey.{' '}
            <span className="text-indigo-500">Stay consistent. Grow faster.</span>
          </h1>

          <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm mx-auto mb-7">
            Log what you code every day, track your streak, and get AI insights — like a GitHub
            contribution graph for your learning.
          </p>

          <div className="flex items-center gap-3 justify-center mb-10">
            <GoogleButton label="Continue with Google" />
            <button className="px-5 py-2.5 text-sm text-[var(--text-muted)] border border-[var(--border)] rounded-lg hover:border-[var(--text-subtle)] hover:text-[var(--text-primary)] transition-colors">
              View demo
            </button>
          </div>

          <HeroPreview />
        </section>

        {/* Features */}
        <section id="features" className="px-6 py-12 max-w-2xl mx-auto">
          <p className="text-xs font-medium text-indigo-500 uppercase tracking-widest mb-1.5">
            Features
          </p>
          <h2 className="text-xl font-medium text-[var(--text-primary)] mb-2">
            Everything to stay consistent
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
            Built for developers who want to track growth with real data and AI insights.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {features.map((f) => (
              <FeatureCard key={f.title} feature={f} />
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="px-6 py-12 max-w-2xl mx-auto">
          <p className="text-xs font-medium text-indigo-500 uppercase tracking-widest mb-1.5">
            How it works
          </p>
          <h2 className="text-xl font-medium text-[var(--text-primary)] mb-2">Simple by design</h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
            Three steps to build a real coding habit.
          </p>
          <div>
            {steps.map((s) => (
              <StepRow key={s.number} step={s} />
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center px-6 py-14 border-t border-[var(--border)]">
          <h2 className="text-xl font-medium text-[var(--text-primary)] mb-2">
            Start tracking your journey today
          </h2>
          <p className="text-sm text-[var(--text-muted)] mb-6">Free forever. No credit card needed.</p>
          <GoogleButton label="Get started free" />
          <p className="text-xs text-[var(--text-subtle)] mt-3">Join developers tracking their coding journey</p>
        </section>

        {/* Footer */}
        <footer className="text-center px-6 py-5 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--text-subtle)]">
            Built with Next.js, TypeScript &amp; Firebase · DevLog 2025
          </p>
        </footer>
      </main>
    </ThemeProvider>
  )
}
