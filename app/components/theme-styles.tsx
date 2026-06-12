export function ThemeStyles() {
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
