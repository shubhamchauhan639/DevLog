'use client'

import { useMemo } from 'react'

// ── Types ──────────────────────────────────────────────
interface DailyLog {
  date: string        // "YYYY-MM-DD"
  hours_code: number
}

interface CellData {
  date: string
  hours: number
  isFuture: boolean
  dayLabel?: string   // "Mon", "Wed", "Fri" — only for first column
}

interface ActivityGraphProps {
  logs: DailyLog[]
  currentStreak: number
  longestStreak: number
}

// ── Constants ──────────────────────────────────────────
const WEEKS = 26
const DAYS_IN_WEEK = 7

// Dark indigo colors matching the screenshot
const COLORS = [
  '#e8eaf6', // level 0 — no log     (light grey)
  '#9fa8da', // level 1 — 1h         (light indigo)
  '#5c6bc0', // level 2 — 2-3h       (medium indigo)
  '#3949ab', // level 3 — 4-5h       (dark indigo)
  '#283593', // level 4 — 6h+        (darkest indigo)
]

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// ── Helpers ────────────────────────────────────────────
function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getColorLevel(hours: number): number {
  if (hours === 0) return 0
  if (hours <= 1) return 1
  if (hours <= 3) return 2
  if (hours <= 5) return 3
  return 4
}

function getTooltipText(date: string, hours: number): string {
  const d = new Date(date)
  const formatted = d.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
  return hours === 0 ? `No log — ${formatted}` : `${hours}h coded — ${formatted}`
}

// ── Main Component ─────────────────────────────────────
export default function ActivityGraph({
  logs,
  currentStreak,
  longestStreak,
}: ActivityGraphProps) {

  // Build date → hours map from logs
  const logMap = useMemo(() => {
    const map = new Map<string, number>()
    logs.forEach((log) => map.set(log.date, log.hours_code))
    return map
  }, [logs])

  // Calculate total stats
  const totalDaysLogged = useMemo(
    () => logs.filter((l) => l.hours_code > 0).length,
    [logs]
  )
  const totalHoursCoded = useMemo(
    () => logs.reduce((sum, l) => sum + l.hours_code, 0),
    [logs]
  )

  // Build grid — 26 weeks × 7 days
  const { weeks, monthLabels } = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Find the Monday of the current week
    const dayOfWeek = today.getDay() || 7; // Sunday is 7, Monday is 1
    const diffToMonday = 1 - dayOfWeek;
    const currentMonday = new Date(today);
    currentMonday.setDate(today.getDate() + diffToMonday);

    // Start (WEEKS - 1) weeks before the current Monday
    const start = new Date(currentMonday)
    start.setDate(currentMonday.getDate() - (WEEKS - 1) * DAYS_IN_WEEK)

    const weeksData: CellData[][] = []
    const labels: { weekIndex: number; label: string }[] = []
    let lastMonth = -1

    for (let w = 0; w < WEEKS; w++) {
      const week: CellData[] = []
      for (let d = 0; d < DAYS_IN_WEEK; d++) {
        const date = new Date(start)
        date.setDate(start.getDate() + w * DAYS_IN_WEEK + d)
        const dateStr = formatDate(date)
        const month = date.getMonth()

        // Track month label for first occurrence
        if (month !== lastMonth) {
          labels.push({ weekIndex: w, label: MONTH_NAMES[month] })
          lastMonth = month
        }

        week.push({
          date: dateStr,
          hours: logMap.get(dateStr) ?? 0,
          isFuture: date > today,
        })
      }
      weeksData.push(week)
    }

    return { weeks: weeksData, monthLabels: labels }
  }, [logMap])

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 w-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
          <span className="text-gray-400">✦</span>
          Coding activity — last 6 months
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-500 text-xs font-medium">
          🔥 {currentStreak} day streak
        </div>
      </div>

      {/* Graph */}
      <div className="overflow-x-auto">
        <div className="min-w-max">

          {/* Month labels row */}
          <div className="flex mb-1 pl-8">
            {monthLabels.map((ml, i) => {
              const nextWeek = monthLabels[i + 1]?.weekIndex ?? WEEKS
              const width = (nextWeek - ml.weekIndex) * 14
              return (
                <div
                  key={i}
                  className="text-xs text-gray-400"
                  style={{ width: `${width}px`, minWidth: `${width}px` }}
                >
                 
                  {ml.label}
                </div>
              )
            })}
          </div>

          {/* Grid with day labels */}
          <div className="flex gap-0">

            {/* Day labels — Mon, Wed, Fri only */}
            <div className="flex flex-col gap-0 mr-1 pt-0">
              {DAY_LABELS.map((day, i) => (
                <div
                  key={i}
                  className="text-xs text-gray-400 flex items-center"
                  style={{ height: '12px', marginBottom: '2px' }}
                >
                  {i === 0 || i === 2 || i === 4 ? day : ''}
                </div>
              ))}
            </div>

            {/* Cells */}
            <div className="flex gap-0.5">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-0.5">
                  {week.map((cell, di) => (
                    <div
                      key={di}
                      title={getTooltipText(cell.date, cell.hours)}
                      className="w-3 h-3 rounded-sm cursor-pointer transition-opacity hover:opacity-70"
                      style={{
                        background: cell.isFuture
                          ? COLORS[0]
                          : COLORS[getColorLevel(cell.hours)],
                        opacity: cell.isFuture ? 0.3 : 1,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-1.5 mt-2 justify-end">
            <span className="text-xs text-gray-400">Less</span>
            {COLORS.map((color, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-sm"
                style={{ background: color }}
              />
            ))}
            <span className="text-xs text-gray-400">More</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-6 mt-4 pt-4 border-t border-gray-100">
        <div>
          <div className="text-lg font-semibold text-amber-500">
            {currentStreak} days
          </div>
          <div className="text-xs text-gray-400 mt-0.5">Current streak</div>
        </div>
        <div>
          <div className="text-lg font-semibold text-indigo-500">
            {longestStreak} days
          </div>
          <div className="text-xs text-gray-400 mt-0.5">Longest streak</div>
        </div>
        <div>
          <div className="text-lg font-semibold text-emerald-500">
            {totalDaysLogged}
          </div>
          <div className="text-xs text-gray-400 mt-0.5">Total days logged</div>
        </div>
        <div>
          <div className="text-lg font-semibold text-indigo-500">
            {totalHoursCoded}h
          </div>
          <div className="text-xs text-gray-400 mt-0.5">Total hours coded</div>
        </div>
      </div>

    </div>
  )
}
