import {
  LayoutDashboard,
  PlusCircle,
  History,
  Target,
  Sparkles,
  Settings,
} from "lucide-react";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-5">
    
      <ul className="space-y-3">
       <li>
  <Link
    href="/dashboard"
    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full"
  >
    <LayoutDashboard size={18} />
    Dashboard
  </Link>
</li>
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
          <PlusCircle size={18} />
          Add log
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
          <History size={18} />
          History
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
          <Target size={18} />
          Goals
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
          <Sparkles size={18} />
          AI Insights
        </li>
      </ul>

      <div className="mt-24 space-y-3">
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
          <Settings size={18} />
          Settings
        </li>


      </div>
    </aside>
  );
}