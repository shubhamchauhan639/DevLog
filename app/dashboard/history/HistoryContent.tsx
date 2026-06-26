'use client';

import { useState } from 'react';
import { useLogs } from '@/hooks/useLogs';
import { Clock } from 'lucide-react';

type MoodFilter = 'all' | 'great' | 'good' | 'okay' | 'bad';

const MOOD_FILTERS: { label: string; value: MoodFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Great', value: 'great' },
  { label: 'Good', value: 'good' },
  { label: 'Okay', value: 'okay' },
  { label: 'Bad', value: 'bad' },
];

const getMoodStyle = (mood: string) => {
  switch (mood?.toLowerCase()) {
    case 'great': return { badge: 'text-emerald-700 bg-emerald-100', dot: 'bg-emerald-400' };
    case 'good':  return { badge: 'text-blue-700 bg-blue-100',       dot: 'bg-blue-400'    };
    case 'okay':  return { badge: 'text-amber-700 bg-amber-100',     dot: 'bg-amber-400'   };
    case 'bad':   return { badge: 'text-red-700 bg-red-100',         dot: 'bg-red-400'     };
    default:      return { badge: 'text-gray-700 bg-gray-100',       dot: 'bg-gray-400'    };
  }
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export default function HistoryContent({ userId }: { userId: string }) {
  const { logs, loading } = useLogs(userId);
  const [filter, setFilter] = useState<MoodFilter>('all');

  const filtered = filter === 'all'
    ? logs
    : logs.filter(l => l.mood?.toLowerCase() === filter);

  return (
    <div className="flex-1 p-8 max-w-4xl">
      {/* Page header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900">All logs</h1>
          <p className="text-[13px] text-gray-400 mt-0.5">Your complete coding history</p>
        </div>

        {/* Mood filter pills */}
        <div className="flex items-center gap-1.5">
          {MOOD_FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-150 ${
                filter === value
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Log list */}
      {loading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-[76px] rounded-2xl bg-gray-100 animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="text-4xl mb-3">📭</span>
          <p className="text-gray-500 font-medium">No logs found</p>
          <p className="text-gray-400 text-sm mt-1">
            {filter === 'all' ? 'Start logging to build your history.' : `No "${filter}" mood logs yet.`}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((log, i) => {
            const { badge, dot } = getMoodStyle(log.mood);
            return (
              <div
                key={log.id || i}
                className="bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[13px] font-semibold text-gray-800">
                    {formatDate(log.date)}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                      <Clock size={12} />
                      {log.hours_code}h
                    </span>
                    {log.mood && (
                      <span className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                        {log.mood}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {log.learned || `Coded for ${log.hours_code} hours`}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
