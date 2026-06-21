import { DailyLog } from '../types';

export function useLogs(userId: string) {
  // TODO: fetch logs from Supabase for a given userId
  return { logs: [] as DailyLog[], isLoading: false, error: null };
}
