CREATE TABLE logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  date DATE NOT NULL,
  hours_code NUMERIC NOT NULL,
  mood TEXT,
  learned TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, date)
);

CREATE TABLE goals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  title TEXT NOT NULL,
  target NUMERIC NOT NULL,
  current NUMERIC DEFAULT 0,
  type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
