import { useEffect, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from './lib/supabase'
import { Login } from './components/Login'
import { LessonView } from './components/LessonView'
import { FlashcardReview } from './components/FlashcardReview'
import {
  ensureAllCardsSeeded,
  ensureCardsForLesson,
  getCurrentLessonId,
  getLesson,
  nextLessonId,
  setCurrentLessonId,
} from './lib/queries'
import './App.css'

export default function App() {
  const [session, setSession] = useState<Session | null | undefined>(undefined)
  const [lessonId, setLessonId] = useState<string | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => setSession(s))
    return () => sub.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!session) return
    ;(async () => {
      await ensureAllCardsSeeded()
      const id = await getCurrentLessonId()
      setLessonId(id)
      setReady(true)
    })()
  }, [session])

  if (session === undefined) return null
  if (!session) return <Login />
  if (!ready || !lessonId) return <p>Loading...</p>

  const lesson = getLesson(lessonId)
  if (!lesson) return <p>No lesson found.</p>

  async function handleDone() {
    const next = nextLessonId(lessonId!)
    if (next) {
      await setCurrentLessonId(next)
      await ensureCardsForLesson(getLesson(next)!)
      setLessonId(next)
    }
  }

  return (
    <div className="app">
      <header>
        <h1>Magyar</h1>
        <button className="signout" onClick={() => supabase.auth.signOut()}>Sign out</button>
      </header>

      <section>
        <h2 className="section-title">Today's lesson</h2>
        <LessonView lesson={lesson} onDone={handleDone} hasNext={nextLessonId(lessonId) !== null} />
      </section>

      <section>
        <h2 className="section-title">Word review</h2>
        <FlashcardReview />
      </section>
    </div>
  )
}
