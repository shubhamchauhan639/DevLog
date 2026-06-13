import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Sidebar from './components/sidebar'
import MainContent from './components/MainContent'
import ActivityGraph from './components/ActivityGraph'


export default async function DashboardPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  const firstName = user.firstName ?? 'Developer'
  const email = user.emailAddresses[0]?.emailAddress ?? ''
  const logs = [
  { date: '2026-06-10', hours_code: 2 },
  { date: '2026-06-11', hours_code: 5 },
  { date: '2026-06-12', hours_code: 3 },
]

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
 <div className="flex flex-1 bg-gray-50">
  <Sidebar />

  <div className="flex-1 p-6">
    <MainContent firstname={firstName} />

    <div className="mt-6">
      <ActivityGraph
        logs={logs}
        currentStreak={10}
        longestStreak={25}
      />
    </div>
  </div>
</div>
</div>
    </>
  )
}
