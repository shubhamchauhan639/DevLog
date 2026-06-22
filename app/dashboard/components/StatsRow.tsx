import { DailyLog } from '@/types'

interface StatsRowProps {
  streak: number
  longest: number
  logs: DailyLog[]
}
export default function StatsRow({ streak, longest, logs }: StatsRowProps) {

const oneWeekAgo = new Date()
oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

const weeklyHours = logs
  .filter(log => new Date(log.date) >= oneWeekAgo)
  .reduce((sum, log) => sum + log.hours_code, 0)


const currentMonth = new Date().getMonth()

const logsThisMonth = logs
  .filter(log => new Date(log.date).getMonth() === currentMonth)
  .length

return (
  <div className="grid grid-cols-4 gap-4 mt-6">
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Current Streak</h3>
      <p className="text-2xl font-bold text-amber-500">{streak} days</p>
      <p className="text-xs text-gray-500 mt-1">Best: {longest} days</p>
    </div>
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Hours This Week</h3>
      <p className="text-2xl font-bold text-indigo-500">{weeklyHours}h</p>
      <p className="text-xs text-gray-500 mt-1">Goal: 28h</p>
    </div>
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Logs This Month</h3>
      <p className="text-2xl font-bold text-emerald-500">{logsThisMonth}</p>
      <p className="text-xs text-gray-500 mt-1">Out of 30 days</p>
    </div>
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Avg Mood</h3>
      <p className="text-2xl font-bold text-blue-500">Good</p>
      <p className="text-xs text-gray-500 mt-1">This week</p>
    </div>
  </div>
)
}