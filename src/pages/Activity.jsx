import { Link, Navigate, useParams } from 'react-router-dom'
import { activitiesIn, getActivity, getCategory } from '../data.js'
import { ActivityTile } from '../components/Cards.jsx'
import { ClosingCTA } from '../components/Chrome.jsx'
import { ConciergeAvatar } from '../components/ConciergeModal.jsx'
import Illustration from '../components/Illustrations.jsx'
import { useConcierge } from '../components/ConciergeContext.jsx'

function InquiryCard({ title, cta, context }) {
  const { openRequest } = useConcierge()
  return (
    <aside className="inquiry">
      <div className="eyebrow">Inquire now</div>
      <h4>{title}</h4>
      <div className="person">
        <ConciergeAvatar />
        <div>
          <strong style={{ fontSize: 14 }}>Your Care Concierge</strong>
          <div className="caption">Request a call back — replies within 24 hours</div>
        </div>
      </div>
      <div className="field">
        <label>Your name</label>
        <input placeholder="Alex Rivera" onFocus={() => openRequest('inquiry-card', context)} readOnly />
      </div>
      <div className="field">
        <label>Phone</label>
        <input placeholder="(555) 010-2233" onFocus={() => openRequest('inquiry-card', context)} readOnly />
      </div>
      <div className="field">
        <label>Best time to call</label>
        <input placeholder="Weekday afternoons" onFocus={() => openRequest('inquiry-card', context)} readOnly />
      </div>
      <button className="btn btn--primary btn--block" onClick={() => openRequest('inquiry-card', context)}>{cta}</button>
      <p className="caption">
        Free and confidential. Included in your benefit — your employer is never told that you asked.
      </p>
    </aside>
  )
}

export default function Activity() {
  const { id } = useParams()
  const activity = getActivity(id)
  if (!activity) return <Navigate to="/browse" replace />

  const category = getCategory(activity.category)
  const related = activitiesIn(category.id).filter((a) => a.id !== activity.id).slice(0, 3)
  const included = activity.included || category.expect

  return (
    <>
      <div className="wrap">
        <nav className="crumbs">
          <Link to="/browse">← Back</Link>
          <span>/</span>
          <Link to="/browse">Community</Link>
          <span>/</span>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </nav>

        <div style={{ paddingTop: 30 }}>
          <div className="eyebrow">{category.name} · {activity.meta}</div>
          <h1 style={{ margin: '14px 0 14px' }}>{activity.title}</h1>
          <p className="lede" style={{ maxWidth: 760 }}>{activity.summary}</p>
        </div>

        <div className="banner">
          <Illustration
            name={(activity.banner || activity.art).scene}
            scheme={(activity.banner || activity.art).scheme}
            image={(activity.banner || activity.art).image}
            fit="meet"
          />
          <span className="banner__scrim" />
          <span className="banner__badge">{activity.meta}</span>
        </div>

        <div className="detail">
          <div className="detail__copy">
            <div className="eyebrow">Overview</div>
            <h2>{activity.overview.length ? 'What it actually is' : activity.title}</h2>
            {activity.overview.map((p, i) => <p className="lede" key={i}>{p}</p>)}

            <h4 style={{ marginTop: 34 }}>{activity.included ? 'What is included' : 'What to expect'}</h4>
            <div className="included">
              {included.map(([t, d]) => (
                <div className="included__row" key={t}>
                  <span className="check" aria-hidden="true">✓</span>
                  <div>
                    <strong>{t}</strong>
                    <span className="small">{d}</span>
                  </div>
                </div>
              ))}
            </div>

            <h4 style={{ marginTop: 34 }}>The practical bits</h4>
            <dl className="facts">
              <div><dt>When</dt><dd>{activity.details.when}</dd></div>
              <div><dt>Where</dt><dd>{activity.details.where}</dd></div>
              <div><dt>Cost</dt><dd>{activity.details.cost}</dd></div>
              <div><dt>Group size</dt><dd>{activity.details.size}</dd></div>
            </dl>
          </div>

          <InquiryCard
            title="Find the right fit for you, and for where you are."
            cta="Request concierge call"
            context={activity.title}
          />
        </div>
      </div>

      <section className="section bg-beige">
        <div className="wrap">
          <div className="head">
            <h2>More in {category.name.toLowerCase()}</h2>
            <Link className="link-arrow" to={`/category/${category.id}`}>See the category →</Link>
          </div>
          <div className="tiles tiles--4" style={{ gridTemplateColumns: `repeat(${Math.max(related.length, 1)}, 1fr)` }}>
            {related.map((a) => <ActivityTile key={a.id} activity={a} showMeta />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head head--stack">
            <div className="eyebrow">How it works</div>
            <h2 style={{ marginTop: 10 }}>Three steps, and we do most of them</h2>
          </div>
          <div className="steps">
            {[
              ['01', 'You ask', 'Leave your name and the best time to reach you. It takes about thirty seconds.'],
              ['02', 'We call', 'A concierge calls within one working day and asks what you are actually hoping for.'],
              ['03', 'You go', 'We send two or three matched options, handle the booking, and check in after.'],
            ].map(([n, t, d]) => (
              <div className="step" key={n}>
                <div className="step__num">{n}</div>
                <h4>{t}</h4>
                <p className="small">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        title="Still deciding? That is exactly when to call."
        body="No commitment, no cost, and nothing gets booked on the first call."
      />
    </>
  )
}
