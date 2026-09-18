import { Suspense, lazy, useEffect, useState } from 'react'

/* Agentation (agentation.com) — click any element, leave a note, and it produces markdown
   with selectors, source files and the React tree for an AI coding agent to act on.

   It is a development tool, so it is NOT on by default for visitors: the shared client link
   stays clean. It turns on in local dev automatically, and on the deployed site when the URL
   carries ?annotate=1 — the choice then sticks in that browser until ?annotate=0 clears it.

   The import is lazy so the toolbar is a separate chunk that only downloads when asked for. */
const Agentation = lazy(() =>
  import('agentation').then((m) => ({ default: m.Agentation }))
)

const STORE_KEY = 'bewell:annotate'

const readFlag = () => {
  // HashRouter can put the query either before or inside the hash, so check both.
  const hash = window.location.hash
  const inHash = hash.includes('?') ? hash.slice(hash.indexOf('?')) : ''
  for (const qs of [window.location.search, inHash]) {
    const value = new URLSearchParams(qs).get('annotate')
    if (value !== null) return value !== '0' && value !== 'false'
  }
  return null
}

export default function AnnotationTool() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const flag = readFlag()
    let remembered = null
    try {
      if (flag === true) localStorage.setItem(STORE_KEY, '1')
      if (flag === false) localStorage.removeItem(STORE_KEY)
      remembered = localStorage.getItem(STORE_KEY)
    } catch {
      // Private browsing or blocked storage — fall back to the URL flag alone.
    }
    setEnabled(import.meta.env.DEV || flag === true || (flag === null && remembered === '1'))
  }, [])

  if (!enabled) return null

  return (
    <Suspense fallback={null}>
      <Agentation />
    </Suspense>
  )
}
