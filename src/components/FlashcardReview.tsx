import { useEffect, useState } from 'react'
import { fetchDueCards, submitRating, type DueCard } from '../lib/queries'
import type { Rating } from '../lib/srs'

export function FlashcardReview() {
  const [queue, setQueue] = useState<DueCard[] | null>(null)
  const [revealed, setRevealed] = useState(false)

  async function load() {
    setQueue(await fetchDueCards())
    setRevealed(false)
  }

  useEffect(() => {
    load()
  }, [])

  async function rate(rating: Rating) {
    if (!queue || queue.length === 0) return
    const [current, ...rest] = queue
    // Advance immediately so the card never feels stuck, then save.
    setQueue(rest)
    setRevealed(false)
    await submitRating(current.id, current.progress, rating)
  }

  if (queue === null) return <p>Loading review...</p>
  if (queue.length === 0) {
    return (
      <div className="review">
        <p className="review-done">No words due right now. Nice.</p>
      </div>
    )
  }

  const current = queue[0]

  return (
    <div className="review">
      <p className="review-count">
        {queue.length} word{queue.length === 1 ? '' : 's'} due
      </p>

      <div className="flashcard">
        <div className="flashcard-word">{current.hu}</div>

        {revealed ? (
          <>
            <div className="flashcard-answer">{current.en}</div>
            {current.examples.length > 0 && (
              <div className="flashcard-examples">
                {current.examples.map((ex, i) => (
                  <div className="example" key={i}>
                    <span className="example-hu">{ex.hu}</span>
                    <span className="example-en">{ex.en}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          // Reveal is one-way: once shown, tapping again will not hide it.
          <button className="reveal-button" onClick={() => setRevealed(true)}>
            Tap to reveal
          </button>
        )}
      </div>

      {revealed && (
        <div className="rating-buttons">
          <button className="rating-bad" onClick={() => rate(2)}>Don't know it</button>
          <button className="rating-ok" onClick={() => rate(3)}>Kind of know it</button>
          <button className="rating-good" onClick={() => rate(5)}>Know it</button>
        </div>
      )}
    </div>
  )
}
