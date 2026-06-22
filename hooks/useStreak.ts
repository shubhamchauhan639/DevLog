import { DailyLog } from '../types';

export function useStreak(logs: DailyLog[]) {
  if(!logs.length){
    return {streak: 0, longest: 0}
  }
  const sortedLogs = [...logs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  let streak = 1;
  let longest = 1;
  let tempStreak = 1;
  let streakBroken = false;

  for (let i = 0; i < sortedLogs.length - 1; i++) {
    const current = new Date(sortedLogs[i].date);
    const previous = new Date(sortedLogs[i + 1].date);

    const diffDays = Math.round(
      (current.getTime() - previous.getTime()) /
      (1000 * 60 * 60 * 24)
    );

    if (diffDays === 1) {
      tempStreak++;
      longest = Math.max(longest, tempStreak);
      if (!streakBroken) {
        streak++;
      }
    } else if (diffDays > 1) {
      tempStreak = 1;
      streakBroken = true;
    }
  }

  return { streak, longest };
}
