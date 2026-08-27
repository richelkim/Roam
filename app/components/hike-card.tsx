import Image from 'next/image'
import Link from 'next/link'
import type { Hike } from '../content/hikes'

export function HikeCard({ hike }: { hike: Hike }) {
  return (
    <article className="hike-card">
      <Link href={`/hikes/${hike.slug}`} className="hike-card-image" aria-label={`View ${hike.title}`}>
        <Image src={hike.heroImage} alt={hike.imageAlt} fill sizes="(max-width: 760px) 100vw, 36vw" className="cover-image" />
      </Link>
      <div className="hike-card-copy">
        <div className="hike-card-top technical">
          <span>Roam {hike.number}</span>
          <span className={hike.state === 'upcoming' ? 'blue' : ''}>{hike.registrationLabel}</span>
        </div>
        <h3><Link href={`/hikes/${hike.slug}`}>{hike.title}</Link></h3>
        <p>{hike.location}</p>
        <div className="hike-card-specs technical">
          <span>{hike.dateShort}</span>
          <span>{hike.distance}</span>
          <span>{hike.difficulty}</span>
        </div>
        <p className="hike-card-description">{hike.shortDescription}</p>
        <Link className="text-link" href={`/hikes/${hike.slug}`}>VIEW HIKE →</Link>
      </div>
    </article>
  )
}
