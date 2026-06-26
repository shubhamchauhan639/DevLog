import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Sidebar from '../components/sidebar'
import { Sparkles } from 'lucide-react'

export default async function InsightsPage() {
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

          <div className="flex-1 p-8 max-w-4xl">
            <div className="mb-6">
              <h1 className="text-[22px] font-bold text-gray-900">AI Insights</h1>
              <p className="text-[13px] text-gray-400 mt-0.5">Patterns and suggestions from your coding history</p>
            </div>

            <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-gray-200 rounded-2xl bg-gray-50">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
                <Sparkles size={22} className="text-indigo-500" />
              </div>
              <p className="text-gray-700 font-semibold">Coming soon</p>
              <p className="text-gray-400 text-sm mt-1 max-w-xs">
                AI-powered insights about your coding patterns will appear here once you have more logs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
