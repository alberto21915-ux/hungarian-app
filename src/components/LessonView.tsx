import type { Lesson } from '../data/content'
import { AudioPlayer } from './AudioPlayer'

export function LessonView({
  lesson,
  onDone,
  hasNext,
}: {
  lesson: Lesson
  onDone: () => void
  hasNext: boolean
}) {
  return (
    <div className="lesson">
      <h2>{lesson.titleHu}</h2>
      <p className="lesson-subtitle">{lesson.titleEn}</p>
      {lesson.note && <p className="lesson-note">{lesson.note}</p>}

      <AudioPlayer tracks={lesson.tracks} />

      {lesson.dialogue.length > 0 && (
        <div className="dialogue">
          {lesson.dialogue.map((line, i) => (
            <div className="dialogue-line" key={i}>
              <span className="speaker">{line.speaker}</span>
              <span className="hu">{line.hu}</span>
              <span className="en">{line.en}</span>
            </div>
          ))}
        </div>
      )}

      {lesson.vocab.length > 0 && (
        <div className="vocab-list">
          <h3>New words</h3>
          {lesson.vocab.map((v) => (
            <div className="vocab-row" key={v.hu}>
              <span className="hu">{v.hu}</span>
              <span className="en">{v.en}</span>
            </div>
          ))}
        </div>
      )}

      <button className="done-button" onClick={onDone}>
        {hasNext ? "Done — next lesson" : "Done — that's the whole course so far"}
      </button>
    </div>
  )
}
