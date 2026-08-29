import Link from 'next/link'
import type { Hike } from '../content/hikes'
import { tallyUrlFor } from '../content/rsvp'
import { formatHikeNumber } from '../content/site'
import { RouteTrace } from './route-trace'

export function HikeCard({ hike }: { hike: Hike }) {
  const tallyUrl = tallyUrlFor(hike.title, hike.slug)
  const joinHref = tallyUrl ?? `/join/${hike.slug}`

  return (
    <article className="hike-card">
      <div className="hike-card-route">
        <div className="hike-card-route-top technical">
          <span>{hike.title}</span>
          <span>ROUTE {hike.number}</span>
        </div>
        <RouteTrace path={hike.routeGeometry} distance={hike.distance} className="hike-card-route-trace" />
        <div className="hike-card-route-bottom">
          <strong>{hike.distance}</strong>
          <span className="technical">{hike.routeLabel}</span>
        </div>
      </div>
      <div className="hike-card-copy">
        <div className="hike-card-top technical">
          <span>{formatHikeNumber(hike.number)}</span>
          <span className={`hike-card-status ${hike.state === 'full' ? 'status-full' : ''}`}>{hike.registrationLabel}</span>
        </div>
        <h3>{hike.title}</h3>
        <p className="hike-card-location">{hike.location}</p>
        <div className="spec-grid">
          <div><span>DATE</span><strong>{hike.dateShort}</strong></div>
          <div><span>START</span><strong>{hike.time}</strong></div>
          <div><span>DISTANCE</span><strong>{hike.distance}</strong></div>
          <div><span>DURATION</span><strong>{hike.duration}</strong></div>
          <div><span>ELEVATION</span><strong>{hike.elevation}</strong></div>
          <div><span>DIFFICULTY</span><strong>{hike.difficulty}</strong></div>
        </div>
        <div className="action-row">
          {hike.state === 'upcoming' ? (
            <Link className="button-primary" href={joinHref}>JOIN THIS HIKE <span aria-hidden="true">↗</span></Link>
          ) : (
            <span className="button-disabled" aria-disabled="true">THIS HIKE IS FULL</span>
          )}
        </div>
      </div>
    </article>
  )
}
