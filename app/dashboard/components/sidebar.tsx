'use client';

import {
  LayoutDashboard,
  History,
  Target,
  Sparkles,
  Settings,
  LogOut
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItem = (href: string, icon: React.ReactNode, label: string) => {
    const active = pathname === href;
    return (
      <li>
        <Link
          href={href}
          className={`flex items-center gap-3 p-3 rounded-xl font-medium w-full text-sm transition-colors ${
            active
              ? 'bg-indigo-50 text-indigo-600'
              : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          {icon}
          {label}
        </Link>
      </li>
    );
  };

  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-5 flex flex-col h-screen sticky top-0">
      <ul className="space-y-1 flex-1">
        {navItem('/dashboard',         <LayoutDashboard size={18} />, 'Dashboard')}
        {navItem('/dashboard/history', <History size={18} />,         'History')}
        {navItem('/dashboard/insights',<Sparkles size={18} />,       'AI insights')}
        {navItem('/dashboard/goals',   <Target size={18} />,         'Goals')}
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