import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useConcierge } from './ConciergeContext.jsx'
import { Halftone } from './Chrome.jsx'

export function ConciergeAvatar({ size = 56 }) {
  return (
    <svg className={size > 60 ? 'avatar avatar--lg' : 'avatar'} viewBox="0 0 56 56" aria-hidden="true">
      <defs>
        <linearGradient id="av" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#55ACA3" />
          <stop offset="1" stopColor="#D3EFE8" />
        </linearGradient>
        <clipPath id="avclip"><circle cx="28" cy="28" r="28" /></clipPath>
      </defs>
      <g clipPath="url(#avclip)">
        <rect width="56" height="56" fill="url(#av)" />
        <circle cx="28" cy="21" r="10" fill="#FBFAF1" opacity=".92" />
        <ellipse cx="28" cy="54" rx="23" ry="20" fill="#FBFAF1" opacity=".92" />
      </g>
    </svg>
  )
}

const TIMES = ['Weekday mornings', 'Weekday afternoons', 'Weekday evenings', 'Weekends', 'As soon as possible']

export default function ConciergeModal() {
  const { step, context, submitted, confirm, close } = useConcierge()
  const [values, setValues] = useState({ name: '', email: '', phone: '', time: TIMES[1], note: '', consent: true })
  const [touched, setTouched] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close() }
    if (step) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step, close])

  // Leaving the page closes the flow — a modal that survives navigation feels stuck.
  useEffect(() => { close() }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!step) return null

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const valid = values.name.trim() && values.phone.trim() && values.consent

  const submit = (e) => {
    e.preventDefault()
    setTouched(true)
    if (!valid) return
    confirm(values)
  }

  if (step === 'confirmed') {
    const next = [
      ['A concierge reviews your note', 'They look at what you asked for before they pick up the phone.'],
      ['One short call', 'Ten minutes, no script, and nothing is booked on that call.'],
      ['Options by email', 'Two or three matched choices, with dates and costs written out.'],
    ]
    return (
      <div className="overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Request received">
        <div className="modal modal--confirm" onClick={(e) => e.stopPropagation()}>
          <button className="modal__close" onClick={close} aria-label="Close">✕</button>
          <div className="success" aria-hidden="true">✓</div>
          <h2>Thank you — your request is in.</h2>
          <p className="lede" style={{ marginTop: 14 }}>
            Your information has been received and our Concierge Care team will reach out to you shortly.
          </p>
          <div className="summary">
            <strong style={{ fontSize: 14 }}>We will call {submitted?.phone || 'you'}</strong>
            <div className="caption" style={{ marginTop: 4 }}>
              {submitted?.time || 'Weekday afternoons'} · usually within one working day
            </div>
          </div>
          <div className="nextsteps">
            {next.map(([t, d], i) => (
              <div className="nextstep" key={t}>
                <div className="nextstep__num">{i + 1}</div>
                <div>
                  <strong>{t}</strong>
                  <span className="caption">{d}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn--primary btn--block" onClick={close}>Continue browsing</button>
          <p className="caption" style={{ marginTop: 14, color: 'var(--teal)' }}>
            Or call us now — 24/7, no appointment needed
          </p>
        </div>
      </div>
    )
  }

  const points = [
    ['Free and confidential', 'Included in your benefit. Your employer is never told that you asked.'],
    ['No commitment', 'Nothing is booked on the first call — we listen, then send options.'],
    ['Ten minutes, tops', 'Enough time to work out what you are actually looking for.'],
  ]

  return (
    <div className="overlay" onClick={close} role="dialog" aria-modal="true" aria-label="Request a concierge call">
      <div className="modal modal--request" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={close} aria-label="Close">✕</button>

        <aside className="modal__rail">
          <Halftone cols={12} rows={7} color="#ffffff" flip className="modal__raildots" />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 22, height: '100%' }}>
            <div>
              <div className="eyebrow" style={{ color: 'rgba(255,255,255,.75)' }}>Care Concierge</div>
              <h3>A real person, on the phone, within one working day.</h3>
              <div className="person">
                <ConciergeAvatar size={64} />
                <div>
                  <strong style={{ fontSize: 14 }}>Your Care Concierge</strong>
                  <div className="caption" style={{ color: 'rgba(255,255,255,.8)' }}>Available 24/7 · replies within 24 hours</div>
                </div>
              </div>
            </div>
            <div className="points">
              {points.map(([t, d]) => (
                <div className="point" key={t}>
                  <div className="point__dot" aria-hidden="true">✓</div>
                  <div>
                    <strong>{t}</strong>
                    <span>{d}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="caption" style={{ color: 'rgba(255,255,255,.6)', marginTop: 'auto' }}>
              In an emergency call 911 or go to your nearest emergency department.
            </p>
          </div>
        </aside>

        <form className="modal__form" onSubmit={submit}>
          <div>
            <h2>Request a concierge call</h2>
            <p className="body" style={{ marginTop: 8 }}>
              {context
                ? `About ${context}. Four quick questions — everything else we can work out on the call.`
                : 'Four quick questions. Everything else we can work out on the call.'}
            </p>
          </div>

          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" value={values.name} onChange={set('name')} placeholder="Alex Rivera" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={values.email} onChange={set('email')} placeholder="alex.rivera@email.com" autoComplete="email" />
            </div>
          </div>

          <div className="form-grid">
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" value={values.phone} onChange={set('phone')} placeholder="(555) 010-2233" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="time">Best time to call</label>
              <select id="time" value={values.time} onChange={set('time')}>
                {TIMES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="note">What are you looking for? (optional)</label>
            <textarea id="note" value={values.note} onChange={set('note')} placeholder="Something creative, evenings, close to Back Bay…" />
          </div>

          <label className="consent">
            <input type="checkbox" checked={values.consent} onChange={set('consent')} />
            <span className="caption">
              Yes, a concierge can call me on this number. I can change or cancel this at any time.
            </span>
          </label>

          {touched && !valid && (
            <p className="caption" style={{ color: '#8a2f2f' }}>
              Please add a name, a phone number, and tick the consent box so we know we may call.
            </p>
          )}

          <div className="actions">
            <button className="btn btn--primary" type="submit">Request my call</button>
            <span className="caption" style={{ color: 'var(--teal)' }}>or call us now — 24/7, no appointment needed</span>
          </div>
        </form>
      </div>
    </div>
  )
}
