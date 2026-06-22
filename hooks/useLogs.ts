'use client'                           // ← add this, hooks need it

import { useEffect, useState } from 'react'
import { DailyLog } from '../types'
import { supabase } from '@/lib/supabase'

export function useLogs(userId: string) {
  const [logs, setLogs] = useState<DailyLog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLog = async () => {
      const { data, error } = await supabase
        .from('logs')
        .select('*')
        .eq('user_id', userId)
        .order('date', { ascending: false })

      if (error) { console.error(error); setLoading(false); return }
      if (data) setLogs(data)
      setLoading(false)
    }

    fetchLog()
  }, [userId])          // ← userId here, not empty

  return { logs, loading }   // ← return actual state, not hardcoded values
}