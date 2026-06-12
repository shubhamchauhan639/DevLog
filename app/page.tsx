'use client'

import Link from 'next/link'
import { ThemeProvider } from './components/theme-context'
import { ThemeStyles } from './components/theme-styles'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'

// ── Data ───────────────────────────────────────────────
const features = [
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

const steps = [
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

// ── Main Page ──────────────────────────────────────────
export default function LandingPage() {
  return (
    <ThemeProvider>
      <ThemeStyles />
      <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <Navbar />

        <Hero />

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
              <div
                key={f.title}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
                  <span className="text-sm">{f.icon}</span>
                </div>
                <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1.5">{f.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{f.description}</p>
              </div>
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
              <div
                key={s.number}
                className="flex gap-3 py-4 border-b border-[var(--border)] last:border-none"
              >
                <div className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-indigo-400">{s.number}</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1">{s.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="text-center px-6 py-14 border-t border-[var(--border)]">
          <h2 className="text-xl font-medium text-[var(--text-primary)] mb-2">
            Start tracking your journey today
          </h2>
          <p className="text-sm text-[var(--text-muted)] mb-6">Free forever. No credit card needed.</p>
          <Link
            href="/sign-in"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Get started free
          </Link>
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
