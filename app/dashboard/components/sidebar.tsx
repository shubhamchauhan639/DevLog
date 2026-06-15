import {
  LayoutDashboard,
  History,
  Target,
  Sparkles,
  Settings,
  LogOut
} from "lucide-react";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-5 flex flex-col h-full">
    
      <ul className="space-y-1 flex-1">
       <li>
  <Link
    href="/dashboard"
    className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50 text-indigo-600 font-medium w-full text-sm"
  >
    <LayoutDashboard size={18} />
    Dashboard
  </Link>
</li>

        <li className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium w-full text-sm cursor-pointer transition-colors">
          <History size={18} />
          History
        </li>

        <li className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium w-full text-sm cursor-pointer transition-colors">
          <Sparkles size={18} />
          AI insights
        </li>

        <li className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium w-full text-sm cursor-pointer transition-colors">
          <Target size={18} />
          Goals
        </li>
      </ul>

      <ul className="space-y-1 mt-auto pt-6 border-t border-gray-100">
        <li className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium w-full text-sm cursor-pointer transition-colors">
          <Settings size={18} />
          Settings
        </li>

        <li className="flex items-center gap-3 p-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 font-medium w-full text-sm cursor-pointer transition-colors">
          <LogOut size={18} />
          Sign out
        </li>
      </ul>
    </aside>
  );
}