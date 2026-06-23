"use client";

import { Edit3 } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function TodaysLog({ userId }: { userId: string }) {
  const [hours, setHours] = useState("");
  const [mood, setMood] = useState("");
  const [learned, setLearned] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const [logId, setLogId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTodaysLog() {
      const today = new Date().toISOString().split('T')[0];
      const { data, error } = await supabase
        .from("logs")
        .select("*")
        .eq("user_id", userId)
        .eq("date", today)
        .maybeSingle();
      
      if (data) {
        setLogId(data.id);
        setHours(data.hours_code.toString());
        setMood(data.mood || "");
        setLearned(data.learned || "");
      }
    }
    if (userId) {
      fetchTodaysLog();
    }
  }, [userId]);

  const handleSave = async () => {
    setLoading(true);
    setIsSaved(false);
    const today = new Date().toISOString().split('T')[0];
    
    const payload: any = {
      user_id: userId,
      date: today,
      hours_code: parseFloat(hours) || 0,
      mood: mood,
      learned: learned
    };

    if (logId) {
      payload.id = logId; // Include the ID so upsert knows to update this specific row
    }

    // We use upsert (which is a POST request) instead of update (which is a PATCH request)
    // to avoid the weird CORS block you just experienced!
    const { data, error } = await supabase
      .from("logs")
      .upsert(payload, { onConflict: 'id' })
      .select()
      .single();
      
    if (data && !logId) {
      setLogId(data.id);
    }
      
    setLoading(false);
    if (error) {
      console.error("Error saving log:", error);
      alert("Failed to save: " + error.message);
    } else {
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
      
      // Force a router refresh to update server components (if any depend on this)
      window.location.reload();
    }
  };

  const moods = ["Great", "Good", "Okay", "Bad"];

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
            type="number" 
            placeholder="3" 
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Mood</label>
          <div className="flex gap-3">
            {moods.map((m) => (
              <button 
                key={m}
                onClick={() => setMood(m)}
                className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                  mood === m 
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700 border-2' 
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">What did you learn?</label>
          <textarea 
            placeholder="Learned Next.js server components..."
            rows={2}
            value={learned}
            onChange={(e) => setLearned(e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors"
          ></textarea>
        </div>
        
        <button 
          onClick={handleSave}
          disabled={loading}
          className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors mt-2 shadow-sm flex justify-center items-center gap-2"
        >
          {loading ? "Saving..." : isSaved ? "Saved!" : "Save today's log"}
        </button>
      </div>
    </div>
  )
}
