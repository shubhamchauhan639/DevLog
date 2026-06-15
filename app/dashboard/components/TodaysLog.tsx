import { Edit3 } from "lucide-react";

export default function TodaysLog() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-6 text-gray-800">
        <Edit3 size={18} />
        <h3 className="font-semibold">Today's log</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Hours Coded</label>
          <input 
            type="text" 
            placeholder="3 hours" 
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Mood</label>
          <div className="flex gap-3">
             <button className="flex-1 py-2 px-3 rounded-lg border-2 border-indigo-500 bg-indigo-50 text-indigo-700 text-sm font-medium transition-colors">Great</button>
             <button className="flex-1 py-2 px-3 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">Good</button>
             <button className="flex-1 py-2 px-3 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">Okay</button>
             <button className="flex-1 py-2 px-3 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">Bad</button>
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">What did you learn?</label>
          <textarea 
            placeholder="Learned Next.js server components..."
            rows={2}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors"
          ></textarea>
        </div>
        
        <button className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors mt-2 shadow-sm">
          Save today's log
        </button>
      </div>
    </div>
  )
}
