import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import MainContent from './components/MainContent'
import WeeklySummary from './components/WeeklySummary'
import TodaysLog from './components/TodaysLog'
import RecentLogs from './components/RecentLogs'
import DashboardData from './components/DashboardData'

export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  const firstName = user.firstName ?? 'Developer'

  return (
    <div className="p-8 max-w-5xl">
      <MainContent firstname={firstName} />
      <DashboardData userId={user.id} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="col-span-1">
          <WeeklySummary userId={user.id} />
        </div>
        <div className="col-span-2 flex flex-col gap-6">
          <TodaysLog userId={user.id} />
          <RecentLogs userId={user.id} />
        </div>
      </div>
    </div>
  )
}
