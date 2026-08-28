import Link from 'next/link'
import { hikes } from '../../content/hikes'
import { formatHikeNumber } from '../../content/site'

const featured = hikes.find((hike) => hike.slug === 'riverwood-loop')!

/**
 * Archived homepage section. Keep unrendered until the featured hike is restored.
 */
export function HomeFeaturedHike() {
  return (
    <section className="featured-section" aria-labelledby="featured-title">
      <div className="featured-details">
        <div className="featured-heading-row">
          <p className="technical featured-label">UPCOMING HIKE</p>
          <span className="status-dot">REGISTRATION OPEN</span>
        </div>
        <p className="hike-number technical">{formatHikeNumber(featured.number)}</p>
        <h2 id="featured-title">{featured.title}</h2>
        <p className="featured-location">{featured.location}</p>
        <div className="spec-grid">
          <div><span>DATE</span><strong>{featured.dateShort}</strong></div>
          <div><span>START</span><strong>{featured.time}</strong></div>
          <div><span>DISTANCE</span><strong>{featured.distance}</strong></div>
          <div><span>DURATION</span><strong>{featured.duration}</strong></div>
          <div><span>ELEVATION</span><strong>{featured.elevation}</strong></div>
          <div><span>DIFFICULTY</span><strong>{featured.difficulty}</strong></div>
        </div>
        <p className="featured-description">{featured.shortDescription}</p>
        <div className="action-row">
          <Link className="button-primary" href={`/hikes/${featured.slug}`}>
            VIEW HIKE <span aria-hidden="true">↗</span>
          </Link>
          <Link className="text-link" href="/hikes">ALL HIKES →</Link>
        </div>
      </div>
    </section>
  )
}
