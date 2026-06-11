import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

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
        :root {
          --bg-primary: #030712;
          --bg-card: #111827;
          --bg-stat: #0f172a;
          --bg-hover: #1f2937;
          --border: #1f2937;
          --text-primary: #f9fafb;
          --text-muted: #9ca3af;
          --text-subtle: #6b7280;
        }
        html { background-color: var(--bg-primary); color: var(--text-primary); }
      `}</style>

      <div className="min-h-screen bg-[#030712] text-white flex flex-col">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 border-b border-[#1f2937]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-sm font-medium text-white">DevLog</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#9ca3af] hidden sm:block">{email}</span>
            {/* Clerk's UserButton — handles sign-out, profile, etc. */}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-8 h-8',
                },
              }}
            />
          </div>
        </nav>

        {/* Main content */}
        <main className="flex-1 px-6 py-10 max-w-3xl mx-auto w-full">
          {/* Welcome header */}
          <div className="mb-8">
            <p className="text-xs font-medium text-indigo-500 uppercase tracking-widest mb-1">
              Dashboard
            </p>
            <h1 className="text-2xl font-medium text-white mb-1">
              Welcome back, {firstName} 👋
            </h1>
            <p className="text-sm text-[#9ca3af]">
              Start logging today&apos;s session and keep your streak alive.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-4">
              <div className="text-2xl font-semibold text-indigo-400 mb-1">0h</div>
              <div className="text-xs text-[#9ca3af]">Coded this week</div>
            </div>
            <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-4">
              <div className="text-2xl font-semibold text-amber-400 mb-1">🔥 0</div>
              <div className="text-xs text-[#9ca3af]">Day streak</div>
            </div>
            <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-4">
              <div className="text-2xl font-semibold text-emerald-400 mb-1">0</div>
              <div className="text-xs text-[#9ca3af]">Total logs</div>
            </div>
          </div>

          {/* Log today CTA */}
          <div className="bg-[#111827] border border-indigo-500/20 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-medium text-white mb-1">Log today&apos;s session</h2>
              <p className="text-xs text-[#9ca3af]">
                Takes 60 seconds. Hours coded, mood, and what you learned.
              </p>
            </div>
            <button
              className="flex-shrink-0 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
              disabled
              title="Coming soon"
            >
              + Log session
            </button>
          </div>

          {/* Empty state */}
          <div className="mt-8 text-center py-12 border border-dashed border-[#1f2937] rounded-xl">
            <p className="text-3xl mb-3">📝</p>
            <p className="text-sm text-[#9ca3af]">No logs yet — start your first session above.</p>
          </div>
        </main>
      </div>
    </>
  )
}
