import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Sidebar from '../components/sidebar';
import HistoryContent from './HistoryContent';

export default async function HistoryPage() {
  const user = await currentUser();
  if (!user) redirect('/sign-in');

  return (
    <div className="min-h-screen bg-white text-gray-900 flex">
      <Sidebar />
      <HistoryContent userId={user.id} />
    </div>
  );
}
