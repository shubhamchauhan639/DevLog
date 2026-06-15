import { History } from "lucide-react";

export default function RecentLogs() {
  const logs = [
    { date: 'Sat, 31 May', text: 'TypeScript generics + Firebase', mood: 'Great', moodColor: 'text-emerald-700 bg-emerald-100' },
    { date: 'Fri, 30 May', text: 'Next.js routing and layouts', mood: 'Good', moodColor: 'text-blue-700 bg-blue-100' },
    { date: 'Thu, 29 May', text: 'Redux toolkit + async thunks', mood: 'Okay', moodColor: 'text-amber-700 bg-amber-100' },
    { date: 'Wed, 28 May', text: 'Two pointer LeetCode', mood: 'Great', moodColor: 'text-emerald-700 bg-emerald-100' },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-2 mb-6 text-gray-800">
        <History size={18} />
        <h3 className="font-semibold">Recent logs</h3>
      </div>
      
      <div className="space-y-5">
        {logs.map((log, i) => (
          <div key={i} className="flex items-center gap-4 text-sm">
            <span className="text-gray-400 font-medium w-24 shrink-0">{log.date}</span>
            <span className="text-gray-700 truncate flex-1 font-medium">{log.text}</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase shrink-0 ${log.moodColor}`}>
              {log.mood}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
