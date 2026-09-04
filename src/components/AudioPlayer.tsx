import type { Track } from '../data/content'
import { audioUrl } from '../lib/queries'

export function AudioPlayer({ tracks }: { tracks: Track[] }) {
  if (tracks.length === 0) return null
  return (
    <div className="audio-list">
      {tracks.map((t) => (
        <div className="audio-item" key={t.storagePath}>
          <div className="audio-label">{t.label}</div>
          <audio controls preload="none" src={audioUrl(t.storagePath)} />
        </div>
      ))}
    </div>
  )
}
