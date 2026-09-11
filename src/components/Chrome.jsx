import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useConcierge } from './ConciergeContext.jsx'

/* The CCA six-dot arrow cluster from the logo: grid positions (0,0) (1,.5) (0,1) (2,1) (1,1.5) (0,2) */
export function DotMark({ size = 28, color = 'var(--teal)' }) {
  const pos = [[0, 0], [1, 0.5], [0, 1], [2, 1], [1, 1.5], [0, 2]]
  const u = size / 3.1
  return (
    <svg className="brand__mark" width={size} height={size} viewBox="0 0 30 30" aria-hidden="true">
      {pos.map(([x, y], i) => (
        <circle key={i} cx={x * u * 1.05 + u * 0.42} cy={y * u * 1.05 + u * 0.42} r={u * 0.41} fill={color} />
      ))}
    </svg>
  )
}

/* Halftone dot field that densifies toward one edge — the second brand motif. */
export function Halftone({ cols = 14, rows = 12, color = '#2B7272', flip = false, className }) {
  const dots = []
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const t = flip ? 1 - c / (cols - 1) : c / (cols - 1)
      const d = 3 + t * 5
      dots.push(<circle key={`${c}-${r}`} cx={c * 30 + 15} cy={r * 30 + 15} r={d / 2} fill={color} opacity={0.06 + t * 0.24} />)
    }
  }
  return (
    <svg className={className} viewBox={`0 0 ${cols * 30} ${rows * 30}`} aria-hidden="true" focusable="false">
      {dots}
    </svg>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { openRequest } = useConcierge()
  const loc = useLocation()
  const nav = [
    ['Home', '/'],
    ['Get support', '/'],
    ['Community', '/browse'],
    ['Resources', '/'],
    ['My care', '/'],
  ]
  return (
    <header className="header">
      <div className="wrap header__inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <DotMark />
          <span className="brand__name">CCA · BeWell</span>
        </Link>
        <nav className={`nav${open ? ' is-open' : ''}`}>
          {nav.map(([label, to], i) => (
            <NavLink
              key={i}
              to={to}
              onClick={() => setOpen(false)}
              className={to !== '/' && loc.pathname.startsWith(to) ? 'is-active' : undefined}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="header__cta">
          <button className="btn btn--secondary btn--small" onClick={() => openRequest('header')}>
            Talk to a concierge
          </button>
          <button className="burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>☰</button>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  const cols = [
    ['Community', [['Featured activities', '/'], ['All activities', '/browse'], ['Member stories', '/#stories'], ['Events near you', '/browse']]],
    ['Get support', [['Talk to a concierge', '#request'], ['Counselling', '#request'], ['Work & life services', '#request'], ['Crisis support', '#request']]],
    ['About', [['About CCA', 'https://www.ccainc.com'], ['For employers', 'https://www.ccainc.com'], ['Photo credits', '/credits'], ['Accessibility', '/credits']]],
  ]
  const { openRequest } = useConcierge()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <DotMark size={38} color="var(--teal-mid)" />
            <div className="footer__brandline">CCA · BeWell Community</div>
            <p className="small" style={{ color: 'rgba(255,255,255,.78)' }}>
              Your employee assistance and wellbeing benefit. Confidential, included, and available 24/7.
            </p>
          </div>
          {cols.map(([title, links]) => (
            <div key={title}>
              <h4>{title}</h4>
              <ul>
                {links.map(([label, to]) => (
                  <li key={label}>
                    {to === '#request' ? (
                      <a href="#request" onClick={(e) => { e.preventDefault(); openRequest('footer') }}>{label}</a>
                    ) : to.startsWith('http') ? (
                      <a href={to} target="_blank" rel="noreferrer">{label}</a>
                    ) : (
                      <Link to={to}>{label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__rule" />
        <div className="footer__legal">
          <span>© 2026 CCA. Concept prototype — not a live CCA product.</span>
          <span>In an emergency call 911 or go to your nearest emergency department.</span>
        </div>
      </div>
    </footer>
  )
}

export function ClosingCTA({ title, body, label = 'Request concierge call' }) {
  const { openRequest } = useConcierge()
  return (
    <section className="bg-teal on-dark">
      <div className="wrap closing">
        <div className="closing__copy">
          <h2>{title}</h2>
          <p className="body" style={{ marginTop: 10 }}>{body}</p>
        </div>
        <button className="btn btn--light" onClick={() => openRequest('closing-band')}>{label}</button>
      </div>
    </section>
  )
}
