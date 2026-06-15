import { Sparkles, BarChart2 } from "lucide-react";

export default function WeeklySummary() {
  const data = [
    { day: 'M', hours: '4h', height: 'h-10' },
    { day: 'T', hours: '5h', height: 'h-14' },
    { day: 'W', hours: '3h', height: 'h-8' },
    { day: 'T', hours: '4h', height: 'h-10' },
    { day: 'F', hours: '2h', height: 'h-6' },
    { day: 'S', hours: '3h', height: 'h-8' },
    { day: 'S', hours: '—', height: 'h-0.5', empty: true },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6 text-gray-800">
        <BarChart2 size={18} />
        <h3 className="font-semibold">This week</h3>
      </div>
      
      <div className="flex items-end justify-between h-32 mb-2">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2 w-8">
            {item.empty ? (
               <div className="w-full h-0.5 bg-gray-300 rounded-full mb-1"></div>
            ) : (
               <div className={`w-full ${item.height} bg-indigo-500 rounded-sm`}></div>
            )}
            <span className="text-xs text-gray-400 font-medium">{item.day}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-400 font-medium mb-6 px-1">
         {data.map((item, i) => (
            <span key={i} className="w-8 text-center">{item.hours}</span>
         ))}
      </div>

      <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100 flex gap-3 text-sm text-indigo-900 mt-auto">
        <Sparkles size={18} className="text-indigo-500 shrink-0 mt-0.5" />
        <p className="leading-snug">You code best Tuesdays. Mood drops Fridays — try shorter sessions.</p>
      </div>
    </div>
  )
}
