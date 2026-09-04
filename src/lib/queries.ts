import { supabase } from './supabase'
import { lessons, type Lesson } from '../data/content'
import { nextState, dueDateFrom, type Rating } from './srs'

// Make sure every vocab word in a lesson has a `cards` row, so progress can
// be tracked per word. Cheap to call repeatedly — it only inserts what's
// missing (relies on the unique(hu, en) constraint + upsert-ignore).
export async function ensureCardsForLesson(lesson: Lesson) {
  if (lesson.vocab.length === 0) return
  const rows = lesson.vocab.map((v) => ({ lesson_id: lesson.id, hu: v.hu, en: v.en }))
  await supabase.from('cards').upsert(rows, { onConflict: 'hu,en', ignoreDuplicates: true })
}

export async function ensureAllCardsSeeded() {
  for (const lesson of lessons) {
    await ensureCardsForLesson(lesson)
  }
}

export interface DueCard {
  id: string
  hu: string
  en: string
  progress: {
    ease: number
    interval_days: number
    repetitions: number
  }
}

export async function fetchDueCards(limit = 20): Promise<DueCard[]> {
  const today = new Date().toISOString().slice(0, 10)

  // Cards with no progress row yet count as due (brand new).
  const { data: cards } = await supabase.from('cards').select('id, hu, en')
  if (!cards) return []

  const { data: progressRows } = await supabase
    .from('progress')
    .select('card_id, ease, interval_days, repetitions, due_date')

  const progressByCard = new Map((progressRows ?? []).map((p) => [p.card_id, p]))

  const due: DueCard[] = []
  for (const c of cards) {
    const p = progressByCard.get(c.id)
    if (!p || p.due_date <= today) {
      due.push({
        id: c.id,
        hu: c.hu,
        en: c.en,
        progress: p
          ? { ease: p.ease, interval_days: p.interval_days, repetitions: p.repetitions }
          : { ease: 2.5, interval_days: 0, repetitions: 0 },
      })
    }
    if (due.length >= limit) break
  }
  return due
}

export async function submitRating(cardId: string, current: DueCard['progress'], rating: Rating) {
  const updated = nextState(current, rating)
  const due_date = dueDateFrom(updated.interval_days)

  await supabase.from('progress').upsert(
    {
      card_id: cardId,
      ease: updated.ease,
      interval_days: updated.interval_days,
      repetitions: updated.repetitions,
      due_date,
      last_reviewed: new Date().toISOString(),
    },
    { onConflict: 'card_id' },
  )

  await supabase.from('review_log').insert({ card_id: cardId, rating })
}

export async function getCurrentLessonId(): Promise<string | null> {
  const { data } = await supabase.from('course_state').select('current_lesson_id').eq('id', 1).single()
  return data?.current_lesson_id ?? lessons[0]?.id ?? null
}

export async function setCurrentLessonId(lessonId: string) {
  await supabase.from('course_state').update({ current_lesson_id: lessonId }).eq('id', 1)
}

export function nextLessonId(currentId: string): string | null {
  const idx = lessons.findIndex((l) => l.id === currentId)
  if (idx === -1 || idx === lessons.length - 1) return null
  return lessons[idx + 1].id
}

export function getLesson(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id)
}

export function audioUrl(storagePath: string): string {
  const { data } = supabase.storage.from('audio').getPublicUrl(storagePath)
  return data.publicUrl
}
