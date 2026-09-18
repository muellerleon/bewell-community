import { Link, Navigate, useParams } from 'react-router-dom'
import { activitiesIn, getCategory } from '../data.js'
import { ActivityTile } from '../components/Cards.jsx'
import { ClosingCTA } from '../components/Chrome.jsx'
import { ConciergeAvatar } from '../components/ConciergeModal.jsx'
import Illustration from '../components/Illustrations.jsx'
import { useConcierge } from '../components/ConciergeContext.jsx'

export default function Category() {
  const { id } = useParams()
  const category = getCategory(id)
  if (!category) return <Navigate to="/browse" replace />
  const items = activitiesIn(category.id)
  const { openRequest } = useConcierge()

  return (
    <>
      <div className="wrap">
        <nav className="crumbs">
          <Link to="/browse">← Back</Link>
          <span>/</span>
          <Link to="/browse">Community</Link>
          <span>/</span>
          <span>{category.name}</span>
        </nav>

        <div className="banner banner--tall">
          <Illustration name={category.banner.scene} scheme={category.banner.scheme} fit="meet" />
          <span className="banner__scrim" />
          <div className="banner__title">
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,.85)' }}>Popular category</div>
            <h1>{category.name}</h1>
            <p className="body" style={{ color: 'rgba(255,255,255,.9)', maxWidth: 620 }}>
              {items.length} groups and one-off events running near you.
            </p>
          </div>
        </div>

        <div className="detail">
          <div className="detail__copy">
            <div className="eyebrow">Overview</div>
            <h2>{category.tagline}</h2>
            <p className="lede">{category.intro}</p>

            <h4 style={{ marginTop: 34 }}>What to expect</h4>
            <div className="included">
              {category.expect.map(([t, d]) => (
                <div className="included__row" key={t}>
                  <span className="check" aria-hidden="true">✓</span>
                  <div>
                    <strong>{t}</strong>
                    <span className="small">{d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="inquiry">
            <div className="eyebrow">Inquire now</div>
            <h4>Not sure which one? Ask someone who knows the groups.</h4>
            <div className="person">
              <ConciergeAvatar />
              <div>
                <strong style={{ fontSize: 14 }}>Your Care Concierge</strong>
                <div className="caption">Request a call back — replies within 24 hours</div>
              </div>
            </div>
            <div className="field">
              <label>Your name</label>
              <input placeholder="Alex Rivera" onFocus={() => openRequest('category-card', category.name)} readOnly />
            </div>
            <div className="field">
              <label>Phone</label>
              <input placeholder="(555) 010-2233" onFocus={() => openRequest('category-card', category.name)} readOnly />
            </div>
            <button className="btn btn--primary btn--block" onClick={() => openRequest('category-card', category.name)}>
              Talk to our Concierge
            </button>
            <p className="caption">
              Free and confidential. Included in your benefit — your employer is never told that you asked.
            </p>
          </aside>
        </div>
      </div>

      <section className="section bg-beige">
        <div className="wrap">
          <div className="head">
            <div>
              <div className="eyebrow">{items.length} groups near you</div>
              <h2 style={{ marginTop: 10 }}>What is running this season</h2>
            </div>
            <Link className="link-arrow" to="/browse">Browse everything →</Link>
          </div>
          <div className="tiles tiles--4">
            {items.map((a) => <ActivityTile key={a.id} activity={a} showMeta />)}
          </div>
        </div>
      </section>

      <ClosingCTA
        title="Tell us what you fancy trying. We will find it."
        body="A concierge calls you back within one working day — free, confidential, included."
        label="Talk to our Concierge"
      />
    </>
  )
}
