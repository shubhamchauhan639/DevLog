export interface DailyLog {
  id: string;
  user_id: string;
  date: string;
  hours_code: number;
  mood: string;
  learned: string;
  created_at: string;
}

export interface Goal {
  id: string;
  user_id: string;
  title: string;
  target: number;
  current: number;
  type: string;
  created_at: string;
}
