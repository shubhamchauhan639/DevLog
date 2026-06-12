export interface Feature {
  icon: string
  title: string
  description: string
}

export function FeatureCard({ feature }: { feature: Feature }) {
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
