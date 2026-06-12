'use client'

import { ThemeProvider } from './components/theme-context'
import { ThemeStyles } from './components/theme-styles'
import { Navbar } from './components/navbar'
import { HeroPreview } from './components/hero-preview'
import { GoogleButton } from './components/google-button'
import { FeatureCard, type Feature } from './components/feature-card'
import { StepRow, type Step } from './components/step-row'

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
