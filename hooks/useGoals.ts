import { Goal } from '../types';

export function useGoals(userId: string) {
  // TODO: fetch and calculate goal progress
  return { goals: [] as Goal[], isLoading: false, error: null };
}
