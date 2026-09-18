import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, stories, tagIndex } from '../data.js'
import { CategoryTile, StoryCard } from '../components/Cards.jsx'
import { ClosingCTA, Halftone } from '../components/Chrome.jsx'
import { useConcierge } from '../components/ConciergeContext.jsx'

/* Placeholder explainer: Robert Waldinger's TED talk on the Harvard study of adult development —
   the evidence behind "wellbeing is something you do with other people". Swap for CCA's own film. */
const VIDEO_ID = '8KkKuTCFvzI'

/* The four tiles on the home page, and the short label each carries. */
const HOME_TILES = [['movement', 'Recreation'], ['arts', 'Arts'], ['wellness', 'Wellness'], ['giving', 'Volunteer']]

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
    ['Submit a request', 'Tell us what you are looking for and we will reply within one working day.', 'Send a request', ['#F7CAC9', '#B490E4']],
  ]
  return (
    <section className="band bg-teal-deep on-dark">
      <Halftone cols={12} rows={14} flip color="#ffffff" className="band__dots" />
      <div className="wrap band__grid">
        <div>
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,.75)' }}>Work Life Specialist</div>
          <h2 style={{ margin: '12px 0 14px' }}>Not sure where to start? Ask a person.</h2>
          <p className="body">
            We are here to help you find the activity you’ll love — any time of day, confidential, and
            included in your benefit.
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
              <button className="btn btn--primary" onClick={() => openRequest('hero')}>Complete request form</button>
              <Link className="btn btn--light" to="/browse">Explore activities</Link>
            </div>
          </div>
          <IntroVideo />
        </div>
      </section>


      <section className="section bg-beige">
        <div className="wrap">
          <div className="head head--stack">
            <h2>Popular categories</h2>
          </div>
          <div className="cats cats--4">
            {HOME_TILES.map(([id, label]) => (
              <CategoryTile key={id} category={{ ...categories.find((c) => c.id === id), short: label }} />
            ))}
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
        body="No commitment, and nothing gets booked on the first call."
      />
    </>
  )
}
