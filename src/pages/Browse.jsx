import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { activities, categories } from '../data.js'
import { ActivityTile } from '../components/Cards.jsx'
import { ClosingCTA } from '../components/Chrome.jsx'

const FILTERS = [
  ['all', 'All activities', () => true],
  ['evenings', 'Evenings', (a) => /pm|evening/i.test(a.details.when)],
  ['weekends', 'Weekends', (a) => /saturday|sunday|weekend/i.test(a.details.when)],
  ['free', 'Free', (a) => /free/i.test(a.details.cost)],
  ['dropin', 'Drop-in', (a) => /drop-in|weekly|monthly/i.test(a.meta)],
]

export default function Browse() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')

  const matching = useMemo(() => {
    const f = FILTERS.find((x) => x[0] === filter)[2]
    const q = query.trim().toLowerCase()
    return activities.filter((a) => {
      if (!f(a)) return false
      if (!q) return true
      return (
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        (categories.find((c) => c.id === a.category)?.name || '').toLowerCase().includes(q)
      )
    })
  }, [query, filter])

  const rows = categories
    .map((c) => ({ category: c, items: matching.filter((a) => a.category === c.id) }))
    .filter((r) => r.items.length)

  return (
    <>
      <section className="browse__head">
        <div className="wrap">
          <h1>Explore all activities</h1>
          <div className="searchrow">
            <div className="search">
              <span aria-hidden="true" style={{ color: 'var(--text-2)' }}>⌕</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search activities, groups and one-off events"
                aria-label="Search activities"
              />
            </div>
            <div className="search" style={{ flex: '0 0 auto', minWidth: 0 }}>
              <span>Boston, MA · within 10 miles</span>
            </div>
          </div>
          <div className="chips">
            {FILTERS.map(([id, label]) => (
              <button
                key={id}
                className={`chip${filter === id ? ' is-active' : ''}`}
                onClick={() => setFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="small" style={{ marginTop: 18 }}>
            {matching.length} {matching.length === 1 ? 'activity' : 'activities'} near Boston, MA
          </p>
        </div>
      </section>

      {rows.map(({ category, items }, i) => (
        <section className={`row${i % 2 === 1 ? ' bg-beige' : ''}`} key={category.id}>
          <div className="wrap">
            <div className="row__head">
              <h3>{category.name}</h3>
              <Link className="link-arrow" to={`/category/${category.id}`}>See all →</Link>
            </div>
            <div className="tiles tiles--4">
              {items.slice(0, 4).map((a) => <ActivityTile key={a.id} activity={a} showMeta />)}
            </div>
          </div>
        </section>
      ))}

      {!rows.length && (
        <div className="wrap empty">
          <h3>Nothing matches that yet.</h3>
          <p className="body" style={{ marginTop: 10 }}>
            Try a different word, or clear the filters — a concierge can also just find it for you.
          </p>
        </div>
      )}

      <ClosingCTA
        title="Too much choice? Let a concierge narrow it down."
        body="Tell us roughly what you are after and we will come back with two or three that fit."
      />
    </>
  )
}
