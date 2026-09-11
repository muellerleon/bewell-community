import { Link } from 'react-router-dom'

export function ActivityTile({ activity, showMeta = false }) {
  return (
    <article className="tile">
      <Link className="tile__media" to={`/activity/${activity.id}`} aria-label={activity.title}>
        <img src={activity.photo} alt="" loading="lazy" />
        <span className="tile__scrim" />
        {showMeta && activity.meta && <span className="tile__meta">{activity.meta.split(' · ')[0]}</span>}
        <h3 className="tile__title">{activity.title}</h3>
      </Link>
      <Link className="btn btn--secondary btn--block btn--small" to={`/activity/${activity.id}`}>
        Learn more
      </Link>
    </article>
  )
}

export function CategoryTile({ category }) {
  return (
    <Link className="cat" to={`/category/${category.id}`}>
      <img src={category.photo} alt="" loading="lazy" />
      <span className="cat__scrim" />
      <span className="cat__label">
        <h3>{category.short}</h3>
        <span>{category.name}</span>
      </span>
    </Link>
  )
}

export function StoryCard({ story }) {
  return (
    <figure className="story" style={{ margin: 0 }}>
      <img src={story.photo} alt="" loading="lazy" />
      <span className="story__scrim" />
      <figcaption className="story__body">
        <div className="story__mark" aria-hidden="true">“</div>
        <blockquote className="story__quote" style={{ margin: 0 }}>{story.quote}</blockquote>
        <div className="story__name">{story.name}</div>
        <div className="story__detail">{story.detail}</div>
      </figcaption>
    </figure>
  )
}
