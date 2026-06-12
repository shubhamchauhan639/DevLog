export interface Step {
  number: string
  title: string
  description: string
}

export function StepRow({ step }: { step: Step }) {
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
