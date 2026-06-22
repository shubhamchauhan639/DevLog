'use client'                    // ← this is what makes hooks work

import { useLogs } from '@/hooks/useLogs'
import { useStreak } from '@/hooks/useStreak'
import ActivityGraph from './ActivityGraph'
import StatsRow from './StatsRow'

export default function DashboardData({ userId }: { userId: string }) {
  const { logs, loading } = useLogs(userId)
  const { streak, longest } = useStreak(logs)

  if (loading) return <p className="text-sm text-gray-400">Loading...</p>

  return (
    <>
      <StatsRow streak={streak} longest={longest} logs={logs} />
      <ActivityGraph logs={logs} currentStreak={streak} longestStreak={longest} />
    </>
  )
}