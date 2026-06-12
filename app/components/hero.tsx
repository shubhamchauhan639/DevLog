import Link from 'next/link'

const barHeights = [20, 34, 16, 36, 28, 32, 12]

function GoogleButton({ label }: { label: string }) {
  return (
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
      {label}
    </Link>
  )
}

export function Hero() {
  return (
    <section className="text-center px-6 py-16 max-w-2xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs text-indigo-400 mb-5">
        ✨ AI-powered dev tracker
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-medium leading-snug text-[var(--text-primary)] mb-3">
        Track your coding journey.{' '}
        <span className="text-indigo-500">Stay consistent. Grow faster.</span>
      </h1>

      {/* Sub-text */}
      <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-sm mx-auto mb-7">
        Log what you code every day, track your streak, and get AI insights — like a GitHub
        contribution graph for your learning.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-3 justify-center mb-10">
        <GoogleButton label="Continue with Google" />
        <button className="px-5 py-2.5 text-sm text-[var(--text-muted)] border border-[var(--border)] rounded-lg hover:border-[var(--text-subtle)] hover:text-[var(--text-primary)] transition-colors">
          View demo
        </button>
      </div>

      {/* Dashboard preview */}
      <div className="border border-[var(--border)] rounded-xl bg-[var(--bg-card)] p-4 max-w-lg mx-auto text-left transition-colors duration-300">
        {/* Preview header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-[var(--text-subtle)]">Dashboard — Shubham Chauhan</span>
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
    </section>
  )
}
