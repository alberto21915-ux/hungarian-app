// Spaced repetition (SM-2), ported from the Wordwell spec.
// Three self-rating buttons instead of Anki's four:
//   "Don't know it"  -> quality 2
//   "Kind of know it" -> quality 3
//   "Know it"        -> quality 5  (MUST be 5, not 4 — see Wordwell SPEC.md §7,
//                        the "top button must move ease up" failure mode)

export type Rating = 2 | 3 | 5

export interface ProgressState {
  ease: number          // 1.3 .. 3.0, starts at 2.5
  interval_days: number // 0 for a brand new card
  repetitions: number
}

const EASE_MIN = 1.3
const EASE_MAX = 3.0

const EASE_DELTA: Record<Rating, number> = {
  2: -0.32,
  3: -0.14,
  5: +0.10,
}

export function nextState(prev: ProgressState, rating: Rating): ProgressState {
  const ease = Math.min(EASE_MAX, Math.max(EASE_MIN, prev.ease + EASE_DELTA[rating]))

  if (rating === 2) {
    // "Don't know it" — reset and resurface the same day.
    return { ease, interval_days: 0, repetitions: 0 }
  }

  const repetitions = prev.repetitions + 1
  let interval_days: number
  if (repetitions === 1) interval_days = 1
  else if (repetitions === 2) interval_days = 6
  else interval_days = Math.round(prev.interval_days * ease)

  return { ease, interval_days, repetitions }
}

export function dueDateFrom(interval_days: number): string {
  const d = new Date()
  d.setDate(d.getDate() + interval_days)
  return d.toISOString().slice(0, 10) // YYYY-MM-DD
}
