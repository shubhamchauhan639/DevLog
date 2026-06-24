'use client';

import { History } from "lucide-react";
import { useLogs } from "@/hooks/useLogs";

export default function RecentLogs({ userId }: { userId: string }) {
  const { logs, loading } = useLogs(userId);

  const getMoodColor = (mood: string) => {
    switch (mood?.toLowerCase()) {
      case 'great': return 'text-emerald-700 bg-emerald-100';
      case 'good': return 'text-blue-700 bg-blue-100';
      case 'okay': return 'text-amber-700 bg-amber-100';
      case 'bad': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
  };

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-2 mb-6 text-gray-800">
        <History size={18} />
        <h3 className="font-semibold">Recent logs</h3>
      </div>
      
      {loading ? (
        <p className="text-sm text-gray-400">Loading recent logs...</p>
      ) : logs.length === 0 ? (
        <p className="text-sm text-gray-400">No logs yet. Start coding to build your streak!</p>
      ) : (
        <div className="space-y-5 max-h-64 overflow-y-auto pr-2">
          {logs.slice(0, 10).map((log, i) => (
            <div key={log.id || i} className="flex items-center gap-4 text-sm">
              <span className="text-gray-400 font-medium w-24 shrink-0">{formatDate(log.date)}</span>
              <span className="text-gray-700 truncate flex-1 font-medium" title={log.learned || `Coded for ${log.hours_code} hours`}>
                {log.learned || `Coded for ${log.hours_code} hours`}
              </span>
              {log.mood && (
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase shrink-0 ${getMoodColor(log.mood)}`}>
                  {log.mood}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
