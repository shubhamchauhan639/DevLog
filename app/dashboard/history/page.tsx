import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import HistoryContent from './HistoryContent'

export default async function HistoryPage() {
  const user = await currentUser()
  if (!user) redirect('/sign-in')

  return <HistoryContent userId={user.id} />
}
