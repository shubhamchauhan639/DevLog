'use client';

import { Sparkles, BarChart2 } from "lucide-react";
import { useLogs } from "@/hooks/useLogs";

export default function WeeklySummary({ userId }: { userId: string }) {
  const { logs, loading } = useLogs(userId);

  // Get start of the current week (Monday)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const currentDay = today.getDay(); // 0 is Sunday, 1 is Monday
  const distanceToMonday = currentDay === 0 ? 6 : currentDay - 1;
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - distanceToMonday);

  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const logMap = new Map<string, number>();
  
  if (!loading) {
    logs.forEach(log => {
      logMap.set(log.date, log.hours_code);
    });
  }

  const data = weekDays.map((dayLabel, index) => {
    const d = new Date(startOfWeek.getTime() + index * 86400000);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    
    const hours = logMap.get(dateStr) || 0;
    const isFuture = d > today;

    // Calculate percentage height, assuming 8 hours is 100%
    const percent = Math.min((hours / 8) * 100, 100);
    
    return {
      day: dayLabel,
      hoursText: hours > 0 ? `${hours}h` : '—',
      hours: hours,
      empty: hours === 0,
      isFuture,
      percentHeight: hours > 0 ? `${percent}%` : '2px',
    };
  });

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6 text-gray-800">
        <BarChart2 size={18} />
        <h3 className="font-semibold">This week</h3>
      </div>
      
      <div className="flex items-end justify-between h-32 mb-2">
        {data.map((item, i) => (
          <div key={i} className={`flex flex-col items-center justify-end gap-2 w-8 h-full ${item.isFuture ? 'opacity-30' : ''}`}>
            {item.empty ? (
               <div className="w-full bg-gray-300 rounded-full mb-1" style={{ height: item.percentHeight }}></div>
            ) : (
               <div className="w-full bg-indigo-500 rounded-sm" style={{ height: item.percentHeight }}></div>
            )}
            <span className="text-xs text-gray-400 font-medium leading-none">{item.day}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-400 font-medium mb-6 px-1">
         {data.map((item, i) => (
            <span key={i} className={`w-8 text-center ${item.isFuture ? 'opacity-30' : ''}`}>{item.hoursText}</span>
         ))}
      </div>

      <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100 flex gap-3 text-sm text-indigo-900 mt-auto">
        <Sparkles size={18} className="text-indigo-500 shrink-0 mt-0.5" />
        <p className="leading-snug">Keep pushing! Every hour coded is a step closer to mastery.</p>
      </div>
    </div>
  )
}
