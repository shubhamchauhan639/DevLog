export function HeroPreview() {
  const barHeights = [20, 34, 16, 36, 28, 32, 12]

  return (
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
  )
}
