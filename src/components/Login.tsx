import { useState } from 'react'
import { supabase } from '../lib/supabase'

export function Login() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.href },
    })
    if (error) setError(error.message)
    else setSent(true)
  }

  if (sent) {
    return (
      <div className="login-screen">
        <p>Check your email for a sign-in link.</p>
      </div>
    )
  }

  return (
    <div className="login-screen">
      <h1>Magyar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send sign-in link</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}
