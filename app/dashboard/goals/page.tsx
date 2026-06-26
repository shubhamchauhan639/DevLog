import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Target } from 'lucide-react'

export default async function GoalsPage() {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-gray-900">Goals</h1>
        <p className="text-[13px] text-gray-400 mt-0.5">Set and track your coding goals</p>
      </div>

      <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-gray-200 rounded-2xl bg-gray-50">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
          <Target size={22} className="text-indigo-500" />
        </div>
        <p className="text-gray-700 font-semibold">No goals yet</p>
        <p className="text-gray-400 text-sm mt-1 max-w-xs">
          Goal tracking is coming soon. You&apos;ll be able to set daily hour targets, streak goals, and more.
        </p>
      </div>
    </div>
  )
}
