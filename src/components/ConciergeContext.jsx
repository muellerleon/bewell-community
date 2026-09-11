import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const Ctx = createContext(null)

export function useConcierge() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useConcierge must be used inside <ConciergeProvider>')
  return ctx
}

/* One request flow for the whole site: any CTA opens the same modal, which hands off
   to the confirmation. `source` is kept so we could attribute conversions later. */
export function ConciergeProvider({ children }) {
  const [state, setState] = useState({ step: null, source: null, submitted: null })

  const openRequest = useCallback((source, context) => {
    setState({ step: 'request', source, context: context || null, submitted: null })
    document.body.style.overflow = 'hidden'
  }, [])

  const confirm = useCallback((values) => {
    setState((s) => ({ ...s, step: 'confirmed', submitted: values }))
  }, [])

  const close = useCallback(() => {
    setState({ step: null, source: null, submitted: null })
    document.body.style.overflow = ''
  }, [])

  const value = useMemo(() => ({ ...state, openRequest, confirm, close }), [state, openRequest, confirm, close])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
