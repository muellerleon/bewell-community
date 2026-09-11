import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, featured, stories, tagIndex } from '../data.js'
import { ActivityTile, CategoryTile, StoryCard } from '../components/Cards.jsx'
import { ClosingCTA, Halftone } from '../components/Chrome.jsx'
import { useConcierge } from '../components/ConciergeContext.jsx'

/* Placeholder explainer: Robert Waldinger's TED talk on the Harvard study of adult development —
   the evidence behind "wellbeing is something you do with other people". Swap for CCA's own film. */
const VIDEO_ID = '8KkKuTCFvzI'

function IntroVideo() {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="video">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
          title="What makes a good life? Lessons from the longest study on happiness — TED"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button className="video__poster" onClick={() => setPlaying(true)} aria-label="Play the introduction video">
          <img src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`} alt="" />
          <span className="video__scrim" />
          <span className="video__play" aria-hidden="true">
            <svg width="26" height="28" viewBox="0 0 26 28"><path d="M0 0l26 14L0 28z" fill="#2B7272" /></svg>
          </span>
          <span className="video__caption">
            Why community is the whole point — 12 min
            <span>Robert Waldinger, TED · placeholder for CCA’s own film</span>
          </span>
        </button>
      )}
    </div>
  )
}

function ConciergeBand() {
  const { openRequest } = useConcierge()
  const ways = [
    ['Chat now', 'Message a concierge and get a recommendation in minutes.', 'Start a chat', ['#D3EFE8', '#55ACA3']],
    ['Call us', 'Speak to a real person, any time of day. No appointment needed.', 'See call options', ['#FCEBCA', '#FCBA39']],
    ['Send an email', 'Tell us what you are looking for and we will reply within one working day.', 'Email the team', ['#F7CAC9', '#B490E4']],
  ]
  return (
    <section className="band bg-teal-deep on-dark">
      <Halftone cols={12} rows={14} flip color="#ffffff" className="band__dots" />
      <div className="wrap band__grid">
        <div>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,.75)' }}>Care Concierge</div>
          <h2 style={{ margin: '12px 0 14px' }}>Not sure where to start? Ask a person.</h2>
          <p className="body">
            Get a free consultation and find the activity you’ll love. Our concierges are here to help anytime of the
            day — it is included in your benefit, at no cost to you.
          </p>
        </div>
        <div className="ways">
          {ways.map(([title, body, cta, [c1, c2]]) => (
            <article className="way" key={title}>
              <div className="way__art" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }} />
              <div className="way__body">
                <h4>{title}</h4>
                <p className="small">{body}</p>
                <button className="btn btn--primary btn--small" onClick={() => openRequest(`concierge-${title}`)}>{cta}</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { openRequest } = useConcierge()
  return (
    <>
      <section className="hero">
        <Halftone className="hero__dots" />
        <div className="wrap hero__grid">
          <div>
            <div className="eyebrow">BeWell Community</div>
            <h1 style={{ marginTop: 14 }}>Wellbeing is something you do with other people.</h1>
            <p className="lede">
              Our mental wellbeing is most impacted by our relationships and the people we spend time with. Find new
              people and new activities to enlighten your life in new, unexpected ways.
            </p>
            <div className="hero__ctas">
              <button className="btn btn--primary" onClick={() => openRequest('hero')}>Request a concierge call</button>
              <Link className="btn btn--light" to="/browse">Explore activities</Link>
            </div>
          </div>
          <IntroVideo />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2>Featured activities</h2>
            <Link className="link-arrow" to="/browse">See all activities →</Link>
          </div>
          <div className="tiles">
            {featured().map((a) => <ActivityTile key={a.id} activity={a} />)}
          </div>
        </div>
      </section>

      <section className="section bg-beige">
        <div className="wrap">
          <div className="head head--stack">
            <h2>Popular categories</h2>
          </div>
          <div className="cats">
            {categories.map((c) => <CategoryTile key={c.id} category={c} />)}
          </div>
        </div>
      </section>

      <section className="section" id="stories">
        <div className="wrap">
          <div className="head head--stack">
            <h2>People who showed up anyway</h2>
          </div>
          <div className="stories">
            {stories.map((s) => <StoryCard key={s.name} story={s} />)}
          </div>
        </div>
      </section>

      <ConciergeBand />

      <section className="section bg-teal1">
        <div className="wrap">
          <div className="head head--stack">
            <h2>Explore all categories</h2>
          </div>
          <div className="tagcols">
            {tagIndex.map(([group, tags]) => (
              <div className="tagcol" key={group}>
                <h4>{group}</h4>
                <div>
                  {tags.map((t) => <Link className="tag" to="/browse" key={t}>{t}</Link>)}
                </div>
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
