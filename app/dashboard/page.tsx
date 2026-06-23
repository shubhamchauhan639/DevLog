import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Sidebar from './components/sidebar'
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
  const email = user.emailAddresses[0]?.emailAddress ?? ''
 

  return (
    <>
      <style>{`
        html {
          background-color: #ffffff;
          color: #111827;
        }
      `}</style>

      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-sm font-medium text-gray-900">DevLog</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 hidden sm:block">{firstName}</span>
            <span className="text-xs text-gray-400 hidden sm:block">{email}</span>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-8 h-8',
                },
              }}
            />
          </div>
        </nav>
 <div className="flex flex-1 bg-white">
  <Sidebar />

  <div className="flex-1 p-8 max-w-5xl">
    <MainContent firstname={firstName} />

   <DashboardData userId={user.id} />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <div className="col-span-1">
        <WeeklySummary />
      </div>
      <div className="col-span-2 flex flex-col gap-6">
        <TodaysLog userId={user.id} />
        <RecentLogs />
      </div>
    </div>
  </div>
</div>
</div>
    </>
    
  )
}
