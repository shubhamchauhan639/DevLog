import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Sidebar from '../components/sidebar'
import HistoryContent from './HistoryContent'

export default async function HistoryPage() {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

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
            <UserButton appearance={{ elements: { avatarBox: 'w-8 h-8' } }} />
          </div>
        </nav>

        <div className="flex flex-1 bg-white">
          <Sidebar />
          <HistoryContent userId={user.id} />
        </div>
      </div>
    </>
  )
}
