'use client'

import Link from 'next/link'

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

// ── Sub-components ─────────────────────────────────────
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      {/* Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-indigo-500" />
        <span className="text-sm font-medium text-gray-100">DevLog</span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#features" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
          Features
        </a>
        <a href="#how-it-works" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
          How it works
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
        >
          GitHub
        </a>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <Link
          href="/login"
          className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
        >
          Sign in
        </Link>
        <div className="w-px h-4 bg-gray-700" />
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
    <div className="border border-gray-800 rounded-xl bg-gray-950 p-4 max-w-lg mx-auto text-left">
      {/* Preview header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-500">Dashboard — Arjun Kumar</span>
        <span className="text-xs text-amber-400 flex items-center gap-1">
          🔥 12 day streak
        </span>
      </div>

      {/* Mini stats */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-2">
          <div className="text-sm font-medium text-indigo-400">24h</div>
          <div className="text-xs text-gray-500 mt-0.5">This week</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-2">
          <div className="text-sm font-medium text-emerald-400">21</div>
          <div className="text-xs text-gray-500 mt-0.5">Logs this month</div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-2">
          <div className="text-sm font-medium text-amber-400">Good</div>
          <div className="text-xs text-gray-500 mt-0.5">Avg mood</div>
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
        <p className="text-xs text-gray-400 leading-relaxed">
          You code best on Tuesdays. Your mood drops Fridays — try shorter sessions at end of week.
        </p>
      </div>
    </div>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
        <span className="text-sm">{feature.icon}</span>
      </div>
      <h3 className="text-sm font-medium text-gray-100 mb-1.5">{feature.title}</h3>
      <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
    </div>
  )
}

function StepRow({ step }: { step: Step }) {
  return (
    <div className="flex gap-3 py-4 border-b border-gray-800 last:border-none">
      <div className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-xs font-medium text-indigo-400">{step.number}</span>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-100 mb-1">{step.title}</h3>
        <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

function GoogleButton({ label }: { label: string }) {
  return (
    <Link
      href="/login"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
    >
      {/* Google SVG icon */}
      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      {label}
    </Link>
  )
}

// ── Main Page ──────────────────────────────────────────
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="text-center px-6 py-16 max-w-2xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs text-indigo-300 mb-5">
          ✨ AI-powered dev tracker
        </div>

        {/* Headline */}
        <h1 className="text-3xl font-medium leading-snug text-gray-50 mb-3">
          Track your coding journey.{' '}
          <span className="text-indigo-400">Stay consistent. Grow faster.</span>
        </h1>

        {/* Subtext */}
        <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto mb-7">
          Log what you code every day, track your streak, and get AI insights — like a GitHub
          contribution graph for your learning.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-3 justify-center mb-10">
          <GoogleButton label="Continue with Google" />
          <button className="px-5 py-2.5 text-sm text-gray-400 border border-gray-700 rounded-lg hover:border-gray-500 hover:text-gray-200 transition-colors">
            View demo
          </button>
        </div>

        {/* Dashboard preview */}
        <HeroPreview />
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-12 max-w-2xl mx-auto">
        <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1.5">
          Features
        </p>
        <h2 className="text-xl font-medium text-gray-100 mb-2">
          Everything to stay consistent
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
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
        <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1.5">
          How it works
        </p>
        <h2 className="text-xl font-medium text-gray-100 mb-2">Simple by design</h2>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          Three steps to build a real coding habit.
        </p>
        <div>
          {steps.map((s) => (
            <StepRow key={s.number} step={s} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center px-6 py-14 border-t border-gray-800">
        <h2 className="text-xl font-medium text-gray-100 mb-2">
          Start tracking your journey today
        </h2>
        <p className="text-sm text-gray-400 mb-6">Free forever. No credit card needed.</p>
        <GoogleButton label="Get started free" />
        <p className="text-xs text-gray-600 mt-3">Join developers tracking their coding journey</p>
      </section>

      {/* Footer */}
      <footer className="text-center px-6 py-5 border-t border-gray-800">
        <p className="text-xs text-gray-600">
          Built with Next.js, TypeScript &amp; Firebase · DevLog 2025
        </p>
      </footer>
    </main>
  )
}
