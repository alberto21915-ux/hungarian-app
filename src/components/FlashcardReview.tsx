import { useEffect, useState } from 'react'
import { fetchDueCards, submitRating, type DueCard } from '../lib/queries'
import type { Rating } from '../lib/srs'

export function FlashcardReview() {
  const [queue, setQueue] = useState<DueCard[] | null>(null)
  const [flipped, setFlipped] = useState(false)

  async function load() {
    setQueue(await fetchDueCards())
    setFlipped(false)
  }

  useEffect(() => {
    load()
  }, [])

  async function rate(rating: Rating) {
    if (!queue || queue.length === 0) return
    const [current, ...rest] = queue
    await submitRating(current.id, current.progress, rating)
    setQueue(rest)
    setFlipped(false)
  }

  if (queue === null) return <p>Loading review...</p>
  if (queue.length === 0) return <p>No words due right now. Nice.</p>

  const current = queue[0]

  return (
    <div className="review">
      <p className="review-count">{queue.length} word{queue.length === 1 ? '' : 's'} due</p>
      <div className="flashcard" onClick={() => setFlipped((f) => !f)}>
        <div className="flashcard-word">{current.hu}</div>
        {flipped && <div className="flashcard-answer">{current.en}</div>}
        {!flipped && <div className="flashcard-hint">tap to reveal</div>}
      </div>
      {flipped && (
        <div className="rating-buttons">
          <button className="rating-bad" onClick={() => rate(2)}>Don't know it</button>
          <button className="rating-ok" onClick={() => rate(3)}>Kind of know it</button>
          <button className="rating-good" onClick={() => rate(5)}>Know it</button>
        </div>
      )}
    </div>
  )
}
